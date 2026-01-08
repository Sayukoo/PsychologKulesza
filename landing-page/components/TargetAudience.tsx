import {
  Brain,
  Signpost,
  Zap,
  Target,
  Stethoscope,
  MessageSquare,
  Scroll
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function TargetAudience() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E3A44] font-serif tracking-tight">
            To nie są konsultacje dla każdego.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (YES) - WIDER */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="pl-2 md:pl-4">
                <p className="text-2xl font-bold text-[#2E3A44] mb-12 font-serif tracking-tight flex items-center gap-3">
                   <span className="w-8 h-1 bg-[#C1AE78] block rounded-full"></span>
                   Pracuję z osobami, które:
                </p>

                <StaggerContainer>
                  <ul className="space-y-10">
                    <StaggerItem>
                      <li className="flex items-start gap-6 group">
                        <div className="mt-1 flex-shrink-0 p-3 bg-white rounded-xl shadow-sm border border-[#E6E6E6] group-hover:border-[#C1AE78]/30 group-hover:shadow-md transition-all duration-300">
                           <Brain className="w-6 h-6 text-[#C1AE78]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[#1F1F1F] text-lg font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
                            Czują, że kręcą się w kółko, analizując w nieskończoność te same scenariusze.
                          </p>
                        </div>
                      </li>
                    </StaggerItem>

                    <StaggerItem>
                      <li className="flex items-start gap-6 group">
                        <div className="mt-1 flex-shrink-0 p-3 bg-white rounded-xl shadow-sm border border-[#E6E6E6] group-hover:border-[#C1AE78]/30 group-hover:shadow-md transition-all duration-300">
                           <Signpost className="w-6 h-6 text-[#C1AE78]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[#1F1F1F] text-lg font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
                            Stoją przed konkretną decyzją  i potrzebują  planu.
                          </p>
                        </div>
                      </li>
                    </StaggerItem>

                    <StaggerItem>
                      <li className="flex items-start gap-6 group">
                        <div className="mt-1 flex-shrink-0 p-3 bg-white rounded-xl shadow-sm border border-[#E6E6E6] group-hover:border-[#C1AE78]/30 group-hover:shadow-md transition-all duration-300">
                           <Zap className="w-6 h-6 text-[#C1AE78]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[#1F1F1F] text-lg font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
                            Doświadczają paraliżu decyzyjnego i przewlekłego napięcia mentalnego.
                          </p>
                        </div>
                      </li>
                    </StaggerItem>

                    <StaggerItem>
                      <li className="flex items-start gap-6 group">
                        <div className="mt-1 flex-shrink-0 p-3 bg-white rounded-xl shadow-sm border border-[#E6E6E6] group-hover:border-[#C1AE78]/30 group-hover:shadow-md transition-all duration-300">
                           <Target className="w-6 h-6 text-[#C1AE78]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[#1F1F1F] text-lg font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
                             Szukają konkretnych wniosków i rozwiązań, a nie tylko emocjonalnego wsparcia.
                          </p>
                        </div>
                      </li>
                    </StaggerItem>
                  </ul>
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (NO) - NARROWER */}
          <div className="lg:col-span-5 relative">
             {/* Divider for desktop */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D1D1D1] to-transparent -ml-8"></div>

            <FadeIn delay={0.2}>
              <div className="lg:pl-8">
                <p className="text-2xl font-bold text-[#8C8C8C] mb-12 font-serif tracking-tight flex items-center gap-3">
                   <span className="w-8 h-1 bg-[#D1D1D1] block rounded-full"></span>
                   To NIE jest dla Ciebie, jeśli:
                </p>

                <StaggerContainer delay={0.2}>
                  <ul className="space-y-8 mb-12">
                    <StaggerItem>
                      <li className="flex items-start gap-5 group opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <div className="mt-1 flex-shrink-0">
                           <Stethoscope className="w-5 h-5 text-[#8C8C8C]" strokeWidth={2} />
                        </div>
                        <span className="text-[#5F5F5F] text-lg leading-relaxed group-hover:text-[#4A4A4A] transition-colors duration-300 border-l-2 border-transparent pl-4 group-hover:border-[#D1D1D1]">
                          Szukasz leczenia klinicznego, farmakoterapii lub  psychoterapii.
                        </span>
                      </li>
                    </StaggerItem>

                    <StaggerItem>
                      <li className="flex items-start gap-5 group opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <div className="mt-1 flex-shrink-0">
                           <MessageSquare className="w-5 h-5 text-[#8C8C8C]" strokeWidth={2} />
                        </div>
                        <span className="text-[#5F5F5F] text-lg leading-relaxed group-hover:text-[#4A4A4A] transition-colors duration-300 border-l-2 border-transparent pl-4 group-hover:border-[#D1D1D1]">
                           Chcesz pogadać bez intencji wprowadzania realnych zmian.
                        </span>
                      </li>
                    </StaggerItem>

                    <StaggerItem>
                      <li className="flex items-start gap-5 group opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <div className="mt-1 flex-shrink-0">
                           <Scroll className="w-5 h-5 text-[#8C8C8C]" strokeWidth={2} />
                        </div>
                        <span className="text-[#5F5F5F] text-lg leading-relaxed group-hover:text-[#4A4A4A] transition-colors duration-300 border-l-2 border-transparent pl-4 group-hover:border-[#D1D1D1]">
                           Oczekujesz, że ktoś podejmie decyzję za nich i poda gotową receptę na życie.
                        </span>
                      </li>
                    </StaggerItem>
                  </ul>
                </StaggerContainer>

                <div className="pt-8 border-t border-[#E6E6E6]">
                  <p className="text-base text-[#5F5F5F] font-medium italic leading-relaxed">
                    "Współpraca wymaga Twojej aktywności, logicznej analizy i odwagi w podejmowaniu decyzji."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
