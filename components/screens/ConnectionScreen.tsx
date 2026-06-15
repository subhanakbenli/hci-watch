"use client";

import { useState } from "react";
import { Check, Link2Off } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function ConnectionScreen() {
  const [reconnected, setReconnected] = useState(false);

  return (
    <div className="flex h-full flex-col items-center px-4 py-5 text-center">
      <div
        className={`mt-10 flex h-32 w-32 items-center justify-center rounded-full border-2 ${
          reconnected
            ? "border-green-500 bg-green-500/15 shadow-[0_0_34px_rgba(34,197,94,0.36)]"
            : "border-blue-500 bg-blue-500/12 shadow-[0_0_34px_rgba(37,99,235,0.36)]"
        }`}
      >
        {reconnected ? (
          <Check size={74} className="text-green-100" strokeWidth={2.2} />
        ) : (
          <Link2Off size={66} className="text-blue-100" strokeWidth={1.9} />
        )}
      </div>
      <p className="mt-7 text-[18px] font-semibold">
        {reconnected ? "Reconnected" : "Connection Lost"}
      </p>
      <div className="mt-auto mb-5 w-full">
        <PrimaryButton
          tone={reconnected ? "blue" : "blue"}
          onClick={() => setReconnected((value) => !value)}
        >
          {reconnected ? "OK" : "Reconnect"}
        </PrimaryButton>
      </div>
    </div>
  );
}
