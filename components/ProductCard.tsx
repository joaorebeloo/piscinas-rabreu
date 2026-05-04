"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  ThermometerSun,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import type { Product, ProductCategory } from "@/data/products";

const CATEGORY_ICON: Record<ProductCategory, LucideIcon> = {
  piscinas: Waves,
  coberturas: ShieldCheck,
  aquecimento: ThermometerSun,
  acessorios: Wrench,
};

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { locale, t } = useLanguage();
  const Icon = CATEGORY_ICON[product.category];
  const copy = product.copy[locale];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 160,
          damping: 22,
          delay: index * 0.035,
        },
      }}
      exit={{ opacity: 0, y: 12, transition: { duration: 0.18 } }}
      whileHover={{ y: -6 }}
      className="group flex h-full min-h-[460px] flex-col overflow-hidden rounded-[1.2rem] border border-slate-200/80 bg-white shadow-[0_24px_65px_-42px_rgba(7,27,53,0.42)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {/* Substituir este placeholder por fotografia real do modelo/produto. */}
        <Image
          src={product.imageSrc}
          alt={copy.imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-[var(--ease-premium)] group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0)_35%,rgba(7,27,53,0.42)_100%)]" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/65 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md">
          <Icon className="h-4 w-4" strokeWidth={1.8} />
          {t.categories[product.category]}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="mb-4 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
          {copy.badge}
        </span>
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-slate-950">
          {copy.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {copy.description}
        </p>
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-4 py-2.5 text-sm font-semibold text-white transition duration-500 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-[var(--color-navy-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pool)]"
          aria-label={`${t.catalog.learnMoreAriaPrefix} ${copy.name}`}
        >
          {t.catalog.learnMore}
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </motion.button>
      </div>
    </motion.article>
  );
}

export default ProductCard;
