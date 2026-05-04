"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  htmlLang,
  localeOptions,
  translations,
  type Locale,
  type SiteCopy,
} from "@/data/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: SiteCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const storageKey = "piscinas-r-abreu-locale";

function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" &&
    localeOptions.some((option) => option.id === value)
  );
}

function readStoredLocale() {
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function writeStoredLocale(locale: Locale) {
  try {
    window.localStorage.setItem(storageKey, locale);
  } catch {
    // Some browsers block localStorage in private or restricted contexts.
  }
}

function detectLocale(): Locale {
  if (typeof window === "undefined") {
    return "pt";
  }

  const stored = readStoredLocale();
  if (isLocale(stored)) {
    return stored;
  }

  const browserLocales =
    (window.navigator.languages?.length ?? 0) > 0
      ? window.navigator.languages
      : [window.navigator.language];

  for (const browserLocale of browserLocales) {
    const nextLocale = browserLocale.toLowerCase().split("-")[0];

    if (isLocale(nextLocale)) {
      return nextLocale;
    }
  }

  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const nextLocale = detectLocale();
    queueMicrotask(() => setLocaleState(nextLocale));
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
    writeStoredLocale(locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: translations[locale],
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
