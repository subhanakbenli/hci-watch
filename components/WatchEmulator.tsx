"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BatteryScreen } from "@/components/screens/BatteryScreen";
import { ConnectionScreen } from "@/components/screens/ConnectionScreen";
import { DeviceStatusScreen } from "@/components/screens/DeviceStatusScreen";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { IncomingCallScreen } from "@/components/screens/IncomingCallScreen";
import { MeetingModeScreen } from "@/components/screens/MeetingModeScreen";
import { MicScreen } from "@/components/screens/MicScreen";
import { NoiseControlScreen } from "@/components/screens/NoiseControlScreen";
import { SettingsBluetoothScreen } from "@/components/screens/SettingsBluetoothScreen";
import { TranslationScreen } from "@/components/screens/TranslationScreen";

type ScreenId =
  | "home"
  | "meeting"
  | "mic"
  | "noise"
  | "translation"
  | "call"
  | "status"
  | "battery"
  | "connection"
  | "bluetooth"
  | "settings";

type Screen = {
  id: ScreenId;
  label: string;
};

const screens: Screen[] = [
  { id: "home", label: "Home" },
  { id: "meeting", label: "Meeting" },
  { id: "mic", label: "Mic" },
  { id: "noise", label: "Noise" },
  { id: "translation", label: "Translate" },
  { id: "call", label: "Call" },
  { id: "status", label: "Status" },
  { id: "battery", label: "Battery" },
  { id: "connection", label: "Connection" },
  { id: "bluetooth", label: "Bluetooth" },
  { id: "settings", label: "Settings" },
];

const quickFlow: ScreenId[] = [
  "home",
  "meeting",
  "mic",
  "noise",
  "translation",
  "call",
  "status",
  "battery",
  "connection",
  "bluetooth",
  "settings",
];

export function WatchEmulator() {
  const [history, setHistory] = useState<ScreenId[]>(["home"]);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null,
  );
  const wheelLock = useRef(false);

  const activeScreen = history[history.length - 1];
  const activeIndex = screens.findIndex((screen) => screen.id === activeScreen);
  const pageDot = Math.min(2, Math.floor((activeIndex / screens.length) * 3));
  const canGoBack = history.length > 1;

  const navigateTo = useCallback((screen: ScreenId) => {
    setHistory((current) => {
      const active = current[current.length - 1];
      if (active === screen) return current;
      return [...current, screen];
    });
  }, []);

  const replaceWith = useCallback((screen: ScreenId) => {
    setHistory((current) => {
      const active = current[current.length - 1];
      if (active === screen) return current;
      return [...current.slice(0, -1), screen];
    });
  }, []);

  const goBack = useCallback(() => {
    setHistory((current) => (current.length > 1 ? current.slice(0, -1) : current));
  }, []);

  const goNext = useCallback(() => {
    const currentIndex = quickFlow.findIndex((screen) => screen === activeScreen);
    const nextScreen = quickFlow[(currentIndex + 1) % quickFlow.length];

    if (activeScreen === "home") {
      navigateTo(nextScreen);
      return;
    }

    replaceWith(nextScreen);
  }, [activeScreen, navigateTo, replaceWith]);

  const goPrevious = useCallback(() => {
    if (canGoBack) {
      goBack();
      return;
    }

    const currentIndex = quickFlow.findIndex((screen) => screen === activeScreen);
    const previousScreen =
      quickFlow[(currentIndex - 1 + quickFlow.length) % quickFlow.length];
    replaceWith(previousScreen);
  }, [activeScreen, canGoBack, goBack, replaceWith]);

  const handleNavigate = useCallback(
    (screen: string) => navigateTo(screen as ScreenId),
    [navigateTo],
  );

  const screenContent = useMemo(() => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen onNavigate={handleNavigate} />;
      case "meeting":
        return <MeetingModeScreen />;
      case "mic":
        return <MicScreen />;
      case "noise":
        return <NoiseControlScreen />;
      case "translation":
        return <TranslationScreen />;
      case "call":
        return <IncomingCallScreen />;
      case "status":
        return <DeviceStatusScreen />;
      case "battery":
        return <BatteryScreen />;
      case "connection":
        return <ConnectionScreen />;
      case "bluetooth":
        return <SettingsBluetoothScreen mode="bluetooth" />;
      case "settings":
        return <SettingsBluetoothScreen mode="settings" />;
      default:
        return null;
    }
  }, [activeScreen, handleNavigate]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key === "Escape") goBack();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goBack, goNext, goPrevious]);

  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    if (Math.abs(event.deltaY) < 35 || wheelLock.current) return;

    wheelLock.current = true;
    if (event.deltaY > 0) goNext();
    if (event.deltaY < 0) goPrevious();

    window.setTimeout(() => {
      wheelLock.current = false;
    }, 420);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-8">
      <div className="relative flex items-center gap-5">
        <button
          type="button"
          aria-label={canGoBack ? "Back" : "Previous screen"}
          onClick={goPrevious}
          className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/18 sm:flex"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="relative">
          <div className="absolute left-1/2 top-[-70px] h-24 w-40 -translate-x-1/2 rounded-t-[2rem] bg-gradient-to-b from-neutral-700 to-neutral-950 shadow-2xl" />
          <div className="absolute bottom-[-70px] left-1/2 h-24 w-40 -translate-x-1/2 rounded-b-[2rem] bg-gradient-to-b from-neutral-950 to-neutral-700 shadow-2xl" />
          <div className="absolute -right-4 top-28 h-16 w-4 rounded-r-lg bg-neutral-700 shadow-lg" />

          <section
            aria-label="Smart watch emulator"
            onWheel={handleWheel}
            onTouchStart={(event) =>
              setTouchStart({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
              })
            }
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const deltaX = event.changedTouches[0].clientX - touchStart.x;
              const deltaY = event.changedTouches[0].clientY - touchStart.y;

              if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX < 0) goNext();
                if (deltaX > 0) goBack();
              }
              setTouchStart(null);
            }}
            className="relative z-10 h-[384px] w-[320px] overflow-hidden rounded-[2.5rem] border-[8px] border-gray-900 bg-black text-white shadow-[0_28px_90px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(255,255,255,0.14),transparent_30%)]" />
            {canGoBack && (
              <button
                type="button"
                aria-label="Back"
                onClick={goBack}
                className="absolute left-3 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white/85 backdrop-blur transition hover:bg-white/14"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            <div className="relative h-full">{screenContent}</div>
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className={`h-2 w-2 rounded-full transition ${
                    dot === pageDot ? "bg-white" : "bg-white/35"
                  }`}
                />
              ))}
            </div>
          </section>
        </div>

        <button
          type="button"
          aria-label="Next screen"
          onClick={goNext}
          className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/18 sm:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </main>
  );
}
