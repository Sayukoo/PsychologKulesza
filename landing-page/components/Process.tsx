import { Monitor, Clock, MessageSquare, AlertCircle, Video } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-sage)] relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-10 md:mb-16 text-center">
            Jak wygląda współpraca?<br />
            <span className="text-[var(--color-primary)]/80 text-xl md:text-2xl font-normal block mt-2">Zasady i forma spotkań</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              icon: Monitor,
              title: "Forma online",
              desc: "Spotykamy się przez wideorozmowę - oznacza to możliwość rozmowy z dowolnego miejsca, w którym czujesz się swobodnie.",
              color: "text-[var(--color-primary)]"
            },
            {
              icon: Clock,
              title: "Czas trwania",
              desc: "Standardowa konsultacja trwa 50-60 minut. W tym czasie, omówimy twoją sprawę, zanalizujemy i wypracujemy wnioski.",
              color: "text-[var(--color-primary)]"
            },
            {
              icon: MessageSquare,
              title: "Charakter rozmowy",
              desc: "Podchodzę do twojej sesji tak jakby miała być moją jedyną. Bazuje na modelu Single-Session Therapy, który skupia się na maksymalizacji wartości każdej rozmowy.",
              color: "text-[var(--color-primary)]"
            }
          ].map((step, idx) => (
            <StaggerItem key={idx} className="group flex flex-col items-center text-center p-6 md:p-8 border border-white/20 rounded-2xl bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-300 relative overflow-hidden h-full shadow-sm">
              <div className={`absolute top-0 w-full h-1 bg-[var(--color-primary)]/20`} />

              <div className={`p-4 rounded-full mb-4 md:mb-6 bg-white/50 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`h-8 w-8 md:h-10 md:w-10 text-[var(--color-primary)]`} />
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[var(--color-primary)]">{step.title}</h3>
              <p className="text-[var(--color-primary)]/80 leading-relaxed text-sm">
                {step.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Important Disclaimers */}
        <FadeIn direction="up">
          <div className="bg-[var(--color-primary)]/5 rounded-xl p-8 border border-[var(--color-primary)]/10 max-w-4xl mx-auto space-y-6">
             <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[var(--color-primary)] mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-2">To nie jest psychoterapia</h3>
                  <p className="text-[var(--color-primary)]/80 leading-relaxed">
                    Moje konsultacje mają charakter rozwojowy i edukacyjny. Nie prowadzę psychoterapii, nie leczę zaburzeń psychicznych ani nie wystawiam diagnoz klinicznych.
                  </p>
                </div>
             </div>

             <div className="w-full h-px bg-[var(--color-primary)]/10" />

             <div className="flex items-start gap-4">
                <Video className="w-6 h-6 text-[var(--color-primary)] mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-2">Nagrywanie spotkań</h3>
                  <p className="text-[var(--color-primary)]/80 leading-relaxed">
                    W celach zwiększenia jakości moich usług konsultacje są nagrywane wyłącznie za Twoją uprzednią, dobrowolną zgodą. Nagrania służą wyłącznie celom superwizyjnym i rozwojowym. Jako psycholog gwarantuję  poufność i ochronę Twoich danych.
                  </p>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
