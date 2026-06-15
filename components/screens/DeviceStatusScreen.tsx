import {
  BatteryFull,
  Bluetooth,
  Computer,
  Mic,
  SlidersHorizontal,
} from "lucide-react";
import { ScreenTitle } from "@/components/ui/ScreenTitle";

const statusRows = [
  { icon: BatteryFull, label: "Battery", value: "100%", tone: "text-emerald-400" },
  { icon: Bluetooth, label: "Bluetooth", value: "Connected", tone: "text-amber-400" },
  { icon: Mic, label: "Mic Status", value: "Active", tone: "text-emerald-400" },
  { icon: SlidersHorizontal, label: "ANC Status", value: "Medium", tone: "text-amber-400" },
  { icon: Computer, label: "Connected to", value: "MacBook", tone: "text-white/80" },
];

export function DeviceStatusScreen() {
  return (
    <div className="flex h-full flex-col px-4 py-4">
      <ScreenTitle>Focus Pro</ScreenTitle>
      <div className="mt-5 grid gap-2">
        {statusRows.map((row) => (
          <div
            key={row.label}
            className="flex min-h-10 items-center gap-2 rounded-lg bg-white/8 px-2.5"
          >
            <row.icon size={17} className="shrink-0 text-amber-400" />
            <span className="min-w-0 flex-1 truncate text-[12px] font-semibold text-white/75">
              {row.label}
            </span>
            <span className={`truncate text-[11px] font-bold ${row.tone}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
