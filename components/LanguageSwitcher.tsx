"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { htmlLang, localeOptions } from "@/data/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement | null>(null);
  const activeOption = localeOptions.find((option) => option.id === locale) ?? localeOptions[0];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div
      ref={switcherRef}
      className={`relative inline-flex text-white ${compact ? "w-full" : ""}`}
    >
      <button
        type="button"
        aria-label={`${t.language.label}: ${activeOption.name}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className={`inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-3 text-sm font-bold text-white transition duration-300 ease-[var(--ease-premium)] hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55d6ff] ${
          compact ? "w-full" : "min-w-24"
        }`}
      >
        <Globe2 aria-hidden className="h-4 w-4" />
        <span lang={htmlLang[activeOption.id]}>{activeOption.label}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen ? (
        <div
          aria-label={t.language.label}
          className={`absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-44 overflow-hidden rounded-2xl border border-white/16 bg-[#06162b]/96 p-1 shadow-2xl shadow-cyan-950/35 backdrop-blur-xl ${
            compact ? "left-0 right-auto w-full" : ""
          }`}
        >
          {localeOptions.map((option) => {
            const isActive = option.id === locale;

            return (
              <button
                key={option.id}
                type="button"
                aria-current={isActive ? "true" : undefined}
                lang={htmlLang[option.id]}
                onClick={() => {
                  setLocale(option.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55d6ff] ${
                  isActive
                    ? "bg-white text-[var(--color-navy)]"
                    : "text-cyan-50/82 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{option.name}</span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-xs uppercase opacity-70">{option.label}</span>
                  {isActive ? <Check aria-hidden="true" className="h-4 w-4" /> : null}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
