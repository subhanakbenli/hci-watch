"use client";

import { useState } from "react";
import { Circle, RadioTower, Volume2, Waves } from "lucide-react";
import { ScreenTitle } from "@/components/ui/ScreenTitle";

const modes = [
  { label: "ANC", icon: Volume2 },
  { label: "Transparency", icon: RadioTower },
  { label: "Normal", icon: Circle },
];

export function NoiseControlScreen() {
  const [selected, setSelected] = useState("ANC");

  return (
    <div className="flex h-full flex-col px-4 py-4">
      <ScreenTitle>Noise Control</ScreenTitle>
      <div className="mt-6 flex flex-col gap-3">
        {modes.map((mode) => {
          const active = selected === mode.label;
          return (
            <button
              type="button"
              key={mode.label}
              onClick={() => setSelected(mode.label)}
              className={`flex min-h-14 items-center gap-3 rounded-xl border px-3 text-left transition ${
                active
                  ? "border-blue-500 bg-blue-500/15"
                  : "border-white/8 bg-white/10"
              }`}
            >
              <mode.icon size={25} className="text-white/85" />
              <span className="flex-1 text-[14px] font-semibold">{mode.label}</span>
              <span
                className={`h-3 w-3 rounded-full ${
                  active ? "bg-blue-500" : "border border-white/55"
                }`}
              />
            </button>
          );
        })}
      </div>
      <Waves size={32} className="mx-auto mt-auto mb-8 text-white/20" />
    </div>
  );
}
