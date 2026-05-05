import { ArrowLeft, Bell, PlugZap, Tv2, Wind } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import SliderControl from '../components/SliderControl';
import Toggle from '../components/Toggle';
import { Link } from 'react-router-dom';

function RoomControlPage({ onBack, onSetRoomDevice, onUpdateRoom, room }) {
  if (!room) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg font-semibold">Room not found</p>
        <Button onClick={onBack} variant="secondary">
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-5 pb-2">
      <div className="flex items-center justify-between pt-2">
        <button
          className="tap-scale rounded-2xl p-2 text-pulse-text transition hover:bg-white/70"
          onClick={onBack}
          type="button"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-lg font-semibold">{room.name}</h2>
        <Link className="tap-scale rounded-2xl p-2 text-pulse-text transition hover:bg-white/70" to="/notifications">
          <Bell className="h-5 w-5" />
        </Link>
      </div>

      <section className="grid grid-cols-4 gap-3">
        <button
          className="rounded-xl bg-pulse-accent p-3 text-white"
          type="button"
        >
          <div className="flex flex-col items-center gap-2">
            <Tv2 className="h-6 w-6" />
            <span className="text-[10px] font-medium">Lights</span>
          </div>
        </button>
        <div className="rounded-xl border border-gray-100 bg-white p-3 text-gray-400">
          <div className="flex flex-col items-center gap-2">
            <Wind className="h-6 w-6" />
            <span className="text-[10px] font-medium">Curtains</span>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-3 text-gray-400">
          <div className="flex flex-col items-center gap-2">
            <Wind className="h-6 w-6" />
            <span className="text-[10px] font-medium">Climate</span>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-3 text-gray-400">
          <div className="flex flex-col items-center gap-2">
            <PlugZap className="h-6 w-6" />
            <span className="text-[10px] font-medium">Devices</span>
          </div>
        </div>
      </section>

      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-800">Lights</h3>
          <Toggle
            checked={room.lightsOn}
            label={`${room.name} lights`}
            onChange={(checked) =>
              onUpdateRoom(room.id, {
                lightsOn: checked,
                brightness: checked ? Math.max(room.brightness, 30) : 0,
              })
            }
          />
        </div>
        <div className="flex items-center justify-between rounded-3xl bg-pulse-bg/70 px-4 py-4">
          <div>
            <p className="text-sm font-medium">Brightness</p>
            <p className="text-xs text-pulse-muted">
              {room.lightsOn ? 'Warm ambient lighting is active' : 'Lighting is turned off'}
            </p>
          </div>
          <span className="text-sm font-semibold text-pulse-accent">{room.brightness}%</span>
        </div>
        <SliderControl
          label="Brightness"
          onChange={(brightness) => onUpdateRoom(room.id, { brightness, lightsOn: brightness > 0 })}
          value={room.brightness}
        />
        <div className="grid grid-cols-4 gap-2">
          {['Warm', 'Bright', 'Night', 'Off'].map((mode) => (
            <button
              key={mode}
              className={`rounded-lg py-2 text-xs ${
                mode === 'Bright' ? 'bg-pulse-accent text-white' : 'bg-gray-100 text-gray-600'
              }`}
              type="button"
            >
              {mode}
            </button>
          ))}
        </div>
      </Card>

      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-800">Curtains</h3>
          <span className="text-xs text-pulse-muted">{room.curtains}% Open</span>
        </div>
        <SliderControl
          label="Curtains"
          onChange={(curtains) => onUpdateRoom(room.id, { curtains })}
          value={room.curtains}
        />
      </Card>

      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-800">AC</h3>
          <div className="flex items-center overflow-hidden rounded-lg bg-gray-100">
            <button
              className="border-r border-gray-200 px-4 py-2 text-gray-600"
              onClick={() => onUpdateRoom(room.id, { acTemp: Math.max(16, room.acTemp - 1) })}
              type="button"
            >
              -
            </button>
            <button
              className="px-4 py-2 text-gray-600"
              onClick={() => onUpdateRoom(room.id, { acTemp: Math.min(30, room.acTemp + 1) })}
              type="button"
            >
              +
            </button>
          </div>
        </div>
        <SliderControl
          label="AC Temperature"
          max={30}
          min={16}
          onChange={(acTemp) => onUpdateRoom(room.id, { acTemp })}
          suffix="°C"
          value={room.acTemp}
        />
        <div className="flex items-center gap-3 rounded-3xl bg-pulse-bg/70 p-4">
          <span className="rounded-2xl bg-white p-3 text-pulse-accent">
            <Wind className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-medium">{room.temperature}°C current room temperature</p>
            <p className="text-xs text-pulse-muted">Auto-adjusted based on occupancy and weather</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['Cool', 'Heat', 'Auto', 'Fan'].map((mode, index) => (
            <button
              key={mode}
              className={`rounded-lg py-2 text-xs ${
                index === 0 ? 'bg-pulse-accent text-white' : 'bg-gray-100 text-gray-600'
              }`}
              type="button"
            >
              {mode}
            </button>
          ))}
        </div>
      </Card>

      <Card className="space-y-4">
        <h3 className="font-bold text-gray-800">Devices</h3>
        <div className="grid gap-3">
          <div className="flex items-center justify-between rounded-3xl bg-pulse-bg/70 p-4">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-white p-3 text-pulse-accent">
                <Tv2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium">TV</p>
                <p className="text-xs text-pulse-muted">Streaming lounge setup</p>
              </div>
            </div>
            <Toggle
              checked={room.devices.tv}
              label={`${room.name} tv`}
              onChange={(checked) => onSetRoomDevice(room.id, 'tv', checked)}
            />
          </div>
          <div className="flex items-center justify-between rounded-3xl bg-pulse-bg/70 p-4">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-white p-3 text-pulse-accent">
                <PlugZap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium">Smart Plug</p>
                <p className="text-xs text-pulse-muted">Charging and appliance outlet</p>
              </div>
            </div>
            <Toggle
              checked={room.devices.plug}
              label={`${room.name} plug`}
              onChange={(checked) => onSetRoomDevice(room.id, 'plug', checked)}
            />
          </div>
          <div className="flex items-center justify-between rounded-3xl bg-pulse-bg/70 p-4">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-white p-3 text-pulse-accent">
                <Tv2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium">Soundbar</p>
                <p className="text-xs text-pulse-muted">Cinema audio setup</p>
              </div>
            </div>
            <Toggle
              checked={room.devices.soundbar}
              label={`${room.name} soundbar`}
              onChange={(checked) => onSetRoomDevice(room.id, 'soundbar', checked)}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RoomControlPage;
