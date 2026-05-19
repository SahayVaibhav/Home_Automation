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

  return {
    alias: normalizeDeviceLabel({ ...meta, ...info }),
    brightness: typeof info.brightness === 'number' ? info.brightness : null,
    color: {
      colorTemp: typeof info.color_temp === 'number' ? info.color_temp : null,
      hue: typeof info.hue === 'number' ? info.hue : null,
      saturation: typeof info.saturation === 'number' ? info.saturation : null,
    },
    deviceId: info.device_id || meta.deviceId || null,
    ip: info.ip || meta.ip || TAPO_DEVICE_IP || null,
    model: info.model || meta.deviceModel || null,
    online: true,
    power: Boolean(info.device_on),
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
  const normalized = numeric > 100 ? Math.round((Math.max(0, Math.min(255, numeric)) / 255) * 100) : Math.max(1, Math.min(100, numeric));

  await device.turnOn();
  await device.setBrightness(normalized);

  return getLightState();
}

function rgbToHex(rgb) {
  return `#${rgb
    .map((value) => Math.max(0, Math.min(255, Number(value))).toString(16).padStart(2, '0'))
    .join('')}`;
}

export async function setLightColor(rgb, brightness) {
  const device = await getDeviceConnection();

  await device.turnOn();
  if (typeof brightness === 'number') {
    await device.setBrightness(
      brightness > 100
        ? Math.round((Math.max(0, Math.min(255, brightness)) / 255) * 100)
        : Math.max(1, Math.min(100, brightness)),
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
