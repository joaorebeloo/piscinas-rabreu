"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { buildWhatsAppHref } from "@/data/i18n";

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
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#16c784] px-4 py-3 text-sm font-bold text-white shadow-2xl transition hover:bg-[#19d991] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06162b] sm:bottom-7 sm:right-7 sm:px-5"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
        {!prefersReducedMotion ? (
          <span className="absolute inset-0 rounded-full bg-white/20" aria-hidden="true" />
        ) : null}
        <MessageCircle className="relative h-5 w-5" aria-hidden="true" />
      </span>
      <span className="hidden sm:inline">{t.whatsapp.label}</span>
    </motion.a>
  );
}

export default WhatsAppFloatingButton;
