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
    <section id="dla-kogo" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F4]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12 md:mb-20">
            <span className="section-label mb-5 inline-flex">Dla kogo</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1923] leading-tight tracking-tight">
              To nie są konsultacje<br className="hidden sm:block" /> dla każdego
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* YES column — soft wash, carved into the background */}
          <FadeIn>
            <div className="bg-[#C9A85C]/[0.06] overflow-hidden h-full">
              <div className="px-6 sm:px-8 py-5 border-b border-[#C9A85C]/20 flex items-center gap-3">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-[#C9A85C]/15 border border-[#C9A85C]/30 shrink-0">
                  <Check className="w-4 h-4 text-[#C9A85C]" strokeWidth={2.5} />
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#0F1923]">Jeżeli:</p>
              </div>
              <StaggerContainer className="p-6 sm:p-8 space-y-5 sm:space-y-7">
                {yesItems.map((it, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-4 group cursor-default">
                      <div className="shrink-0 mt-0.5 p-2.5 bg-[#C9A85C]/[0.08] group-hover:bg-[#C9A85C]/[0.14] transition-colors duration-200">
                        <it.icon className="w-5 h-5 text-[#C9A85C]" strokeWidth={1.5} />
                      </div>
                      <p className="text-[#374151] text-base leading-relaxed pt-0.5">{it.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* NO column — neutral wash */}
          <FadeIn delay={0.15}>
            <div className="bg-[#0F1923]/[0.045] overflow-hidden h-full flex flex-col">
              <div className="px-6 sm:px-8 py-5 border-b border-[#0F1923]/10 flex items-center gap-3">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-[#0F1923]/10 border border-[#0F1923]/15 shrink-0">
                  <X className="w-4 h-4 text-[#6B7280]" strokeWidth={2.5} />
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#6B7280]">To NIE jest dla Ciebie, jeśli:</p>
              </div>
              <StaggerContainer delay={0.1} className="p-6 sm:p-8 space-y-5 sm:space-y-7 flex-grow">
                {noItems.map((it, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 mt-0.5">
                        <it.icon className="w-5 h-5 text-[#9CA3AF]" strokeWidth={1.5} />
                      </div>
                      <p className="text-[#9CA3AF] text-base leading-relaxed pt-0.5">{it.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mx-6 sm:mx-8 mb-6 sm:mb-8">
                <p className="text-sm text-[#6B7280] pl-4 border-l-2 border-[#C9A85C]/50 leading-relaxed">
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
