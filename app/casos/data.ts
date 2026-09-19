export type CaseImage = {
  src: string;
  alt: string;
  /** Intrinsic dimensions, used for aspect ratio on the full page. */
  width: number;
  height: number;
};

export type CasePhase = {
  title: string;
  /** Optional running-text intro before the bullet list. */
  intro?: string;
  items?: string[];
};

export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  /** Two-digit index shown as "Caso / 01". */
  index: string;
  name: string;
  tagline: string;
  /** Short line under the name on the homepage preview. */
  kicker: string;
  /** Two or three sentences for the homepage preview. */
  excerpt: string;
  summary: string;
  facts: { label: string; value: string }[];
  startingPoint: string;
  challenge: string;
  phases: CasePhase[];
  result: string;
  metrics: CaseMetric[];
  /** null until the client sends a quote. Rendered only when present. */
  testimonial: { quote: string; author: string } | null;
  contribution: string;
  services: string[];
  cover: CaseImage;
  gallery: CaseImage[];
  /** Optional muted loop shown alongside the gallery on the full page. */
  video?: { src: string; poster: string; width: number; height: number };
  openedAt: string;
};

export const CASES: CaseStudy[] = [
  {
    slug: "origenes",
    index: "01",
    name: "Orígenes",
    tagline: "De una idea en Madrid a una cafetería de especialidad en Mallorca",
    kicker: "Mallorca · Brunch y meriendas · 2024",
    excerpt:
      "El primer proyecto de Niki en el sector. Seis meses, dos viajes y un cambio de ciudad a mitad de camino: de una idea en Madrid a una cafetería de especialidad abierta en Mallorca, con barra, carta, proveedores y equipo propios.",
    summary:
      "Orígenes es una cafetería de especialidad con brunch y meriendas, el primer proyecto de su dueña, Niki, en el sector. Maubrews la acompañó desde la fase inicial hasta el lanzamiento y las semanas posteriores a la apertura: concepto, local, barra, maquinaria, carta, proveedores, equipo y flujo de trabajo. El proyecto nació en Madrid y terminó abriendo sus puertas en Mallorca.",
    facts: [
      { label: "Cliente", value: "Niki, fundadora de Orígenes" },
      {
        label: "Tipo de negocio",
        value: "Cafetería de especialidad con brunch y meriendas",
      },
      { label: "Ubicación", value: "Mallorca (idea original: Madrid)" },
      {
        label: "Perfil del cliente",
        value: "Primer proyecto en cafetería de especialidad",
      },
      {
        label: "Alcance",
        value: "Acompañamiento integral, de la idea a la apertura",
      },
      { label: "Duración", value: "6 meses" },
      {
        label: "Formato",
        value: "Sesiones remotas y dos viajes presenciales de Mauricio",
      },
    ],
    startingPoint:
      "Niki tenía clara la idea de negocio pero no venía del sector. Estaba evaluando locales, no conocía los requerimientos técnicos de una cafetería de especialidad y necesitaba una visión de conjunto: qué hace falta realmente, en qué orden y por dónde empezar.",
    challenge:
      "Aterrizar una idea en un proyecto ejecutable, sin experiencia previa en café de especialidad, y hacerlo con un cambio de ciudad a mitad de camino. Cada decisión (local, barra, maquinaria, carta, equipo) tenía que encajar con las demás.",
    phases: [
      {
        title: "Concepto y estructura",
        intro:
          "Mauricio trabajó con Niki para ordenar las ideas y traducirlas en un plan: definir la estructura del proyecto, los pasos a seguir y los requerimientos básicos de una cafetería de especialidad. Le dio criterio para evaluar los locales que estaba considerando y compartió su experiencia y know-how para que la idea que tenía en la cabeza tomara una forma concreta.",
      },
      {
        title: "Diseño y puesta en marcha (primer viaje)",
        items: [
          "Diseño de la barra y del flujo de trabajo",
          "Selección de maquinaria",
          "Formación de barismo para Niki",
          "Desarrollo de la carta de café y orientación en las decisiones de la carta de comida",
          "Conexión con proveedores de café y apoyo en los primeros pedidos",
        ],
      },
      {
        title: "Equipo",
        items: [
          "Headhunting de baristas: conexión con perfiles, entrevistas y selección",
        ],
      },
      {
        title: "Lanzamiento (segundo viaje)",
        items: [
          "Formación del equipo de baristas",
          "Pruebas de carta",
          "Definición de un flujo de trabajo estructurado para el servicio",
        ],
      },
      {
        title: "Post-lanzamiento",
        items: ["Seguimiento y orientación una vez abierta la cafetería"],
      },
    ],
    result:
      "Orígenes abrió en Mallorca con una barra diseñada para su flujo de trabajo, una carta propia de café y comida, proveedores establecidos y un equipo de baristas formado y seleccionado. Niki pasó de una idea sin experiencia en el sector a operar su propia cafetería de especialidad.",
    metrics: [
      { value: "Jul 2024", label: "apertura" },
      { value: "5", label: "baristas" },
      { value: "15", label: "bebidas diseñadas" },
      { value: "4,8", label: "estrellas · 358 reseñas en Google" },
    ],
    // TODO: testimonio de Niki pendiente
    testimonial: null,
    contribution:
      "Este proyecto resume el modelo de acompañamiento de Maubrews: no un consultor que entrega un documento, sino alguien que ha abierto y operado su propia cafetería y que está presente en las decisiones importantes, desde la elección del local hasta el primer turno con el equipo.",
    services: [
      "Consultoría de concepto",
      "Diseño de barra y flujo de trabajo",
      "Selección de maquinaria",
      "Formación de barismo",
      "Desarrollo de carta",
      "Conexión con proveedores",
      "Selección de equipo",
      "Acompañamiento en lanzamiento",
    ],
    cover: {
      src: "/images/casos/origenes-mesa.jpg",
      alt: "Flat white con latte art, alfajor y banana bread sobre una mesa de madera en Orígenes, con la barra al fondo",
      width: 1283,
      height: 1600,
    },
    gallery: [],
    video: {
      src: "/images/casos/origenes-loop.mp4",
      poster: "/images/casos/origenes-mesa.jpg",
      width: 720,
      height: 1280,
    },
    openedAt: "2024-07",
  },
  {
    slug: "casona",
    index: "02",
    name: "Casona",
    tagline: "Una cafetería de especialidad dentro de una flagship store de moda",
    kicker: "Madrid · Flagship store · 2024",
    excerpt:
      "Una marca de moda que quería que en su flagship no faltara el café. Carmela era clienta de Dosis; de ahí salió una cafetería completa dentro de la tienda, con barra, bakery, equipo y un café de marca propia tostado a medida.",
    summary:
      "Casona es una marca de ropa que abría su flagship store en Madrid con un concepto muy definido: una tienda que se siente como la casa de una abuela latina, que recibe a sus invitados y donde el café no puede faltar. Su fundadora, Carmela, era clienta habitual de Dosis, la cafetería de Mauricio, y esa conexión llevó a Maubrews a diseñar de principio a fin la propuesta de café dentro de la tienda: obra, barra, maquinaria, carta, bakery, equipo, software y un café de marca propia con curva de tueste diseñada a medida.",
    facts: [
      { label: "Cliente", value: "Carmela, fundadora de Casona" },
      {
        label: "Tipo de negocio",
        value: "Cafetería de especialidad integrada en una tienda de moda",
      },
      { label: "Ubicación", value: "Madrid" },
      {
        label: "Perfil del cliente",
        value: "Marca de moda sin experiencia previa en hospitality",
      },
      {
        label: "Alcance",
        value:
          "Diseño integral de la propuesta de café, del espacio al producto propio",
      },
      { label: "Duración", value: "6 meses" },
    ],
    startingPoint:
      "Carmela conocía bien lo que quería porque lo vivía como clienta: la propuesta de Dosis encajaba con la experiencia que buscaba para su flagship. El concepto de Casona estaba claro y el café era una pieza central de la hospitalidad que quería ofrecer. Lo que faltaba era todo lo demás: cómo se construye, se equipa, se opera y se sirve una cafetería de especialidad dentro de una tienda de ropa.",
    challenge:
      "Integrar una cafetería de especialidad en un espacio pensado para vender ropa, sin que ninguna de las dos cosas se resintiera. La barra tenía que funcionar como cafetería real, la carta tenía que hablar el mismo idioma que la marca, y el producto tenía que ser propio: un café que fuera de Casona y no de otro.",
    phases: [
      {
        title: "Espacio y obra",
        items: [
          "Conexión con el constructor que ejecutó la obra",
          "Diseño de la barra y de su flujo de trabajo",
          "Selección de maquinaria",
        ],
      },
      {
        title: "Carta y producto",
        items: [
          "Diseño de una carta de bebidas adaptada al concepto de la marca",
          "Diseño de la oferta de bakery",
          "Gestión con proveedores",
        ],
      },
      {
        title: "Café de marca propia",
        items: [
          "Selección de cafés para la marca Casona a través de varias catas",
          "Conexión con el tostador",
          "Diseño de la curva de tueste para su caso de uso concreto",
        ],
      },
      {
        title: "Equipo",
        items: [
          "Headhunting, entrevistas y selección de baristas",
          "Introducción a la cultura del mercado laboral en barismo: cómo funciona, qué esperar y cómo retener talento",
          "Formación en bebidas al equipo contratado",
        ],
      },
      {
        title: "Operación",
        items: [
          "Acceso a la cartera de contactos de Maubrews: software de gestión de ventas y proveedores",
        ],
      },
    ],
    result:
      "Casona abrió su flagship en Madrid con una cafetería de especialidad completa y coherente con su marca: barra y flujo diseñados para el espacio, carta y bakery propias, equipo formado y un café con su nombre, tostado a medida. La hospitalidad que Carmela vivía como clienta en Dosis pasó a ser parte de su propia tienda.",
    metrics: [
      { value: "12 dic 2024", label: "apertura" },
      { value: "2", label: "baristas" },
      { value: "1", label: "café de marca propia" },
      { value: "4,8", label: "estrellas · 200 reseñas en Google" },
    ],
    // TODO: testimonio de Carmela pendiente
    testimonial: null,
    contribution:
      "Casona muestra el alcance completo del acompañamiento: no solo montar una barra, sino construir una propuesta de café que forme parte de la identidad de una marca, hasta llegar al producto propio. Y muestra algo más: la relación empezó con Carmela sentada en Dosis como clienta. La mejor carta de presentación de Maubrews es la cafetería de Mauricio.",
    services: [
      "Consultoría de concepto",
      "Conexión con constructor",
      "Diseño de barra y flujo de trabajo",
      "Selección de maquinaria",
      "Desarrollo de carta y bakery",
      "Gestión de proveedores",
      "Café de marca propia y curva de tueste",
      "Selección y formación de equipo",
      "Red de contactos de software y proveedores",
    ],
    cover: {
      src: "/images/casos/casona-barra.webp",
      alt: "Barra de mármol de la cafetería de Casona, con estanterías oscuras, cafeteras de plata y una chaqueta blanca enmarcada",
      width: 743,
      height: 941,
    },
    gallery: [
      {
        src: "/images/casos/casona-equipo.webp",
        alt: "Barista con sombrero y delantal junto a Carmela, fundadora de Casona, detrás de la barra de mármol con vitrinas de bakery",
        width: 770,
        height: 941,
      },
      {
        src: "/images/casos/casona-tienda.webp",
        alt: "Interior de la flagship de Casona: banco de madera con cojines, prendas colgadas y percheros al fondo",
        width: 747,
        height: 941,
      },
      {
        src: "/images/casos/casona-interior.jpg",
        alt: "Vista general de la tienda Casona en Madrid, con techos altos, cortinas y la zona de café al fondo",
        width: 1201,
        height: 1600,
      },
    ],
    openedAt: "2024-12",
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function getNextCase(slug: string): CaseStudy {
  const idx = CASES.findIndex((c) => c.slug === slug);
  return CASES[(idx + 1) % CASES.length];
}
