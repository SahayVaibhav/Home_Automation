import dotenv from 'dotenv';
import { cloudLogin, loginDevice, loginDeviceByIp } from 'tp-link-tapo-connect';

dotenv.config();

const {
  TAPO_DEVICE_ALIAS,
  TAPO_DEVICE_ID,
  TAPO_DEVICE_IP,
  TAPO_EMAIL,
  TAPO_PASSWORD,
} = process.env;

let cachedDevice;
let cachedCloudApi;
let cachedMeta;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function uiToHaBrightness(value) {
  return clamp(Math.round((clamp(Number(value) || 1, 1, 100) / 100) * 255), 1, 255);
}

function haToUiBrightness(value) {
  return clamp(Math.round((clamp(Number(value) || 1, 1, 255) / 255) * 100), 1, 100);
}

function hsvToRgb(hue, saturation, value = 100) {
  if (
    typeof hue !== 'number' ||
    typeof saturation !== 'number' ||
    Number.isNaN(hue) ||
    Number.isNaN(saturation)
  ) {
    return null;
  }

  const normalizedHue = ((hue % 360) + 360) % 360;
  const s = clamp(saturation, 0, 100) / 100;
  const v = clamp(value, 0, 100) / 100;
  const chroma = v * s;
  const x = chroma * (1 - Math.abs(((normalizedHue / 60) % 2) - 1));
  const match = v - chroma;

  let red = 0;
  let green = 0;
  let blue = 0;

  if (normalizedHue < 60) {
    red = chroma;
    green = x;
  } else if (normalizedHue < 120) {
    red = x;
    green = chroma;
  } else if (normalizedHue < 180) {
    green = chroma;
    blue = x;
  } else if (normalizedHue < 240) {
    green = x;
    blue = chroma;
  } else if (normalizedHue < 300) {
    red = x;
    blue = chroma;
  } else {
    red = chroma;
    blue = x;
  }

  return [red, green, blue].map((channel) => Math.round((channel + match) * 255));
}

function requireConfig() {
  if (!TAPO_EMAIL || !TAPO_PASSWORD) {
    const error = new Error('Missing Tapo credentials. Set TAPO_EMAIL and TAPO_PASSWORD in your environment.');
    error.statusCode = 500;
    throw error;
  }
}

async function getCloudApi() {
  requireConfig();

  if (!cachedCloudApi) {
    cachedCloudApi = await cloudLogin(TAPO_EMAIL, TAPO_PASSWORD);
  }

  return cachedCloudApi;
}

function normalizeDeviceLabel(device) {
  return device.alias || device.nickname || device.deviceName || device.model || 'Tapo Light';
}

async function findBulbMeta() {
  if (cachedMeta) {
    return cachedMeta;
  }

  const cloudApi = await getCloudApi();
  const bulbs = await cloudApi.listDevicesByType('SMART.TAPOBULB');

  const preferred =
    bulbs.find((device) => TAPO_DEVICE_ID && device.deviceId === TAPO_DEVICE_ID) ||
    bulbs.find(
      (device) =>
        TAPO_DEVICE_ALIAS &&
        normalizeDeviceLabel(device).toLowerCase() === TAPO_DEVICE_ALIAS.toLowerCase(),
    ) ||
    bulbs.find((device) => device.deviceModel?.toUpperCase().includes('L530')) ||
    bulbs[0];

  if (!preferred) {
    const error = new Error('No Tapo smart bulbs were found on your account.');
    error.statusCode = 404;
    throw error;
  }

  cachedMeta = preferred;
  return preferred;
}

async function getDeviceConnection() {
  requireConfig();

  if (cachedDevice) {
    return cachedDevice;
  }

  if (TAPO_DEVICE_IP) {
    cachedDevice = await loginDeviceByIp(TAPO_EMAIL, TAPO_PASSWORD, TAPO_DEVICE_IP);
    return cachedDevice;
  }

  const meta = await findBulbMeta();
  cachedDevice = await loginDevice(TAPO_EMAIL, TAPO_PASSWORD, meta);
  return cachedDevice;
}

