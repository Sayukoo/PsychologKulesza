'use client';

import { ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function HeroCta() {
  return (
    <a
      href="#booking"
      onClick={() => trackEvent({ action: 'cta_hero_click', category: 'Engagement', label: 'Hero Main CTA' })}
      className="group btn-shine relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[var(--color-primary)] bg-[#FAF7F2] border border-[var(--color-accent)] transition-all duration-300 shadow-lg hover:shadow-accent/25 rounded-lg overflow-hidden hover:brightness-90 cursor-pointer"
    >
      <span className="relative z-10 flex items-center">
        Sprawdź, czy to dla Ciebie (Bezpłatne 15 min)
        <ArrowRight className="ml-2 h-5 w-5 shrink-0 text-[var(--color-primary)] group-hover:translate-x-1 transition-transform" />
      </span>
    </a>
  );
}
