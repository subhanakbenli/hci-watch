"use client";

import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function MicScreen() {
  const [muted, setMuted] = useState(false);
  const Icon = muted ? MicOff : Mic;

  return (
    <div className="flex h-full flex-col items-center px-4 py-5 text-center">
      <div
        className={`mt-7 flex h-32 w-32 items-center justify-center rounded-full border-2 ${
          muted
            ? "border-white/25 bg-white/8 shadow-[0_0_30px_rgba(255,255,255,0.12)]"
            : "border-blue-500 bg-blue-500/15 shadow-[0_0_32px_rgba(37,99,235,0.45)]"
        }`}
      >
        <Icon size={72} className={muted ? "text-white/65" : "text-blue-100"} />
      </div>
      <p
        className={`mt-6 text-[17px] font-semibold ${
          muted ? "text-white/75" : "text-white"
        }`}
      >
        {muted ? "Muted" : "Microphone Active"}
      </p>
      <div className="mt-auto mb-5 w-full">
        <PrimaryButton onClick={() => setMuted((value) => !value)}>
          {muted ? "UNMUTE" : "MUTE"}
        </PrimaryButton>
      </div>
    </div>
  );
}
