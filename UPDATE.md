# Update Notes

## Latest Update

Added live light controls with backend service integration.

### What Was Added

- backend Express server for device control
- direct Tapo bulb integration for `Tapo L530`
- optional Home Assistant light service layer
- frontend service helper in `src/services/lightApi.js`
- expanded light control panel in the Amaara Pulse home UI

### Light Controls Now Supported

- power ON/OFF
- brightness adjustment
- RGB color presets
- scene presets

### Backend Behavior

The backend now supports two control modes:

1. Home Assistant mode
2. Direct Tapo fallback mode

If `HOME_ASSISTANT_URL` and `HOME_ASSISTANT_TOKEN` are not configured, the app falls back to direct Tapo control automatically.

### Current Working Device

- TP-Link Tapo L530 bulb

### Verified Working

- device discovery
- real light state fetch
- on/off control from UI
- backend health endpoint

### Files Added / Updated

- `.gitignore`
- `.env.example`
- `server/index.js`
- `server/tapoClient.js`
- `server/homeAssistantClient.js`
- `src/services/lightApi.js`
- `src/AppLayout.jsx`

### Recommended Next Steps

- wire brightness to richer visual feedback
- add live polling or optimistic sync recovery
- add scene persistence
- connect more device types after light control is stable
