"use client";

import { Phone, UserRound, X } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function IncomingCallScreen() {
  return (
    <div className="flex h-full flex-col items-center px-4 py-5 text-center">
      <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-slate-600">
        <UserRound size={48} className="text-white" />
      </div>
      <h2 className="mt-5 text-[19px] font-bold">Alex Johnson</h2>
      <p className="text-[14px] font-semibold text-white/65">Incoming Call</p>
      <div className="mt-auto mb-5 grid w-full gap-3">
        <PrimaryButton tone="green">
          <span className="inline-flex items-center justify-center gap-2">
            <Phone size={18} />
            Answer
          </span>
        </PrimaryButton>
        <PrimaryButton>
          <span className="inline-flex items-center justify-center gap-2">
            <X size={18} />
            Reject
          </span>
        </PrimaryButton>
      </div>
    </div>
  );
}
