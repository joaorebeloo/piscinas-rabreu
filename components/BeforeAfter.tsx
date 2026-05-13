"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { SectionEyebrow } from "@/components/SectionEyebrow";

const projectImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/images/antes-depois/${index + 1}.jpeg`,
  number: index + 1,
}));

export function BeforeAfter() {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(
    projectImages.length - 1,
  );

  return (
    <section
      id="antes-depois"
      aria-labelledby="before-after-title"
      className="bg-white px-4 py-16 text-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-xl"
        >
          <SectionEyebrow icon={SlidersHorizontal}>
            {t.beforeAfter.eyebrow}
          </SectionEyebrow>
          <h2
            id="before-after-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl"
          >
            {t.beforeAfter.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            {t.beforeAfter.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className="relative"
        >
          <div className="mb-4 grid grid-cols-4 gap-2 sm:grid-cols-8">
            {projectImages.map((image, index) => {
              const label =
                index === 0
                  ? t.beforeAfter.before
                  : index === projectImages.length - 1
                    ? t.beforeAfter.after
                    : `Fase ${image.number}`;

              return (
                <button
                  key={image.src}
                  type="button"
                  className="group relative aspect-[4/3] overflow-hidden rounded-[6px] border border-slate-200 bg-slate-100 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/70"
                  aria-label={`${label}: mostrar fotografia ${image.number}`}
                  aria-pressed={selectedImageIndex === index}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 8vw, 25vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span
                    className={`absolute inset-0 rounded-[6px] ring-inset transition ${
                      selectedImageIndex === index
                        ? "ring-4 ring-cyan-400"
                        : "ring-0"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="absolute inset-x-1 bottom-1 rounded bg-slate-950/75 px-1.5 py-1 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-slate-100 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]"
            aria-label={`Fotografia ${selectedImageIndex + 1}`}
          >
            <Image
              src={projectImages[selectedImageIndex].src}
              alt={t.beforeAfter.afterAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority={false}
            />

            <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:text-xs">
              <span className="rounded-full bg-slate-950/75 px-2 py-1.5 text-white backdrop-blur">
                {selectedImageIndex === 0
                  ? t.beforeAfter.before
                  : selectedImageIndex === projectImages.length - 1
                    ? t.beforeAfter.after
                    : `Fase ${selectedImageIndex + 1}`}
              </span>
              <span className="rounded-full bg-white/85 px-2 py-1.5 text-slate-950 backdrop-blur">
                {selectedImageIndex + 1} / {projectImages.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BeforeAfter;
