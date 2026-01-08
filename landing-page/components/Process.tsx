import { Clock, Video, CheckCircle, Monitor } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#2E3A44] text-[#FAF7F2] relative overflow-hidden">
        {/* Optional background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
            <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#FAF7F2] blur-[120px]" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#FAF7F2] blur-[120px]" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Jedno 60-minutowe spotkanie.<br />
              <span className="text-[#B59E5D]">Konkretna rozmowa. Jasny wniosek.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              To nie jest proces ciągnący się miesiącami.<br className="hidden md:block" />
              Przez 60 minut intensywnie pracujemy nad Twoją sytuacją, żebyś mógł ruszyć z miejsca.
            </p>
          </div>
        </FadeIn>

        {/* Process Steps */}
        <div className="relative mb-20 md:mb-24">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B59E5D]/30 to-transparent" />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {/* Step 1 */}
                <StaggerItem>
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-[#2B2E33] border border-[#B59E5D]/20 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:border-[#B59E5D] transition-colors duration-300">
                             <span className="text-3xl font-serif text-[#B59E5D] font-bold">1</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Zbieramy fakty <span className="text-[#B59E5D] text-base font-normal block mt-1">(10–15 min)</span></h3>
                        <p className="text-gray-300 leading-relaxed">
                            Porządkujemy to, co się wydarzyło i co jest teraz.
                            Oddzielamy fakty od interpretacji i lęku.
                        </p>
                    </div>
                </StaggerItem>

                {/* Step 2 */}
                <StaggerItem>
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-[#2B2E33] border border-[#B59E5D]/20 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:border-[#B59E5D] transition-colors duration-300">
                             <span className="text-3xl font-serif text-[#B59E5D] font-bold">2</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Analizujemy opcje <span className="text-[#B59E5D] text-base font-normal block mt-1">(25–30 min)</span></h3>
                        <p className="text-gray-300 leading-relaxed">
                           Rozkładamy możliwe scenariusze.
                           Sprawdzamy konsekwencje, koszty i zyski — bez dramatyzowania.
                        </p>
                    </div>
                </StaggerItem>

                {/* Step 3 */}
                <StaggerItem>
                     <div className="relative flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-[#2B2E33] border border-[#B59E5D]/20 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:border-[#B59E5D] transition-colors duration-300">
                             <span className="text-3xl font-serif text-[#B59E5D] font-bold">3</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Dochodzimy do wniosku <span className="text-[#B59E5D] text-base font-normal block mt-1">(10–15 min)</span></h3>
                        <p className="text-gray-300 leading-relaxed">
                            Formułujemy jedną kluczową decyzję, wniosek lub następny krok, który możesz wdrożyć po spotkaniu.
                        </p>
                    </div>
                </StaggerItem>
            </StaggerContainer>
        </div>

        {/* Parameters & Disclaimer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Parameters */}
            <FadeIn delay={0.2} className="h-full">
                <div className="bg-[#2B2E33] p-8 md:p-10 rounded-2xl border border-white/5 h-full flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B59E5D]/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                    <h3 className="text-xl font-serif text-white mb-8 border-b border-white/10 pb-4 relative z-10">Parametry współpracy</h3>
                    <ul className="space-y-6 relative z-10">
                        <li className="flex items-center gap-4">
                            <Clock className="w-6 h-6 text-[#B59E5D]" />
                            <span className="text-gray-200 text-lg">Czas: <strong className="text-white">60 minut</strong></span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Video className="w-6 h-6 text-[#B59E5D]" />
                            <span className="text-gray-200 text-lg">Forma: <strong className="text-white">online (rozmowa wideo)</strong></span>
                        </li>
            
                    </ul>
                </div>
            </FadeIn>

            {/* Disclaimer */}
             <FadeIn delay={0.4} className="h-full">
                <div className="bg-[#FAF7F2] p-8 md:p-10 rounded-2xl border border-white/10 h-full flex flex-col justify-center text-[#2E3A44] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#B59E5D]/10 rounded-full blur-xl -ml-5 -mb-5 pointer-events-none"></div>

                    <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3 relative z-10">
                         <span className="w-1.5 h-8 bg-[#B59E5D] block"></span>
                         Wyraźne rozróżnienie
                    </h3>
                    <div className="space-y-4 text-lg relative z-10">
                        <p className="font-medium">To nie jest psychoterapia.</p>
                        <p className="opacity-80">Nie diagnozuję i nie leczę zaburzeń psychicznych.</p>
                        <p className="font-bold text-[#2E3A44] pt-2 border-t border-[#2E3A44]/10 mt-4">To konsultacja decyzyjna i rozwojowa.</p>
                    </div>
                </div>
            </FadeIn>
        </div>

      </div>
    </section>
  );
}
