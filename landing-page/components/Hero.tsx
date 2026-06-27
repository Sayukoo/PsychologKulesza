'use client';

import { ArrowRight, GraduationCap, Users, ShieldCheck } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './FadeIn';
import { WavyBackground } from './ui/wavy-background';
import { trackEvent } from '@/lib/analytics';

const trustItems = [
  { icon: GraduationCap, label: 'Magister psychologii' },
  { icon: Users, label: '7 lat pracy z młodzieżą i dydaktyki' },
  { icon: ShieldCheck, label: 'Pełna poufność rozmowy' },
];

export default function Hero() {
  return (
    <section
      id="start"
      className="relative w-full min-h-screen min-h-[100svh] flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-primary-foreground)] overflow-hidden pt-32 pb-20 md:pt-28 md:pb-20"
    >
      <WavyBackground
        containerClassName="absolute inset-0 z-0 pointer-events-none"
        colors={['#C6A75E', '#9FB6A1', '#B59E5D', '#6B7280']}
        backgroundFill="#111827"
        waveOpacity={0.16}
        waveWidth={60}
        blur={6}
        speed="slow"
        waveCount={4}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <StaggerContainer className="max-w-4xl">

          <StaggerItem>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#FAF7F2] mb-6 leading-[1.15] sm:leading-[1.1]">
              Utknąłeś w myślach i nie możesz podjąć decyzji? <br />
              <span className="text-gray-300">
                W <span className="text-[var(--color-accent)]">60 minut</span> uporządkujemy chaos
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Spokojna, ustrukturyzowana rozmowa, po której wiesz, jaki jest Twój następny krok.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                onClick={() => trackEvent({ action: 'cta_hero_click', category: 'Engagement', label: 'Hero Main CTA' })}
                className="group btn-shine relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[var(--color-primary)] bg-[#FAF7F2] border border-[var(--color-accent)] transition-all duration-300 shadow-lg hover:shadow-accent/25 rounded-sm overflow-hidden hover:brightness-90 cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  Sprawdź, czy to dla Ciebie (Bezpłatne 15 min)
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0 text-[var(--color-primary)] group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </StaggerItem>

          {/* Trust strip */}
          <StaggerItem>
            <div className="mt-14 pt-8 border-t border-white/10">
              <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                {trustItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="grid place-items-center h-9 w-9 rounded-full bg-white/10 border border-white/15 shrink-0">
                      <item.icon className="w-4 h-4 text-[var(--color-accent)]" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-white/85">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
