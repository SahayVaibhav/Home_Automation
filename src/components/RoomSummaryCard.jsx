import { ChevronRight, Lightbulb, ThermometerSun } from 'lucide-react';
import Card from './Card';
import Toggle from './Toggle';

function RoomSummaryCard({ room, onOpen, onToggleLights }) {
  return (
    <Card className="flex items-center justify-between rounded-3xl border border-gray-50 p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-400">
          <Lightbulb className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-pulse-text">{room.name}</h3>
          <p className="text-xs font-medium text-pulse-muted">
            {room.lightsOn ? `${Math.max(1, Math.round(room.brightness / 40))} Lights On` : 'All Off'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1 text-xs font-bold text-pulse-text">
          <ThermometerSun className="h-4 w-4 text-orange-400" />
          {room.temperature}°C
        </span>
        <Toggle checked={room.lightsOn} label={`${room.name} lights`} onChange={onToggleLights} />
        <button className="tap-scale text-pulse-muted" onClick={onOpen} type="button">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </Card>
  );
}

export default RoomSummaryCard;
