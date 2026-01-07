'use client';

import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { StarsBackground } from './StarsBackground';

const COMPARISON = [
  {
    title: 'Rozmowa jest',
    icon: CheckCircle2,
    color: 'text-accent',
    features: [
      'uważna, ale konkretna',
      'oparta na psychologii i badaniach',
      'bez ocen, ale też bez udawania, że wszystko jest OK'
    ]
  },
  {
    title: 'Zasady współpracy',
    icon: ShieldCheck,
    color: 'text-white',
    features: [
      'Nie ciągnę procesu na siłę',
      'Nie buduję zależności',
      'Każde spotkanie ma mieć realną wartość samo w sobie'
    ]
  }
];

export default function Why() {
  return (
    <section id="why" className="relative py-24 bg-primary overflow-hidden">
      <StarsBackground />

      <div className="relative z-10 container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 uppercase tracking-wider">
              JAK PRACUJĘ
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COMPARISON.map((item, index) => (
            <StaggerItem key={index}>
              <div className={`h-full p-8 md:p-12 border transition-all duration-300 rounded-xl ${
                index === 0
                  ? 'bg-white/10 border-accent/50 shadow-2xl shadow-accent/10'
                  : 'bg-white/5 border-white/10'
              }`}>
                <div className="flex items-center gap-4 mb-8">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>

                <ul className="space-y-6">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300">
                      <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${index === 0 ? 'bg-accent' : 'bg-slate-500'}`} />
                      <span className="text-xl leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
