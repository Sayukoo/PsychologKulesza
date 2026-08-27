import { Clock, Video, ShieldCheck } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

const steps = [
  {
    number: '1',
    title: 'Zbieramy fakty',
    time: '10–15 min',
    description: 'Porządkujemy to, co się wydarzyło i co jest teraz. Oddzielamy fakty od interpretacji i lęku.',
  },
  {
    number: '2',
    title: 'Analizujemy opcje',
    time: '25–30 min',
    description: 'Rozkładamy możliwe scenariusze. Sprawdzamy konsekwencje, koszty i zyski.',
  },
  {
    number: '3',
    title: 'Dochodzimy do wniosku',
    time: '10–15 min',
    description: 'Formułujemy jedną kluczową decyzję, wniosek lub następny krok, który możesz wdrożyć po spotkaniu.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F4] text-[#0F1923] relative overflow-hidden"
    >
      {/* ── Soft, warm diffused orange/peach/gold ambient glow (Zero borders, pure blending) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Central soft warm aura matching user reference */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[800px] h-[450px] rounded-full bg-gradient-to-tr from-[#E89E58]/16 via-[#C9A85C]/14 to-[#F7C68B]/18 blur-[110px]" />
        {/* Secondary gentle ambient glow */}
        <div className="absolute bottom-16 right-1/4 w-[500px] h-[350px] rounded-full bg-[#E59866]/12 blur-[120px]" />
        <div className="absolute top-12 left-10 w-[450px] h-[320px] rounded-full bg-[#C9A85C]/10 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <span className="section-label justify-center inline-flex mb-4">
              Przebieg spotkania
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1923] mb-6 leading-tight">
              60-minutowe spotkanie<br />
              <span className="text-[#B38226]">Konkretna rozmowa i jasny wniosek</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#4B5563] leading-relaxed">
              To nie jest proces ciągnący się miesiącami.<br className="hidden md:block" />
              Przez 60 minut intensywnie pracujemy nad Twoją sytuacją, żebyś mógł ruszyć z miejsca.
            </p>
          </div>
        </FadeIn>

        {/* ── 3 Process Steps (Floating seamlessly without harsh borders) ── */}
        <div className="relative mb-20 md:mb-28">
          <div className="hidden md:block absolute top-10 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#C9A85C]/35 to-transparent pointer-events-none" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative flex flex-col items-center text-center group cursor-default">
                  {/* Floating blurred ambient halo behind step number */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-[#E89E58]/25 rounded-full blur-xl scale-125 opacity-70 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 backdrop-blur-sm border border-[#C9A85C]/25 flex items-center justify-center relative z-10 shadow-[0_4px_20px_-4px_rgba(201,168,92,0.2)] group-hover:border-[#C9A85C] group-hover:scale-105 transition-all duration-300">
                      <span className="text-2xl md:text-3xl font-serif text-[#B38226] font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#0F1923] mb-1.5">{step.title}</h3>
                  <p className="text-[#B38226] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
                    {step.time}
                  </p>
                  <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* ── Seamless Details Section (Zero Bento boxes, purely blended in background) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Współpraca */}
          <FadeIn delay={0.15}>
            <div className="relative space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1923] pb-3 border-b border-[#C9A85C]/20">
                Współpraca:
              </h3>

              <ul className="space-y-5">
                <li className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-xl bg-[#FAF8F4]/80 border border-[#C9A85C]/30 flex items-center justify-center shrink-0 text-[#B38226] group-hover:bg-[#C9A85C]/15 transition-colors shadow-xs">
                    <Clock className="w-5 h-5" />
                  </span>
                  <span className="text-[#374151] text-base sm:text-lg">
                    Czas: <strong className="text-[#0F1923] font-semibold">60 minut</strong>
                  </span>
                </li>

                <li className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-xl bg-[#FAF8F4]/80 border border-[#C9A85C]/30 flex items-center justify-center shrink-0 text-[#B38226] group-hover:bg-[#C9A85C]/15 transition-colors shadow-xs">
                    <Video className="w-5 h-5" />
                  </span>
                  <span className="text-[#374151] text-base sm:text-lg">
                    Forma: <strong className="text-[#0F1923] font-semibold">online (rozmowa wideo)</strong>
                  </span>
                </li>

                <li className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-xl bg-[#FAF8F4]/80 border border-[#C9A85C]/30 flex items-center justify-center shrink-0 text-[#B38226] group-hover:bg-[#C9A85C]/15 transition-colors shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <span className="text-[#374151] text-base sm:text-lg">
                    Poufność: <strong className="text-[#0F1923] font-semibold">pełna dyskrecja rozmowy</strong>
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Wyraźne rozróżnienie */}
          <FadeIn delay={0.25}>
            <div className="relative space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1923] pb-3 border-b border-[#C9A85C]/20 flex items-center gap-3">
                <span className="w-1 h-7 bg-[#B38226] rounded-full" />
                Wyraźne rozróżnienie
              </h3>

              <div className="space-y-3 text-base sm:text-lg text-[#374151]">
                <p className="text-[#0F1923] font-medium text-lg sm:text-xl">
                  To nie jest psychoterapia.
                </p>
                <p className="text-[#4B5563] leading-relaxed">
                  Nie diagnozuję i nie leczę zaburzeń psychicznych.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


