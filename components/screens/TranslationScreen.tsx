"use client";

import { useState } from "react";
import { Languages } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ScreenTitle } from "@/components/ui/ScreenTitle";

const bars = [28, 46, 66, 88, 54, 34, 72, 96, 58, 40, 70, 84, 52, 30];

export function TranslationScreen() {
  const [listening, setListening] = useState(true);

  return (
    <div className="flex h-full flex-col px-4 py-4 text-center">
      <ScreenTitle>TR to EN</ScreenTitle>
      <Languages size={30} className="mx-auto mt-5 text-amber-300" />
      <div className="mt-7 flex h-24 items-center justify-center gap-1.5">
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="wave-bar w-2 rounded-full bg-amber-400"
            style={{
              height: `${height}%`,
              animationDelay: `${index * 0.07}s`,
              animationPlayState: listening ? "running" : "paused",
            }}
          />
        ))}
      </div>
      <p className="mt-4 text-[14px] font-semibold text-white/75">
        {listening ? "Listening..." : "Paused"}
      </p>
      <div className="mt-auto mb-5">
        <PrimaryButton onClick={() => setListening((value) => !value)}>
          {listening ? "Pause" : "Start"}
        </PrimaryButton>
      </div>
    </div>
  );
}
