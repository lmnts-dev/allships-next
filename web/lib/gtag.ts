// Begin Component
//////////////////////////////////////////////////////////////////////

export const GA_TRACKING_ID = "GTM-P9NSK4D";

declare global {
  interface Window {
    gtag: any;
  }
}

type GoogleTagEvent = {
  action: any;
  params: any;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// See: https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, params }: GoogleTagEvent) => {
  if (typeof window !== "undefined") {
    window.gtag("event", action, params);
  }
};
