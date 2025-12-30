'use client';

import { useEffect } from 'react';

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

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/easystats/15min?hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '1100px' }}
      />
    </div>
  );
}
