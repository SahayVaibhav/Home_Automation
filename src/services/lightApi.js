const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  `${window.location.protocol}//${window.location.hostname}:3001`;

const defaultEntityId = import.meta.env.VITE_TAPO_LIGHT_ENTITY || 'light.tapo_l530';

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

export async function setColor(entityId = defaultEntityId, rgb, brightness) {
  return postJson('/api/lights/color', { brightness, entityId, rgb });
}

export async function setScene(entityId = defaultEntityId, scene) {
  return postJson('/api/lights/scene', { entityId, scene });
}

export { defaultEntityId as TAPO_LIGHT_ENTITY_ID };
