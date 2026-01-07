import { ArrowRight, X, Minus } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function TargetAudience() {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24 overflow-hidden text-[#1F1F1F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN - YES (SALES) */}
          <div className="space-y-8">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A44] mb-4">
                To nie są konsultacje dla każdego.
              </h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-2xl">
                Pracuję z osobami, które nie potrzebują terapii, tylko klarowności i decyzji.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
               <p className="text-xl font-semibold text-[#1F1F1F] mb-6">
                 Pracuję z osobami, które:
               </p>
               <ul className="space-y-5">
                 {[
                   "myślą analitycznie i utknęły w pętli rozkmin",
                   "stoją przed konkretną decyzją (relacja, praca, kierunek działania)",
                   "czują napięcie wynikające z przeciążenia, a nie z „choroby”",
                   "chcą rozmowy prowadzącej do wniosku, nie wielomiesięcznego procesu"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-4">
                     {/* Icon: Arrow. Using ArrowRight for forward movement/progress */}
                     <ArrowRight className="w-6 h-6 text-[#C1AE78] shrink-0 mt-1" />
                     <span className="text-lg text-[#1F1F1F] leading-relaxed font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN - NO (CUT-OFF) */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white border border-[#C1AE78] rounded-xl p-8 md:p-10 shadow-sm relative">
               <h3 className="text-xl font-bold text-[#2E3A44] mb-6 flex items-center gap-3">
                 <X className="w-7 h-7 text-[#C1AE78]" strokeWidth={2.5} /> To NIE jest dla Ciebie, jeśli:
               </h3>
               <ul className="space-y-4 mb-8">
                 {[
                   "szukasz psychoterapii lub leczenia zaburzeń",
                   "chcesz „pogadać”, ale bez realnej zmiany",
                   "liczysz na gotowe recepty na życie"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3">
                     {/* Icon: Minus. Using Minus for list items to be clean but firm */}
                     <Minus className="w-5 h-5 text-[#C1AE78] shrink-0 mt-1.5" strokeWidth={3} />
                     <span className="text-[#1F1F1F] text-base leading-relaxed">{item}</span>
                   </li>
                 ))}
               </ul>
               <p className="text-sm md:text-[15px] text-[#5F5F5F] italic border-t border-[#C1AE78]/30 pt-4">
                 Jeśli to brzmi jak Ty – oszczędźmy sobie czasu.
               </p>
            </div>
          </FadeIn>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <FadeIn direction="up" delay={0.3}>
            <a
              href="#booking"
              className="group btn-shine inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#2E3A44] hover:bg-[#1F2A33] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Umów 60-minutową konsultację
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
