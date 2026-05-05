import { ChevronLeft, ChevronRight, CircleAlert, House, ShieldCheck, UserRound } from 'lucide-react';
import { notifications } from '../data/mockData';

const toneClasses = {
  amber: 'bg-orange-50 text-orange-400',
  green: 'bg-green-50 text-green-500',
  blue: 'bg-blue-50 text-blue-500',
  red: 'bg-red-50 text-red-500',
};

const toneIcons = {
  amber: House,
  green: UserRound,
  blue: ShieldCheck,
  red: CircleAlert,
};

function NotificationsPage() {
  return (
    <div className="space-y-5 pb-2">
      <header className="flex items-center pt-2">
        <button className="tap-scale -ml-2 rounded-full p-2 transition hover:bg-black/5" type="button">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="mr-8 flex-1 text-center text-lg font-semibold">Notifications</h1>
      </header>

      <section className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
        {['All', 'Security', 'Home', 'Community'].map((tab, index) => (
          <button
            key={tab}
            className={`rounded-full px-6 py-1.5 text-sm font-medium ${
              index === 0
                ? 'bg-pulse-accent text-white shadow-sm'
                : 'border border-pulse-border bg-white text-pulse-muted'
            }`}
            type="button"
          >
            {tab}
          </button>
        ))}
      </section>

      <section className="space-y-3">
        {notifications.map((item) => {
          const Icon = toneIcons[item.tone] || Bell;

          return (
            <article
              key={item.id}
              className="flex cursor-pointer items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm transition-all hover:border-pulse-border"
            >
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${toneClasses[item.tone]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-pulse-muted">{item.detail}</p>
                {item.meta ? <p className="mt-0.5 text-[10px] font-medium text-pulse-muted">{item.meta}</p> : null}
              </div>
              <ChevronRight className="h-4 w-4 text-pulse-muted" />
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default NotificationsPage;
