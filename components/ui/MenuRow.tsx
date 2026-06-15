import { ChevronRight, type LucideIcon } from "lucide-react";

type MenuRowProps = {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  rightText?: string;
  active?: boolean;
  onClick?: () => void;
};

export function MenuRow({
  icon: Icon,
  title,
  subtitle,
  rightText,
  active = false,
  onClick,
}: MenuRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-12 w-full items-center gap-3 rounded-xl border px-3 text-left transition ${
        active
          ? "border-amber-500 bg-amber-500/12"
          : "border-white/8 bg-white/10 hover:bg-white/14"
      }`}
    >
      {Icon && (
        <Icon
          size={21}
          className={active ? "shrink-0 text-amber-400" : "shrink-0 text-white/70"}
        />
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-semibold text-white">
          {title}
        </span>
        {subtitle && (
          <span className="block truncate text-[10px] font-medium text-white/55">
            {subtitle}
          </span>
        )}
      </span>
      {rightText && (
        <span className="text-[11px] font-semibold text-amber-400">{rightText}</span>
      )}
      <ChevronRight size={17} className="shrink-0 text-white/45" />
    </button>
  );
}
