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

export const businessWhatsAppNumber = "351912458376";

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
  services: string;
  beforeAfter: string;
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
  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    ratingAria: string;
    items: Array<{ name: string; location: string; quote: string }>;
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
      services: "Serviços",
      beforeAfter: "Antes e Depois",
      gallery: "Galeria",
      testimonials: "Feedbacks",
      contacts: "Contactos",
    },
    header: {
      tagline: "Venda e montagem",
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
      eyebrow: "Venda, montagem e assistência de piscinas",
      titlePrefix: "Piscinas que",
      titleHighlight: "transformam",
      titleSuffix: "espaços em momentos únicos.",
      subheadline:
        "Venda, montagem e assistência de piscinas com qualidade, segurança e acabamentos de excelência.",
      primaryCta: "Pedir orçamento",
      secondaryCta: "Ver catálogo",
      videoCta: "Ver vídeo",
      videoAria: "Ver vídeo da Piscinas R Abreu",
      highlights: [
        "Rapidez",
        "Acabamentos premium",
        "Assistência contínua",
      ],
      asideAria: "Compromissos de serviço",
      asideTitle: "Qualidade garantida",
      asideText:
        "Do estudo inicial à entrega, cada detalhe é tratado para garantir uma piscina bonita, funcional e preparada para uso frequente.",
      asideItems: [
        "Avaliação do espaço e aconselhamento técnico",
        "Materiais adequados ao uso e ao estilo da casa",
        "Assistência planeada para água limpa e segura",
      ],
      scrollAria: "Avançar para a próxima secção",
      scrollLabel: "Scroll",
    },
    benefits: {
      eyebrow: "O nosso compromisso",
      title: "Acompanhamento profissional do primeiro estudo ao primeiro mergulho.",
      intro: "",
      items: [
        {
          title: "Qualidade garantida",
          text: "Materiais seleccionados e acabamentos pensados para resistir ao uso diário.",
        },
        {
          title: "Montagem especializada",
          text: "Equipa experiente em instalação, preparação técnica e entrega chave na mão.",
        },
        {
          title: "Prazos cumpridos",
          text: "Planeamento claro, comunicação directa e execução organizada em cada fase.",
        },
        {
          title: "Apoio contínuo",
          text: "Assistência após montagem para manter a piscina segura, limpa e pronta a usar.",
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
        "Modelos, coberturas e soluções técnicas preparados para adaptar o projeto ao terreno, ao estilo da casa e à forma como quer usar a piscina.",
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
    beforeAfter: {
      eyebrow: "Antes e depois",
      title: "Transformamos espaços comuns em refúgios extraordinários.",
      intro:
        "Compare o potencial de um espaço exterior antes da intervenção com uma solução pronta para receber família, amigos e dias longos de sol.",
      steps: [
        "Estudo e preparação do terreno.",
        "Montagem, acabamentos e ensaio antes da entrega.",
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
          name: "Carlos e Mariana",
          location: "Lisboa",
          quote:
            "A equipa ajudou-nos a escolher o modelo certo para o jardim e cumpriu o prazo combinado. O resultado ficou elegante e muito fácil de manter.",
        },
        {
          name: "Ricardo Almeida",
          location: "Porto",
          quote:
            "Gostei da clareza do orçamento e do acompanhamento durante a montagem. Ficámos com uma piscina pronta a usar sem surpresas no processo.",
        },
        {
          name: "Sofia Ferreira",
          location: "Braga",
          quote:
            "Precisávamos de uma solução compacta e bem integrada no terraço. A Piscinas R Abreu percebeu logo o que queríamos.",
        },
        {
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
        "Peça já o seu orçamento gratuito e sem compromisso. A nossa equipa entra em contacto consigo para avaliar o seu projecto.",
      trustItems: [
        "Resposta rápida",
        "Visita técnica",
        "Soluções chave na mão",
        "Apoio após montagem",
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
        location: "Lisboa, Braga, Faro...",
        poolType: "Seleccionar opção",
        message: "Medidas aproximadas, tipo de terreno, prazo pretendido...",
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
      success: "Pedido recebido. Entraremos em contacto em breve.",
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
      title: "Experiência, volume e compromisso em cada projecto.",
      items: [
        {
          value: 10,
          suffix: "+",
          label: "anos de experiência",
          detail: "Venda, montagem e assistência de piscinas em Portugal.",
        },
        {
          value: 500,
          suffix: "+",
          label: "piscinas instaladas",
          detail: "Projectos adaptados a moradias, jardins e espaços exteriores.",
        },
        {
          value: 100,
          suffix: "%",
          label: "clientes satisfeitos",
          detail: "Acompanhamento próximo antes, durante e após a montagem.",
        },
        {
          value: 100,
          suffix: "%",
          label: "serviços com garantia",
          detail: "Garantia em todos os serviços executados pela equipa.",
        },
      ],
    },
    footer: {
      homeAria: "Piscinas R Abreu, voltar ao início",
      description:
        "Venda, montagem e assistência de piscinas personalizadas com qualidade, segurança e acabamentos de excelência.",
      contacts: [
        { label: "Telefone", value: "+351 912 458 376", href: "tel:+351912458376" },
        {
          label: "Email",
          value: "geral@piscinasrabreu.pt",
          href: "mailto:geral@piscinasrabreu.pt",
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
      services: "Services",
      beforeAfter: "Before & After",
      gallery: "Gallery",
      testimonials: "Testimonials",
      contacts: "Contacts",
    },
    header: {
      tagline: "Sales and installation",
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
      eyebrow: "Pool sales, installation and support",
      titlePrefix: "Pools that",
      titleHighlight: "transform",
      titleSuffix: "spaces into unique moments.",
      subheadline:
        "Sales, installation and support for custom pools with quality, safety and excellent finishes.",
      primaryCta: "Request quote",
      secondaryCta: "View catalogue",
      videoCta: "Watch video",
      videoAria: "Watch Piscinas R Abreu video",
      highlights: ["Custom pools", "Premium finishes", "Ongoing support"],
      asideAria: "Service commitments",
      asideTitle: "Guaranteed quality",
      asideText:
        "From the first study to final delivery, every detail is handled so your pool is beautiful, functional and ready for frequent use.",
      asideItems: [
        "Space assessment and technical advice",
        "Materials suited to usage and home style",
        "Planned support for clean, safe water",
      ],
      scrollAria: "Go to next section",
      scrollLabel: "Scroll",
    },
    benefits: {
      eyebrow: "Our commitment",
      title: "Professional guidance from first study to first swim.",
      intro:
        "Projects focused on quality, safety and a simple ownership experience after installation.",
      items: [
        {
          title: "Guaranteed quality",
          text: "Selected materials and finishes designed to withstand daily use.",
        },
        {
          title: "Specialised installation",
          text: "Experienced team for installation, technical preparation and turnkey delivery.",
        },
        {
          title: "Deadlines met",
          text: "Clear planning, direct communication and organised execution at every stage.",
        },
        {
          title: "Continuous support",
          text: "Post-installation support to keep the pool safe, clean and ready to use.",
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
        "Models, covers and technical solutions prepared to adapt the project to your land, home style and how you want to use the pool.",
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
    beforeAfter: {
      eyebrow: "Before and after",
      title: "We turn ordinary spaces into extraordinary retreats.",
      intro:
        "Compare the potential of an outdoor space before intervention with a solution ready for family, friends and long sunny days.",
      steps: [
        "Site study and preparation.",
        "Installation, finishes and testing before delivery.",
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
      intro:
        "Pool sales, installation and support projects in villas, condominiums and outdoor family spaces.",
      ratingAria: "Five-star rating",
      items: [
        {
          name: "Carlos & Mariana",
          location: "Lisbon",
          quote:
            "The team helped us choose the right model for the garden and met the agreed deadline. The result is elegant and easy to maintain.",
        },
        {
          name: "Ricardo Almeida",
          location: "Porto",
          quote:
            "I liked the clear quote and the support during installation. We got a pool ready to use without surprises.",
        },
        {
          name: "Sofia Ferreira",
          location: "Braga",
          quote:
            "We needed a compact solution that fitted the terrace. Piscinas R Abreu understood what we wanted immediately.",
        },
        {
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
        "Request your free, no-obligation quote. Our team will contact you to assess your project.",
      trustItems: [
        "Fast response",
        "Technical visit",
        "Turnkey solutions",
        "Post-installation support",
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
        location: "Lisbon, Braga, Faro...",
        poolType: "Select option",
        message: "Approximate dimensions, land type, desired deadline...",
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
      success: "Request received. We will contact you soon.",
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
      title: "Experience, scale and commitment in every project.",
      items: [
        {
          value: 10,
          suffix: "+",
          label: "years of experience",
          detail: "Pool sales, installation and support in Portugal.",
        },
        {
          value: 500,
          suffix: "+",
          label: "pools installed",
          detail: "Projects adapted to homes, gardens and outdoor spaces.",
        },
        {
          value: 100,
          suffix: "%",
          label: "satisfied clients",
          detail: "Close support before, during and after installation.",
        },
        {
          value: 100,
          suffix: "%",
          label: "services with warranty",
          detail: "Warranty on every service carried out by the team.",
        },
      ],
    },
    footer: {
      homeAria: "Piscinas R Abreu, back to top",
      description:
        "Sales, installation and support for custom pools with quality, safety and excellent finishes.",
      contacts: [
        { label: "Phone", value: "+351 912 458 376", href: "tel:+351912458376" },
        {
          label: "Email",
          value: "geral@piscinasrabreu.pt",
          href: "mailto:geral@piscinasrabreu.pt",
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
      services: "Servicios",
      beforeAfter: "Antes y después",
      gallery: "Galería",
      testimonials: "Testimonios",
      contacts: "Contactos",
    },
    header: {
      tagline: "Venta e instalación",
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
      eyebrow: "Venta, instalación y asistencia de piscinas",
      titlePrefix: "Piscinas que",
      titleHighlight: "transforman",
      titleSuffix: "espacios en momentos únicos.",
      subheadline:
        "Venta, instalación y asistencia de piscinas personalizadas con calidad, seguridad y acabados excelentes.",
      primaryCta: "Pedir presupuesto",
      secondaryCta: "Ver catálogo",
      videoCta: "Ver vídeo",
      videoAria: "Ver vídeo de Piscinas R Abreu",
      highlights: ["Piscinas personalizadas", "Acabados premium", "Asistencia continua"],
      asideAria: "Compromisos de servicio",
      asideTitle: "Calidad garantizada",
      asideText:
        "Desde el estudio inicial hasta la entrega, cada detalle se cuida para garantizar una piscina bonita, funcional y lista para uso frecuente.",
      asideItems: [
        "Evaluación del espacio y asesoramiento técnico",
        "Materiales adecuados al uso y al estilo de la casa",
        "Asistencia planificada para agua limpia y segura",
      ],
      scrollAria: "Avanzar a la siguiente sección",
      scrollLabel: "Scroll",
    },
    benefits: {
      eyebrow: "Nuestro compromiso",
      title: "Acompañamiento profesional desde el primer estudio hasta el primer baño.",
      intro:
        "Proyectos orientados a la calidad, la seguridad y una experiencia de uso sencilla después de la instalación.",
      items: [
        {
          title: "Calidad garantizada",
          text: "Materiales seleccionados y acabados pensados para resistir el uso diario.",
        },
        {
          title: "Instalación especializada",
          text: "Equipo experto en instalación, preparación técnica y entrega llave en mano.",
        },
        {
          title: "Plazos cumplidos",
          text: "Planificación clara, comunicación directa y ejecución organizada en cada fase.",
        },
        {
          title: "Apoyo continuo",
          text: "Asistencia tras la instalación para mantener la piscina segura, limpia y lista para usar.",
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
        "Modelos, cubiertas y soluciones técnicas preparados para adaptar el proyecto al terreno, al estilo de la casa y a la forma en que quieres usar la piscina.",
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
      intro:
        "Proyectos de venta, instalación y asistencia en viviendas, comunidades y espacios exteriores de uso familiar.",
      ratingAria: "Valoración de cinco estrellas",
      items: [
        {
          name: "Carlos y Mariana",
          location: "Lisboa",
          quote:
            "El equipo nos ayudó a elegir el modelo adecuado para el jardín y cumplió el plazo acordado. El resultado quedó elegante y muy fácil de mantener.",
        },
        {
          name: "Ricardo Almeida",
          location: "Oporto",
          quote:
            "Me gustó la claridad del presupuesto y el seguimiento durante la instalación. Tuvimos una piscina lista para usar sin sorpresas.",
        },
        {
          name: "Sofia Ferreira",
          location: "Braga",
          quote:
            "Necesitábamos una solución compacta y bien integrada en la terraza. Piscinas R Abreu entendió enseguida lo que queríamos.",
        },
        {
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
        "Pide tu presupuesto gratuito y sin compromiso. Nuestro equipo contactará contigo para evaluar tu proyecto.",
      trustItems: [
        "Respuesta rápida",
        "Visita técnica",
        "Soluciones llave en mano",
        "Apoyo tras la instalación",
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
        location: "Lisboa, Braga, Faro...",
        poolType: "Seleccionar opción",
        message: "Medidas aproximadas, tipo de terreno, plazo deseado...",
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
      success: "Solicitud recibida. Contactaremos contigo pronto.",
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
      title: "Experiencia, volumen y compromiso en cada proyecto.",
      items: [
        {
          value: 10,
          suffix: "+",
          label: "años de experiencia",
          detail: "Venta, instalación y asistencia de piscinas en Portugal.",
        },
        {
          value: 500,
          suffix: "+",
          label: "piscinas instaladas",
          detail: "Proyectos adaptados a viviendas, jardines y espacios exteriores.",
        },
        {
          value: 100,
          suffix: "%",
          label: "clientes satisfechos",
          detail: "Acompañamiento cercano antes, durante y después de la instalación.",
        },
        {
          value: 100,
          suffix: "%",
          label: "servicios con garantía",
          detail: "Garantía en todos los servicios ejecutados por el equipo.",
        },
      ],
    },
    footer: {
      homeAria: "Piscinas R Abreu, volver al inicio",
      description:
        "Venta, instalación y asistencia de piscinas personalizadas con calidad, seguridad y acabados excelentes.",
      contacts: [
        { label: "Teléfono", value: "+351 912 458 376", href: "tel:+351912458376" },
        {
          label: "Email",
          value: "geral@piscinasrabreu.pt",
          href: "mailto:geral@piscinasrabreu.pt",
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
      services: "Services",
      beforeAfter: "Avant / Après",
      gallery: "Galerie",
      testimonials: "Témoignages",
      contacts: "Contacts",
    },
    header: {
      tagline: "Vente et installation",
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
      eyebrow: "Vente, installation et assistance de piscines",
      titlePrefix: "Des piscines qui",
      titleHighlight: "transforment",
      titleSuffix: "les espaces en moments uniques.",
      subheadline:
        "Vente, installation et assistance de piscines personnalisées avec qualité, sécurité et finitions d'excellence.",
      primaryCta: "Demander un devis",
      secondaryCta: "Voir le catalogue",
      videoCta: "Voir la vidéo",
      videoAria: "Voir la vidéo de Piscinas R Abreu",
      highlights: ["Piscines personnalisées", "Finitions premium", "Assistance continue"],
      asideAria: "Engagements de service",
      asideTitle: "Qualité garantie",
      asideText:
        "De la première étude à la livraison, chaque détail est traité pour garantir une piscine belle, fonctionnelle et prête pour un usage fréquent.",
      asideItems: [
        "Évaluation de l'espace et conseil technique",
        "Matériaux adaptés à l'usage et au style de la maison",
        "Assistance planifiée pour une eau propre et sûre",
      ],
      scrollAria: "Passer à la section suivante",
      scrollLabel: "Scroll",
    },
    benefits: {
      eyebrow: "Notre engagement",
      title: "Accompagnement professionnel de la première étude au premier plongeon.",
      intro:
        "Des projets axés sur la qualité, la sécurité et une utilisation simple après l'installation.",
      items: [
        {
          title: "Qualité garantie",
          text: "Matériaux sélectionnés et finitions conçues pour résister à l'usage quotidien.",
        },
        {
          title: "Installation spécialisée",
          text: "Équipe expérimentée en installation, préparation technique et livraison clé en main.",
        },
        {
          title: "Délais respectés",
          text: "Planification claire, communication directe et exécution organisée à chaque étape.",
        },
        {
          title: "Assistance continue",
          text: "Assistance après installation pour garder la piscine sûre, propre et prête à l'emploi.",
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
        "Modèles, couvertures et solutions techniques préparés pour adapter le projet au terrain, au style de la maison et à votre façon d'utiliser la piscine.",
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
      intro:
        "Projets de vente, installation et assistance dans maisons, copropriétés et espaces extérieurs familiaux.",
      ratingAria: "Évaluation cinq étoiles",
      items: [
        {
          name: "Carlos et Mariana",
          location: "Lisbonne",
          quote:
            "L'équipe nous a aidés à choisir le bon modèle pour le jardin et a respecté le délai. Le résultat est élégant et très facile à entretenir.",
        },
        {
          name: "Ricardo Almeida",
          location: "Porto",
          quote:
            "J'ai apprécié la clarté du devis et le suivi pendant l'installation. Nous avons eu une piscine prête à utiliser sans surprises.",
        },
        {
          name: "Sofia Ferreira",
          location: "Braga",
          quote:
            "Nous avions besoin d'une solution compacte et bien intégrée à la terrasse. Piscinas R Abreu a vite compris ce que nous voulions.",
        },
        {
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
        "Demandez votre devis gratuit et sans engagement. Notre équipe vous contacte pour évaluer votre projet.",
      trustItems: [
        "Réponse rapide",
        "Visite technique",
        "Solutions clé en main",
        "Assistance après installation",
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
        location: "Lisbonne, Braga, Faro...",
        poolType: "Sélectionner une option",
        message: "Dimensions approximatives, type de terrain, délai souhaité...",
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
      success: "Demande reçue. Nous vous contacterons bientôt.",
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
      title: "Expérience, volume et engagement dans chaque projet.",
      items: [
        {
          value: 10,
          suffix: "+",
          label: "ans d'expérience",
          detail: "Vente, installation et assistance de piscines au Portugal.",
        },
        {
          value: 500,
          suffix: "+",
          label: "piscines installées",
          detail: "Projets adaptés aux maisons, jardins et espaces extérieurs.",
        },
        {
          value: 100,
          suffix: "%",
          label: "clients satisfaits",
          detail: "Accompagnement proche avant, pendant et après l'installation.",
        },
        {
          value: 100,
          suffix: "%",
          label: "services garantis",
          detail: "Garantie sur tous les services réalisés par l'équipe.",
        },
      ],
    },
    footer: {
      homeAria: "Piscinas R Abreu, revenir au début",
      description:
        "Vente, installation et assistance de piscines personnalisées avec qualité, sécurité et finitions d'excellence.",
      contacts: [
        { label: "Téléphone", value: "+351 912 458 376", href: "tel:+351912458376" },
        {
          label: "Email",
          value: "geral@piscinasrabreu.pt",
          href: "mailto:geral@piscinasrabreu.pt",
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
