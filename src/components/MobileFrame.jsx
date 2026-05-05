import Header from './Header';

function MobileFrame({ children }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-3 py-3 sm:px-5">
      <div className="mb-3 flex items-center justify-between px-3 pt-2 text-[13px] font-semibold text-pulse-text">
        <span>9:41</span>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-pulse-accent/70" />
          <span className="h-2 w-2 rounded-full bg-pulse-text/70" />
          <span className="rounded-full border border-pulse-border px-2 py-0.5 text-[10px]">100%</span>
        </div>
      </div>
      <main className="panel relative flex min-h-[calc(100vh-2rem)] flex-1 flex-col overflow-hidden rounded-[2.5rem] border border-white/80 bg-[#fbf7f3]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="relative border-b border-white/60 px-5 pb-3 pt-4">
          <div className="rounded-[1.6rem] border border-white/70 bg-white/65 px-4 py-3 shadow-sm backdrop-blur">
            <Header compact />
          </div>
        </div>
        <div className="relative flex-1 overflow-y-auto px-5 pb-28 pt-4 hide-scrollbar">
          {children}
        </div>
        <div className="pointer-events-none absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-black/10" />
      </main>
    </div>
  );
}

export default MobileFrame;
