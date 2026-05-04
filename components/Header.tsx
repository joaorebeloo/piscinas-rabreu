"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Waves, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";

const navItems = [
  { key: "models", href: "#modelos" },
  { key: "services", href: "#servicos" },
  { key: "beforeAfter", href: "#antes-depois" },
  { key: "testimonials", href: "#testemunhos" },
  { key: "contacts", href: "#contactos" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed inset-x-0 top-0 z-40 text-white transition-all duration-500 ease-[var(--ease-premium)] ${
        hasScrolled || isOpen
          ? "border-b border-white/10 bg-[#06162b]/88 shadow-[0_18px_48px_rgba(2,8,23,0.22)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label={t.header.homeAria}
          className="group inline-flex items-center gap-3 rounded-full outline-none transition focus-visible:ring-2 focus-visible:ring-[#55d6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06162b]"
          onClick={closeMenu}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white text-[#06162b] shadow-lg shadow-cyan-950/20">
            <Waves className="h-6 w-6 text-[#0787b7]" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className="block text-base font-semibold tracking-[0.08em]">
              Piscinas R Abreu
            </span>
            <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-cyan-100/80">
              {t.header.tagline}
            </span>
          </span>
        </a>

        <nav
          aria-label={t.header.mainNavAria}
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-cyan-50/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55d6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06162b]"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          aria-label={isOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55d6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06162b] lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#06162b]/95 lg:hidden"
          >
            <nav
              aria-label={t.header.mobileNavAria}
              className="mx-auto max-w-7xl px-5 py-4 sm:px-6"
            >
              <LanguageSwitcher compact />
              <div className="mt-4 grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-lg px-4 py-3 text-base font-semibold text-cyan-50/90 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55d6ff]"
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
