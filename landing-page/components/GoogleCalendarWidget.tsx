'use client';

import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

function CalendarSkeleton() {
  return (
    <div className="w-full h-[700px] rounded-lg bg-white/60 animate-pulse flex flex-col items-center justify-center gap-4" aria-hidden="true">
      <div className="h-10 w-10 rounded-full border-4 border-[#C9A85C]/25 border-t-[#C9A85C] animate-spin" />
      <p className="text-sm text-[#6B7280] font-medium">Ładowanie kalendarza…</p>
    </div>
  );
}

export default function GoogleCalendarWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Load the heavy Calendly script + iframe only when the user is about to
  // reach the booking section — keeps initial page load light.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      const id = window.setTimeout(() => setShouldLoad(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const scriptId = 'calendly-widget-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, [shouldLoad]);

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
    <div ref={containerRef} className="w-full rounded-lg overflow-hidden">
      {shouldLoad ? (
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/kacperkulesza/15min?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        />
      ) : (
        <CalendarSkeleton />
      )}
    </div>
  );
}
