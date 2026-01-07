import { Check, X } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function TargetAudience() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* Left Column (YES) - 60% */}
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 h-full hover:shadow-md transition-shadow duration-300">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A44] mb-6 font-serif tracking-tight">
                  To nie są konsultacje dla każdego.
                </h2>

                <p className="text-lg md:text-xl text-[#1F1F1F] mb-10 leading-relaxed font-light">
                  Jeśli masz wrażenie, że ciągle wszystko analizujesz, a mimo to stoisz w miejscu — <span className="font-medium">to jest rozmowa dla Ciebie.</span>
                </p>

                <div className="space-y-2 mb-8">
                    <p className="font-semibold text-[#1F1F1F] text-lg uppercase tracking-wide text-sm opacity-80">Pracuję z osobami, które:</p>
                </div>

                <StaggerContainer>
                  <ul className="space-y-5">
                    {[
                      "myślą analitycznie i utknęły w pętli rozkmin",
                      "stoją przed konkretną decyzją (relacja, praca, kierunek działania)",
                      "czują napięcie wynikające z przeciążenia, nie z „choroby”",
                      "chcą rozmowy prowadzącej do wniosku, nie wielomiesięcznego procesu"
                    ].map((item, idx) => (
                      <StaggerItem key={idx}>
                        <li className="flex items-start gap-5 group">
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#C1AE78]/10 flex items-center justify-center group-hover:bg-[#C1AE78]/20 transition-colors duration-300">
                             <Check className="w-5 h-5 text-[#C1AE78]" strokeWidth={2.5} />
                          </div>
                          <span className="text-[#1F1F1F] text-base md:text-lg leading-relaxed group-hover:text-black transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (NO) - 40% */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#2E3A44] mb-8 font-serif tracking-tight">
                    To NIE jest dla Ciebie, jeśli:
                  </h3>

                  <StaggerContainer delay={0.2}>
                    <ul className="space-y-5 mb-10">
                      {[
                        "szukasz psychoterapii lub leczenia zaburzeń",
                        "chcesz „pogadać”, ale bez realnej zmiany",
                        "liczysz na gotowe recepty na życie"
                      ].map((item, idx) => (
                        <StaggerItem key={idx}>
                          <li className="flex items-start gap-5 group">
                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300 border border-gray-100">
                               <X className="w-4 h-4 text-[#8C8C8C] group-hover:text-[#C1AE78] transition-colors duration-300" strokeWidth={2.5} />
                            </div>
                            <span className="text-[#5F5F5F] text-base md:text-lg leading-relaxed group-hover:text-[#4A4A4A] transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        </StaggerItem>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>

                <div className="pt-8 border-t border-gray-100 mt-auto">
                  <p className="text-sm text-[#8C8C8C] italic leading-relaxed">
                    Ta forma pracy zakłada aktywność, odpowiedzialność i gotowość do podjęcia decyzji.
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
