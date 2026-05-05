import {
  AlertTriangle,
  Bell,
  CloudSun,
  DoorClosed,
  LightbulbOff,
  Lock,
  MapPin,
  Menu,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import QuickActionButton from '../components/QuickActionButton';
import RoomSummaryCard from '../components/RoomSummaryCard';

function DashboardPage({
  gateOpen,
  onAllLightsOff,
  onGateToggle,
  onLockDoors,
  onOpenRoom,
  onToggleRoomLights,
  onTriggerSos,
  rooms,
  weather,
}) {
  return (
    <div className="space-y-7 pb-2">
      <header className="flex items-start justify-between pt-2">
        <div className="flex items-start gap-4">
          <button className="tap-scale mt-1 text-pulse-text" type="button">
            <Menu className="h-6 w-6" />
          </button>
          <div>
            <button className="flex items-center gap-1 text-left text-lg font-bold text-pulse-text" type="button">
              Amaara Villa 12
            </button>
            <div className="mt-1 flex items-center gap-1 text-xs text-pulse-muted">
              <MapPin className="h-3.5 w-3.5" />
              <span>Kasauli, Himachal Pradesh</span>
            </div>
          </div>
        </div>
        <Link className="tap-scale text-pulse-text" to="/notifications">
          <Bell className="h-5 w-5" />
        </Link>
      </header>

      <section className="relative overflow-hidden rounded-[2rem] shadow-card">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(122,31,31,0.32),rgba(67,42,35,0.1)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_40%),linear-gradient(180deg,#5a4437_0%,#7e6857_40%,#9b8b7f_100%)]" />
        <div className="relative flex min-h-44 items-start gap-3 p-6 text-white">
          <CloudSun className="mt-1 h-10 w-10 text-[#F7D77D]" />
          <div>
            <p className="text-4xl font-bold">{weather.temperature}°C</p>
            <p className="text-sm font-medium text-white/90">{weather.label}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-white p-2 shadow-sm">
        <div className="grid grid-cols-3 gap-2 text-sm">
          <button className="rounded-[1.5rem] bg-pulse-accent px-4 py-3 font-semibold text-white shadow-md" type="button">
            Home
          </button>
          <button className="rounded-[1.5rem] px-4 py-3 font-medium text-pulse-muted" type="button">
            Away
          </button>
          <button className="rounded-[1.5rem] px-4 py-3 font-medium text-pulse-muted" type="button">
            Guest
          </button>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-pulse-text">Quick Actions</h2>
          <button className="text-sm font-semibold text-pulse-accent" type="button">
            View All
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <QuickActionButton icon={LightbulbOff} label="All Lights Off" onClick={onAllLightsOff} />
          <QuickActionButton icon={Lock} label="Lock All Doors" onClick={onLockDoors} />
          <QuickActionButton
            icon={DoorClosed}
            label={gateOpen ? 'Close Gate' : 'Open Gate'}
            onClick={onGateToggle}
          />
          <QuickActionButton icon={AlertTriangle} label="SOS" onClick={onTriggerSos} variant="danger" />
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-pulse-text">Rooms</h2>
          <button className="text-sm font-semibold text-pulse-accent" type="button">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {rooms.map((room) => (
            <RoomSummaryCard
              key={room.id}
              onOpen={() => onOpenRoom(room.id)}
              onToggleLights={(checked) => onToggleRoomLights(room.id, checked)}
              room={room}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
