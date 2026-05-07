"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Hammer, Images, Waves, type LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import {
  GALLERY_COPY,
  GALLERY_FILTERS,
  GALLERY_ITEMS,
  type GalleryFilter,
} from "@/data/gallery";

const FILTER_ICON: Record<GalleryFilter, LucideIcon> = {
  all: Images,
  mounted: Waves,
  process: Hammer,
};

export function Gallery() {
  const { locale } = useLanguage();
  const copy = GALLERY_COPY[locale];
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");

  const visibleItems = useMemo(() => {
    if (activeFilter === "all") {
      return GALLERY_ITEMS;
    }

    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="galeria"
      className="relative w-full overflow-hidden border-t border-white/10 bg-[var(--color-navy)] px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(24,167,201,0.18),transparent_32rem)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <SectionEyebrow icon={Camera} variant="dark">
              {copy.eyebrow}
            </SectionEyebrow>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-50/80">
              {copy.intro}
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2 lg:justify-end"
            aria-label={copy.filterAria}
            role="group"
          >
            {GALLERY_FILTERS.map((filter) => {
              const Icon = FILTER_ICON[filter];
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className="relative inline-flex min-h-10 items-center gap-2 overflow-hidden rounded-md border border-white/15 bg-white/[0.04] px-3.5 py-2 text-sm font-semibold text-cyan-50 transition-colors hover:border-cyan-200/45 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="gallery-filter-active"
                      className="absolute inset-0 bg-cyan-300"
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 24,
                      }}
                    />
                  ) : null}
                  <Icon
                    className={
                      isActive
                        ? "relative h-4 w-4 text-slate-950"
                        : "relative h-4 w-4 text-current"
                    }
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span className={isActive ? "relative text-slate-950" : "relative"}>
                    {copy.filters[filter]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => {
              const itemCopy = item.copy[locale];
              const isFeatured = item.featured && activeFilter === "all";

              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 22,
                      delay: index * 0.025,
                    },
                  }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.16 } }}
                  className={`group overflow-hidden rounded-[1.2rem] border border-white/12 bg-white/[0.06] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] ${
                    isFeatured ? "sm:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${
                      isFeatured ? "aspect-[4/3] lg:h-full" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={itemCopy.imageAlt}
                      fill
                      sizes={
                        isFeatured
                          ? "(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw"
                          : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      }
                      className="object-cover transition duration-700 ease-[var(--ease-premium)] group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(7,27,53,0)_0%,rgba(3,13,28,0.92)_100%)] p-5 pt-20 text-white">
                      <span className="mb-2 inline-flex rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-md">
                        {copy.filters[item.category]}
                      </span>
                      <h3 className="text-lg font-semibold leading-tight tracking-tight">
                        {itemCopy.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-cyan-50/85">
                        {itemCopy.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
