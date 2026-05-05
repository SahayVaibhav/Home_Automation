import logo from '../assets/logo.png';

function Header({ className = '', compact = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        alt="Amaara Pulse"
        className={compact ? 'h-9 w-auto drop-shadow-sm' : 'h-10 w-auto drop-shadow-sm'}
        src={logo}
      />
      <div className="leading-tight">
        <h1 className={`${compact ? 'text-base' : 'text-xl'} font-semibold text-pulse-text`}>
          Amaara Pulse
        </h1>
        <p className="text-[11px] uppercase tracking-[0.22em] text-pulse-muted">by Trikraft</p>
      </div>
    </div>
  );
}

export default Header;
