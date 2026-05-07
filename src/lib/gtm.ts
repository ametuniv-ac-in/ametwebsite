// Declare dataLayer type
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// Initialize dataLayer
export const initGTM = () => {
  window.dataLayer = window.dataLayer || [];
};

// Track page view
export const trackPageView = (data: {
  pageTitle: string;
  pageUrl: string;
  pagePath: string;
}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_title: data.pageTitle,
    page_location: data.pageUrl,
    page_path: data.pagePath,
  });
};

// Track CTA clicks
export const trackCTAClick = (data: {
  ctaName: string;
  ctaLocation: string;
  ctaDestination?: string;
}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'cta_click',
    cta_name: data.ctaName,
    cta_location: data.ctaLocation,
    cta_destination: data.ctaDestination,
  });
};

// Track form submissions
export const trackFormSubmission = (data: {
  formName: string;
  formLocation: string;
}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'form_submission',
    form_name: data.formName,
    form_location: data.formLocation,
  });
};

// Track cookie consent actions
export const trackCookieConsent = (action: 'accept' | 'decline') => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'cookie_consent',
    consent_action: action,
  });
};
