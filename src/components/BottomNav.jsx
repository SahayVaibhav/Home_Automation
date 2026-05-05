import { House, ShieldCheck, Sparkles, UserRound, UsersRound } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', icon: House },
  { to: '/security', label: 'Security', icon: ShieldCheck },
  { to: '/scenes', label: 'Scenes', icon: Sparkles },
  { to: '/community', label: 'Community', icon: UsersRound },
  { to: '/profile', label: 'Profile', icon: UserRound },
];

function BottomNav() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 border-t border-pulse-border bg-white/95 px-3 pb-5 pt-3 backdrop-blur">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                'tap-scale flex flex-col items-center gap-1 rounded-2xl px-1 py-1.5 text-[10px] transition',
                isActive
                  ? 'text-pulse-accent'
                  : 'text-pulse-muted hover:text-pulse-accent',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <Icon className={`h-5 w-5 ${isActive ? 'fill-current' : ''}`} />
                  {to === '/scenes' && isActive ? (
                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-pulse-accent ring-2 ring-white" />
                  ) : null}
                </div>
                <span className={isActive ? 'font-bold' : 'font-medium'}>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
