"use client";

// Definição global para os objetos do window
declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    ttq: any;
  }
}

/**
 * Função utilitária para capturar parâmetros UTM da URL e salvar no localStorage
 */
export const captureUTMs = () => {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  
  let hasUtms = false;
  const utmData: Record<string, string> = {};

  utms.forEach((utm) => {
    const value = urlParams.get(utm);
    if (value) {
      utmData[utm] = value;
      hasUtms = true;
    }
  });

  if (hasUtms) {
    sessionStorage.setItem("vila_sonhos_utms", JSON.stringify(utmData));
  }
};

/**
 * Retorna os UTMs salvos
 */
export const getUTMs = () => {
  if (typeof window === "undefined") return {};
  const saved = sessionStorage.getItem("vila_sonhos_utms");
  return saved ? JSON.parse(saved) : {};
};

/**
 * Função central para disparar eventos para o DataLayer (GTM/GA4)
 */
export const pushToDataLayer = (eventName: string, eventData: any = {}) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    
    // Adiciona UTMs automaticamente aos eventos
    const utms = getUTMs();
    
    window.dataLayer.push({
      event: eventName,
      ...eventData,
      ...utms,
      timestamp: new Date().toISOString(),
    });
  }
};

/**
 * Função central para disparar eventos para o Meta Pixel
 */
export const pushToMetaPixel = (eventName: string, eventData: any = {}, custom = false) => {
  if (typeof window !== "undefined" && window.fbq) {
    if (custom) {
      window.fbq('trackCustom', eventName, eventData);
    } else {
      window.fbq('track', eventName, eventData);
    }
  }
};

/**
 * Função central para disparar eventos para o TikTok Pixel
 */
export const pushToTikTokPixel = (eventName: string, eventData: any = {}) => {
  if (typeof window !== "undefined" && window.ttq) {
    window.ttq.track(eventName, eventData);
  }
};

// ==========================================
// EVENTOS ESPECÍFICOS (Funções Utilitárias)
// ==========================================

export const trackPageView = (url: string) => {
  pushToDataLayer("page_view", { page_url: url });
  pushToMetaPixel("PageView");
};

export const trackViewProduct = (product: { id: string; name: string; price: number; brand: string; categoryName: string }) => {
  const data = {
    content_name: product.name,
    content_ids: [product.id],
    content_type: 'product',
    value: product.price,
    currency: 'BRL',
    content_category: product.categoryName,
    brand: product.brand
  };

  pushToDataLayer("view_item", data);
  pushToMetaPixel("ViewContent", data);
  pushToTikTokPixel("ViewContent", data);
};

export const trackViewCategory = (categoryName: string) => {
  const data = { content_category: categoryName };
  pushToDataLayer("view_item_list", data);
  pushToMetaPixel("ViewCategory", data, true);
};

export const trackSelectSize = (size: string, productName: string) => {
  const data = { size, product_name: productName };
  pushToDataLayer("select_size", data);
  pushToMetaPixel("SelectSize", data, true);
};

export const trackWhatsAppClick = (context: string, productData?: any) => {
  const data = {
    button_location: context,
    ...productData,
  };

  pushToDataLayer("click_whatsapp", data);
  pushToMetaPixel("Lead", { content_name: "WhatsApp Contact", ...data });
  pushToTikTokPixel("ClickButton", data);
  pushToTikTokPixel("Contact", data);
};

export const trackCtaClick = (buttonText: string, section: string, page: string) => {
  const data = { button_text: buttonText, section, page };
  pushToDataLayer("cta_click", data);
};
