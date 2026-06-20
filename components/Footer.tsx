"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Waves } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

const contactIcons = [Phone, Mail, MapPin] as const;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: "spring", stiffness: 110, damping: 20 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white transition-colors duration-200 hover:text-cyan-200"
              aria-label={t.footer.homeAria}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                <Waves aria-hidden="true" size={23} strokeWidth={1.8} />
              </span>
              Piscinas R Abreu
            </a>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              {t.footer.description}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-3">
            {t.footer.contacts.map((contact, index) => {
              const Icon = contactIcons[index] ?? Phone;
              const noteLines = contact.note?.split("\n").filter(Boolean) ?? [];
              const content = (
                <>
                  <Icon
                    aria-hidden="true"
                    size={20}
                    strokeWidth={1.8}
                    className="text-cyan-200"
                  />
                  <span className="mt-6 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    {contact.label}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-white">
                    {contact.value}
                  </span>
                  {noteLines.length > 0 ? (
                    <div className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-slate-300">
                      {noteLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : null}
                </>
              );

              if (contact.href) {
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="bg-slate-950 p-5 transition-colors duration-200 hover:bg-slate-900"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={contact.label} className="bg-slate-950 p-5">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Piscinas R Abreu.{" "}
            {t.footer.copyright}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
