import { Clock, Video, AlertTriangle, Repeat } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--color-sage)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-8 tracking-tight font-serif">
                        4️⃣ JAK WYGLĄDA JEDNA KONSULTACJA (RAMY)
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-primary)] mb-6 font-serif">
                        Jedno 60-minutowe spotkanie. Konkretna rozmowa. Jasny wniosek.
                    </h3>
                    <p className="text-lg md:text-xl text-[var(--color-primary)]/80 leading-relaxed max-w-2xl mx-auto">
                        To nie jest proces ciągnący się miesiącami. Przez 60 minut intensywnie pracujemy nad Twoją sytuacją, żebyś mógł ruszyć z miejsca.
                    </p>
                </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                 {/* Step 1 */}
                 <StaggerItem className="h-full">
                    <div className="bg-[#FAF7F2] p-8 rounded-2xl shadow-sm border border-white/20 h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                           <span className="font-bold text-2xl font-serif">1</span>
                        </div>
                        <h4 className="text-xl font-bold text-[var(--color-primary)] mb-2 font-serif">Zbieramy fakty</h4>
                        <span className="text-sm font-bold text-[var(--color-primary)]/50 mb-4 block tracking-wider uppercase">10–15 min</span>
                        <p className="text-[var(--color-primary)]/80 leading-relaxed">
                            Porządkujemy to, co się wydarzyło i co jest teraz. Oddzielamy fakty od interpretacji i lęku.
                        </p>
                    </div>
                 </StaggerItem>

                 {/* Step 2 */}
                 <StaggerItem className="h-full">
                    <div className="bg-[#FAF7F2] p-8 rounded-2xl shadow-sm border border-white/20 h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                           <span className="font-bold text-2xl font-serif">2</span>
                        </div>
                        <h4 className="text-xl font-bold text-[var(--color-primary)] mb-2 font-serif">Analizujemy opcje</h4>
                        <span className="text-sm font-bold text-[var(--color-primary)]/50 mb-4 block tracking-wider uppercase">25–30 min</span>
                        <p className="text-[var(--color-primary)]/80 leading-relaxed">
                            Rozkładamy możliwe scenariusze. Sprawdzamy konsekwencje, koszty i zyski — bez dramatyzowania.
                        </p>
                    </div>
                 </StaggerItem>

                 {/* Step 3 */}
                 <StaggerItem className="h-full">
                     <div className="bg-[#FAF7F2] p-8 rounded-2xl shadow-sm border border-white/20 h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                           <span className="font-bold text-2xl font-serif">3</span>
                        </div>
                        <h4 className="text-xl font-bold text-[var(--color-primary)] mb-2 font-serif">Dochodzimy do wniosku</h4>
                         <span className="text-sm font-bold text-[var(--color-primary)]/50 mb-4 block tracking-wider uppercase">10–15 min</span>
                        <p className="text-[var(--color-primary)]/80 leading-relaxed">
                            Formułujemy jedną kluczową decyzję, wniosek lub następny krok, który możesz wdrożyć po spotkaniu.
                        </p>
                    </div>
                 </StaggerItem>
            </StaggerContainer>

            {/* Parameters & Disclaimer Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 {/* Parameters */}
                 <FadeIn delay={0.2} className="h-full">
                     <div className="bg-[#FAF7F2]/60 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/30 h-full flex flex-col justify-center shadow-sm">
                        <h4 className="text-sm font-bold text-[var(--color-primary)] mb-8 uppercase tracking-widest opacity-70">Parametry sesji</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-5">
                                <div className="p-2 rounded-lg bg-[var(--color-primary)]/5">
                                    <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                                </div>
                                <span className="text-lg md:text-xl font-medium text-[var(--color-primary)]">Czas: 60 minut</span>
                            </li>
                             <li className="flex items-center gap-5">
                                <div className="p-2 rounded-lg bg-[var(--color-primary)]/5">
                                    <Video className="w-6 h-6 text-[var(--color-primary)]" />
                                </div>
                                <span className="text-lg md:text-xl font-medium text-[var(--color-primary)]">Forma: online (rozmowa wideo)</span>
                            </li>
                             <li className="flex items-start gap-5">
                                <div className="p-2 rounded-lg bg-[var(--color-primary)]/5 shrink-0">
                                    <Repeat className="w-6 h-6 text-[var(--color-primary)]" />
                                </div>
                                <span className="text-lg md:text-xl font-medium text-[var(--color-primary)]">Jedno spotkanie — kolejne tylko, jeśli uznasz to za sensowne</span>
                            </li>
                        </ul>
                     </div>
                 </FadeIn>

                 {/* Disclaimer */}
                 <FadeIn delay={0.3} className="h-full">
                    <div className="bg-[#FAF7F2] p-8 md:p-10 rounded-2xl border-l-4 border-[var(--color-accent)] h-full flex flex-col justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                         <div className="flex items-start gap-5 mb-6">
                             <div className="mt-1 shrink-0">
                                <AlertTriangle className="w-8 h-8 text-[var(--color-accent)]" />
                             </div>
                             <h4 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] font-serif">Wyraźne rozróżnienie</h4>
                         </div>
                         <p className="text-[var(--color-primary)]/80 text-lg leading-relaxed pl-2">
                            To nie jest psychoterapia. Nie diagnozuję i nie leczę zaburzeń psychicznych. To konsultacja decyzyjna i rozwojowa.
                         </p>
                    </div>
                 </FadeIn>
            </div>
        </div>
    </section>
  );
}
