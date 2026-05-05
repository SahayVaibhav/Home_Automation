import { ChevronLeft, ChevronRight, Megaphone, ShieldCheck, UserRound, Wrench } from 'lucide-react';

function LinkRow({ description, icon: Icon, title }) {
  return (
    <button className="group flex w-full items-center justify-between border-b border-gray-100 py-4 text-left last:border-b-0" type="button">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center">
          <Icon className="h-6 w-6 text-gray-700" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-pulse-text">{title}</h3>
          <p className="mt-0.5 text-xs text-gray-400">{description}</p>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-gray-500" />
    </button>
  );
}

function CommunityPage() {
  return (
    <div className="space-y-7 pb-2">
      <header className="flex items-center justify-between pt-2">
        <button className="tap-scale rounded-full p-2 transition hover:bg-gray-100" type="button">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-bold text-pulse-text">Community</h1>
        <div className="w-9" />
      </header>

      <section className="rounded-2xl border border-gray-50 bg-white p-5 shadow-sm">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50">
            <UserRound className="h-6 w-6 text-[#991B1B]" />
          </div>
          <div className="flex-1">
            <h2 className="text-[17px] font-bold text-pulse-text">Visitor Management</h2>
            <p className="mt-1 text-[13px] leading-tight text-pulse-muted">
              Pre-approve and manage your visitors
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="rounded-xl bg-pulse-accent py-3 px-2 text-sm font-semibold text-white transition hover:opacity-90" type="button">
            Approve Visitor
          </button>
          <button className="rounded-xl border border-pulse-accent py-3 px-2 text-sm font-semibold text-pulse-accent transition hover:bg-rose-50" type="button">
            Generate QR
          </button>
        </div>
      </section>

      <section className="space-y-0">
        <LinkRow description="View staff entry logs" icon={ShieldCheck} title="Staff Management" />
        <LinkRow description="Raise maintenance requests and track status" icon={Wrench} title="Maintenance Requests" />
        <LinkRow description="Stay updated with community updates" icon={Megaphone} title="Announcements" />
      </section>
    </div>
  );
}

export default CommunityPage;
