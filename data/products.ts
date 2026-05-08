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
  imageFileName?: string;
  copy: Record<Locale, ProductCopy>;
};

export const PRODUCT_FILTERS: ProductFilter[] = [
  "todos",
  "piscinas",
  "acessorios",
];

const modelImagePath = "/images/fotos-piscinas/Modelos";
const modelImageVersion = "v=7";

export const POOL_COLOR_OPTIONS = [
  {
    id: "azul",
    label: "Azul",
    folder: "",
    swatchClass: "bg-[#0788d8]",
  },
  {
    id: "branca",
    label: "Branca",
    folder: "branca",
    swatchClass: "bg-white",
  },
  {
    id: "granito-bege",
    label: "Granito Bege",
    folder: "granito-bege",
    swatchClass: "bg-[#c7b79c]",
  },
  {
    id: "granito-verde",
    label: "Granito Verde",
    folder: "granito-verde",
    swatchClass: "bg-[#6f8f7a]",
  },
  {
    id: "granito-branco",
    label: "Granito Branco",
    folder: "granito-branco",
    swatchClass: "bg-[#e2e5df]",
  },
] as const;

export type PoolColorId = (typeof POOL_COLOR_OPTIONS)[number]["id"];

export function getProductImageSrc(product: Product, poolColor: PoolColorId) {
  if (product.category !== "piscinas" || !product.imageFileName) {
    return product.imageSrc;
  }

  const selectedColor =
    POOL_COLOR_OPTIONS.find((option) => option.id === poolColor) ??
    POOL_COLOR_OPTIONS[0];
  const colorPath = selectedColor.folder ? `/${selectedColor.folder}` : "";

  return `${modelImagePath}${colorPath}/${product.imageFileName}?${modelImageVersion}-${selectedColor.id}`;
}

function jupiterCopy(): Record<Locale, ProductCopy> {
  const description =
    "Casco Piscina de Poliéster\nMed. Ext. ( 3.15 x 2.40 cm ) Med. Int. ( 2.99 x 2.23 cm )\nProfundidade 1.20 cm";

  return {
    pt: {
      name: "Jupiter",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Jupiter",
    },
    en: {
      name: "Jupiter",
      badge: "Pool",
      description,
      imageAlt: "Jupiter pool",
    },
    es: {
      name: "Jupiter",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Jupiter",
    },
    fr: {
      name: "Jupiter",
      badge: "Piscine",
      description,
      imageAlt: "Piscine Jupiter",
    },
  };
}

function francoCopy(): Record<Locale, ProductCopy> {
  const description =
    "Casco Piscina de Poliéster\nMed. Ext. ( 4.02 x 2.40 cm ) Med. Int. ( 3.87 x 2.23 cm )\nProfundidade 1.20 cm";

  return {
    pt: {
      name: "Franco",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Franco",
    },
    en: {
      name: "Franco",
      badge: "Pool",
      description,
      imageAlt: "Franco pool",
    },
    es: {
      name: "Franco",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Franco",
    },
    fr: {
      name: "Franco",
      badge: "Piscine",
      description,
      imageAlt: "Piscine Franco",
    },
  };
}

function bigTranCopy(): Record<Locale, ProductCopy> {
  const description =
    "Casco Piscina de Poliéster\nMed. Ext. ( 8.40 x 3.85cm ) Med. Int. ( 8.20x 3.60 cm )\nProfundidade Inclinação de 1.35 cm a 1.71 cm";

  return {
    pt: {
      name: "Big Tran",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Big Tran",
    },
    en: {
      name: "Big Tran",
      badge: "Pool",
      description,
      imageAlt: "Big Tran pool",
    },
    es: {
      name: "Big Tran",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Big Tran",
    },
    fr: {
      name: "Big Tran",
      badge: "Piscine",
      description,
      imageAlt: "Piscine Big Tran",
    },
  };
}

function spaceCopy(): Record<Locale, ProductCopy> {
  const description =
    "Casco Piscina de Poliéster\nMed. Ext. ( 6.20 x 3.25 cm ) Med. Int. ( 6.00 x 3.00 cm )\nProfundidade Inclinação de 1.20 cm a 1.60 cm";

  return {
    pt: {
      name: "Space",
      badge: "Best-seller",
      description,
      imageAlt: "Piscina Space",
    },
    en: {
      name: "Space",
      badge: "Best-seller",
      description,
      imageAlt: "Space pool",
    },
    es: {
      name: "Space",
      badge: "Best-seller",
      description,
      imageAlt: "Piscina Space",
    },
    fr: {
      name: "Space",
      badge: "Best-seller",
      description,
      imageAlt: "Piscine Space",
    },
  };
}

function spaceLazeCopy(): Record<Locale, ProductCopy> {
  const description =
    "Casco Piscina de Poliéster\nMed. Ext. ( 6.25 x 3.20cm ) Med. Int. ( 6.05x 3.00 cm )\nProfundidade Inclinação de 1.20 cm a 1.60 cm";

  return {
    pt: {
      name: "Space Laze",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Space Laze",
    },
    en: {
      name: "Space Laze",
      badge: "Pool",
      description,
      imageAlt: "Space Laze pool",
    },
    es: {
      name: "Space Laze",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Space Laze",
    },
    fr: {
      name: "Space Laze",
      badge: "Piscine",
      description,
      imageAlt: "Piscine Space Laze",
    },
  };
}

