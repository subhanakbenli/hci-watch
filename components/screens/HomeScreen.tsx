"use client";

import {
  Bluetooth,
  CalendarCheck,
  Headphones,
  Languages,
  Laptop,
  Mic,
  Settings,
  Volume2,
} from "lucide-react";
import { WatchTopBar } from "@/components/ui/WatchTopBar";

type HomeScreenProps = {
  onNavigate: (screen: string) => void;
};

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const actions = [
    { label: "Meeting", icon: CalendarCheck, target: "meeting" },
    { label: "Mute", icon: Mic, target: "mic" },
    { label: "ANC", icon: Volume2, target: "noise" },
    { label: "Translate", icon: Languages, target: "translation" },
    { label: "Bluetooth", icon: Bluetooth, target: "bluetooth" },
    { label: "Settings", icon: Settings, target: "settings" },
  ];

  return (
    <div className="flex h-full flex-col px-4 py-3">
      <WatchTopBar />
      <div className="mt-1 text-[48px] font-light leading-none tracking-normal">
        10:09
      </div>
      <div className="mt-2 flex flex-col items-center justify-center text-center">
        <Headphones size={42} className="text-white/80" strokeWidth={1.6} />
        <p className="mt-2 text-[15px] font-bold text-white">Focus Pro</p>
        <p className="flex items-center gap-1 text-[12px] font-bold text-emerald-400">
          <Laptop size={13} />
          MacBook · Meeting Mode
        </p>
      </div>
      <div className="mx-auto mt-4 mb-8 grid grid-cols-3 gap-2">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            aria-label={action.label}
            title={action.label}
            onClick={() => onNavigate(action.target)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-white/16"
          >
            <action.icon
              size={25}
              className={action.label === "Meeting" ? "text-blue-400" : "text-white/85"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
