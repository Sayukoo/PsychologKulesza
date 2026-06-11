import { Brain, Signpost, Zap, Target, Stethoscope, MessageSquare, Scroll, Check, X } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

const yesItems = [
  { icon: Brain, text: 'Kręcisz się w kółko, analizując w nieskończoność te same scenariusze.' },
  { icon: Signpost, text: 'Stoisz przed konkretną decyzją i potrzebujesz struktury, żeby ją podjąć.' },
  { icon: Zap, text: 'Doświadczasz paraliżu decyzyjnego i przewlekłego napięcia mentalnego.' },
  { icon: Target, text: 'Szukasz konkretnych wniosków i rozwiązań, a nie tylko emocjonalnego wsparcia.' },
];

const noItems = [
  { icon: Stethoscope, text: 'Szukasz leczenia klinicznego, farmakoterapii lub psychoterapii.' },
  { icon: MessageSquare, text: 'Chcesz pogadać bez intencji wprowadzania realnych zmian.' },
  { icon: Scroll, text: 'Oczekujesz gotowej recepty na życie i decyzji podjętej za Ciebie.' },
];

export default function TargetAudience() {
  return (
    <section id="dla-kogo" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#FAF8F4]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="section-label mb-5 inline-flex">Dla kogo</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1923] leading-tight tracking-tight">
              To nie są konsultacje<br className="hidden sm:block" /> dla każdego
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* YES column */}
          <FadeIn>
            <div className="bg-white rounded-2xl border border-[#E8E3DA] shadow-sm overflow-hidden h-full">
              <div className="px-8 py-6 border-b border-[#E8E3DA] flex items-center gap-3 bg-[#C9A85C]/[0.04]">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-[#C9A85C]/10 border border-[#C9A85C]/25">
                  <Check className="w-4 h-4 text-[#C9A85C]" strokeWidth={2.5} />
                </span>
                <p className="font-serif text-xl font-bold text-[#0F1923]">Pracuję z osobami, które:</p>
              </div>
              <StaggerContainer className="p-8 space-y-7">
                {yesItems.map((it, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-5 group cursor-default">
                      <div className="shrink-0 mt-0.5 p-2.5 rounded-xl bg-[#FAF8F4] border border-[#E8E3DA] group-hover:border-[#C9A85C]/40 group-hover:bg-[#C9A85C]/5 transition-all duration-200">
                        <it.icon className="w-5 h-5 text-[#C9A85C]" strokeWidth={1.5} />
                      </div>
                      <p className="text-[#374151] text-base leading-relaxed pt-0.5">{it.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* NO column */}
          <FadeIn delay={0.15}>
            <div className="bg-[#F7F5F1] rounded-2xl border border-[#E8E3DA] overflow-hidden h-full">
              <div className="px-8 py-6 border-b border-[#E8E3DA] flex items-center gap-3">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-[#D1C8B8] border border-[#C4BCB0]">
                  <X className="w-4 h-4 text-[#6B7280]" strokeWidth={2.5} />
                </span>
                <p className="font-serif text-xl font-bold text-[#6B7280]">To NIE jest dla Ciebie, jeśli:</p>
              </div>
              <StaggerContainer delay={0.1} className="p-8 space-y-7">
                {noItems.map((it, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 mt-0.5">
                        <it.icon className="w-5 h-5 text-[#9CA3AF]" strokeWidth={1.5} />
                      </div>
                      <p className="text-[#9CA3AF] text-base leading-relaxed pt-0.5">{it.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="px-8 pb-8">
                <p className="text-sm text-[#9CA3AF] bg-white rounded-xl p-4 border border-[#E8E3DA] leading-relaxed">
                  Jeśli potrzebujesz psychoterapii lub wsparcia klinicznego — chętnie wskażę Ci sprawdzone miejsca.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
