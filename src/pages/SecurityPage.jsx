import { Bell, ChevronLeft, ChevronRight, Lock, ShieldAlert, UserRound, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const cameras = ['Main Gate', 'Driveway', 'Living Room', 'Backyard'];

function SecurityPage({ activityLog, doorLocked, gateOpen, onDoorToggle, onGateToggle }) {
  return (
    <div className="space-y-7 pb-2">
      <header className="flex items-center justify-between pt-2">
        <button className="tap-scale p-1 text-pulse-text" type="button">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold text-pulse-text">Security</h1>
        <Link className="tap-scale p-1 text-pulse-text" to="/notifications">
          <Bell className="h-5 w-5" />
        </Link>
      </header>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-pulse-text">Live Cameras</h2>
          <button className="text-xs font-medium text-pulse-accent" type="button">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {cameras.map((camera, index) => (
            <div key={camera} className="relative overflow-hidden rounded-2xl shadow-sm">
              <div className="h-24 bg-[linear-gradient(135deg,#cab8ab_0%,#9f8a7d_50%,#7b6357_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/35 px-2 py-1">
                <span className="text-[10px] font-medium text-white">{camera}</span>
                <span className={`h-1.5 w-1.5 rounded-full ${index < 4 ? 'bg-red-500' : 'bg-green-500'} animate-pulse`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="rounded-[1.5rem] border border-pulse-border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Warehouse className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-pulse-muted">Gate</p>
              <p className="text-sm font-bold text-green-600">{gateOpen ? 'Open' : 'Closed'}</p>
            </div>
          </div>
          <Button className="mt-4 w-full" onClick={onGateToggle} variant="secondary">
            {gateOpen ? 'Close Gate' : 'Open Gate'}
          </Button>
        </div>
        <div className="rounded-[1.5rem] border border-pulse-border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-pulse-accent">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-pulse-muted">Main Door</p>
              <p className="text-sm font-bold text-pulse-accent">{doorLocked ? 'Locked' : 'Unlocked'}</p>
            </div>
          </div>
          <Button className="mt-4 w-full" onClick={onDoorToggle} variant={doorLocked ? 'secondary' : 'primary'}>
            {doorLocked ? 'Unlock Door' : 'Lock Door'}
          </Button>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-pulse-text">Activity Log</h2>
          <button className="text-xs font-medium text-pulse-accent" type="button">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {activityLog.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                {index % 3 === 0 ? (
                  <ShieldAlert className="h-5 w-5 text-green-600" />
                ) : index % 3 === 1 ? (
                  <UserRound className="h-5 w-5 text-blue-500" />
                ) : (
                  <Lock className="h-5 w-5 text-pulse-accent" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-pulse-text">{item.message}</p>
                <p className="text-[10px] text-pulse-muted">{item.time}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-pulse-border" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SecurityPage;
