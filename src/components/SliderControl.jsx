function SliderControl({ label, value, min = 0, max = 100, suffix = '%', onChange }) {
  return (
    <div className="space-y-3 rounded-3xl bg-pulse-bg/70 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{label}</p>
        <span className="text-sm font-semibold text-pulse-accent">
          {value}
          {suffix}
        </span>
      </div>
      <input
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-pulse-accentSoft accent-pulse-accent"
        max={max}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        type="range"
        value={value}
      />
    </div>
  );
}

export default SliderControl;
