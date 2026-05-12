"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
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

const WARRANTY_BY_CATEGORY: Record<ProductCategory, string> = {
  piscinas: "10 anos de Garantia",
  coberturas: "2 anos de Garantia",
  aquecimento: "2 anos de Garantia",
  acessorios: "2 anos de Garantia",
};

type ProductCardProps = {
  product: Product;
  imageSrc?: string;
  index?: number;
  onImageOpen?: (product: Product) => void;
};

export function ProductCard({
  product,
  imageSrc,
  index = 0,
  onImageOpen,
}: ProductCardProps) {
  const { locale, t } = useLanguage();
  const Icon = CATEGORY_ICON[product.category];
  const copy = product.copy[locale];
  const isBestSeller = copy.badge.toLowerCase().replace("-", " ") === "best seller";
  const isNew = product.id === "braiel";
  const resolvedImageSrc = imageSrc ?? product.imageSrc;

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
          key={resolvedImageSrc}
          src={resolvedImageSrc}
          alt={copy.imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 50vw"
          className="object-cover transition duration-700 ease-[var(--ease-premium)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0)_35%,rgba(7,27,53,0.42)_100%)]" />
        <div className="absolute left-2 top-2 inline-flex items-center gap-0.5 rounded-full border border-white/45 bg-white/72 px-1.5 py-0.5 text-[0.42rem] font-semibold uppercase tracking-[0.1em] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md sm:left-4 sm:top-4 sm:gap-1 sm:px-2 sm:py-1 sm:text-[0.62rem]">
          <Icon className="h-2 w-2 sm:h-3 sm:w-3" strokeWidth={1.8} />
          <span className="hidden min-[420px]:inline">{t.categories[product.category]}</span>
        </div>
        {isBestSeller || isNew ? (
          <div
            className={`absolute right-2 top-2 rounded-bl-xl rounded-tr-[0.85rem] px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.12em] shadow-[0_14px_28px_-16px_rgba(7,27,53,0.85),inset_0_1px_0_rgba(255,255,255,0.55)] sm:right-3 sm:top-3 sm:px-4 sm:text-xs ${
              isNew
                ? "bg-[#16d1a0] text-[#031225]"
                : "bg-[#f4c542] text-[#06162b]"
            }`}
          >
            {copy.badge}
          </div>
        ) : null}
      </button>

      <div className="flex flex-1 flex-col p-3 sm:p-6">
        <h3 className="text-sm font-semibold leading-tight tracking-tight text-slate-950 sm:text-xl">
          {copy.name}
        </h3>
        <p className="mt-2 flex-1 whitespace-pre-line text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
          {copy.description}
        </p>
        <p className="mt-4 text-xs font-semibold text-[var(--color-pool-dark)] sm:text-sm">
          {WARRANTY_BY_CATEGORY[product.category]}
        </p>
      </div>
    </motion.article>
  );
}

export default ProductCard;
