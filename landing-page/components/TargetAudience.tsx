import { Check, X } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function TargetAudience() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* Left Column (YES) - 60% */}
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 h-full">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A44] mb-6 font-serif">
                  To nie są konsultacje dla każdego.
                </h2>

                <p className="text-lg md:text-xl text-[#1F1F1F] mb-8 leading-relaxed">
                  Jeśli masz wrażenie, że ciągle wszystko analizujesz, a mimo to stoisz w miejscu — to jest rozmowa dla Ciebie.
                </p>

                <div className="space-y-2 mb-6">
                    <p className="font-semibold text-[#1F1F1F] text-lg">Pracuję z osobami, które:</p>
                </div>

                <ul className="space-y-4">
                  {[
                    "myślą analitycznie i utknęły w pętli rozkmin",
                    "stoją przed konkretną decyzją (relacja, praca, kierunek działania)",
                    "czują napięcie wynikające z przeciążenia, nie z „choroby”",
                    "chcą rozmowy prowadzącej do wniosku, nie wielomiesięcznego procesu"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 min-w-[20px]">
                         <Check className="w-5 h-5 text-[#C1AE78]" strokeWidth={3} />
                      </div>
                      <span className="text-[#1F1F1F] text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (NO) - 40% */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#2E3A44] mb-6 font-serif">
                    To NIE jest dla Ciebie, jeśli:
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {[
                      "szukasz psychoterapii lub leczenia zaburzeń",
                      "chcesz „pogadać”, ale bez realnej zmiany",
                      "liczysz na gotowe recepty na życie"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-1 min-w-[20px]">
                           <X className="w-5 h-5 text-[#C1AE78]" strokeWidth={3} />
                        </div>
                        <span className="text-[#5F5F5F] text-base md:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <p className="text-sm text-gray-500 italic leading-relaxed">
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
