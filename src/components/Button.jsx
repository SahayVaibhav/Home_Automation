function Button({
  children,
  className = '',
  onClick,
  variant = 'primary',
  type = 'button',
}) {
  const variants = {
    primary: 'bg-pulse-accent text-white shadow-glow hover:opacity-95',
    secondary: 'bg-pulse-accentSoft text-pulse-accent hover:bg-pulse-accent hover:text-white',
    ghost: 'bg-transparent text-pulse-text hover:bg-pulse-accentSoft/40',
    danger: 'bg-[#B33030] text-white shadow-glow hover:opacity-95',
  };

  return (
    <button
      className={`tap-scale rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
