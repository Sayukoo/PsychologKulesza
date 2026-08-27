import { Check, X } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

// ── CUSTOM BESPOKE VECTOR SVG ICONS ───────────────────────────────────

function LoopAnalysisIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Infinite loop / orbit with arrow */}
      <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C15.5 20 18.45 17.76 19.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 9.5C19.2 6.3 16.4 4 13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.75" fill="currentColor" />
      <path d="M18 16L20 13.5L22 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DecisionStructureIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Structural fork with directional milestones */}
      <path d="M12 21V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 12L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 12L19 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="21" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="6" r="2" fill="currentColor" />
      <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
      <path d="M9 16.5H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function MentalTensionIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Pulse / tension wave with node */}
      <path d="M3 12H6.5L8.5 7L12 17L15.5 9L17.5 13H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" />
      <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function ConcreteSolutionIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Precision focus grid with bullseye */}
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.75" fill="currentColor" />
      <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClinicalTherapyIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Minimalist clinical cross */}
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M8 8L16 16" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2" opacity="0.3" />
    </svg>
  );
}

function PassiveTalkIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Chat bubble with ellipsis */}
      <path d="M19 14C20.1 12.8 20.7 11.2 20.5 9.5C20.1 5.9 17 3 13.4 3C9.3 3 6 6.4 6 10.5C6 11.9 6.4 13.2 7.1 14.3L5 20L11 18.2C11.8 18.4 12.6 18.5 13.4 18.5C14.7 18.5 16 18.1 17 17.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10.5" r="1" fill="currentColor" />
      <circle cx="13.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="17" cy="10.5" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function MagicRecipeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Document / Prescription scroll with wand star */}
      <path d="M14 3H6C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V9L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3V9H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 17H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16 14L17 16L19 17L17 18L16 20L15 18L13 17L15 16L16 14Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

const yesItems = [
  { icon: LoopAnalysisIcon, text: 'Kręcisz się w kółko, analizując w nieskończoność te same scenariusze.' },
  { icon: DecisionStructureIcon, text: 'Stoisz przed konkretną decyzją i potrzebujesz struktury, żeby ją podjąć.' },
  { icon: MentalTensionIcon, text: 'Doświadczasz paraliżu decyzyjnego i przewlekłego napięcia mentalnego.' },
  { icon: ConcreteSolutionIcon, text: 'Szukasz konkretnych wniosków i rozwiązań, a nie tylko emocjonalnego wsparcia.' },
];

const noItems = [
  { icon: ClinicalTherapyIcon, text: 'Szukasz leczenia klinicznego, farmakoterapii lub psychoterapii.' },
  { icon: PassiveTalkIcon, text: 'Chcesz pogadać bez intencji wprowadzania realnych zmian.' },
  { icon: MagicRecipeIcon, text: 'Oczekujesz gotowej recepty na życie i decyzji podjętej za Ciebie.' },
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
          {/* YES column — soft gold wash */}
          <FadeIn>
            <div className="bg-[#C9A85C]/[0.06] rounded-2xl border border-[#C9A85C]/20 overflow-hidden h-full">
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
                      <div className="shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-white/90 border border-[#C9A85C]/25 shadow-xs flex items-center justify-center text-[#C9A85C] group-hover:scale-105 group-hover:border-[#C9A85C] group-hover:bg-white transition-all duration-200">
                        <it.icon className="w-5 h-5" />
                      </div>
                      <p className="text-[#374151] text-base leading-relaxed pt-1.5">{it.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* NO column — neutral wash */}
          <FadeIn delay={0.15}>
            <div className="bg-[#0F1923]/[0.045] rounded-2xl border border-[#0F1923]/10 overflow-hidden h-full flex flex-col">
              <div className="px-6 sm:px-8 py-5 border-b border-[#0F1923]/10 flex items-center gap-3">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-[#0F1923]/10 border border-[#0F1923]/15 shrink-0">
                  <X className="w-4 h-4 text-[#6B7280]" strokeWidth={2.5} />
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#6B7280]">To NIE jest dla Ciebie, jeśli:</p>
              </div>
              <StaggerContainer delay={0.1} className="p-6 sm:p-8 space-y-5 sm:space-y-7 flex-grow">
                {noItems.map((it, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-4 group cursor-default">
                      <div className="shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-white/60 border border-[#E8E3DA] shadow-2xs flex items-center justify-center text-[#9CA3AF] group-hover:text-[#6B7280] group-hover:bg-white transition-all duration-200">
                        <it.icon className="w-5 h-5" />
                      </div>
                      <p className="text-[#6B7280] text-base leading-relaxed pt-1.5">{it.text}</p>
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

