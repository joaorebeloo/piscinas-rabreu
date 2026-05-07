"use client";

import { motion, type Variants } from "framer-motion";
import { Clock3, Headphones, ShieldCheck, Wrench } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { SectionEyebrow } from "@/components/SectionEyebrow";

const icons = [ShieldCheck, Wrench, Clock3, Headphones] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export function BenefitsBar() {
  const { t } = useLanguage();

  return (
    <section
      id="servicos"
      aria-labelledby="benefits-title"
      className="bg-[var(--color-navy)] px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 border-t border-white/10 pt-6">
          <div>
            <SectionEyebrow icon={ShieldCheck} variant="dark">
              {t.benefits.eyebrow}
            </SectionEyebrow>
            <h2
              id="benefits-title"
              className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl"
            >
              {t.benefits.title}
            </h2>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4"
        >
          {t.benefits.items.map((benefit, index) => {
            const Icon = icons[index] ?? ShieldCheck;

            return (
              <motion.article
                key={benefit.title}
                variants={item}
                className="group bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-500 ease-[var(--ease-premium)] hover:bg-white/[0.075]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-200/10 text-cyan-200 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:-translate-y-1">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cyan-50/70">
                  {benefit.text}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default BenefitsBar;
