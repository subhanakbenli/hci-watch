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
            ? "border-red-500 bg-red-500/14 shadow-[0_0_30px_rgba(239,68,68,0.34)]"
            : "border-emerald-500 bg-emerald-500/14 shadow-[0_0_30px_rgba(16,185,129,0.34)]"
        }`}
      >
        <Icon size={72} className={muted ? "text-red-100" : "text-emerald-100"} />
      </div>
      <p
        className={`mt-6 text-[17px] font-semibold ${
          muted ? "text-red-300" : "text-emerald-300"
        }`}
      >
        {muted ? "Muted" : "Mic Active"}
      </p>
      <div className="mt-auto mb-5 w-full">
        <PrimaryButton
          tone={muted ? "green" : "red"}
          onClick={() => setMuted((value) => !value)}
        >
          {muted ? "UNMUTE" : "MUTE"}
        </PrimaryButton>
      </div>
    </div>
  );
}
