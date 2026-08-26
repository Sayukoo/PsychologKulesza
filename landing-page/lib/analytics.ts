type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-GLRYY28TND', {
      page_path: url,
    });
  }
};

// Log specific events
export const trackEvent = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
    if (window.clarity) {
      try {
        window.clarity('event', action);
      } catch (err) {
        console.error('Clarity event error:', err);
      }
    }
  }
};
