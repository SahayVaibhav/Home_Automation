import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import {
  getDefaultLightEntity,
  getLightState as getHomeAssistantLightState,
  hasHomeAssistantConfig,
  setLightBrightness as setHomeAssistantBrightness,
  setLightColor,
  setLightScene,
  triggerSmoothLightOff,
  triggerSmoothLightOn,
} from './homeAssistantClient.js';
import {
  discoverBulbs,
  getLightState,
  resetTapoCache,
  setLightColor as setTapoLightColor,
  setLightBrightness,
  setLightPreset,
  setLightScene as setTapoLightScene,
  toggleLight,
} from './tapoClient.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);
const colorEntityId = process.env.TAPO_LIGHT_COLOR_ENTITY || 'tapo_l530_light_preset';

app.use(cors());
app.use(express.json());

async function getUnifiedLightState(entityId) {
  return hasHomeAssistantConfig() ? getHomeAssistantLightState(entityId) : getLightState();
}

async function turnUnifiedLightOn(entityId) {
  return hasHomeAssistantConfig() ? triggerSmoothLightOn(entityId) : toggleLight(true);
}

async function turnUnifiedLightOff(entityId) {
  return hasHomeAssistantConfig() ? triggerSmoothLightOff(entityId) : toggleLight(false);
}

async function setUnifiedBrightness(entityId, brightness) {
  return hasHomeAssistantConfig()
    ? setHomeAssistantBrightness(entityId, brightness)
    : setLightBrightness(brightness);
}

async function setUnifiedColor(entityId, rgb, brightness) {
  return hasHomeAssistantConfig()
    ? setLightColor(entityId, rgb, brightness)
    : setTapoLightColor(rgb, brightness);
}

async function setUnifiedScene(entityId, scene) {
  return hasHomeAssistantConfig() ? setLightScene(entityId, scene) : setTapoLightScene(scene);
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'amaara-pulse-api' });
});

app.get('/api/tapo/discover', async (_request, response) => {
  try {
    const bulbs = await discoverBulbs();
    response.json({ ok: true, bulbs });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to discover Tapo bulbs.',
      ok: false,
    });
  }
});

app.get('/api/devices/light', async (_request, response) => {
  try {
    const light = await getUnifiedLightState(getDefaultLightEntity());
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to fetch light state.',
      ok: false,
    });
  }
});

app.post('/api/devices/light/toggle', async (request, response) => {
  try {
    const desiredPower =
      typeof request.body?.power === 'boolean' ? request.body.power : undefined;
    const light = desiredPower
      ? await turnUnifiedLightOn(getDefaultLightEntity())
      : await turnUnifiedLightOff(getDefaultLightEntity());
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to toggle light.',
      ok: false,
    });
  }
});

app.post('/api/devices/light/brightness', async (request, response) => {
  try {
    const brightness = Number(request.body?.brightness);

    if (!Number.isFinite(brightness)) {
      response.status(400).json({ error: 'Brightness must be a number.', ok: false });
      return;
    }

    const light = await setUnifiedBrightness(getDefaultLightEntity(), brightness);
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to update brightness.',
      ok: false,
    });
  }
});

app.post('/api/devices/light/preset', async (request, response) => {
  try {
    const preset = request.body?.preset;
    const supportedPresets = ['white', 'warmwhite', 'daylightwhite', 'blue', 'red', 'green', 'yellow'];

    if (!supportedPresets.includes(preset)) {
      response.status(400).json({ error: 'Unsupported color preset.', ok: false });
      return;
    }

    const presetMap = {
      blue: [0, 102, 255],
      daylightwhite: [255, 255, 255],
      green: [0, 255, 120],
      red: [255, 0, 0],
      warmwhite: [255, 183, 94],
      white: [255, 244, 229],
      yellow: [255, 215, 64],
    };
    const light = await setUnifiedColor(getDefaultLightEntity(), presetMap[preset], 200);
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to update light preset.',
      ok: false,
    });
  }
});

app.get('/api/lights/state', async (request, response) => {
  try {
    const entityId = request.query.entityId || getDefaultLightEntity();
    const light = await getUnifiedLightState(entityId);
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to fetch Home Assistant light state.',
      ok: false,
    });
  }
});

app.post('/api/lights/on', async (request, response) => {
  try {
    const entityId = request.body?.entityId || getDefaultLightEntity();
    const light = await turnUnifiedLightOn(entityId);
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to turn the light on.',
      ok: false,
    });
  }
});

app.post('/api/lights/off', async (request, response) => {
  try {
    const entityId = request.body?.entityId || getDefaultLightEntity();
    const light = await turnUnifiedLightOff(entityId);
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to turn the light off.',
      ok: false,
    });
  }
});

app.post('/api/lights/brightness', async (request, response) => {
  try {
    const entityId = request.body?.entityId || getDefaultLightEntity();
    const brightness = Number(request.body?.brightness);

    if (!Number.isFinite(brightness)) {
      response.status(400).json({ error: 'Brightness must be a number.', ok: false });
      return;
    }

    const light = await setUnifiedBrightness(entityId, brightness);
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to update light brightness.',
      ok: false,
    });
  }
});

app.post('/api/lights/color', async (request, response) => {
  try {
    const entityId = request.body?.entityId || colorEntityId;
    const rgb = request.body?.rgb;
    const brightness = request.body?.brightness;

    if (!Array.isArray(rgb) || rgb.length !== 3) {
      response.status(400).json({ error: 'rgb must be an array of three values.', ok: false });
      return;
    }

    const light = await setUnifiedColor(entityId, rgb, brightness);
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to update light color.',
      ok: false,
    });
  }
});

app.post('/api/lights/scene', async (request, response) => {
  try {
    const entityId = request.body?.entityId || colorEntityId;
    const scene = request.body?.scene;
    const light = await setUnifiedScene(entityId, scene);
    response.json({ light, ok: true });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to apply light scene.',
      ok: false,
    });
  }
});

app.post('/api/tapo/reset', (_request, response) => {
  resetTapoCache();
  response.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Amaara Pulse API running on http://127.0.0.1:${port}`);
});
