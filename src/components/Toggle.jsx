function Toggle({ checked, onChange, label }) {
  return (
    <button
      aria-label={label}
      aria-pressed={checked}
      className={`tap-scale relative h-8 w-14 rounded-full transition ${
        checked ? 'bg-pulse-accent' : 'bg-pulse-accentSoft'
      }`}
      onClick={() => onChange(!checked)}
      type="button"
    >
      <span
        className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition ${
          checked ? 'left-7' : 'left-1'
        }`}
      />
    </button>
  );
}

export default Toggle;
