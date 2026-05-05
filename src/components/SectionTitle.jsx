function SectionTitle({ eyebrow, title, action }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.3em] text-pulse-muted">{eyebrow}</p>
        ) : null}
        <h2 className="text-xl font-semibold text-pulse-text">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export default SectionTitle;
