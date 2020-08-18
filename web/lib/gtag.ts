// Begin Component
//////////////////////////////////////////////////////////////////////

export const GA_TRACKING_ID = "GTM-W9PHLBC";

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
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, params }: GoogleTagEvent) => {
  window.gtag("event", action, params);
};
