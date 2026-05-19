const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  `${window.location.protocol}//${window.location.hostname}:3001`;

const defaultEntityId = import.meta.env.VITE_TAPO_LIGHT_ENTITY || 'light.tapo_l530';
const defaultColorEntityId =
  import.meta.env.VITE_TAPO_LIGHT_COLOR_ENTITY || 'tapo_l530_light_preset';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    return null;
  }

  const normalized = hex.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return null;
  }

  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ];
}

export function rgbToHex(rgb) {
  if (!Array.isArray(rgb) || rgb.length !== 3) {
    return '#f2c78f';
  }

  return `#${rgb
    .map((value) => clamp(Number(value) || 0, 0, 255).toString(16).padStart(2, '0'))
    .join('')}`;
}

export function uiToHaBrightness(value) {
  return clamp(Math.round((clamp(Number(value) || 1, 1, 100) / 100) * 255), 1, 255);
}

export function haToUiBrightness(value) {
  return clamp(Math.round((clamp(Number(value) || 1, 1, 255) / 255) * 100), 1, 100);
}

async function postJson(path, body) {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });

  const payload = await response.json();
  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || 'Light request failed.');
  }

  return payload.light;
}

export async function getLightState(entityId = defaultEntityId) {
  const response = await fetch(`${apiBaseUrl}/api/lights/state?entityId=${encodeURIComponent(entityId)}`);
  const payload = await response.json();

  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || 'Unable to fetch light state.');
  }

  return payload.light;
}

export async function turnLightOn(entityId = defaultEntityId) {
  return postJson('/api/lights/on', { entityId });
}

export async function turnLightOff(entityId = defaultEntityId) {
  return postJson('/api/lights/off', { entityId });
}

export async function setBrightness(entityId = defaultEntityId, brightness) {
  return postJson('/api/lights/brightness', { brightness, entityId });
}

export async function setColor(entityId = defaultColorEntityId, rgb, brightness) {
  return postJson('/api/lights/color', { brightness, entityId, rgb });
}

export async function setScene(entityId = defaultColorEntityId, scene) {
  return postJson('/api/lights/scene', { entityId, scene });
}

export { defaultEntityId as TAPO_LIGHT_ENTITY_ID };
export { defaultColorEntityId as TAPO_LIGHT_COLOR_ENTITY_ID };
