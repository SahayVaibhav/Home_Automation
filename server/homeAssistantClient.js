import dotenv from 'dotenv';

dotenv.config();

const {
  HOME_ASSISTANT_TOKEN,
  HOME_ASSISTANT_URL = 'http://localhost:8123',
  TAPO_LIGHT_ENTITY = 'light.tapo_l530',
  TAPO_LIGHT_OFF_ENTITY = 'tapo_l530_smooth_off',
  TAPO_LIGHT_ON_ENTITY = 'tapo_l530_smooth_on',
} = process.env;

export function hasHomeAssistantConfig() {
  return Boolean(HOME_ASSISTANT_URL && HOME_ASSISTANT_TOKEN);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function haToUiBrightness(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return null;
  }

  return clamp(Math.round((clamp(value, 1, 255) / 255) * 100), 1, 100);
}

function rgbToHex(rgb) {
  if (!Array.isArray(rgb) || rgb.length !== 3) {
    return null;
  }

  return `#${rgb
    .map((value) => clamp(Number(value) || 0, 0, 255).toString(16).padStart(2, '0'))
    .join('')}`;
}

function requireHomeAssistantConfig() {
  if (!hasHomeAssistantConfig()) {
    const error = new Error(
      'Missing Home Assistant config. Set HOME_ASSISTANT_URL and HOME_ASSISTANT_TOKEN in your environment.',
    );
    error.statusCode = 500;
    throw error;
  }
}

function buildUrl(path) {
  return `${HOME_ASSISTANT_URL.replace(/\/$/, '')}${path}`;
}

function normalizeEntityId(entityId, defaultDomain = 'light') {
  if (typeof entityId !== 'string' || !entityId.trim()) {
    return null;
  }

  return entityId.includes('.') ? entityId : `${defaultDomain}.${entityId}`;
}

async function homeAssistantRequest(path, options = {}) {
  requireHomeAssistantConfig();

  const response = await fetch(buildUrl(path), {
    ...options,
    headers: {
      Authorization: `Bearer ${HOME_ASSISTANT_TOKEN}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    const error = new Error(`Home Assistant request failed: ${response.status} ${text}`);
    error.statusCode = response.status;
    throw error;
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function normalizeLightState(state) {
  const attributes = state.attributes || {};
  const haBrightness = typeof attributes.brightness === 'number' ? clamp(attributes.brightness, 1, 255) : null;
  const rgb = Array.isArray(attributes.rgb_color) ? attributes.rgb_color : null;

  return {
    alias: attributes.friendly_name || state.entity_id,
    available: state.state !== 'unavailable',
    brightness: haToUiBrightness(haBrightness),
    colorMode: attributes.color_mode || null,
    entityId: state.entity_id,
    haBrightness,
    hex: rgbToHex(rgb),
    online: state.state !== 'unavailable',
    power: state.state === 'on',
    rgb,
    raw: state,
  };
}

export async function getLightState(entityId = TAPO_LIGHT_ENTITY) {
  const state = await homeAssistantRequest(`/api/states/${entityId}`, {
    method: 'GET',
  });

  return normalizeLightState(state);
}

async function callLightService(service, payload) {
  await homeAssistantRequest(`/api/services/light/${service}`, {
    body: JSON.stringify(payload),
    method: 'POST',
  });
}

async function callEntityService(entityId, defaultDomain = 'script') {
  const normalizedEntityId = normalizeEntityId(entityId, defaultDomain);
  if (!normalizedEntityId) {
    const error = new Error('Missing Home Assistant entity id.');
    error.statusCode = 400;
    throw error;
  }

  const [domain] = normalizedEntityId.split('.');
  const service =
    domain === 'button'
      ? 'press'
      : domain === 'automation'
        ? 'trigger'
        : 'turn_on';

  await homeAssistantRequest(`/api/services/${domain}/${service}`, {
    body: JSON.stringify({ entity_id: normalizedEntityId }),
    method: 'POST',
  });
}

export async function turnLightOn(entityId = TAPO_LIGHT_ENTITY) {
  await callLightService('turn_on', { entity_id: entityId });
  return getLightState(entityId);
}

export async function turnLightOff(entityId = TAPO_LIGHT_ENTITY) {
  await callLightService('turn_off', { entity_id: entityId });
  return getLightState(entityId);
}

export async function triggerSmoothLightOn(targetEntityId = TAPO_LIGHT_ENTITY) {
  await callEntityService(TAPO_LIGHT_ON_ENTITY, 'script');
  return getLightState(targetEntityId);
}

export async function triggerSmoothLightOff(targetEntityId = TAPO_LIGHT_ENTITY) {
  await callEntityService(TAPO_LIGHT_OFF_ENTITY, 'script');
  return getLightState(targetEntityId);
}

export async function setLightBrightness(entityId = TAPO_LIGHT_ENTITY, brightness) {
  const normalized = clamp(Number(brightness), 1, 255);
  await callLightService('turn_on', {
    brightness: normalized,
    entity_id: entityId,
  });
  return getLightState(entityId);
}

export async function setLightColor(entityId = TAPO_LIGHT_ENTITY, rgb, brightness) {
  const payload = {
    entity_id: entityId,
    rgb_color: rgb,
  };

  if (typeof brightness === 'number') {
    payload.brightness = clamp(Number(brightness), 1, 255);
  }

  await callLightService('turn_on', payload);
  return getLightState(entityId);
}

export async function setLightScene(entityId = TAPO_LIGHT_ENTITY, scene) {
  const presets = {
    movie: { brightness: 90, rgb_color: [255, 94, 58] },
    night: { brightness: 35, rgb_color: [255, 180, 120] },
    party: { brightness: 220, rgb_color: [150, 0, 255] },
    relax: { brightness: 120, rgb_color: [255, 214, 170] },
  };

  const preset = presets[scene];
  if (!preset) {
    const error = new Error('Unsupported scene.');
    error.statusCode = 400;
    throw error;
  }

  await callLightService('turn_on', {
    ...preset,
    entity_id: entityId,
  });

  return getLightState(entityId);
}

export function getDefaultLightEntity() {
  return TAPO_LIGHT_ENTITY;
}
