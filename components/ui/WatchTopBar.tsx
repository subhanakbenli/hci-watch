import { Battery, Bluetooth } from "lucide-react";

type WatchTopBarProps = {
  compact?: boolean;
};

export function WatchTopBar({ compact = false }: WatchTopBarProps) {
  return (
    <div className="flex h-7 items-center justify-between text-[11px] font-semibold text-white/80">
      <span>{compact ? "10:09" : "100%"}</span>
      <div className="flex items-center gap-1.5 text-amber-400">
        {!compact && <Battery size={14} className="text-emerald-400" />}
        <Bluetooth size={compact ? 13 : 15} />
      </div>
    </div>
  );
}
