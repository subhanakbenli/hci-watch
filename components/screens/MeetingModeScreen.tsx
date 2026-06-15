"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";

export function MeetingModeScreen() {
  const [voiceClarity, setVoiceClarity] = useState(true);
  const [keyboardNoise, setKeyboardNoise] = useState(true);

  return (
    <div className="flex h-full flex-col px-4 py-4">
      <ScreenTitle>Meeting Mode</ScreenTitle>
      <div className="mt-5 flex flex-1 flex-col gap-3">
        <div className="flex min-h-16 items-center justify-between rounded-xl bg-white/10 px-3">
          <span className="max-w-[120px] text-[13px] font-semibold leading-snug">
            Voice Clarity
          </span>
          <ToggleSwitch
            checked={voiceClarity}
            onClick={() => setVoiceClarity((value) => !value)}
            label="Voice Clarity"
          />
        </div>
        <div className="rounded-xl bg-white/10 px-3 py-3">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold">ANC</span>
            <span className="text-[12px] font-bold text-amber-400">Medium</span>
          </div>
        </div>
        <div className="flex min-h-16 items-center justify-between rounded-xl bg-white/10 px-3">
          <span className="max-w-[130px] text-[13px] font-semibold leading-snug">
            Keyboard Noise Reduction
          </span>
          <ToggleSwitch
            checked={keyboardNoise}
            onClick={() => setKeyboardNoise((value) => !value)}
            label="Keyboard Noise Reduction"
          />
        </div>
      </div>
      <PrimaryButton className="mb-5">Start Meeting Mode</PrimaryButton>
    </div>
  );
}
