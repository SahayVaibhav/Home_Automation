import { Ambulance, ChevronLeft, PhoneCall, Shield, UsersRound } from 'lucide-react';
import Button from '../components/Button';

function SosPage({ onResolve, triggered }) {
  return (
    <div className="space-y-6 pb-8 pt-2">
      <header className="flex items-center justify-between">
        <button className="tap-scale flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-gray-100" type="button">
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-pulse-text">Emergency</h1>
        <div className="w-8" />
      </header>

      <section className="flex flex-col items-center justify-center py-6">
        <div className="relative flex h-64 w-64 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#C1272D]/10" />
          <div className="absolute inset-4 rounded-full border border-[#C1272D]/10" />
          <div className="absolute inset-0 animate-ping rounded-full bg-[#C1272D]/10" />
          <button
            className="tap-scale relative flex h-48 w-48 items-center justify-center rounded-full bg-[#C1272D] shadow-[0_10px_25px_-5px_rgba(193,39,45,0.4)]"
            type="button"
          >
            <div className="absolute inset-2 rounded-full border-4 border-white/20" />
            <span className="text-5xl font-black tracking-[0.28em] text-white">SOS</span>
          </button>
        </div>
        <p className="mt-8 max-w-[200px] text-center text-sm leading-relaxed text-pulse-muted">
          {triggered ? 'Emergency alert sent. Continue with a direct call below.' : 'Press and hold to send emergency alert'}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-pulse-text">Quick Actions</h2>
        <Button className="flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 text-left text-pulse-text shadow-sm" variant="ghost">
          <span className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#C1272D]">
              <Shield className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold">Call Security</span>
              <span className="block text-xs text-pulse-muted">Connect to security desk</span>
            </span>
          </span>
          <PhoneCall className="h-4 w-4 text-pulse-border" />
        </Button>
        <Button className="flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 text-left text-pulse-text shadow-sm" variant="ghost">
          <span className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
              <Ambulance className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold">Call Hospital</span>
              <span className="block text-xs text-pulse-muted">Get medical assistance</span>
            </span>
          </span>
          <PhoneCall className="h-4 w-4 text-pulse-border" />
        </Button>
        <Button className="flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 text-left text-pulse-text shadow-sm" variant="ghost">
          <span className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-500">
              <UsersRound className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold">Call Police</span>
              <span className="block text-xs text-pulse-muted">Connect to local police</span>
            </span>
          </span>
          <PhoneCall className="h-4 w-4 text-pulse-border" />
        </Button>
        <div className="flex items-start rounded-xl border border-red-100 bg-red-50 p-4">
          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-pulse-accent">
            <UsersRound className="h-4 w-4" />
          </div>
          <p className="text-[11px] leading-normal text-gray-600">
            Alerts will be sent to your family and security team.
          </p>
        </div>
        <Button className="w-full" onClick={onResolve} variant="ghost">
          Return to Safety Dashboard
        </Button>
      </section>
    </div>
  );
}

export default SosPage;
