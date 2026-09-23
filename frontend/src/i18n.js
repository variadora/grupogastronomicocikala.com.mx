import React, { createContext, useContext, useState, useCallback } from "react";

export const translations = {
  es: {
    nav: { about: "Nosotros", services: "Servicios", products: "Productos", contact: "Contacto", cta: "Cotizar" },
    hero: {
      eyebrow: "Intermediarios de comercio al por mayor",
      line1: "Abastecemos",
      line2: "la gastronomía",
      line3: "que mueve al mundo",
      sub: "Grupo Gastronómico Cikala conecta a productores, distribuidores y cocinas profesionales con un catálogo variado de insumos de grado premium — al por mayor.",
      ctaPrimary: "Solicitar catálogo",
      ctaSecondary: "Conocer servicios",
      scroll: "Desliza",
    },
    stats: [
      { value: "12+", label: "Categorías de producto" },
      { value: "300+", label: "Clientes mayoristas" },
      { value: "48h", label: "Entrega promedio" },
      { value: "100%", label: "Trazabilidad de origen" },
    ],
    about: {
      eyebrow: "Nosotros",
      title: "Un socio de abasto, no solo un proveedor",
      lead: "Grupo Gastronómico Cikala, S.A.S. de C.V. es una casa de intermediación de comercio al por mayor. Operamos como el puente estratégico entre el origen del producto y la mesa del cliente.",
      body: "Seleccionamos, consolidamos y distribuimos un giro variado de insumos — desde especias e ingredientes gourmet hasta líneas de abarrotes y suministros para cocina profesional. Nuestro modelo elimina intermediarios innecesarios, garantizando frescura, volumen y precio competitivo.",
      pillars: [
        { t: "Origen curado", d: "Relaciones directas con productores verificados." },
        { t: "Escala mayorista", d: "Volumen consolidado sin sacrificar calidad." },
        { t: "Logística ágil", d: "Distribución precisa y trazable puerta a puerta." },
      ],
    },
    marquee: ["Ingredientes Premium", "Abasto Global", "Comercio al Por Mayor", "Gastronomía", "Trazabilidad", "Distribución"],
    services: {
      eyebrow: "Servicios",
      title: "Toda la cadena de abasto, integrada",
      sub: "Un giro variado de soluciones mayoristas diseñadas para negocios que no pueden fallar.",
      items: [
        { t: "Sourcing & Curaduría", d: "Búsqueda, negociación y selección de productos en origen con estándares de calidad auditados.", tag: "01" },
        { t: "Distribución & Logística", d: "Red de almacenamiento y transporte con control de temperatura y entregas programadas.", tag: "02" },
        { t: "Suministro Continuo", d: "Contratos de abasto recurrente para cocinas, hoteles y cadenas con inventario garantizado.", tag: "03" },
        { t: "Importación & Comercio", d: "Gestión aduanal y comercio internacional para líneas de producto especializadas.", tag: "04" },
      ],
    },
    products: {
      eyebrow: "Productos",
      title: "CIKALA Select",
      sub: "Una colección variada de líneas mayoristas, curada por nuestro equipo de compras.",
      items: [
        { t: "Especias & Condimentos", d: "Selección global, molida y en grano." },
        { t: "Abarrotes & Secos", d: "Granos, harinas y despensa por volumen." },
        { t: "Frescos & Vegetales", d: "Producto de temporada, origen verificado." },
        { t: "Insumos de Cocina", d: "Suministros para operación profesional." },
      ],
      cta: "Ver catálogo completo",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      sub: "Cuéntanos qué necesitas abastecer. Respondemos en menos de 24 horas hábiles.",
      name: "Nombre",
      email: "Correo electrónico",
      company: "Empresa",
      message: "¿Qué buscas abastecer?",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      success: "¡Gracias! Tu solicitud fue recibida. Te contactaremos pronto.",
      error: "Ocurrió un error. Intenta de nuevo.",
      infoTitle: "Oficinas corporativas",
      address: "Ciudad de México, México",
      phone: "+52 55 0000 0000",
      mail: "ventas@cikala.mx",
    },
    footer: {
      tagline: "Intermediarios de comercio al por mayor.",
      rights: "Todos los derechos reservados.",
      nav: "Navegación",
      legal: "Legal",
      privacy: "Aviso de privacidad",
      terms: "Términos",
    },
  },
  en: {
    nav: { about: "About", services: "Services", products: "Products", contact: "Contact", cta: "Get a quote" },
    hero: {
      eyebrow: "Wholesale commerce intermediaries",
      line1: "We supply",
      line2: "the gastronomy",
      line3: "that moves the world",
      sub: "Grupo Gastronómico Cikala connects producers, distributors and professional kitchens with a varied catalog of premium-grade supplies — at wholesale.",
      ctaPrimary: "Request catalog",
      ctaSecondary: "Explore services",
      scroll: "Scroll",
    },
    stats: [
      { value: "12+", label: "Product categories" },
      { value: "300+", label: "Wholesale clients" },
      { value: "48h", label: "Average delivery" },
      { value: "100%", label: "Origin traceability" },
    ],
    about: {
      eyebrow: "About us",
      title: "A supply partner, not just a vendor",
      lead: "Grupo Gastronómico Cikala, S.A.S. de C.V. is a wholesale commerce intermediary. We operate as the strategic bridge between product origin and the client's table.",
      body: "We select, consolidate and distribute a varied line of supplies — from spices and gourmet ingredients to grocery lines and professional kitchen supplies. Our model removes unnecessary middlemen, guaranteeing freshness, volume and competitive pricing.",
      pillars: [
        { t: "Curated origin", d: "Direct relationships with verified producers." },
        { t: "Wholesale scale", d: "Consolidated volume without sacrificing quality." },
        { t: "Agile logistics", d: "Precise, traceable door-to-door distribution." },
      ],
    },
    marquee: ["Premium Ingredients", "Global Sourcing", "Wholesale", "Gastronomy", "Traceability", "Distribution"],
    services: {
      eyebrow: "Services",
      title: "The full supply chain, integrated",
      sub: "A varied line of wholesale solutions built for businesses that cannot fail.",
      items: [
        { t: "Sourcing & Curation", d: "Discovery, negotiation and selection at origin with audited quality standards.", tag: "01" },
        { t: "Distribution & Logistics", d: "Warehousing and transport network with temperature control and scheduled deliveries.", tag: "02" },
        { t: "Continuous Supply", d: "Recurring supply contracts for kitchens, hotels and chains with guaranteed inventory.", tag: "03" },
        { t: "Import & Trade", d: "Customs management and international trade for specialized product lines.", tag: "04" },
      ],
    },
    products: {
      eyebrow: "Products",
      title: "CIKALA Select",
      sub: "A varied collection of wholesale lines, curated by our purchasing team.",
      items: [
        { t: "Spices & Seasonings", d: "Global selection, ground and whole." },
        { t: "Groceries & Dry Goods", d: "Grains, flours and pantry by volume." },
        { t: "Fresh & Produce", d: "Seasonal product, verified origin." },
        { t: "Kitchen Supplies", d: "Supplies for professional operations." },
      ],
      cta: "See full catalog",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      sub: "Tell us what you need to source. We reply within 24 business hours.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "What do you need to source?",
      submit: "Send request",
      sending: "Sending...",
      success: "Thank you! Your request was received. We'll be in touch soon.",
      error: "Something went wrong. Please try again.",
      infoTitle: "Corporate offices",
      address: "Mexico City, Mexico",
      phone: "+52 55 0000 0000",
      mail: "sales@cikala.mx",
    },
    footer: {
      tagline: "Wholesale commerce intermediaries.",
      rights: "All rights reserved.",
      nav: "Navigation",
      legal: "Legal",
      privacy: "Privacy notice",
      terms: "Terms",
    },
  },
};

const I18nContext = createContext(null);

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  const toggle = useCallback(() => setLang((l) => (l === "es" ? "en" : "es")), []);
  const t = translations[lang];
  return <I18nContext.Provider value={{ lang, setLang, toggle, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
