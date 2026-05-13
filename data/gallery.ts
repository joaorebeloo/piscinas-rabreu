import type { Locale } from "@/data/i18n";

export type GalleryCategory = "mounted" | "process" | "transport";
export type GalleryFilter = GalleryCategory | "all";

type GalleryCopy = {
  title: string;
  description: string;
  imageAlt: string;
};

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  imageSrc: string;
  featured?: boolean;
  copy: Record<Locale, GalleryCopy>;
};

export const GALLERY_FILTERS: GalleryFilter[] = [
  "all",
  "mounted",
  "process",
  "transport",
];

export const GALLERY_COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    filterAria: string;
    filters: Record<GalleryFilter, string>;
  }
> = {
  pt: {
    eyebrow: "Galeria",
    title: "Piscinas montadas e momentos de obra",
    intro:
      "Uma seleção visual de piscinas concluídas, transporte, preparação do terreno e instalação no local.",
    filterAria: "Filtrar galeria de imagens",
    filters: {
      all: "Todos",
      mounted: "Piscinas montadas",
      process: "Processo",
      transport: "Transporte",
    },
  },
  en: {
    eyebrow: "Gallery",
    title: "Finished pools and installation moments",
    intro:
      "A visual selection of completed pools, transport, site preparation and on-site installation.",
    filterAria: "Filter image gallery",
    filters: {
      all: "All",
      mounted: "Finished pools",
      process: "Process",
      transport: "Transport",
    },
  },
  es: {
    eyebrow: "Galería",
    title: "Piscinas montadas y momentos de obra",
    intro:
      "Una selección visual de piscinas terminadas, transporte, preparación del terreno e instalación en obra.",
    filterAria: "Filtrar galería de imágenes",
    filters: {
      all: "Todos",
      mounted: "Piscinas montadas",
      process: "Proceso",
      transport: "Transporte",
    },
  },
  fr: {
    eyebrow: "Galerie",
    title: "Piscines installées et moments de chantier",
    intro:
      "Une sélection visuelle de piscines terminées, transport, préparation du terrain et installation sur place.",
    filterAria: "Filtrer la galerie d'images",
    filters: {
      all: "Tous",
      mounted: "Piscines installées",
      process: "Chantier",
      transport: "Transport",
    },
  },
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "pool-open-plot-finished",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0035.jpg",
    copy: {
      pt: {
        title: "Piscina em terreno aberto",
        description: "Piscina montada com zona envolvente em preparação.",
        imageAlt: "Piscina montada em terreno aberto",
      },
      en: {
        title: "Pool in an open plot",
        description: "Installed pool with surrounding area under preparation.",
        imageAlt: "Installed pool in an open plot",
      },
      es: {
        title: "Piscina en terreno abierto",
        description: "Piscina montada con zona exterior en preparación.",
        imageAlt: "Piscina montada en terreno abierto",
      },
      fr: {
        title: "Piscine sur terrain ouvert",
        description: "Piscine installée avec abords en préparation.",
        imageAlt: "Piscine installée sur terrain ouvert",
      },
    },
  },
  {
    id: "pool-water-fill-close",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0022.jpg",
    copy: {
      pt: {
        title: "Enchimento e teste",
        description: "Água em circulação durante a fase de enchimento.",
        imageAlt: "Piscina durante enchimento com água",
      },
      en: {
        title: "Filling and testing",
        description: "Water circulating during the filling stage.",
        imageAlt: "Pool during water filling",
      },
      es: {
        title: "Llenado y prueba",
        description: "Agua en circulación durante la fase de llenado.",
        imageAlt: "Piscina durante el llenado con agua",
      },
      fr: {
        title: "Remplissage et test",
        description: "Eau en circulation pendant la phase de remplissage.",
        imageAlt: "Piscine pendant le remplissage",
      },
    },
  },
  {
    id: "pool-courtyard-finished",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0030.jpg",
    copy: {
      pt: {
        title: "Piscina integrada no pátio",
        description: "Zona exterior finalizada com relva e acabamento em pedra.",
        imageAlt: "Piscina finalizada com relva e acabamento em pedra",
      },
      en: {
        title: "Pool integrated into the patio",
        description: "Finished outdoor area with grass and stone cladding.",
        imageAlt: "Finished pool with grass and stone cladding",
      },
      es: {
        title: "Piscina integrada en el patio",
        description: "Zona exterior finalizada con césped y acabado en piedra.",
        imageAlt: "Piscina finalizada con césped y piedra",
      },
      fr: {
        title: "Piscine intégrée dans la cour",
        description: "Espace extérieur fini avec gazon et parement pierre.",
        imageAlt: "Piscine terminée avec gazon et parement pierre",
      },
    },
  },
  {
    id: "pool-wall-finished",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0031.jpg",
    copy: {
      pt: {
        title: "Piscina com revestimento lateral",
        description: "Acabamento elevado com pedra e zona envolvente organizada.",
        imageAlt: "Piscina com revestimento lateral em pedra",
      },
      en: {
        title: "Pool with side cladding",
        description: "Raised finish with stone cladding and organised surroundings.",
        imageAlt: "Pool with stone side cladding",
      },
      es: {
        title: "Piscina con revestimiento lateral",
        description: "Acabado elevado con piedra y zona exterior organizada.",
        imageAlt: "Piscina con revestimiento lateral de piedra",
      },
      fr: {
        title: "Piscine avec parement latéral",
        description: "Finition surélevée avec pierre et abords organisés.",
        imageAlt: "Piscine avec parement latéral en pierre",
      },
    },
  },
  {
    id: "pool-terrace-water",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0034.jpg",
    copy: {
      pt: {
        title: "Piscina em terraço",
        description: "Solução compacta com água pronta para utilização.",
        imageAlt: "Piscina em terraço com água pronta",
      },
      en: {
        title: "Pool on a terrace",
        description: "Compact solution with water ready for use.",
        imageAlt: "Pool on a terrace ready for use",
      },
      es: {
        title: "Piscina en terraza",
        description: "Solución compacta con agua lista para usar.",
        imageAlt: "Piscina en terraza lista para usar",
      },
      fr: {
        title: "Piscine en terrasse",
        description: "Solution compacte avec eau prête à l'emploi.",
        imageAlt: "Piscine en terrasse prête à l'emploi",
      },
    },
  },
  {
    id: "pool-finished-family-garden",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0052.jpg",
    featured: true,
    copy: {
      pt: {
        title: "Piscina em jardim familiar",
        description: "Acabamento limpo, zona envolvente preparada e água pronta a usar.",
        imageAlt: "Piscina montada em jardim familiar",
      },
      en: {
        title: "Pool in a family garden",
        description: "Clean finish, prepared surroundings and water ready for use.",
        imageAlt: "Finished pool in a family garden",
      },
      es: {
        title: "Piscina en jardín familiar",
        description: "Acabado limpio, zona envolvente preparada y agua lista para usar.",
        imageAlt: "Piscina montada en jardín familiar",
      },
      fr: {
        title: "Piscine dans un jardin familial",
        description: "Finition propre, abords préparés et eau prête à l'emploi.",
        imageAlt: "Piscine installée dans un jardin familial",
      },
    },
  },
  {
    id: "pool-blue-water-detail",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0037.jpg",
    copy: {
      pt: {
        title: "Água e acabamentos",
        description: "Detalhe de piscina concluída com água cristalina.",
        imageAlt: "Detalhe de piscina concluída com água cristalina",
      },
      en: {
        title: "Water and finishes",
        description: "Finished pool detail with clear water.",
        imageAlt: "Finished pool detail with clear water",
      },
      es: {
        title: "Agua y acabados",
        description: "Detalle de piscina terminada con agua cristalina.",
        imageAlt: "Detalle de piscina terminada con agua cristalina",
      },
      fr: {
        title: "Eau et finitions",
        description: "Détail de piscine terminée avec eau claire.",
        imageAlt: "Détail de piscine terminée avec eau claire",
      },
    },
  },
  {
    id: "pool-modern-yard",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0049.jpg",
    copy: {
      pt: {
        title: "Zona exterior pronta",
        description: "Piscina integrada no espaço exterior.",
        imageAlt: "Piscina integrada no espaço exterior",
      },
      en: {
        title: "Outdoor area ready",
        description: "Pool integrated into the outdoor area.",
        imageAlt: "Pool integrated into the outdoor area",
      },
      es: {
        title: "Zona exterior lista",
        description: "Piscina integrada en el espacio exterior.",
        imageAlt: "Piscina integrada en el espacio exterior",
      },
      fr: {
        title: "Espace extérieur prêt",
        description: "Piscine intégrée dans l'espace extérieur.",
        imageAlt: "Piscine intégrée dans l'espace extérieur",
      },
    },
  },
  {
    id: "pool-compact-installed",
    category: "mounted",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0038.jpg",
    copy: {
      pt: {
        title: "Formato compacto",
        description: "Solução de piscina para espaços mais controlados.",
        imageAlt: "Piscina compacta montada",
      },
      en: {
        title: "Compact format",
        description: "Pool solution for more controlled spaces.",
        imageAlt: "Compact finished pool",
      },
      es: {
        title: "Formato compacto",
        description: "Solución de piscina para espacios más controlados.",
        imageAlt: "Piscina compacta montada",
      },
      fr: {
        title: "Format compact",
        description: "Solution de piscine pour espaces plus contrôlés.",
        imageAlt: "Piscine compacte installée",
      },
    },
  },
  {
    id: "pool-transport",
    category: "transport",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0023.jpg",
    featured: true,
    copy: {
      pt: {
        title: "Transporte da piscina",
        description: "Movimentação e entrega com equipamento adequado.",
        imageAlt: "Transporte de piscina em camião",
      },
      en: {
        title: "Pool transport",
        description: "Handling and delivery with suitable equipment.",
        imageAlt: "Pool transport on truck",
      },
      es: {
        title: "Transporte de piscina",
        description: "Movimiento y entrega con equipo adecuado.",
        imageAlt: "Transporte de piscina en camión",
      },
      fr: {
        title: "Transport de piscine",
        description: "Manutention et livraison avec équipement adapté.",
        imageAlt: "Transport de piscine sur camion",
      },
    },
  },
  {
    id: "site-preparation",
    category: "process",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0029.jpg",
    copy: {
      pt: {
        title: "Preparação do terreno",
        description: "Base preparada antes da instalação.",
        imageAlt: "Base preparada para instalação de piscina",
      },
      en: {
        title: "Site preparation",
        description: "Prepared base before installation.",
        imageAlt: "Prepared base for pool installation",
      },
      es: {
        title: "Preparación del terreno",
        description: "Base preparada antes de la instalación.",
        imageAlt: "Base preparada para instalación de piscina",
      },
      fr: {
        title: "Préparation du terrain",
        description: "Base préparée avant installation.",
        imageAlt: "Base préparée pour installation de piscine",
      },
    },
  },
  {
    id: "crane-placement",
    category: "transport",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0043.jpg",
    copy: {
      pt: {
        title: "Colocação com grua",
        description: "Instalação controlada da estrutura no terreno.",
        imageAlt: "Piscina a ser colocada com grua",
      },
      en: {
        title: "Crane placement",
        description: "Controlled installation of the structure on site.",
        imageAlt: "Pool being placed by crane",
      },
      es: {
        title: "Colocación con grúa",
        description: "Instalación controlada de la estructura en obra.",
        imageAlt: "Piscina colocada con grúa",
      },
      fr: {
        title: "Pose avec grue",
        description: "Installation contrôlée de la structure sur site.",
        imageAlt: "Piscine posée avec une grue",
      },
    },
  },
  {
    id: "technical-equipment",
    category: "process",
    imageSrc: "/images/fotos-piscinas/IMG-20260501-WA0053.jpg",
    copy: {
      pt: {
        title: "Parte técnica",
        description: "Equipamento e apoio técnico durante o processo.",
        imageAlt: "Equipamento técnico de piscina",
      },
      en: {
        title: "Technical setup",
        description: "Equipment and technical support during the process.",
        imageAlt: "Pool technical equipment",
      },
      es: {
        title: "Parte técnica",
        description: "Equipo y apoyo técnico durante el proceso.",
        imageAlt: "Equipo técnico de piscina",
      },
      fr: {
        title: "Partie technique",
        description: "Équipement et support technique pendant le chantier.",
        imageAlt: "Équipement technique de piscine",
      },
    },
  },
];
