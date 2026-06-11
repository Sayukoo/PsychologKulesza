import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { ArrowRight, PhoneCall, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

export default function OfferDetails() {
  return (
    <section
      id="cennik"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F4] relative border-t border-[#F0EDE7]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label justify-center mb-5 inline-flex">Cennik</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1923] mb-5">
              Jak zaczynamy?
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              Zawsze zaczynamy od krótkiej, bezpłatnej rozmowy — bez zobowiązań.
              Pełną sesję umawiamy dopiero wtedy, gdy oboje wiemy, że to ma sens.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Krok 1 — bezpłatna rozmowa */}
          <StaggerItem className="h-full">
            <div className="flex flex-col h-full bg-[#0F1923] text-[#FAF8F4] rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#C9A85C]/15 blur-3xl pointer-events-none" aria-hidden="true" />

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-white/10 border border-white/15">
                  <PhoneCall className="w-5 h-5 text-[#C9A85C]" strokeWidth={1.75} />
                </span>
                <p className="text-[#C9A85C] font-semibold text-sm uppercase tracking-wider">Krok 1</p>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                Bezpłatna konsultacja wstępna (15 minut)
              </h3>

              <div className="flex items-baseline gap-2 mb-6 relative z-10">
                <span className="text-sm text-white/60">Cena:</span>
                <span className="text-4xl font-bold text-white">0 zł</span>
              </div>

              <p className="text-white/75 leading-relaxed flex-grow relative z-10">
                Rozmawiamy przez telefon lub online, Ty opowiadasz o swojej sytuacji, a ja mówię,
                jak możemy to poukładać. Sprawdzasz, czy mój styl pracy Ci odpowiada. Tę rozmowę
                umówisz w kalendarzu na dole strony.
              </p>

              <div className="mt-8 pt-6 relative z-10">
                <Link
                  href="#booking"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C9A85C] text-white font-bold text-lg rounded-lg hover:bg-[#D4B56A] transition-colors shadow-lg cursor-pointer"
                >
                  Umów bezpłatną rozmowę
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </StaggerItem>

          {/* Krok 2 — pełna konsultacja */}
          <StaggerItem className="h-full">
            <div className="flex flex-col h-full bg-white rounded-2xl p-8 shadow-md border border-[#E8E3DA] card-hover">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-[#C9A85C]/10 border border-[#C9A85C]/25">
                  <ClipboardCheck className="w-5 h-5 text-[#C9A85C]" strokeWidth={1.75} />
                </span>
                <p className="text-[#C9A85C] font-semibold text-sm uppercase tracking-wider">Krok 2</p>
              </div>

              <h3 className="text-2xl font-bold text-[#0F1923] mb-4">
                Pełna konsultacja decyzyjna (60 minut)
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-[#6B7280]">Cena:</span>
                <span className="text-4xl font-bold text-[#0F1923]">150 zł</span>
              </div>

              <p className="text-[#374151] leading-relaxed flex-grow">
                Intensywna praca 1:1 nad Twoim problemem online. Przechodzimy przez analizę opcji
                i kończymy z gotowym planem działania. Termin na tę sesję ustalamy wspólnie po
                naszej pierwszej, krótkiej rozmowie.
              </p>

              <div className="mt-8 pt-6">
                <div className="w-full text-center text-sm text-[#6B7280] bg-[#FAF8F4] border border-[#E8E3DA] rounded-lg px-4 py-3.5">
                  Termin ustalamy po bezpłatnej rozmowie wstępnej
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
