'use client';

import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { Clock, Video, Calendar, ShieldAlert, BadgeInfo, Wallet, Mic } from 'lucide-react';

export default function OfferDetails() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Szczegóły współpracy
            </h2>
            <p className="text-xl text-slate-600">
              Przejrzyste zasady, brak ukrytych kosztów i zobowiązań.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Column 1: Forma Spotkań */}
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 h-full flex flex-col">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Forma spotkań
              </h3>

              <ul className="space-y-4 text-slate-600 flex-grow">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block">Czas trwania</strong>
                    60 minut
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Video className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block">Forma</strong>
                    Spotkanie online (wideorozmowa)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block">Częstotliwość</strong>
                    Pojedyncze spotkania lub według potrzeby
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100 text-sm text-slate-500 italic">
                "Możesz przyjść raz. Możesz wrócić. Nie ma „pakietów” ani zobowiązań."
              </div>
            </div>
          </FadeIn>

          {/* Column 2: Ważne Informacje */}
          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 h-full flex flex-col">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <BadgeInfo className="h-5 w-5 text-accent" />
                Ważne informacje
              </h3>

              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-slate-400" />
                    To nie jest psychoterapia
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Konsultacje mają charakter rozwojowy i edukacyjny. Nie prowadzę leczenia, nie stawiam diagnoz klinicznych.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Mic className="h-4 w-4 text-slate-400" />
                    Nagrywanie spotkań
                  </h4>
                  <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside marker:text-accent">
                    <li>Tylko za Twoją wyraźną i dobrowolną zgodą</li>
                    <li>Wyłącznie do celów rozwojowych i superwizyjnych</li>
                    <li>Poufność i bezpieczeństwo danych są podstawą</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Column 3: Cena */}
          <FadeIn delay={0.3}>
            <div className="bg-primary p-8 rounded-xl shadow-lg border border-primary h-full flex flex-col text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/20 transition-colors" />

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                <Wallet className="h-5 w-5 text-accent" />
                Inwestycja
              </h3>

              <div className="flex-grow space-y-8 relative z-10">
                <div>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                    Aktualna cena (pilotażowa)
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">50 zł</span>
                    <span className="text-slate-400">/ 60 min</span>
                  </div>
                  <p className="text-slate-300 text-sm mt-3">
                    W ramach rozwijania praktyki i zbierania opinii.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 opacity-70">
                   <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">
                    Cena docelowa
                  </p>
                  <div className="flex items-baseline gap-2">
                     <span className="text-2xl font-bold text-white line-through decoration-slate-500/50">250–300 zł</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-2">
                    Po zamknięciu puli pilotażowej cena ulegnie zmianie.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
