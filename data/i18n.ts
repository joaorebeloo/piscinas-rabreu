export const localeOptions = [
  { id: "pt", label: "PT", name: "Português" },
  { id: "en", label: "EN", name: "English" },
  { id: "es", label: "ES", name: "Español" },
  { id: "fr", label: "FR", name: "Français" },
] as const;

export type Locale = (typeof localeOptions)[number]["id"];

export const htmlLang: Record<Locale, string> = {
  pt: "pt-PT",
  en: "en",
  es: "es",
  fr: "fr",
};

export const businessWhatsAppNumber = "351934643669";

export function buildWhatsAppHref(message: string) {
  return `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

export const poolTypeValues = [
  "classic",
  "modern",
  "compact",
  "infinity",
  "fiber",
  "concrete",
] as const;

export type PoolTypeValue = (typeof poolTypeValues)[number];

export function isPoolTypeValue(value: string): value is PoolTypeValue {
  return poolTypeValues.some((poolTypeValue) => poolTypeValue === value);
}

type NavItem = {
  models: string;
  installation: string;
  services: string;
  beforeAfter: string;
  beforeAfterGallery: string;
  gallery: string;
  testimonials: string;
  contacts: string;
};

export type SiteCopy = {
  nav: NavItem;
  header: {
    tagline: string;
    homeAria: string;
    mainNavAria: string;
    mobileNavAria: string;
    callNow: string;
    quote: string;
    openMenu: string;
    closeMenu: string;
  };
  language: {
    label: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    videoCta: string;
    videoAria: string;
    highlights: string[];
    asideAria: string;
    asideTitle: string;
    asideText: string;
    asideItems: string[];
    scrollAria: string;
    scrollLabel: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; text: string }>;
  };
  categories: {
    piscinas: string;
    coberturas: string;
    aquecimento: string;
    acessorios: string;
  };
  catalog: {
    eyebrow: string;
    title: string;
    intro: string;
    filterAria: string;
    filters: {
      todos: string;
      piscinas: string;
      coberturas: string;
      aquecimento: string;
      acessorios: string;
    };
    learnMore: string;
    learnMoreAriaPrefix: string;
    imageZoomAriaPrefix: string;
    closeImage: string;
    emptyTitle: string;
    emptyText: string;
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: string[];
    before: string;
    after: string;
    afterAlt: string;
    compareLabel: string;
    sliderAria: string;
    sliderHelp: string;
    sliderValue: (position: number) => string;
  };
  installationGuide: {
    eyebrow: string;
    title: string;
    intro: string;
    unsupportedVideo: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    ratingAria: string;
    items: Array<{ id: string; name: string; location: string; quote: string }>;
  };
  leadForm: {
    sectionEyebrow: string;
    title: string;
    intro: string;
    trustItems: string[];
    whatsapp: string;
    formAria: string;
    formEyebrow: string;
    formTitle: string;
    labels: {
      name: string;
      phone: string;
      email: string;
      location: string;
      poolType: string;
      message: string;
    };
    placeholders: {
      name: string;
      phone: string;
      email: string;
      location: string;
      message: string;
      poolType: string;
    };
    helper: string;
    poolTypes: Array<{ value: PoolTypeValue; label: string }>;
    submit: string;
    submitting: string;
    success: string;
    emailSuccess: string;
    reviewFields: string;
    errors: {
      name: string;
      contactEmail: string;
      contactPhone: string;
      email: string;
      phone: string;
      location: string;
      poolType: string;
      server: string;
    };
  };
  stats: {
    eyebrow: string;
    title: string;
    items: Array<{ value: number; suffix: string; label: string; detail: string }>;
  };
  footer: {
    homeAria: string;
    description: string;
    contacts: Array<{ label: string; value: string; href: string | null }>;
    copyright: string;
    linksAria: string;
    socialAria: string;
  };
  whatsapp: {
    aria: string;
    label: string;
  };
};

export const translations: Record<Locale, SiteCopy> = {
  pt: {
    nav: {
      models: "Modelos",
      installation: "Instalação",
      services: "Serviços",
      beforeAfter: "Antes e Depois",
      beforeAfterGallery: "Galeria",
      gallery: "Galeria",
      testimonials: "Feedbacks",
      contacts: "Contactos",
    },
    header: {
      tagline: "Comércio de Piscinas",
      homeAria: "Piscinas R Abreu, voltar ao início",
      mainNavAria: "Navegação principal",
      mobileNavAria: "Navegação móvel",
      callNow: "Ligar agora",
      quote: "Pedir orçamento",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    language: {
      label: "Idioma",
    },
    hero: {
      eyebrow: "Venda de piscinas e soluções para exterior",
      titlePrefix: "Piscinas que",
      titleHighlight: "transformam",
      titleSuffix: "espaços em momentos únicos.",
      subheadline:
        "Escolha a piscina ideal para o seu espaço, com aconselhamento especializado, modelos de qualidade e orçamento gratuito.",
      primaryCta: "Ver catálogo",
      secondaryCta: "Ver catálogo",
      videoCta: "Ver vídeo",
      videoAria: "Ver vídeo da Piscinas R Abreu",
      highlights: [
        "Modelos para vários espaços",
        "Acabamentos premium",
        "Orçamento gratuito",
      ],
      asideAria: "Compromissos de serviço",
      asideTitle: "Escolha com confiança",
      asideText:
        "Compare modelos, acabamentos e acessórios com orientação clara para escolher a piscina certa para a sua casa.",
      asideItems: [
        "Modelos adaptados ao espaço disponível",
        "Cores e acabamentos para diferentes estilos",
        "Aconselhamento antes do pedido de orçamento",
      ],
      scrollAria: "Avançar para a próxima secção",
      scrollLabel: "Scroll",
    },
    benefits: {
      eyebrow: "O nosso compromisso",
      title: "Piscinas para diferentes espaços, estilos e formas de utilização.",
      intro: "",
      items: [
        {
          title: "Modelos variados",
          text: "Piscinas compactas, familiares e de maior dimensão para diferentes terrenos e jardins.",
        },
        {
          title: "Aconselhamento claro",
          text: "Ajuda na escolha do modelo, medidas e acabamento mais adequados ao seu espaço.",
        },
        {
          title: "Orçamento gratuito",
          text: "Receba uma proposta ajustada ao tipo de piscina, localidade e características do projeto.",
        },
      ],
    },
    categories: {
      piscinas: "Piscinas",
      coberturas: "Coberturas",
      aquecimento: "Aquecimento",
      acessorios: "Acessórios",
    },
    catalog: {
      eyebrow: "Catálogo",
      title: "Encontre a piscina ideal para o seu espaço",
      intro:
        "Modelos, medidas, cores e acessórios para escolher a piscina certa antes de pedir orçamento.",
      filterAria: "Filtrar catálogo de produtos",
      filters: {
        todos: "Todos",
        piscinas: "Piscinas",
        coberturas: "Coberturas",
        aquecimento: "Aquecimento",
        acessorios: "Acessórios",
      },
      learnMore: "Saber mais",
      learnMoreAriaPrefix: "Saber mais sobre",
      imageZoomAriaPrefix: "Ampliar imagem de",
      closeImage: "Fechar imagem ampliada",
      emptyTitle: "Categoria preparada para novos produtos",
      emptyText:
        "Pode adicionar robôs de limpeza, iluminação, tratamento salino ou outros acessórios em data/products.ts.",
    },
    installationGuide: {
      eyebrow: "Guia de instalação",
      title: "Veja os passos essenciais antes de preparar a sua piscina.",
      intro:
        "Um vídeo prático para compradores que querem compreender medidas, nivelamento, tubagem, enchimento e compactação antes da utilização.",
      unsupportedVideo: "O seu navegador não suporta vídeo HTML5.",
    },
    beforeAfter: {
      eyebrow: "Antes e depois",
      title: "Transformamos espaços comuns em refúgios extraordinários.",
      intro:
        "Compare o potencial de um espaço exterior antes da intervenção com uma solução pronta para receber família, amigos e dias longos de sol.",
      steps: [
        "Estudo e preparação do terreno.",
        "Instalação, e acabamento.",
      ],
      before: "Antes",
      after: "Depois",
      afterAlt:
        "Piscina depois da intervenção, com água limpa e revestimento recuperado",
      compareLabel: "Comparar estado da piscina",
      sliderAria: "Controlar comparação entre antes e depois",
      sliderHelp:
        "Use as setas do teclado para ajustar a quantidade da imagem antes visível sobre a imagem depois.",
      sliderValue: (position) => `${position}% da imagem antes visível`,
    },
    testimonials: {
      eyebrow: "Feedbacks",
      title: "O que os nossos clientes dizem",
      intro: "",
      ratingAria: "Avaliação de cinco estrelas",
      items: [
        {
          id: "carlos-mariana",
          name: "Carlos e Mariana",
          location: "Lisboa",
          quote:
            "A equipa ajudou-nos a escolher o modelo certo para o jardim. O resultado ficou elegante e muito fácil de manter.",
        },
        {
          id: "ricardo-almeida",
          name: "Ricardo Almeida",
          location: "Porto",
          quote:
            "Gostei da clareza do orçamento e das opções apresentadas. Ficámos com uma piscina adequada ao nosso espaço.",
        },
        {
          id: "sofia-ferreira",
          name: "Sofia Ferreira",
          location: "Braga",
          quote:
            "Precisávamos de uma solução compacta e bem integrada no terraço. A Piscinas R Abreu percebeu logo o que queríamos.",
        },
        {
          id: "marta-luis-conde",
          name: "Marta e Luís Conde",
          location: "Oeiras",
          quote:
            "A cobertura e o sistema de aquecimento fizeram diferença. Usamos a piscina durante muito mais tempo e com menos manutenção.",
        },
      ],
    },
    leadForm: {
      sectionEyebrow: "Orçamento gratuito",
      title: "Pronto para ter a piscina dos seus sonhos?",
      intro:
        "Peça já o seu orçamento gratuito e sem compromisso. A nossa equipa entra em contacto consigo para ajudar a escolher a piscina certa.",
      trustItems: [
        "Resposta rápida",
        "Aconselhamento técnico",
      ],
      whatsapp: "Falar no WhatsApp",
      formAria: "Formulário de pedido de orçamento",
      formEyebrow: "Pedido de orçamento",
      formTitle: "Conte-nos o essencial.",
      labels: {
        name: "Nome",
        phone: "Telefone",
        email: "Email",
        location: "Localidade",
        poolType: "Tipo de piscina pretendida",
        message: "Mensagem",
      },
      placeholders: {
        name: "O seu nome",
        phone: "+351 9XX XXX XXX",
        email: "nome@email.pt",
        location: "Lisboa, Leiria, Aveiro...",
        poolType: "Seleccionar opção",
        message: "Medidas aproximadas, modelo pretendido, localidade...",
      },
      helper:
        "Quanto mais detalhe partilhar, mais precisa será a primeira resposta.",
      poolTypes: [
        { value: "classic", label: "Piscina clássica" },
        { value: "modern", label: "Piscina moderna" },
        { value: "compact", label: "Piscina compacta" },
        { value: "infinity", label: "Piscina com transbordo infinito" },
        { value: "fiber", label: "Piscina em fibra" },
        { value: "concrete", label: "Piscina em betão" },
      ],
      submit: "Enviar pedido",
      submitting: "A enviar pedido...",
      success: "Mensagem preparada no WhatsApp. Confirme o envio para concluir o pedido.",
      emailSuccess: "Pedido enviado. Entraremos em contacto consigo em breve.",
      reviewFields: "Reveja os campos assinalados.",
      errors: {
        name: "Indique o seu nome.",
        contactEmail: "Indique um email ou telefone.",
        contactPhone: "Indique um telefone ou email.",
        email: "Indique um email válido.",
        phone: "Indique um telefone válido.",
        location: "Indique a localidade do projecto.",
        poolType: "Escolha uma opção.",
        server: "Não foi possível enviar o pedido.",
      },
    },
    stats: {
      eyebrow: "Números que contam",
      title: "Experiência para escolher com confiança.",
      items: [
        {
          value: 10,
          suffix: "+",
          label: "anos de experiência",
          detail: "Venda e aconselhamento de piscinas em Portugal.",
        },
        {
          value: 200,
          suffix: "+",
          label: "piscinas vendidas",
          detail: "Modelos adaptados a moradias, jardins e espaços exteriores.",
        },
        {
          value: 100,
          suffix: "%",
          label: "clientes satisfeitos",
          detail: "Acompanhamento próximo na escolha e no pedido de orçamento.",
        },
        {
          value: 100,
          suffix: "%",
          label: "com garantia",
          detail: "Garantia em todos os nossos produtos.",
        },
      ],
    },
    footer: {
      homeAria: "Piscinas R Abreu, voltar ao início",
      description:
        "Venda de piscinas personalizadas com qualidade, segurança, aconselhamento e acabamentos de excelência.",
      contacts: [
        { label: "Telefone", value: "+351 934 643 669", href: "tel:+351934643669" },
        {
          label: "Email",
          value: "andre.rafaela.2025@gmail.com",
          href: "mailto:andre.rafaela.2025@gmail.com",
        },
        {
          label: "Zona",
          value: "Alcobaça, Leiria",
          href: null,
        },
      ],
      copyright: "Todos os direitos reservados.",
      linksAria: "Links rápidos",
      socialAria: "Redes sociais",
    },
    whatsapp: {
      aria: "Contactar Piscinas R Abreu pelo WhatsApp",
      label: "WhatsApp",
    },
  },
  en: {
    nav: {
      models: "Models",
      installation: "Installation",
      services: "Services",
      beforeAfter: "Before & After",
      beforeAfterGallery: "Gallery",
      gallery: "Gallery",
      testimonials: "Testimonials",
      contacts: "Contacts",
    },
    header: {
      tagline: "Pool Commerce",
      homeAria: "Piscinas R Abreu, back to top",
      mainNavAria: "Main navigation",
      mobileNavAria: "Mobile navigation",
      callNow: "Call now",
      quote: "Request quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    language: { label: "Language" },
    hero: {
      eyebrow: "Pool sales and outdoor solutions",
      titlePrefix: "Pools that",
      titleHighlight: "transform",
      titleSuffix: "spaces into unique moments.",
      subheadline:
        "Choose the ideal pool for your space, with specialised advice, quality models and a free quote.",
      primaryCta: "View catalogue",
      secondaryCta: "View catalogue",
      videoCta: "Watch video",
      videoAria: "Watch Piscinas R Abreu video",
      highlights: ["Models for different spaces", "Premium finishes", "Free quote"],
      asideAria: "Service commitments",
      asideTitle: "Choose with confidence",
      asideText:
        "Compare models, finishes and accessories with clear guidance to choose the right pool for your home.",
      asideItems: [
        "Models adapted to the available space",
        "Colours and finishes for different styles",
        "Advice before requesting a quote",
      ],
      scrollAria: "Go to next section",
      scrollLabel: "Scroll",
    },
    benefits: {
      eyebrow: "Our commitment",
      title: "Pools for different spaces, styles and ways of use.",
      intro: "",
      items: [
        {
          title: "Varied models",
          text: "Compact, family-sized and larger pools for different plots and gardens.",
        },
        {
          title: "Clear advice",
          text: "Help choosing the model, dimensions and finish best suited to your space.",
        },
        {
          title: "Free quote",
          text: "Receive a proposal adjusted to the pool type, location and project details.",
        },
      ],
    },
    categories: {
      piscinas: "Pools",
      coberturas: "Covers",
      aquecimento: "Heating",
      acessorios: "Accessories",
    },
    catalog: {
      eyebrow: "Catalogue",
      title: "Find the right pool for your space",
      intro:
        "Models, dimensions, colours and accessories to choose the right pool before requesting a quote.",
      filterAria: "Filter product catalogue",
      filters: {
        todos: "All",
        piscinas: "Pools",
        coberturas: "Covers",
        aquecimento: "Heating",
        acessorios: "Accessories",
      },
      learnMore: "Learn more",
      learnMoreAriaPrefix: "Learn more about",
      imageZoomAriaPrefix: "Open larger image of",
      closeImage: "Close enlarged image",
      emptyTitle: "Category ready for new products",
      emptyText:
        "Add cleaning robots, lighting, salt treatment or other accessories in data/products.ts.",
    },
    installationGuide: {
      eyebrow: "Installation guide",
      title: "See the essential steps before preparing your pool.",
      intro:
        "A practical video for buyers who want to understand dimensions, levelling, pipework, filling and compaction before use.",
      unsupportedVideo: "Your browser does not support HTML5 video.",
    },
    beforeAfter: {
      eyebrow: "Before and after",
      title: "We turn ordinary spaces into extraordinary retreats.",
      intro:
        "Compare the potential of an outdoor space before intervention with a solution ready for family, friends and long sunny days.",
      steps: [
        "Site study and preparation.",
        "Installation and finishing.",
      ],
      before: "Before",
      after: "After",
      afterAlt:
        "Pool after intervention, with clean water and restored lining",
      compareLabel: "Compare pool condition",
      sliderAria: "Control before and after comparison",
      sliderHelp:
        "Use the keyboard arrows to adjust how much of the before image is visible over the after image.",
      sliderValue: (position) => `${position}% of the before image visible`,
    },
    testimonials: {
      eyebrow: "Feedbacks",
      title: "What our clients say",
      intro: "",
      ratingAria: "Five-star rating",
      items: [
        {
          id: "carlos-mariana",
          name: "Carlos & Mariana",
          location: "Lisbon",
          quote:
            "The team helped us choose the right model for the garden. The result is elegant and very easy to maintain.",
        },
        {
          id: "ricardo-almeida",
          name: "Ricardo Almeida",
          location: "Porto",
          quote:
            "I liked the clarity of the quote and the options presented. We got a pool suited to our space.",
        },
        {
          id: "sofia-ferreira",
          name: "Sofia Ferreira",
          location: "Braga",
          quote:
            "We needed a compact solution that fitted the terrace. Piscinas R Abreu understood what we wanted immediately.",
        },
        {
          id: "marta-luis-conde",
          name: "Marta & Luís Conde",
          location: "Oeiras",
          quote:
            "The cover and heating system made a real difference. We use the pool for much longer and with less maintenance.",
        },
      ],
    },
    leadForm: {
      sectionEyebrow: "Free quote",
      title: "Ready for the pool of your dreams?",
      intro:
        "Request your free, no-obligation quote. Our team will contact you to help choose the right pool.",
      trustItems: [
        "Fast response",
        "Technical advice",
      ],
      whatsapp: "Talk on WhatsApp",
      formAria: "Quote request form",
      formEyebrow: "Quote request",
      formTitle: "Tell us the essentials.",
      labels: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        location: "Location",
        poolType: "Desired pool type",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        phone: "+351 9XX XXX XXX",
        email: "name@email.com",
        location: "Lisbon, Leiria, Aveiro...",
        poolType: "Select option",
        message: "Approximate dimensions, desired model, location...",
      },
      helper: "The more detail you share, the more precise our first response will be.",
      poolTypes: [
        { value: "classic", label: "Classic pool" },
        { value: "modern", label: "Modern pool" },
        { value: "compact", label: "Compact pool" },
        { value: "infinity", label: "Infinity pool" },
        { value: "fiber", label: "Fibreglass pool" },
        { value: "concrete", label: "Concrete pool" },
      ],
      submit: "Send request",
      submitting: "Sending request...",
      success: "Message prepared in WhatsApp. Confirm sending to complete the request.",
      emailSuccess: "Request sent. We will contact you soon.",
      reviewFields: "Review the highlighted fields.",
      errors: {
        name: "Enter your name.",
        contactEmail: "Enter an email or phone number.",
        contactPhone: "Enter a phone number or email.",
        email: "Enter a valid email.",
        phone: "Enter a valid phone number.",
        location: "Enter the project location.",
        poolType: "Choose an option.",
        server: "Could not send the request.",
      },
    },
    stats: {
      eyebrow: "Numbers that matter",
      title: "Experience to choose with confidence.",
      items: [
        {
          value: 10,
          suffix: "+",
          label: "years of experience",
          detail: "Pool sales and advice in Portugal.",
        },
        {
          value: 200,
          suffix: "+",
          label: "pools sold",
          detail: "Models adapted to homes, gardens and outdoor spaces.",
        },
        {
          value: 100,
          suffix: "%",
          label: "satisfied clients",
          detail: "Close support in choosing and requesting a quote.",
        },
        {
          value: 100,
          suffix: "%",
          label: "with warranty",
          detail: "Warranty on all our products.",
        },
      ],
    },
    footer: {
      homeAria: "Piscinas R Abreu, back to top",
      description:
        "Sales of custom pools with quality, safety, advice and excellent finishes.",
      contacts: [
        { label: "Phone", value: "+351 934 643 669", href: "tel:+351934643669" },
        {
          label: "Email",
          value: "andre.rafaela.2025@gmail.com",
          href: "mailto:andre.rafaela.2025@gmail.com",
        },
        { label: "Area", value: "Alcobaça, Leiria", href: null },
      ],
      copyright: "All rights reserved.",
      linksAria: "Quick links",
      socialAria: "Social media",
    },
    whatsapp: { aria: "Contact Piscinas R Abreu on WhatsApp", label: "WhatsApp" },
  },
  es: {
    nav: {
      models: "Modelos",
      installation: "Instalación",
      services: "Servicios",
      beforeAfter: "Antes y después",
      beforeAfterGallery: "Galería",
      gallery: "Galería",
      testimonials: "Testimonios",
      contacts: "Contactos",
    },
    header: {
      tagline: "Comercio de piscinas",
      homeAria: "Piscinas R Abreu, volver al inicio",
      mainNavAria: "Navegación principal",
      mobileNavAria: "Navegación móvil",
      callNow: "Llamar ahora",
      quote: "Pedir presupuesto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    language: { label: "Idioma" },
    hero: {
      eyebrow: "Venta de piscinas y soluciones para exterior",
      titlePrefix: "Piscinas que",
      titleHighlight: "transforman",
      titleSuffix: "espacios en momentos únicos.",
      subheadline:
        "Elige la piscina ideal para tu espacio, con asesoramiento especializado, modelos de calidad y presupuesto gratuito.",
      primaryCta: "Ver catálogo",
      secondaryCta: "Ver catálogo",
      videoCta: "Ver vídeo",
      videoAria: "Ver vídeo de Piscinas R Abreu",
      highlights: ["Modelos para varios espacios", "Acabados premium", "Presupuesto gratuito"],
      asideAria: "Compromisos de servicio",
      asideTitle: "Elige con confianza",
      asideText:
        "Compara modelos, acabados y accesorios con orientación clara para elegir la piscina adecuada para tu casa.",
      asideItems: [
        "Modelos adaptados al espacio disponible",
        "Colores y acabados para diferentes estilos",
        "Asesoramiento antes de solicitar presupuesto",
      ],
      scrollAria: "Avanzar a la siguiente sección",
      scrollLabel: "Scroll",
    },
    benefits: {
      eyebrow: "Nuestro compromiso",
      title: "Piscinas para diferentes espacios, estilos y formas de uso.",
      intro: "",
      items: [
        {
          title: "Modelos variados",
          text: "Piscinas compactas, familiares y de mayor tamaño para diferentes terrenos y jardines.",
        },
        {
          title: "Asesoramiento claro",
          text: "Ayuda para elegir el modelo, las medidas y el acabado más adecuados para tu espacio.",
        },
        {
          title: "Presupuesto gratuito",
          text: "Recibe una propuesta ajustada al tipo de piscina, localidad y características del proyecto.",
        },
      ],
    },
    categories: {
      piscinas: "Piscinas",
      coberturas: "Cubiertas",
      aquecimento: "Calefacción",
      acessorios: "Accesorios",
    },
    catalog: {
      eyebrow: "Catálogo",
      title: "Encuentra la piscina ideal para tu espacio",
      intro:
        "Modelos, medidas, colores y accesorios para elegir la piscina adecuada antes de pedir presupuesto.",
      filterAria: "Filtrar catálogo de productos",
      filters: {
        todos: "Todos",
        piscinas: "Piscinas",
        coberturas: "Cubiertas",
        aquecimento: "Calefacción",
        acessorios: "Accesorios",
      },
      learnMore: "Saber más",
      learnMoreAriaPrefix: "Saber más sobre",
      imageZoomAriaPrefix: "Ampliar imagen de",
      closeImage: "Cerrar imagen ampliada",
      emptyTitle: "Categoría preparada para nuevos productos",
      emptyText:
        "Puedes añadir robots de limpieza, iluminación, tratamiento salino u otros accesorios en data/products.ts.",
    },
    installationGuide: {
      eyebrow: "Guía de instalación",
      title: "Consulta los pasos esenciales antes de preparar tu piscina.",
      intro:
        "Un vídeo práctico para compradores que quieren comprender medidas, nivelación, tuberías, llenado y compactación antes del uso.",
      unsupportedVideo: "Tu navegador no soporta vídeo HTML5.",
    },
    beforeAfter: {
      eyebrow: "Antes y después",
      title: "Transformamos espacios comunes en refugios extraordinarios.",
      intro:
        "Compara el potencial de un espacio exterior antes de la intervención con una solución lista para recibir familia, amigos y largos días de sol.",
      steps: [
        "Estudio y preparación del terreno.",
        "Instalación, acabados y prueba antes de la entrega.",
      ],
      before: "Antes",
      after: "Después",
      afterAlt:
        "Piscina después de la intervención, con agua limpia y revestimiento recuperado",
      compareLabel: "Comparar estado de la piscina",
      sliderAria: "Controlar comparación entre antes y después",
      sliderHelp:
        "Usa las flechas del teclado para ajustar cuánto de la imagen anterior se ve sobre la imagen posterior.",
      sliderValue: (position) => `${position}% de la imagen anterior visible`,
    },
    testimonials: {
      eyebrow: "Feedbacks",
      title: "Lo que dicen nuestros clientes",
      intro: "",
      ratingAria: "Valoración de cinco estrellas",
      items: [
        {
          id: "carlos-mariana",
          name: "Carlos y Mariana",
          location: "Lisboa",
          quote:
            "El equipo nos ayudó a elegir el modelo adecuado para el jardín. El resultado quedó elegante y muy fácil de mantener.",
        },
        {
          id: "ricardo-almeida",
          name: "Ricardo Almeida",
          location: "Oporto",
          quote:
            "Me gustó la claridad del presupuesto y las opciones presentadas. Nos quedamos con una piscina adecuada para nuestro espacio.",
        },
        {
          id: "sofia-ferreira",
          name: "Sofia Ferreira",
          location: "Braga",
          quote:
            "Necesitábamos una solución compacta y bien integrada en la terraza. Piscinas R Abreu entendió enseguida lo que queríamos.",
        },
        {
          id: "marta-luis-conde",
          name: "Marta y Luís Conde",
          location: "Oeiras",
          quote:
            "La cubierta y el sistema de calefacción marcaron la diferencia. Usamos la piscina durante mucho más tiempo y con menos mantenimiento.",
        },
      ],
    },
    leadForm: {
      sectionEyebrow: "Presupuesto gratuito",
      title: "¿Listo para tener la piscina de tus sueños?",
      intro:
        "Pide ya tu presupuesto gratuito y sin compromiso. Nuestro equipo contactará contigo para ayudarte a elegir la piscina adecuada.",
      trustItems: [
        "Respuesta rápida",
        "Asesoramiento técnico",
      ],
      whatsapp: "Hablar por WhatsApp",
      formAria: "Formulario de solicitud de presupuesto",
      formEyebrow: "Solicitud de presupuesto",
      formTitle: "Cuéntanos lo esencial.",
      labels: {
        name: "Nombre",
        phone: "Teléfono",
        email: "Email",
        location: "Localidad",
        poolType: "Tipo de piscina deseado",
        message: "Mensaje",
      },
      placeholders: {
        name: "Tu nombre",
        phone: "+351 9XX XXX XXX",
        email: "nombre@email.com",
        location: "Lisboa, Leiria, Aveiro...",
        poolType: "Seleccionar opción",
        message: "Medidas aproximadas, modelo deseado, localidad...",
      },
      helper: "Cuantos más detalles compartas, más precisa será la primera respuesta.",
      poolTypes: [
        { value: "classic", label: "Piscina clásica" },
        { value: "modern", label: "Piscina moderna" },
        { value: "compact", label: "Piscina compacta" },
        { value: "infinity", label: "Piscina infinity" },
        { value: "fiber", label: "Piscina de fibra" },
        { value: "concrete", label: "Piscina de hormigón" },
      ],
      submit: "Enviar solicitud",
      submitting: "Enviando solicitud...",
      success: "Mensaje preparado en WhatsApp. Confirma el envío para completar la solicitud.",
      emailSuccess: "Solicitud enviada. Nos pondremos en contacto contigo pronto.",
      reviewFields: "Revisa los campos señalados.",
      errors: {
        name: "Indica tu nombre.",
        contactEmail: "Indica un email o teléfono.",
        contactPhone: "Indica un teléfono o email.",
        email: "Indica un email válido.",
        phone: "Indica un teléfono válido.",
        location: "Indica la localidad del proyecto.",
        poolType: "Elige una opción.",
        server: "No ha sido posible enviar la solicitud.",
      },
    },
    stats: {
      eyebrow: "Números que cuentan",
      title: "Experiencia para elegir con confianza.",
      items: [
        {
          value: 10,
          suffix: "+",
          label: "años de experiencia",
          detail: "Venta y asesoramiento de piscinas en Portugal.",
        },
        {
          value: 200,
          suffix: "+",
          label: "piscinas vendidas",
          detail: "Modelos adaptados a viviendas, jardines y espacios exteriores.",
        },
        {
          value: 100,
          suffix: "%",
          label: "clientes satisfechos",
          detail: "Acompañamiento cercano en la elección y en la solicitud de presupuesto.",
        },
        {
          value: 100,
          suffix: "%",
          label: "con garantía",
          detail: "Garantía en todos nuestros productos.",
        },
      ],
    },
    footer: {
      homeAria: "Piscinas R Abreu, volver al inicio",
      description:
        "Venta de piscinas personalizadas con calidad, seguridad, asesoramiento y acabados excelentes.",
      contacts: [
        { label: "Teléfono", value: "+351 934 643 669", href: "tel:+351934643669" },
        {
          label: "Email",
          value: "andre.rafaela.2025@gmail.com",
          href: "mailto:andre.rafaela.2025@gmail.com",
        },
        { label: "Zona", value: "Alcobaça, Leiria", href: null },
      ],
      copyright: "Todos los derechos reservados.",
      linksAria: "Enlaces rápidos",
      socialAria: "Redes sociales",
    },
    whatsapp: { aria: "Contactar con Piscinas R Abreu por WhatsApp", label: "WhatsApp" },
  },
  fr: {
    nav: {
      models: "Modèles",
      installation: "Installation",
      services: "Services",
      beforeAfter: "Avant / Après",
      beforeAfterGallery: "Galerie",
      gallery: "Galerie",
      testimonials: "Témoignages",
      contacts: "Contacts",
    },
    header: {
      tagline: "Commerce de piscines",
      homeAria: "Piscinas R Abreu, revenir au début",
      mainNavAria: "Navigation principale",
      mobileNavAria: "Navigation mobile",
      callNow: "Appeler",
      quote: "Demander un devis",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    language: { label: "Langue" },
    hero: {
      eyebrow: "Vente de piscines et solutions pour extérieur",
      titlePrefix: "Des piscines qui",
      titleHighlight: "transforment",
      titleSuffix: "les espaces en moments uniques.",
      subheadline:
        "Choisissez la piscine idéale pour votre espace, avec conseil spécialisé, modèles de qualité et devis gratuit.",
      primaryCta: "Voir le catalogue",
      secondaryCta: "Voir le catalogue",
      videoCta: "Voir la vidéo",
      videoAria: "Voir la vidéo de Piscinas R Abreu",
      highlights: ["Modèles pour différents espaces", "Finitions premium", "Devis gratuit"],
      asideAria: "Engagements de service",
      asideTitle: "Choisissez en toute confiance",
      asideText:
        "Comparez les modèles, finitions et accessoires avec des conseils clairs pour choisir la piscine adaptée à votre maison.",
      asideItems: [
        "Modèles adaptés à l'espace disponible",
        "Couleurs et finitions pour différents styles",
        "Conseil avant la demande de devis",
      ],
      scrollAria: "Passer à la section suivante",
      scrollLabel: "Scroll",
    },
    benefits: {
      eyebrow: "Notre engagement",
      title: "Des piscines pour différents espaces, styles et usages.",
      intro: "",
      items: [
        {
          title: "Modèles variés",
          text: "Piscines compactes, familiales et de plus grande dimension pour différents terrains et jardins.",
        },
        {
          title: "Conseil clair",
          text: "Aide au choix du modèle, des dimensions et de la finition les plus adaptés à votre espace.",
        },
        {
          title: "Devis gratuit",
          text: "Recevez une proposition adaptée au type de piscine, à la localité et aux caractéristiques du projet.",
        },
      ],
    },
    categories: {
      piscinas: "Piscines",
      coberturas: "Couvertures",
      aquecimento: "Chauffage",
      acessorios: "Accessoires",
    },
    catalog: {
      eyebrow: "Catalogue",
      title: "Trouvez la piscine idéale pour votre espace",
      intro:
        "Modèles, dimensions, couleurs et accessoires pour choisir la bonne piscine avant de demander un devis.",
      filterAria: "Filtrer le catalogue de produits",
      filters: {
        todos: "Tous",
        piscinas: "Piscines",
        coberturas: "Couvertures",
        aquecimento: "Chauffage",
        acessorios: "Accessoires",
      },
      learnMore: "En savoir plus",
      learnMoreAriaPrefix: "En savoir plus sur",
      imageZoomAriaPrefix: "Agrandir l'image de",
      closeImage: "Fermer l'image agrandie",
      emptyTitle: "Catégorie prête pour de nouveaux produits",
      emptyText:
        "Ajoutez robots de nettoyage, éclairage, traitement au sel ou autres accessoires dans data/products.ts.",
    },
    installationGuide: {
      eyebrow: "Guide d'installation",
      title: "Découvrez les étapes essentielles avant de préparer votre piscine.",
      intro:
        "Une vidéo pratique pour les acheteurs qui veulent comprendre les dimensions, le nivellement, la tuyauterie, le remplissage et le compactage avant utilisation.",
      unsupportedVideo: "Votre navigateur ne prend pas en charge la vidéo HTML5.",
    },
    beforeAfter: {
      eyebrow: "Avant et après",
      title: "Nous transformons les espaces ordinaires en refuges extraordinaires.",
      intro:
        "Comparez le potentiel d'un espace extérieur avant l'intervention avec une solution prête pour la famille, les amis et les longues journées de soleil.",
      steps: [
        "Étude et préparation du terrain.",
        "Installation, finitions et essai avant livraison.",
      ],
      before: "Avant",
      after: "Après",
      afterAlt:
        "Piscine après intervention, avec eau propre et revêtement récupéré",
      compareLabel: "Comparer l'état de la piscine",
      sliderAria: "Contrôler la comparaison avant et après",
      sliderHelp:
        "Utilisez les flèches du clavier pour ajuster la part de l'image avant visible sur l'image après.",
      sliderValue: (position) => `${position}% de l'image avant visible`,
    },
    testimonials: {
      eyebrow: "Feedbacks",
      title: "Ce que disent nos clients",
      intro: "",
      ratingAria: "Évaluation cinq étoiles",
      items: [
        {
          id: "carlos-mariana",
          name: "Carlos et Mariana",
          location: "Lisbonne",
          quote:
            "L'équipe nous a aidés à choisir le bon modèle pour le jardin. Le résultat est élégant et très facile à entretenir.",
        },
        {
          id: "ricardo-almeida",
          name: "Ricardo Almeida",
          location: "Porto",
          quote:
            "J'ai apprécié la clarté du devis et les options présentées. Nous avons choisi une piscine adaptée à notre espace.",
        },
        {
          id: "sofia-ferreira",
          name: "Sofia Ferreira",
          location: "Braga",
          quote:
            "Nous avions besoin d'une solution compacte et bien intégrée à la terrasse. Piscinas R Abreu a vite compris ce que nous voulions.",
        },
        {
          id: "marta-luis-conde",
          name: "Marta et Luís Conde",
          location: "Oeiras",
          quote:
            "La couverture et le système de chauffage ont tout changé. Nous utilisons la piscine beaucoup plus longtemps et avec moins d'entretien.",
        },
      ],
    },
    leadForm: {
      sectionEyebrow: "Devis gratuit",
      title: "Prêt à avoir la piscine de vos rêves ?",
      intro:
        "Demandez dès maintenant votre devis gratuit et sans engagement. Notre équipe vous contacte pour vous aider à choisir la bonne piscine.",
      trustItems: [
        "Réponse rapide",
        "Conseil technique",
      ],
      whatsapp: "Parler sur WhatsApp",
      formAria: "Formulaire de demande de devis",
      formEyebrow: "Demande de devis",
      formTitle: "Dites-nous l'essentiel.",
      labels: {
        name: "Nom",
        phone: "Téléphone",
        email: "Email",
        location: "Localité",
        poolType: "Type de piscine souhaité",
        message: "Message",
      },
      placeholders: {
        name: "Votre nom",
        phone: "+351 9XX XXX XXX",
        email: "nom@email.com",
        location: "Lisbonne, Leiria, Aveiro...",
        poolType: "Sélectionner une option",
        message: "Dimensions approximatives, modèle souhaité, localité...",
      },
      helper: "Plus vous partagez de détails, plus notre première réponse sera précise.",
      poolTypes: [
        { value: "classic", label: "Piscine classique" },
        { value: "modern", label: "Piscine moderne" },
        { value: "compact", label: "Piscine compacte" },
        { value: "infinity", label: "Piscine infinity" },
        { value: "fiber", label: "Piscine en fibre" },
        { value: "concrete", label: "Piscine en béton" },
      ],
      submit: "Envoyer la demande",
      submitting: "Envoi de la demande...",
      success: "Message préparé dans WhatsApp. Confirmez l'envoi pour terminer la demande.",
      emailSuccess: "Demande envoyée. Nous vous contacterons bientôt.",
      reviewFields: "Vérifiez les champs signalés.",
      errors: {
        name: "Indiquez votre nom.",
        contactEmail: "Indiquez un email ou un téléphone.",
        contactPhone: "Indiquez un téléphone ou un email.",
        email: "Indiquez un email valide.",
        phone: "Indiquez un téléphone valide.",
        location: "Indiquez la localité du projet.",
        poolType: "Choisissez une option.",
        server: "Impossible d'envoyer la demande.",
      },
    },
    stats: {
      eyebrow: "Des chiffres qui comptent",
      title: "De l'expérience pour choisir en toute confiance.",
      items: [
        {
          value: 10,
          suffix: "+",
          label: "ans d'expérience",
          detail: "Vente et conseil en piscines au Portugal.",
        },
        {
          value: 200,
          suffix: "+",
          label: "piscines vendues",
          detail: "Modèles adaptés aux maisons, jardins et espaces extérieurs.",
        },
        {
          value: 100,
          suffix: "%",
          label: "clients satisfaits",
          detail: "Accompagnement proche dans le choix et la demande de devis.",
        },
        {
          value: 100,
          suffix: "%",
          label: "avec garantie",
          detail: "Garantie sur tous nos produits.",
        },
      ],
    },
    footer: {
      homeAria: "Piscinas R Abreu, revenir au début",
      description:
        "Vente de piscines personnalisées avec qualité, sécurité, conseil et finitions d'excellence.",
      contacts: [
        { label: "Téléphone", value: "+351 934 643 669", href: "tel:+351934643669" },
        {
          label: "Email",
          value: "andre.rafaela.2025@gmail.com",
          href: "mailto:andre.rafaela.2025@gmail.com",
        },
        { label: "Zone", value: "Alcobaça, Leiria", href: null },
      ],
      copyright: "Tous droits réservés.",
      linksAria: "Liens rapides",
      socialAria: "Réseaux sociaux",
    },
    whatsapp: { aria: "Contacter Piscinas R Abreu sur WhatsApp", label: "WhatsApp" },
  },
};
