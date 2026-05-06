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
  onImageOpen?: (product: Product) => void;
};

export function ProductCard({
  product,
  index = 0,
  onImageOpen,
}: ProductCardProps) {
  const { locale, t } = useLanguage();
  const Icon = CATEGORY_ICON[product.category];
  const copy = product.copy[locale];
  const isBestSeller = copy.badge.toLowerCase() === "best seller";

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
      className="group flex h-full min-h-[265px] flex-col overflow-hidden rounded-[1rem] border border-slate-200/80 bg-white shadow-[0_24px_65px_-42px_rgba(7,27,53,0.42)] sm:min-h-[460px] sm:rounded-[1.2rem]"
    >
      <button
        type="button"
        className="relative aspect-[4/3] overflow-hidden bg-slate-100 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pool)]"
        aria-label={`${t.catalog.imageZoomAriaPrefix} ${copy.name}`}
        onClick={() => onImageOpen?.(product)}
      >
        {/* Substituir este placeholder por fotografia real do modelo/produto. */}
        <Image
          src={product.imageSrc}
          alt={copy.imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 50vw"
          className="object-cover transition duration-700 ease-[var(--ease-premium)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0)_35%,rgba(7,27,53,0.42)_100%)]" />
        <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border border-white/45 bg-white/72 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md sm:left-5 sm:top-5 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs">
          <Icon className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.8} />
          <span className="hidden min-[420px]:inline">{t.categories[product.category]}</span>
        </div>
        {isBestSeller ? (
          <div className="absolute right-2 top-2 rounded-bl-xl rounded-tr-[0.85rem] bg-[#f4c542] px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#06162b] shadow-[0_14px_28px_-16px_rgba(7,27,53,0.85),inset_0_1px_0_rgba(255,255,255,0.55)] sm:right-3 sm:top-3 sm:px-4 sm:text-xs">
            {copy.badge}
          </div>
        ) : null}
      </button>

      <div className="flex flex-1 flex-col p-3 sm:p-6">
        {!isBestSeller ? (
          <span className="mb-2 hidden w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 sm:mb-4 sm:inline-flex">
            {copy.badge}
          </span>
        ) : null}
        <h3 className="text-sm font-semibold leading-tight tracking-tight text-slate-950 sm:text-xl">
          {copy.name}
        </h3>
        <p className="mt-2 hidden flex-1 text-sm leading-6 text-slate-600 sm:block">
          {copy.description}
        </p>
        <motion.a
          href="#contactos"
          whileTap={{ scale: 0.98 }}
          className="mt-3 inline-flex min-h-9 items-center justify-center gap-1 rounded-full bg-[var(--color-navy)] px-3 py-2 text-xs font-semibold !text-white transition duration-500 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-[var(--color-navy-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pool)] sm:mt-6 sm:min-h-11 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm [&_*]:!text-white"
          aria-label={`${t.catalog.learnMoreAriaPrefix} ${copy.name}`}
        >
          {t.catalog.learnMore}
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default ProductCard;
