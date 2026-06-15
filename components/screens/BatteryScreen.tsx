import { ScreenTitle } from "@/components/ui/ScreenTitle";

export function BatteryScreen() {
  return (
    <div className="flex h-full flex-col px-4 py-4 text-center">
      <ScreenTitle>Battery</ScreenTitle>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <span className="text-[52px] font-light leading-none">100%</span>
          <div className="relative h-10 w-20 rounded-md border-2 border-white/70 p-1">
            <span className="absolute -right-2 top-1/2 h-5 w-2 -translate-y-1/2 rounded-r-sm bg-white/70" />
            <span className="block h-full w-full rounded-sm bg-emerald-500 shadow-[0_0_18px_rgba(34,197,94,0.5)]" />
          </div>
        </div>
        <p className="mt-8 text-[13px] font-semibold text-white/55">Est. Playtime</p>
        <p className="mt-1 text-[19px] font-bold">30h 45m</p>
      </div>
    </div>
  );
}
