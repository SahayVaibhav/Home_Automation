import { BellRing, Bolt, ChevronRight, Cpu, Settings, ShieldCheck, UserRound, UsersRound } from 'lucide-react';
import Toggle from '../components/Toggle';
import { Link } from 'react-router-dom';

function Row({ description, icon: Icon, title, trailing }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
          <Icon className="h-5 w-5 text-gray-500" />
        </div>
        <div className="text-left">
          <p className="text-[15px] font-semibold text-pulse-text">{title}</p>
          <p className="text-xs text-pulse-muted">{description}</p>
        </div>
      </div>
      {trailing || <ChevronRight className="h-5 w-5 text-pulse-border" />}
    </div>
  );
}

function ProfilePage({ sosTriggered }) {
  return (
    <div className="space-y-6 pb-2">
      <header className="overflow-hidden rounded-b-[2.5rem] bg-pulse-accent px-6 pb-12 pt-6 text-white shadow-glow">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10">
              <UserRound className="h-8 w-8" />
            </div>
            <div className="absolute bottom-0 right-0 rounded-full bg-white p-1 text-pulse-accent shadow-md">
              <Settings className="h-3 w-3" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Ileasha Thakur</h1>
            <p className="text-sm text-white/80">Owner</p>
          </div>
        </div>
      </header>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">Account & Access</h2>
        <div className="divide-y divide-gray-50 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <Row description="Manage family access" icon={UsersRound} title="Family Members" />
          <Row description="Manage guest permissions" icon={UserRound} title="Guest Access" />
          <Row
            description="Limited access for caretakers"
            icon={ShieldCheck}
            title="Caretaker Mode"
            trailing={<Toggle checked={false} label="caretaker mode" onChange={() => {}} />}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">Settings</h2>
        <div className="divide-y divide-gray-50 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <Row description="Add or manage devices" icon={Cpu} title="Device Management" />
          <Row description="Manage routines and schedules" icon={Bolt} title="Automation" />
          <Link className="block" to="/notifications">
            <Row description="Notifications, theme & more" icon={BellRing} title="App Settings" />
          </Link>
        </div>
      </section>

      <button className="w-full rounded-xl py-4 text-[15px] font-bold text-pulse-accent transition hover:bg-red-50" type="button">
        Logout
      </button>

      {sosTriggered ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-pulse-accent">
          Emergency alert is currently active for this profile.
        </div>
      ) : null}
    </div>
  );
}

export default ProfilePage;
