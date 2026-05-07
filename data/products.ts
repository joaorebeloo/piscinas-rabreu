import type { Locale } from "@/data/i18n";

export type ProductCategory =
  | "piscinas"
  | "coberturas"
  | "aquecimento"
  | "acessorios";

export type ProductFilter = ProductCategory | "todos";

type ProductCopy = {
  name: string;
  badge: string;
  description: string;
  imageAlt: string;
};

export type Product = {
  id: string;
  category: ProductCategory;
  imageSrc: string;
  copy: Record<Locale, ProductCopy>;
};

export const PRODUCT_FILTERS: ProductFilter[] = [
  "todos",
  "piscinas",
  "acessorios",
];

const modelImagePath = "/images/fotos-piscinas/Modelos";
const modelImageVersion = "v=3";

function poolCopy(name: string, badge = "Piscina"): Record<Locale, ProductCopy> {
  return {
    pt: {
      name,
      badge,
      description: `Modelo ${name} para venda e montagem.`,
      imageAlt: `Piscina ${name}`,
    },
    en: {
      name,
      badge: badge === "Best seller" ? "Best seller" : "Pool",
      description: `${name} model for sales and installation.`,
      imageAlt: `${name} pool`,
    },
    es: {
      name,
      badge: badge === "Best seller" ? "Best seller" : "Piscina",
      description: `Modelo ${name} para venta e instalacion.`,
      imageAlt: `Piscina ${name}`,
    },
    fr: {
      name,
      badge: badge === "Best seller" ? "Best seller" : "Piscine",
      description: `Modele ${name} pour vente et installation.`,
      imageAlt: `Piscine ${name}`,
    },
  };
}

function accessoryCopy(name: string): Record<Locale, ProductCopy> {
  return {
    pt: {
      name,
      badge: "Acessório",
      description: `${name} para apoio ao sistema da piscina.`,
      imageAlt: name,
    },
    en: {
      name,
      badge: "Accessory",
      description: `${name} for pool system support.`,
      imageAlt: name,
    },
    es: {
      name,
      badge: "Accesorio",
      description: `${name} para apoyo al sistema de la piscina.`,
      imageAlt: name,
    },
    fr: {
      name,
      badge: "Accessoire",
      description: `${name} pour le systeme de piscine.`,
      imageAlt: name,
    },
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "big-tran",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Big Tran.png?${modelImageVersion}`,
    copy: poolCopy("Big Tran", "Best-seller"),
  },
  {
    id: "franco",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Franco.png?${modelImageVersion}`,
    copy: poolCopy("Franco"),
  },
  {
    id: "jupiter",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Jupiter.png?${modelImageVersion}`,
    copy: poolCopy("Jupiter"),
  },
  {
    id: "relax",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Relax.png?${modelImageVersion}`,
    copy: poolCopy("Relax"),
  },
  {
    id: "space-laze",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Space Laze.png?${modelImageVersion}`,
    copy: poolCopy("Space Laze"),
  },
  {
    id: "space",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Space.png?${modelImageVersion}`,
    copy: poolCopy("Space"),
  },
  {
    id: "trust",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Trust.png?${modelImageVersion}`,
    copy: poolCopy("Trust"),
  },
  {
    id: "filtro500",
    category: "acessorios",
    imageSrc: `${modelImagePath}/filtro500.png?${modelImageVersion}`,
    copy: accessoryCopy("Filtro 500"),
  },
  {
    id: "filtro600",
    category: "acessorios",
    imageSrc: `${modelImagePath}/filtro600.png?${modelImageVersion}`,
    copy: accessoryCopy("Filtro 600"),
  },
];
