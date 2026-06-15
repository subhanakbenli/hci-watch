type ToggleSwitchProps = {
  checked: boolean;
  onClick: () => void;
  label: string;
};

export function ToggleSwitch({ checked, onClick, label }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={checked}
      onClick={onClick}
      className={`relative h-7 w-12 rounded-full p-1 transition ${
        checked ? "bg-amber-500" : "bg-white/20"
      }`}
    >
      <span
        className={`block h-5 w-5 rounded-full bg-white shadow transition ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
