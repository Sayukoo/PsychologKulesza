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
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#2E3A44] text-[#FAF7F2] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#FAF7F2] blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#FAF7F2] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-20 md:mb-24 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              60-minutowe spotkanie<br />
              <span className="text-[#B59E5D]">Konkretna rozmowa i jasny wniosek</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              To nie jest proces ciągnący się miesiącami.<br className="hidden md:block" />
              Przez 60 minut intensywnie pracujemy nad Twoją sytuacją, żebyś mógł ruszyć z miejsca.
            </p>
          </div>
        </FadeIn>

        {/* Process Steps */}
        <div className="relative mb-20 md:mb-24">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B59E5D]/30 to-transparent" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-[#2B2E33] border border-[#B59E5D]/20 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:border-[#B59E5D] transition-colors duration-300">
                    <span className="text-3xl font-serif text-[#B59E5D] font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-[#B59E5D] text-sm font-medium mb-4">({step.time})</p>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Parameters & Disclaimer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-[#2B2E33] p-8 md:p-10 rounded-2xl border border-white/5 h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B59E5D]/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              <h3 className="text-xl font-serif text-white mb-8 border-b border-white/10 pb-4 relative z-10">
                Parametry współpracy
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-[#B59E5D]" />
                  <span className="text-gray-200 text-lg">Czas: <strong className="text-white">60 minut</strong></span>
                </li>
                <li className="flex items-center gap-4">
                  <Video className="w-6 h-6 text-[#B59E5D]" />
                  <span className="text-gray-200 text-lg">Forma: <strong className="text-white">online (rozmowa wideo)</strong></span>
                </li>
                <li className="flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#B59E5D]" />
                  <span className="text-gray-200 text-lg">Poufność: <strong className="text-white">pełna dyskrecja rozmowy</strong></span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="h-full">
            <div className="bg-[#FAF7F2] p-8 md:p-10 rounded-2xl border border-white/10 h-full flex flex-col justify-center text-[#2E3A44] relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#B59E5D]/10 rounded-full blur-xl -ml-5 -mb-5 pointer-events-none" />
              <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3 relative z-10">
                <span className="w-1.5 h-8 bg-[#B59E5D] block" />
                Wyraźne rozróżnienie
              </h3>
              <div className="space-y-4 text-lg relative z-10">
                <p className="font-medium">To nie jest psychoterapia.</p>
                <p className="opacity-80">Nie diagnozuję i nie leczę zaburzeń psychicznych.</p>
                <p className="font-bold text-[#2E3A44] pt-2 border-t border-[#2E3A44]/10 mt-4">
                  To konsultacja decyzyjna i rozwojowa.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
