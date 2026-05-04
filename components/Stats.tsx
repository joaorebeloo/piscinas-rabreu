"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, type Variants } from "framer-motion";
import { CalendarCheck, ShieldCheck, Smile, Waves } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

const icons = [CalendarCheck, Waves, Smile, ShieldCheck] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 19 },
  },
};

type CountUpProps = {
  value: number;
  suffix: string;
  start: boolean;
};

function CountUp({ value, suffix, start }: CountUpProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.45,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [start, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section
      ref={sectionRef}
      id="estatisticas"
      aria-labelledby="stats-title"
      className="bg-stone-50 px-4 py-14 text-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 border-y border-slate-200 py-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-800">
              {t.stats.eyebrow}
            </p>
            <h2
              id="stats-title"
              className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              {t.stats.title}
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-4"
          >
            {t.stats.items.map((stat, index) => {
              const Icon = icons[index] ?? CalendarCheck;

              return (
                <motion.article
                  key={stat.label}
                  variants={item}
                  className="bg-white p-6"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <Icon
                      aria-hidden="true"
                      size={24}
                      strokeWidth={1.8}
                      className="text-cyan-800"
                    />
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>
                  <p className="font-mono text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      start={isInView}
                    />
                  </p>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-slate-950">
                    {stat.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {stat.detail}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
