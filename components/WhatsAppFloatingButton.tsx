"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";
import { buildWhatsAppHref } from "@/data/i18n";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="relative h-5 w-5"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M16.01 3.2c-7.06 0-12.8 5.72-12.8 12.77 0 2.25.59 4.45 1.7 6.38L3.1 29l6.82-1.79a12.73 12.73 0 0 0 6.08 1.55h.01c7.05 0 12.79-5.73 12.79-12.78 0-3.41-1.33-6.62-3.75-9.04A12.68 12.68 0 0 0 16.01 3.2Zm0 23.4h-.01c-1.86 0-3.69-.5-5.28-1.44l-.38-.23-4.05 1.06 1.08-3.95-.25-.41a10.6 10.6 0 0 1-1.63-5.66c0-5.83 4.75-10.58 10.6-10.58 2.82 0 5.48 1.1 7.48 3.1a10.5 10.5 0 0 1 3.09 7.49c-.01 5.84-4.76 10.62-10.65 10.62Zm5.82-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.52-.71-.53h-.6c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.06 1.3 3.27.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function WhatsAppFloatingButton() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const whatsappHref = useMemo(
    () => buildWhatsAppHref(`${t.header.quote} - Piscinas R Abreu`),
    [t.header.quote],
  );

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        boxShadow: prefersReducedMotion
          ? "0 18px 44px rgba(2, 132, 199, 0.32)"
          : [
              "0 18px 44px rgba(2, 132, 199, 0.32)",
              "0 18px 58px rgba(34, 211, 238, 0.48)",
              "0 18px 44px rgba(2, 132, 199, 0.32)",
            ],
      }}
      transition={{
        opacity: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
        scale: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
        y: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
        boxShadow: prefersReducedMotion
          ? { duration: 0.35, ease: [0.32, 0.72, 0, 1] }
          : { duration: 2.4, repeat: Infinity, ease: [0.32, 0.72, 0, 1] },
      }}
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold !text-white shadow-2xl transition hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06162b] sm:bottom-7 sm:right-7 sm:px-5"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/18 text-white">
        {!prefersReducedMotion ? (
          <span className="absolute inset-0 rounded-full bg-white/20" aria-hidden="true" />
        ) : null}
        <WhatsAppIcon />
      </span>
      <span className="inline pr-0.5">{t.whatsapp.label}</span>
    </motion.a>
  );
}

export default WhatsAppFloatingButton;
