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

const placeholder = "/images/placeholders/product-placeholder.svg";

export const PRODUCTS: Product[] = [
  {
    id: "piscina-classica",
    category: "piscinas",
    imageSrc: placeholder,
    copy: {
      pt: {
        name: "Piscina clássica",
        badge: "Mais popular",
        description:
          "Modelo equilibrado para jardins familiares, com linhas intemporais, manutenção simples e acabamentos resistentes.",
        imageAlt: "Piscina clássica em jardim residencial",
      },
      en: {
        name: "Classic pool",
        badge: "Most popular",
        description:
          "Balanced model for family gardens, with timeless lines, simple maintenance and durable finishes.",
        imageAlt: "Classic pool in a residential garden",
      },
      es: {
        name: "Piscina clásica",
        badge: "Más popular",
        description:
          "Modelo equilibrado para jardines familiares, con líneas atemporales, mantenimiento sencillo y acabados resistentes.",
        imageAlt: "Piscina clásica en jardín residencial",
      },
      fr: {
        name: "Piscine classique",
        badge: "La plus demandée",
        description:
          "Modèle équilibré pour jardins familiaux, avec lignes intemporelles, entretien simple et finitions résistantes.",
        imageAlt: "Piscine classique dans un jardin résidentiel",
      },
    },
  },
  {
    id: "piscina-moderna",
    category: "piscinas",
    imageSrc: placeholder,
    copy: {
      pt: {
        name: "Piscina moderna",
        badge: "Design actual",
        description:
          "Geometria limpa, escadas integradas e opção de iluminação para espaços exteriores contemporâneos.",
        imageAlt: "Piscina moderna com linhas rectas",
      },
      en: {
        name: "Modern pool",
        badge: "Contemporary design",
        description:
          "Clean geometry, integrated steps and lighting options for contemporary outdoor spaces.",
        imageAlt: "Modern pool with clean lines",
      },
      es: {
        name: "Piscina moderna",
        badge: "Diseño actual",
        description:
          "Geometría limpia, escaleras integradas y opción de iluminación para espacios exteriores contemporáneos.",
        imageAlt: "Piscina moderna con líneas rectas",
      },
      fr: {
        name: "Piscine moderne",
        badge: "Design actuel",
        description:
          "Géométrie épurée, escaliers intégrés et option d'éclairage pour espaces extérieurs contemporains.",
        imageAlt: "Piscine moderne aux lignes droites",
      },
    },
  },
  {
    id: "piscina-compacta",
    category: "piscinas",
    imageSrc: placeholder,
    copy: {
      pt: {
        name: "Piscina compacta",
        badge: "Espaços pequenos",
        description:
          "Solução inteligente para pátios, moradias urbanas e zonas com área limitada, sem abdicar do conforto.",
        imageAlt: "Piscina compacta para pátio",
      },
      en: {
        name: "Compact pool",
        badge: "Small spaces",
        description:
          "Smart solution for patios, urban homes and limited areas, without giving up comfort.",
        imageAlt: "Compact pool for a patio",
      },
      es: {
        name: "Piscina compacta",
        badge: "Espacios pequeños",
        description:
          "Solución inteligente para patios, viviendas urbanas y zonas con área limitada, sin renunciar al confort.",
        imageAlt: "Piscina compacta para patio",
      },
      fr: {
        name: "Piscine compacte",
        badge: "Petits espaces",
        description:
          "Solution intelligente pour patios, maisons urbaines et zones limitées, sans renoncer au confort.",
        imageAlt: "Piscine compacte pour patio",
      },
    },
  },
  {
    id: "piscina-infinity",
    category: "piscinas",
    imageSrc: placeholder,
    copy: {
      pt: {
        name: "Piscina com transbordo infinito",
        badge: "Vista premium",
        description:
          "Efeito de horizonte contínuo para terrenos com vista, projectos de assinatura e zonas exteriores de alto impacto.",
        imageAlt: "Piscina com transbordo infinito e efeito de horizonte",
      },
      en: {
        name: "Infinity pool",
        badge: "Premium view",
        description:
          "Continuous horizon effect for scenic plots, signature projects and high-impact outdoor areas.",
        imageAlt: "Infinity pool with horizon effect",
      },
      es: {
        name: "Piscina infinity",
        badge: "Vista premium",
        description:
          "Efecto de horizonte continuo para terrenos con vistas, proyectos de autor y zonas exteriores de alto impacto.",
        imageAlt: "Piscina infinity con efecto horizonte",
      },
      fr: {
        name: "Piscine à débordement",
        badge: "Vue premium",
        description:
          "Effet d'horizon continu pour terrains avec vue, projets signature et espaces extérieurs à fort impact.",
        imageAlt: "Piscine à débordement avec effet d'horizon",
      },
    },
  },
  {
    id: "piscina-fibra",
    category: "piscinas",
    imageSrc: placeholder,
    copy: {
      pt: {
        name: "Piscina em fibra",
        badge: "Montagem rápida",
        description:
          "Opção eficiente para instalação mais ágil, com superfícies suaves, formatos definidos e baixa manutenção.",
        imageAlt: "Piscina em fibra",
      },
      en: {
        name: "Fibreglass pool",
        badge: "Fast installation",
        description:
          "Efficient option for quicker installation, with smooth surfaces, defined shapes and low maintenance.",
        imageAlt: "Fibreglass pool",
      },
      es: {
        name: "Piscina de fibra",
        badge: "Instalación rápida",
        description:
          "Opción eficiente para una instalación más ágil, con superficies suaves, formatos definidos y bajo mantenimiento.",
        imageAlt: "Piscina de fibra",
      },
      fr: {
        name: "Piscine en fibre",
        badge: "Installation rapide",
        description:
          "Option efficace pour une installation plus rapide, avec surfaces lisses, formats définis et faible entretien.",
        imageAlt: "Piscine en fibre",
      },
    },
  },
  {
    id: "piscina-betao",
    category: "piscinas",
    imageSrc: placeholder,
    copy: {
      pt: {
        name: "Piscina em betão",
        badge: "Totalmente à medida",
        description:
          "Construção personalizada em dimensões, profundidade, escadas e revestimentos para projectos sem formato standard.",
        imageAlt: "Piscina em betão personalizada",
      },
      en: {
        name: "Concrete pool",
        badge: "Fully custom",
        description:
          "Custom construction in dimensions, depth, steps and linings for projects without standard formats.",
        imageAlt: "Custom concrete pool",
      },
      es: {
        name: "Piscina de hormigón",
        badge: "Totalmente a medida",
        description:
          "Construcción personalizada en dimensiones, profundidad, escaleras y revestimientos para proyectos sin formato estándar.",
        imageAlt: "Piscina de hormigón personalizada",
      },
      fr: {
        name: "Piscine en béton",
        badge: "Sur mesure",
        description:
          "Construction personnalisée en dimensions, profondeur, escaliers et revêtements pour projets non standard.",
        imageAlt: "Piscine en béton personnalisée",
      },
    },
  },
  {
    id: "coberturas",
    category: "coberturas",
    imageSrc: placeholder,
    copy: {
      pt: {
        name: "Coberturas",
        badge: "Protecção e segurança",
        description:
          "Soluções manuais, automáticas ou telescópicas para reduzir perdas de calor, proteger a água e aumentar a segurança.",
        imageAlt: "Cobertura para piscina",
      },
      en: {
        name: "Covers",
        badge: "Protection and safety",
        description:
          "Manual, automatic or telescopic solutions to reduce heat loss, protect water and increase safety.",
        imageAlt: "Pool cover",
      },
      es: {
        name: "Cubiertas",
        badge: "Protección y seguridad",
        description:
          "Soluciones manuales, automáticas o telescópicas para reducir pérdidas de calor, proteger el agua y aumentar la seguridad.",
        imageAlt: "Cubierta para piscina",
      },
      fr: {
        name: "Couvertures",
        badge: "Protection et sécurité",
        description:
          "Solutions manuelles, automatiques ou télescopiques pour réduire les pertes de chaleur, protéger l'eau et renforcer la sécurité.",
        imageAlt: "Couverture de piscine",
      },
    },
  },
  {
    id: "sistemas-aquecimento",
    category: "aquecimento",
    imageSrc: placeholder,
    copy: {
      pt: {
        name: "Sistemas de aquecimento",
        badge: "Mais meses de uso",
        description:
          "Bombas de calor e soluções técnicas para manter a temperatura confortável e prolongar a época de banho.",
        imageAlt: "Sistema de aquecimento para piscina",
      },
      en: {
        name: "Heating systems",
        badge: "Longer season",
        description:
          "Heat pumps and technical solutions to keep the temperature comfortable and extend the swimming season.",
        imageAlt: "Pool heating system",
      },
      es: {
        name: "Sistemas de calefacción",
        badge: "Más meses de uso",
        description:
          "Bombas de calor y soluciones técnicas para mantener una temperatura confortable y prolongar la temporada de baño.",
        imageAlt: "Sistema de calefacción para piscina",
      },
      fr: {
        name: "Systèmes de chauffage",
        badge: "Plus longue saison",
        description:
          "Pompes à chaleur et solutions techniques pour maintenir une température confortable et prolonger la saison de baignade.",
        imageAlt: "Système de chauffage pour piscine",
      },
    },
  },
];