export async function discoverBulbs() {
  const cloudApi = await getCloudApi();
  const bulbs = await cloudApi.listDevicesByType('SMART.TAPOBULB');

  return bulbs.map((device) => ({
    alias: device.alias,
    deviceId: device.deviceId,
    ip: device.ip || null,
    model: device.deviceModel,
    name: normalizeDeviceLabel(device),
    status: device.status,
  }));
}

export async function getLightState() {
  const device = await getDeviceConnection();
  const info = await device.getDeviceInfo();
  const meta = cachedMeta || {};
  const uiBrightness =
    typeof info.brightness === 'number' ? clamp(Math.round(info.brightness), 1, 100) : null;
  const rgb = hsvToRgb(info.hue, info.saturation, 100);

  return {
    alias: normalizeDeviceLabel({ ...meta, ...info }),
    brightness: uiBrightness,
    color: {
      colorTemp: typeof info.color_temp === 'number' ? info.color_temp : null,
      hue: typeof info.hue === 'number' ? info.hue : null,
      saturation: typeof info.saturation === 'number' ? info.saturation : null,
    },
    deviceId: info.device_id || meta.deviceId || null,
    entityId: process.env.TAPO_LIGHT_ENTITY || 'light.tapo_l530',
    haBrightness: uiBrightness ? uiToHaBrightness(uiBrightness) : null,
    hex: rgbToHex(rgb),
    ip: info.ip || meta.ip || TAPO_DEVICE_IP || null,
    model: info.model || meta.deviceModel || null,
    online: true,
    power: Boolean(info.device_on),
    rgb,
    raw: info,
  };
}

export async function toggleLight(forceState) {
  const device = await getDeviceConnection();
  const current = await device.getDeviceInfo();
  const nextPower = typeof forceState === 'boolean' ? forceState : !current.device_on;

  if (nextPower) {
    await device.turnOn();
  } else {
    await device.turnOff();
  }

  return getLightState();
}

export async function setLightBrightness(brightness) {
  const device = await getDeviceConnection();
  const numeric = Number(brightness);
  const normalized =
    numeric > 100
      ? haToUiBrightness(clamp(numeric, 1, 255))
      : clamp(Math.round(numeric), 1, 100);

  await device.turnOn();
  await device.setBrightness(normalized);

  return getLightState();
}

function rgbToHex(rgb) {
  if (!Array.isArray(rgb) || rgb.length !== 3) {
    return null;
  }

  return `#${rgb
    .map((value) => clamp(Number(value) || 0, 0, 255).toString(16).padStart(2, '0'))
    .join('')}`;
}

export async function setLightColor(rgb, brightness) {
  const device = await getDeviceConnection();

  await device.turnOn();
  if (typeof brightness === 'number') {
    await device.setBrightness(
      brightness > 100
        ? haToUiBrightness(clamp(brightness, 1, 255))
        : clamp(Math.round(brightness), 1, 100),
    );
  }
  await device.setColour(rgbToHex(rgb));

  return getLightState();
}

export async function setLightScene(scene) {
  const sceneMap = {
    movie: { brightness: 90, rgb: [255, 94, 58] },
    night: { brightness: 35, rgb: [255, 180, 120] },
    party: { brightness: 220, rgb: [150, 0, 255] },
    relax: { brightness: 120, rgb: [255, 214, 170] },
  };

  const preset = sceneMap[scene];
  if (!preset) {
    const error = new Error('Unsupported scene.');
    error.statusCode = 400;
    throw error;
  }

  return setLightColor(preset.rgb, preset.brightness);
}

export async function setLightPreset(preset) {
  const device = await getDeviceConnection();

  await device.turnOn();
  await device.setColour(preset);

  return getLightState();
}

export function resetTapoCache() {
  cachedCloudApi = undefined;
  cachedDevice = undefined;
  cachedMeta = undefined;
}
