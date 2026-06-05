import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OfferDetails() {
  return (
    <section id="cennik" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Jak zaczynamy?
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Krok 1 */}
          <StaggerItem className="h-full relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md z-10 whitespace-nowrap">
              Najczęściej wybierane na start
            </div>
            <div className="flex flex-col h-full bg-primary text-primary-foreground rounded-2xl p-8 shadow-2xl border-2 border-accent relative ring-4 ring-accent/10">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Krok 1
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                Bezpłatna konsultacja wstępna (15 minut)
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-gray-300">Cena:</span>
                <span className="text-4xl font-bold text-white">0 zł</span>
              </div>

              <p className="text-gray-300 leading-relaxed flex-grow">
                Rozmawiamy przez telefon lub online, Ty opowiadasz o swojej sytuacji, a ja mówię,
                jak możemy to poukładać. Sprawdzasz, czy mój styl pracy Ci odpowiada. Tę rozmowę
                umówisz w kalendarzu na dole strony.
              </p>

              <div className="mt-8 pt-6">
                <Link
                  href="#booking"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-[#D4B56A] transition-all shadow-lg hover:shadow-accent/40 btn-shine animate-[pulse_2.5s_ease-in-out_infinite]"
                >
                  Umów bezpłatną rozmowę
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </StaggerItem>

          {/* Krok 2 */}
          <StaggerItem className="h-full">
            <div className="flex flex-col h-full bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)]">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Krok 2
              </p>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Pełna konsultacja decyzyjna (60 minut)
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-muted">Cena:</span>
                <span className="text-4xl font-bold text-primary">150 zł</span>
              </div>

              <p className="text-primary/80 leading-relaxed flex-grow">
                Intensywna praca 1:1 nad Twoim problemem online. Przechodzimy przez analizę opcji
                i kończymy z gotowym planem działania. Termin na tę sesję ustalamy wspólnie po
                naszej pierwszej, krótkiej rozmowie.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
