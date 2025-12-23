'use client';

import { useEffect, useRef } from 'react';

export default function ZnanyLekarzWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load the script if the container exists and script isn't already loaded
    if (containerRef.current && !document.getElementById('zl-widget-s')) {
      const script = document.createElement('script');
      script.id = 'zl-widget-s';
      script.src = '//platform.docplanner.com/js/widget.js';
      script.async = true;

      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.znanylekarz.pl/kacper-kulesza/psycholog/pruszkow"
        rel="nofollow"
        data-zlw-doctor="kacper-kulesza"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
        data-zlw-a11y-title="Widget umówienia wizyty lekarskiej"
      >
        Kacper Kulesza - ZnanyLekarz.pl
      </a>
    </div>
  );
}
