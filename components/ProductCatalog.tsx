"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
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
import {
  PRODUCTS,
  PRODUCT_FILTERS,
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
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProductFilter>("todos");

  const visibleProducts = useMemo(() => {
    if (activeFilter === "todos") {
      return PRODUCTS;
    }

    return PRODUCTS.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="w-full px-4 py-24 sm:px-6 lg:px-8" id="modelos">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.8} />
              {t.catalog.eyebrow}
            </div>
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
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            <AnimatePresence>
              {visibleProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
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
    </section>
  );
}

export default ProductCatalog;
