import dotenv from 'dotenv';

dotenv.config();

const {
  HOME_ASSISTANT_TOKEN,
  HOME_ASSISTANT_URL = 'http://localhost:8123',
  TAPO_LIGHT_ENTITY = 'light.tapo_l530',
} = process.env;

export function hasHomeAssistantConfig() {
  return Boolean(HOME_ASSISTANT_URL && HOME_ASSISTANT_TOKEN);
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

  return {
    alias: attributes.friendly_name || state.entity_id,
    available: state.state !== 'unavailable',
    brightness: typeof attributes.brightness === 'number' ? attributes.brightness : 0,
    colorMode: attributes.color_mode || null,
    entityId: state.entity_id,
    online: state.state !== 'unavailable',
    power: state.state === 'on',
    rgb: Array.isArray(attributes.rgb_color) ? attributes.rgb_color : null,
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

export async function turnLightOn(entityId = TAPO_LIGHT_ENTITY) {
  await callLightService('turn_on', { entity_id: entityId });
  return getLightState(entityId);
}

export async function turnLightOff(entityId = TAPO_LIGHT_ENTITY) {
  await callLightService('turn_off', { entity_id: entityId });
  return getLightState(entityId);
}

export async function setLightBrightness(entityId = TAPO_LIGHT_ENTITY, brightness) {
  const normalized = Math.max(0, Math.min(255, Number(brightness)));
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
    payload.brightness = Math.max(0, Math.min(255, Number(brightness)));
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
