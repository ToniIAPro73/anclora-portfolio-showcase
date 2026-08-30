export type Locale = "es" | "en";

const es = {
  nav: {
    residences: "Residencias",
    gallery: "Galería",
    investment: "Inversión",
    location: "Ubicación",
    contact: "Contacto",
    toggle: "EN",
    toggleLabel: "Cambiar idioma a inglés",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    brand: "Mirador Azul",
    brandSuffix: "Mallorca",
  },
  hero: {
    badge: "Costa Suroeste · Mallorca",
    titleLine1: "El Mediterráneo,",
    titleAccent: "en propiedad",
    subtitle:
      "Mirador Azul es un desarrollo residencial ficticio concebido como estudio de diseño de producto: tres residencias sobre el mar, una narrativa editorial y una experiencia digital a la altura del lugar.",
    cta: "Explorar residencias",
    ctaSecondary: "Solicitar dossier",
    scroll: "Descubrir",
  },
  residences: {
    badge: "Colección residencial",
    title: "Tres formas de",
    titleAccent: "habitar el mar",
    subtitle:
      "Cada residencia del conjunto responde a una orientación, una luz y una manera distinta de vivir la costa.",
    beds: "dormitorios",
    area: "m²",
    from: "desde",
    cta: "Solicitar información",
    properties: [
      {
        name: "Villa Almadrava",
        type: "Villa frente al mar",
        area: "380",
        beds: "4",
        price: "1.450.000 €",
        imageAlt:
          "Villa Almadrava al anochecer, con la fachada iluminada y la piscina frente al mar",
        description:
          "Planta abierta hacia el poniente, piscina de borde infinito y piedra local en fachada. La pieza más privada de la colección.",
      },
      {
        name: "Ático Levante",
        type: "Ático con terraza",
        area: "145",
        beds: "2",
        price: "980.000 €",
        imageAlt: "Piscina en la azotea del Ático Levante con vistas abiertas al Mediterráneo",
        description:
          "La primera luz del día entra por una terraza corrida de 40 m². Pensado para quien vive la casa hacia fuera.",
      },
      {
        name: "Casa Pinar",
        type: "Casa entre pinos",
        area: "290",
        beds: "3",
        price: "2.100.000 €",
        imageAlt: "Terraza ajardinada de Casa Pinar entre pinos mediterráneos",
        description:
          "Elevada sobre un pinar mediterráneo, con patio central y vistas abiertas a la bahía desde cada estancia principal.",
      },
    ],
  },
  gallery: {
    badge: "Galería",
    title: "El lugar,",
    titleAccent: "en imágenes",
    subtitle:
      "Un recorrido visual por las residencias, los exteriores y la vida en la costa del conjunto ficticio Mirador Azul.",
    items: [
      { alt: "Salón principal con vistas abiertas al mar" },
      { alt: "Cocina de diseño con isla central" },
      { alt: "Cala de agua clara a pocos minutos a pie" },
      { alt: "Cocina exterior y comedor bajo el porche" },
      { alt: "Solárium junto a la piscina al atardecer" },
      { alt: "Dormitorio principal orientado a la bahía" },
      { alt: "Terraza comedor con vistas al litoral" },
      { alt: "Spa privado con piscina interior" },
    ],
  },
  investment: {
    badge: "Contexto de inversión",
    title: "Cifras con",
    titleAccent: "criterio",
    subtitle:
      "Indicadores orientativos presentados como capa analítica del proyecto. Todas las cifras son ficticias y se muestran con fines de demostración.",
    disclaimer: "Datos ficticios con fines de demostración.",
    imageAlt: "Detalle de piedra natural local en la fachada del conjunto",
    metrics: [
      {
        value: "+28%",
        label: "Apreciación de capital",
        detail: "Proyección de crecimiento a 5 años (escenario ilustrativo)",
      },
      {
        value: "4,2%",
        label: "Rentabilidad de alquiler",
        detail: "Rendimiento neto anual estimado (escenario ilustrativo)",
      },
      {
        value: "9.800 €/m²",
        label: "Comparativa de mercado",
        detail: "Precio medio por m² en prime residencial costero (referencia ficticia)",
      },
    ],
  },
  location: {
    badge: "Ubicación",
    title: "Costa Suroeste,",
    titleAccent: "Mallorca",
    subtitle:
      "Un enclave ficticio inspirado en los arenales y puertos deportivos del suroeste mallorquín: calas de agua clara, pinar mediterráneo y una oferta náutica y gastronómica consolidada.",
    imageAlt: "Vista aérea de la costa suroeste de Mallorca y su puerto deportivo",
    points: [
      {
        title: "Mar",
        detail: "Acceso peatonal a cala y club náutico a pocos minutos a pie.",
      },
      {
        title: "Naturaleza",
        detail: "Pinar mediterráneo protegido como telón de fondo del conjunto.",
      },
      {
        title: "Conexiones",
        detail: "Acceso cómodo a Palma y a su aeropuerto internacional.",
      },
    ],
  },
  contact: {
    badge: "Contacto",
    title: "Abrir una",
    titleAccent: "consulta",
    subtitle:
      "Cuéntanos qué residencia te interesa y te enviaremos el dossier completo. Este formulario es una simulación: no se envía ningún dato a ningún servidor.",
    fields: {
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      email: "Email",
      emailPlaceholder: "nombre@ejemplo.com",
      phone: "Teléfono",
      phonePlaceholder: "+34 600 000 000",
      budget: "Presupuesto",
      budgetPlaceholder: "Selecciona un rango",
      budgetOptions: [
        "Menos de 1.000.000 €",
        "1.000.000 € – 1.500.000 €",
        "1.500.000 € – 2.500.000 €",
        "Más de 2.500.000 €",
      ],
      message: "Mensaje",
      messagePlaceholder: "¿Qué residencia te interesa? ¿Cuándo te gustaría visitar?",
    },
    submit: "Enviar consulta",
    submitting: "Enviando…",
    imageAlt: "Puerto deportivo al atardecer, a pocos minutos de Mirador Azul",
    imageTagline: "La vida, frente al mar",
    errors: {
      name: "Introduce tu nombre (mínimo 2 caracteres).",
      email: "Introduce un email válido.",
      phone: "Introduce un teléfono válido (7–15 dígitos).",
      budget: "Selecciona un rango de presupuesto.",
      message: "Escribe un mensaje de al menos 10 caracteres.",
    },
    successTitle: "Consulta registrada",
    successBody:
      "Gracias. Esta es una confirmación simulada: en un entorno real recibirías el dossier por email. Ningún dato ha salido de tu navegador.",
    successAgain: "Enviar otra consulta",
    simulationNote: "Envío simulado · los datos permanecen en tu navegador",
    eventsTitle: "Eventos de conversión (simulados)",
    eventsEmpty: "Los eventos de conversión simulados aparecerán aquí.",
    eventsNote: "Registro local de demostración — sin analítica real.",
  },
  footer: {
    label: "Portfolio Showcase",
    disclaimerEs:
      "Demo de portfolio con datos ficticios. No contiene datos de producción ni código operativo completo.",
    disclaimerEn:
      "Portfolio demo using fictional data. It does not contain production data or the complete operational codebase.",
    repo: "Repositorio en GitHub",
  },
};

