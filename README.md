# Amaara Pulse by Trikraft

Luxury smart home mobile-first web app built with React, Vite, and Tailwind CSS.

## Current Scope

- premium splash and login flow
- luxury dashboard UI
- global watermark branding
- SOS screen
- real light control integration for a Tapo L530 bulb
- backend API layer with direct Tapo control and optional Home Assistant fallback

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Express
- `tp-link-tapo-connect`

## Project Structure

```text
src/
  App.jsx
  AppLayout.jsx
  assets/
  components/
  pages/
  services/
server/
  index.js
  tapoClient.js
  homeAssistantClient.js
```

## Setup

Install dependencies:

```bash
npm install
```

Create your local env file:

```bash
cp .env.example .env
```

Fill in the values inside `.env`.

## Environment Variables

```env
PORT=3001
TAPO_EMAIL=your-tapo-email@example.com
TAPO_PASSWORD=your-tapo-password
TAPO_DEVICE_ALIAS=Tapo L530
TAPO_DEVICE_ID=
TAPO_DEVICE_IP=
HOME_ASSISTANT_URL=http://localhost:8123
HOME_ASSISTANT_TOKEN=PASTE_TOKEN_HERE
TAPO_LIGHT_ENTITY=light.tapo_l530
```

Notes:

- If Home Assistant is not configured, the backend falls back to direct Tapo control.
- `TAPO_LIGHT_ENTITY=light.tapo_l530` is the current placeholder/default entity id for Home Assistant.

## Running The App

Start the backend:

```bash
npm run dev:api
```

Start the frontend:

```bash
npm run dev
```

Frontend default URL:

```text
http://localhost:5173/
```

Backend default URL:

```text
http://127.0.0.1:3001/
```

## Available Backend Routes

### General

- `GET /api/health`

### Tapo discovery

- `GET /api/tapo/discover`
- `POST /api/tapo/reset`

### Generic light routes used by the frontend

- `GET /api/lights/state?entityId=light.tapo_l530`
- `POST /api/lights/on`
- `POST /api/lights/off`
- `POST /api/lights/brightness`
- `POST /api/lights/color`
- `POST /api/lights/scene`

### Legacy / compatibility routes

- `GET /api/devices/light`
- `POST /api/devices/light/toggle`
- `POST /api/devices/light/brightness`
- `POST /api/devices/light/preset`

## Current Light Features

- ON/OFF toggle
- brightness slider
- color preset buttons
- scene buttons
- loading and error states in UI

## Important

- `.env` is ignored by git and should never be committed
- `dist/` and `node_modules/` are ignored
- restart `npm run dev:api` after changing backend code or `.env`

