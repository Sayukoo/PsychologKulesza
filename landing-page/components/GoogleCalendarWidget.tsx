'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function GoogleCalendarWidget() {
  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const handleCalendlyMessage = (e: MessageEvent) => {
      if (e.data && e.data.event && e.data.event.indexOf('calendly.') === 0) {
        const action = e.data.event.replace('.', '_');
        trackEvent({
          action,
          category: 'Booking',
          label: 'Calendly Widget',
        });
      }
    };

    window.addEventListener('message', handleCalendlyMessage);
    return () => {
      window.removeEventListener('message', handleCalendlyMessage);
    };
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/kacperkulesza/15min?hide_event_type_details=1&hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}