export type Translations = typeof es;

const en: Translations = {
  nav: {
    residences: "Residences",
    gallery: "Gallery",
    investment: "Investment",
    location: "Location",
    contact: "Contact",
    toggle: "ES",
    toggleLabel: "Switch language to Spanish",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    brand: "Mirador Azul",
    brandSuffix: "Mallorca",
  },
  hero: {
    badge: "Southwest Coast · Mallorca",
    titleLine1: "The Mediterranean,",
    titleAccent: "privately owned",
    subtitle:
      "Mirador Azul is a fictional residential development conceived as a product design study: three residences above the sea, an editorial narrative and a digital experience worthy of the place.",
    cta: "Explore residences",
    ctaSecondary: "Request the dossier",
    scroll: "Discover",
  },
  residences: {
    badge: "Residential collection",
    title: "Three ways of",
    titleAccent: "living by the sea",
    subtitle:
      "Each residence in the collection answers to an orientation, a light and a different way of inhabiting the coast.",
    beds: "bedrooms",
    area: "m²",
    from: "from",
    cta: "Request information",
    properties: [
      {
        name: "Villa Almadrava",
        type: "Seafront villa",
        area: "380",
        beds: "4",
        price: "€1,450,000",
        imageAlt: "Villa Almadrava at dusk, with its illuminated façade and seafront pool",
        description:
          "An open floor plan facing west, an infinity pool and local stone on the façade. The most private piece in the collection.",
      },
      {
        name: "Ático Levante",
        type: "Penthouse with terrace",
        area: "145",
        beds: "2",
        price: "€980,000",
        imageAlt: "Rooftop pool at Ático Levante with open Mediterranean views",
        description:
          "The first light of day pours across a 40 m² wraparound terrace. Designed for those who live the house outwards.",
      },
      {
        name: "Casa Pinar",
        type: "House among pines",
        area: "290",
        beds: "3",
        price: "€2,100,000",
        imageAlt: "Landscaped terrace at Casa Pinar among Mediterranean pines",
        description:
          "Raised above a Mediterranean pine grove, with a central courtyard and open bay views from every main room.",
      },
    ],
  },
  gallery: {
    badge: "Gallery",
    title: "The place,",
    titleAccent: "in images",
    subtitle:
      "A visual journey through the residences, the exteriors and life on the coast of the fictional Mirador Azul development.",
    items: [
      { alt: "Main living room with open sea views" },
      { alt: "Designer kitchen with central island" },
      { alt: "Clear-water cove just a few minutes' walk away" },
      { alt: "Outdoor kitchen and dining area under the porch" },
      { alt: "Poolside sun deck at sunset" },
      { alt: "Master bedroom facing the bay" },
      { alt: "Dining terrace overlooking the coastline" },
      { alt: "Private spa with indoor pool" },
    ],
  },
  investment: {
    badge: "Investment context",
    title: "Figures with",
    titleAccent: "judgement",
    subtitle:
      "Indicative metrics presented as the analytical layer of the project. All figures are fictional and shown for demonstration purposes.",
    disclaimer: "Fictional data shown for demonstration purposes.",
    imageAlt: "Detail of local natural stone on the development's façade",
    metrics: [
      {
        value: "+28%",
        label: "Capital appreciation",
        detail: "Five-year growth projection (illustrative scenario)",
      },
      {
        value: "4.2%",
        label: "Rental yield",
        detail: "Estimated net annual return (illustrative scenario)",
      },
      {
        value: "€9,800/m²",
        label: "Market benchmark",
        detail: "Average price per m² in coastal prime residential (fictional reference)",
      },
    ],
  },
  location: {
    badge: "Location",
    title: "Southwest Coast,",
    titleAccent: "Mallorca",
    subtitle:
      "A fictional enclave inspired by the sandy coves and marinas of southwest Mallorca: clear-water coves, Mediterranean pine groves and an established nautical and gastronomic scene.",
    imageAlt: "Aerial view of Mallorca's southwest coast and its marina",
    points: [
      {
        title: "Sea",
        detail: "Pedestrian access to a cove and a yacht club just a few minutes' walk away.",
      },
      {
        title: "Nature",
        detail: "A protected Mediterranean pine grove as the backdrop to the ensemble.",
      },
      {
        title: "Connections",
        detail: "Comfortable access to Palma and its international airport.",
      },
    ],
  },
  contact: {
    badge: "Contact",
    title: "Open an",
    titleAccent: "enquiry",
    subtitle:
      "Tell us which residence interests you and we will send you the full dossier. This form is a simulation: no data is sent to any server.",
    fields: {
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "name@example.com",
      phone: "Phone",
      phonePlaceholder: "+34 600 000 000",
      budget: "Budget",
      budgetPlaceholder: "Select a range",
      budgetOptions: [
        "Under €1,000,000",
        "€1,000,000 – €1,500,000",
        "€1,500,000 – €2,500,000",
        "Over €2,500,000",
      ],
      message: "Message",
      messagePlaceholder: "Which residence interests you? When would you like to visit?",
    },
    submit: "Send enquiry",
    submitting: "Sending…",
    imageAlt: "Marina at sunset, a few minutes from Mirador Azul",
    imageTagline: "Life, by the sea",
    errors: {
      name: "Please enter your name (at least 2 characters).",
      email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number (7–15 digits).",
      budget: "Please select a budget range.",
      message: "Please write a message of at least 10 characters.",
    },
    successTitle: "Enquiry registered",
    successBody:
      "Thank you. This is a simulated confirmation: in a real environment you would receive the dossier by email. No data has left your browser.",
    successAgain: "Send another enquiry",
    simulationNote: "Simulated submission · data stays in your browser",
    eventsTitle: "Conversion events (simulated)",
    eventsEmpty: "Simulated conversion events will appear here.",
    eventsNote: "Local demonstration log — no real analytics.",
  },
  footer: {
    label: "Portfolio Showcase",
    disclaimerEs:
      "Demo de portfolio con datos ficticios. No contiene datos de producción ni código operativo completo.",
    disclaimerEn:
      "Portfolio demo using fictional data. It does not contain production data or the complete operational codebase.",
    repo: "GitHub repository",
  },
};

export const translations: Record<Locale, Translations> = { es, en };
