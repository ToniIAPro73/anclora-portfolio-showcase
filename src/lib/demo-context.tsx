import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "../data/translations";
import {
  createConversionEvent,
  type ConversionEvent,
  type ConversionEventType,
} from "../lib/conversion";

interface DemoContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  events: ConversionEvent[];
  track: (type: ConversionEventType, label: string) => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  const [events, setEvents] = useState<ConversionEvent[]>([]);

  const track = useCallback((type: ConversionEventType, label: string) => {
    const event = createConversionEvent(type, label);
    setEvents((prev) => [...prev.slice(-5), event]);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "es" ? "en" : "es";
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const value = useMemo<DemoContextValue>(
    () => ({
      locale,
      t: translations[locale],
      toggleLocale,
      events,
      track,
    }),
    [locale, events, toggleLocale, track],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo(): DemoContextValue {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    throw new Error("useDemo must be used within DemoProvider");
  }
  return ctx;
}
