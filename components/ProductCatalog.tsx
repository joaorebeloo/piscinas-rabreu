"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  LayoutGrid,
  ShieldCheck,
  SlidersHorizontal,
  ThermometerSun,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { ProductCard } from "@/components/ProductCard";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import {
  PRODUCTS,
  PRODUCT_FILTERS,
  type Product,
  type ProductFilter,
} from "@/data/products";

const FILTER_ICON: Record<ProductFilter, LucideIcon> = {
  todos: LayoutGrid,
  piscinas: Waves,
  coberturas: ShieldCheck,
  aquecimento: ThermometerSun,
  acessorios: Wrench,
};

export function ProductCatalog() {
  const { locale, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProductFilter>("todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const visibleProducts = useMemo(() => {
    if (activeFilter === "todos") {
      return PRODUCTS;
    }

    return PRODUCTS.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProduct]);

  return (
    <section
      className="relative w-full overflow-hidden border-t border-slate-200 bg-[var(--color-foam)] px-4 py-24 pt-28 sm:px-6 lg:px-8"
      id="modelos"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-[linear-gradient(180deg,rgba(7,27,53,0.08),rgba(7,27,53,0))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-700/35 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38] [background-image:linear-gradient(rgba(7,27,53,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(7,27,53,0.055)_1px,transparent_1px)] [background-size:44px_44px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.88),rgba(246,251,253,0.34)_42%,rgba(246,251,253,0.78)_100%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <SectionEyebrow icon={SlidersHorizontal}>
              {t.catalog.eyebrow}
            </SectionEyebrow>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t.catalog.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {t.catalog.intro}
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2 lg:justify-end"
            aria-label={t.catalog.filterAria}
            role="group"
          >
            {PRODUCT_FILTERS.map((filter) => {
              const Icon = FILTER_ICON[filter];
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className="relative inline-flex min-h-10 items-center gap-2 overflow-hidden rounded-md border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="product-filter-active"
                      className="absolute inset-0 bg-slate-950"
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
                        ? "relative h-4 w-4 text-white"
                        : "relative h-4 w-4 text-current"
                    }
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span className={isActive ? "relative text-white" : "relative"}>
                    {t.catalog.filters[filter]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {visibleProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            <AnimatePresence>
              {visibleProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onImageOpen={setSelectedProduct}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.4rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-[0_20px_60px_-44px_rgba(7,27,53,0.35)]"
          >
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              {t.catalog.emptyTitle}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              {t.catalog.emptyText}
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProduct ? (
          <motion.div
            aria-modal="true"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            role="dialog"
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.2rem] bg-slate-950 shadow-[0_36px_120px_-48px_rgba(0,0,0,0.95)]"
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label={t.catalog.closeImage}
                onClick={() => setSelectedProduct(null)}
                className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="relative aspect-[4/3] max-h-[78vh] w-full">
                <Image
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.copy[locale].imageAlt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-white">
                <h3 className="text-lg font-semibold tracking-tight">
                  {selectedProduct.copy[locale].name}
                </h3>
                <p className="mt-1 text-sm leading-6 text-cyan-50/78">
                  {selectedProduct.copy[locale].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default ProductCatalog;