function trustCopy(): Record<Locale, ProductCopy> {
  const description =
    "Casco Piscina de Poliéster\nMed. Ext. ( 8.57 x 3.97cm ) Med. Int. ( 8.27x 3.60 cm )\nProfundidade Inclinação de 1.39 cm a 1.70 cm";

  return {
    pt: {
      name: "Trust",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Trust",
    },
    en: {
      name: "Trust",
      badge: "Pool",
      description,
      imageAlt: "Trust pool",
    },
    es: {
      name: "Trust",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Trust",
    },
    fr: {
      name: "Trust",
      badge: "Piscine",
      description,
      imageAlt: "Piscine Trust",
    },
  };
}

function relaxCopy(): Record<Locale, ProductCopy> {
  const description =
    "Casco Piscina de Poliéster\nMed. Ext. ( 5.10 x 2.57 cm ) Med. Int. ( 4.90 x 2.37 cm )\nProfundidade 1.40 cm";

  return {
    pt: {
      name: "Relax",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Relax",
    },
    en: {
      name: "Relax",
      badge: "Pool",
      description,
      imageAlt: "Relax pool",
    },
    es: {
      name: "Relax",
      badge: "Piscina",
      description,
      imageAlt: "Piscina Relax",
    },
    fr: {
      name: "Relax",
      badge: "Piscine",
      description,
      imageAlt: "Piscine Relax",
    },
  };
}

function filter500Copy(): Record<Locale, ProductCopy> {
  const description =
    "Casa de máquinas de Poliéster para Piscina de 3 a 7 Metros\nMed.  ( 1.20 x 1.20cm )\nFiltro de Areia 500\nBomba 0,75CV\nValvula Seletora\nTratamento de Água a Cloro";

  return {
    pt: {
      name: "Filtro 500",
      badge: "Acessório",
      description,
      imageAlt: "Filtro 500",
    },
    en: {
      name: "Filtro 500",
      badge: "Accessory",
      description,
      imageAlt: "Filtro 500",
    },
    es: {
      name: "Filtro 500",
      badge: "Accesorio",
      description,
      imageAlt: "Filtro 500",
    },
    fr: {
      name: "Filtro 500",
      badge: "Accessoire",
      description,
      imageAlt: "Filtro 500",
    },
  };
}

function filter600Copy(): Record<Locale, ProductCopy> {
  const description =
    "Casa de máquinas de Poliéster para Piscina de 7 a 10 Metros\nMed.  ( 1.20 x 1.20cm )\nFiltro de Areia 600\nBomba 1CV\nValvula Seletora\nTratamento de Água a Cloro";

  return {
    pt: {
      name: "Filtro 600",
      badge: "Acessório",
      description,
      imageAlt: "Filtro 600",
    },
    en: {
      name: "Filtro 600",
      badge: "Accessory",
      description,
      imageAlt: "Filtro 600",
    },
    es: {
      name: "Filtro 600",
      badge: "Accesorio",
      description,
      imageAlt: "Filtro 600",
    },
    fr: {
      name: "Filtro 600",
      badge: "Accessoire",
      description,
      imageAlt: "Filtro 600",
    },
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "space",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Space.png?${modelImageVersion}`,
    imageFileName: "Space.png",
    copy: spaceCopy(),
  },
  {
    id: "big-tran",
    category: "piscinas",
    imageSrc: `${modelImagePath}/BigTran.png?${modelImageVersion}`,
    imageFileName: "BigTran.png",
    copy: bigTranCopy(),
  },
  {
    id: "franco",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Franco.png?${modelImageVersion}`,
    imageFileName: "Franco.png",
    copy: francoCopy(),
  },
  {
    id: "jupiter",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Jupiter.png?${modelImageVersion}`,
    imageFileName: "Jupiter.png",
    copy: jupiterCopy(),
  },
  {
    id: "relax",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Relax.png?${modelImageVersion}`,
    imageFileName: "Relax.png",
    copy: relaxCopy(),
  },
  {
    id: "space-laze",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Space Laze.png?${modelImageVersion}`,
    imageFileName: "Space Laze.png",
    copy: spaceLazeCopy(),
  },
  {
    id: "trust",
    category: "piscinas",
    imageSrc: `${modelImagePath}/Trust.png?${modelImageVersion}`,
    imageFileName: "Trust.png",
    copy: trustCopy(),
  },
  {
    id: "filtro500",
    category: "acessorios",
    imageSrc: `${modelImagePath}/filtro500.png?${modelImageVersion}`,
    copy: filter500Copy(),
  },
  {
    id: "filtro600",
    category: "acessorios",
    imageSrc: `${modelImagePath}/filtro600.png?${modelImageVersion}`,
    copy: filter600Copy(),
  },
];
