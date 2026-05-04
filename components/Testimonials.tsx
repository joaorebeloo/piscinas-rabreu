"use client";

import { motion, type Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 20 },
  },
};

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="testemunhos"
      aria-labelledby="testimonials-title"
      className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
              {t.testimonials.eyebrow}
            </p>
            <h2
              id="testimonials-title"
              className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl"
            >
              {t.testimonials.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-300 lg:justify-self-end">
            {t.testimonials.intro}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2"
        >
          {t.testimonials.items.map((testimonial) => (
            <motion.article
              key={`${testimonial.name}-${testimonial.location}`}
              variants={card}
              className="flex h-full min-h-[250px] flex-col justify-between rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <Quote
                    aria-hidden="true"
                    size={28}
                    strokeWidth={1.6}
                    className="text-cyan-300"
                  />
                  <div
                    className="flex gap-1 text-cyan-300"
                    aria-label={t.testimonials.ratingAria}
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        aria-hidden="true"
                        size={15}
                        strokeWidth={1.7}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-7 text-base leading-7 text-slate-100">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <footer className="mt-7 border-t border-white/10 pt-4">
                <p className="font-semibold tracking-tight text-white">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {testimonial.location}
                </p>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
