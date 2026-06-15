type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  tone?: "blue" | "green" | "red" | "dark";
  className?: string;
};

export function PrimaryButton({
  children,
  onClick,
  tone = "blue",
  className = "",
}: PrimaryButtonProps) {
  const toneClass =
    tone === "green"
      ? "bg-emerald-500 hover:bg-emerald-400"
      : tone === "red"
        ? "bg-red-500 hover:bg-red-400"
      : tone === "dark"
        ? "bg-white/12 hover:bg-white/18"
        : "bg-blue-600 hover:bg-blue-500";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-11 w-full rounded-xl ${toneClass} text-[14px] font-bold text-white shadow-lg shadow-black/30 transition ${className}`}
    >
      {children}
    </button>
  );
}
