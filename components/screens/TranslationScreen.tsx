"use client";

import { useState } from "react";
import { Languages, ScanText } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ScreenTitle } from "@/components/ui/ScreenTitle";

const bars = [28, 46, 66, 88, 54, 34, 72, 96, 58, 40, 70, 84, 52, 30];

export function TranslationScreen() {
  const [listening, setListening] = useState(false);

  return (
    <div className="flex h-full flex-col px-4 py-4 text-center">
      <ScreenTitle>TR -&gt; EN</ScreenTitle>
      {listening ? (
        <>
          <div className="mt-10 flex h-28 items-center justify-center gap-1.5">
            {bars.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="wave-bar w-2 rounded-full bg-blue-500"
                style={{
                  height: `${height}%`,
                  animationDelay: `${index * 0.07}s`,
                }}
              />
            ))}
          </div>
          <p className="mt-4 text-[14px] font-semibold text-white/75">
            Listening...
          </p>
        </>
      ) : (
        <div className="mt-9 flex flex-1 flex-col items-center text-center">
          <ScanText size={34} className="text-white/75" />
          <p className="mt-6 text-[22px] font-semibold">TR -&gt; EN</p>
          <Languages size={28} className="mt-5 text-blue-400" />
        </div>
      )}
      <div className="mt-auto mb-5">
        <PrimaryButton onClick={() => setListening((value) => !value)}>
          {listening ? "Pause" : "Start Translation"}
        </PrimaryButton>
      </div>
    </div>
  );
}
