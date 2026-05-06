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

export const PRODUCT_FILTERS: ProductFilter[] = ["piscinas", "acessorios"];

const modelImagePath = "/images/fotos-piscinas/Modelos";

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
      badge: "Acessorio",
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
    imageSrc: `${modelImagePath}/Big Tran.png`,
    copy: poolCopy("Big Tran", "Best seller"),
  },
  {
    id: "franco",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Franco.png`,
    copy: poolCopy("Franco"),
  },
  {
    id: "jupiter",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Jupiter.png`,
    copy: poolCopy("Jupiter"),
  },
  {
    id: "relax",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Relax.png`,
    copy: poolCopy("Relax"),
  },
  {
    id: "space-laze",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Space Laze.png`,
    copy: poolCopy("Space Laze"),
  },
  {
    id: "space",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Space.png`,
    copy: poolCopy("Space"),
  },
  {
    id: "trust",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Trust.png`,
    copy: poolCopy("Trust"),
  },
  {
    id: "filtro500",
    category: "acessorios",
    imageSrc: `${modelImagePath}/filtro500.png`,
    copy: accessoryCopy("filtro500"),
  },
  {
    id: "filtro600",
    category: "acessorios",
    imageSrc: `${modelImagePath}/filtro600.png`,
    copy: accessoryCopy("filtro600"),
  },
];
