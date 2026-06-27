type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-GLRYY28TND', {
      page_path: url,
    });
  }
};

// Log specific events
export const trackEvent = ({ action, category, label, value, ...rest }: GtagEvent) => {
  if (typeof window !== 'undefined') {
    if ((window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...rest,
      });
    }
    if ((window as any).clarity) {
      try {
        (window as any).clarity('event', action);
      } catch (err) {
        console.error('Clarity event error:', err);
      }
    }
  }
};
