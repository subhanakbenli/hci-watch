"use client";

import { useState } from "react";
import {
  Bluetooth,
  CircleHelp,
  Info,
  Languages,
  Laptop,
  Plus,
  Power,
  Settings,
} from "lucide-react";
import { MenuRow } from "@/components/ui/MenuRow";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";

export function SettingsBluetoothScreen() {
  const [bluetooth, setBluetooth] = useState(true);

  return (
    <div className="flex h-full flex-col px-4 py-4">
      <div className="flex items-center justify-between">
        <ScreenTitle>Bluetooth</ScreenTitle>
        <ToggleSwitch
          checked={bluetooth}
          onClick={() => setBluetooth((value) => !value)}
          label="Bluetooth"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <MenuRow icon={Languages} title="Language" subtitle="English" />
        <MenuRow icon={Power} title="Auto Power Off" subtitle="15 min" />
        <MenuRow icon={Bluetooth} title="Paired Devices" rightText="2" />
        <MenuRow icon={CircleHelp} title="Quick Help" />
        <MenuRow icon={Info} title="About" subtitle="Focus Watch" />
      </div>
      <div className="mt-4 rounded-2xl bg-white/8 p-3">
        <div className="mb-2 flex items-center gap-2 text-[12px] font-bold text-white/70">
          <Settings size={15} />
          Devices
        </div>
        <div className="grid gap-2">
          <div className="rounded-xl bg-emerald-500/15 px-3 py-2">
            <p className="text-[13px] font-bold">Focus Pro</p>
            <p className="text-[11px] font-semibold text-emerald-400">Connected</p>
          </div>
          <div className="rounded-xl bg-white/10 px-3 py-2">
            <p className="flex items-center gap-1 text-[13px] font-bold">
              <Laptop size={13} />
              MacBook
            </p>
            <p className="text-[11px] font-semibold text-white/50">Not Connected</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="mt-auto mb-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-white/12 text-[14px] font-bold hover:bg-white/18"
      >
        <Plus size={18} />
        Pair New Device
      </button>
    </div>
  );
}
