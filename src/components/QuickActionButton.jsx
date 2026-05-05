import Button from './Button';

function QuickActionButton({ icon: Icon, label, onClick, variant = 'secondary' }) {
  return (
    <Button
      className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-0 text-center shadow-sm"
      onClick={onClick}
      variant={variant === 'danger' ? 'ghost' : 'ghost'}
    >
      <span
        className={`flex aspect-square w-full items-center justify-center rounded-2xl ${
          variant === 'danger' ? 'border border-red-100 text-pulse-accent' : 'text-pulse-muted'
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className={`px-1 pb-2 text-[10px] leading-tight ${variant === 'danger' ? 'font-bold uppercase text-pulse-accent' : 'font-medium text-pulse-muted'}`}>
        {label}
      </span>
    </Button>
  );
}

export default QuickActionButton;
