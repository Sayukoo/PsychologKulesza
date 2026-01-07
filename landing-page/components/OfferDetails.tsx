import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { Clock, CheckCircle2, Lock, Monitor, Info, ArrowRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function OfferDetails() {
  return (
    <section id="cennik" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Cennik
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              Przejrzyste zasady. Wybierz opcję dopasowaną do obecnego etapu.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

          {/* Card 1: Pilot Consultation (Featured) */}
          <StaggerItem className="h-full">
            <div className="flex flex-col h-full bg-primary text-primary-foreground rounded-2xl p-8 shadow-2xl relative overflow-hidden border border-primary/10 ring-1 ring-white/10">
               {/* Badge */}
               <div className="absolute top-6 right-6">
                 <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                   Edycja Pilotażowa
                 </span>
               </div>

               <div className="mb-6 relative z-10">
                 <h3 className="text-2xl font-bold text-white mb-2">Konsultacja decyzyjna</h3>
                 <p className="text-accent font-medium text-sm tracking-wide uppercase opacity-90">Edycja Pilotażowa</p>
               </div>

               <div className="flex items-baseline gap-2 mb-2 relative z-10">
                 <span className="text-5xl font-bold text-white">50 zł</span>
                 <span className="text-gray-300 text-lg">/ 60 minut</span>
               </div>
               <p className="text-sm text-accent mb-6 font-medium">(oferta tymczasowa – limitowana)</p>

               <div className="space-y-6 flex-grow relative z-10">
                 <p className="text-gray-300">
                   Pełna, 60-minutowa konsultacja decyzyjna w ramach etapu pilotażowego.
                   Zakres pracy nie różni się od standardowej konsultacji.
                 </p>

                 <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="flex items-center gap-2 text-accent font-semibold mb-2 text-sm uppercase tracking-wider">
                      <Info className="w-4 h-4" /> Dlaczego taka cena?
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Ten etap służy dopracowaniu modelu pracy i zebrania doświadczeń z określoną liczbą osób.
                    </p>
                 </div>

                 <div>
                   <h4 className="text-white font-semibold mb-4 text-lg">Co obejmuje spotkanie?</h4>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-3">
                       <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                       <span className="text-gray-300">60 minut indywidualnej, intensywnej pracy</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                       <span className="text-gray-300">Analiza i uporządkowanie Twojej sytuacji</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                       <span className="text-gray-300">Omówienie możliwych scenariuszy</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                       <span className="text-gray-300">Jeden kluczowy wniosek lub następny krok</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <Lock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                       <span className="text-gray-300">Pełna poufność</span>
                     </li>
                   </ul>
                 </div>

                 <div className="space-y-2 pt-4 border-t border-white/10">
                   <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Monitor className="w-4 h-4 text-accent" />
                      <span>Forma: online (Google Meet)</span>
                   </div>
                   <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <AlertCircle className="w-4 h-4 text-accent" />
                      <span>Liczba miejsc: <strong className="text-white">ściśle ograniczona</strong></span>
                   </div>
                 </div>
               </div>

               <div className="mt-8 pt-6 relative z-10">
                 <Link href="#booking" className="w-full inline-flex items-center justify-center px-6 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-[#D4B56A] transition-colors shadow-lg group">
                   👉 Umów konsultację w cenie pilotażowej
                 </Link>
               </div>
            </div>
          </StaggerItem>

          {/* Card 2: Standard (Future) */}
          <StaggerItem className="h-full">
            <div className="flex flex-col h-full bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity">

               <div className="mb-6">
                 <h3 className="text-2xl font-bold text-primary mb-2">Konsultacja decyzyjna</h3>
                 <p className="text-muted font-medium text-sm tracking-wide uppercase">Standard</p>
               </div>

               <div className="flex items-baseline gap-2 mb-6">
                 <span className="text-5xl font-bold text-primary">250 zł</span>
                 <span className="text-muted text-lg">/ 60 minut</span>
               </div>

               <div className="space-y-6 flex-grow">
                 <p className="text-primary/80 leading-relaxed">
                   Cena obowiązująca po zakończeniu etapu pilotażowego.
                   <br />
                   Zakres pracy pozostaje bez zmian.
                 </p>

                 <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 mt-auto">
                    <h4 className="flex items-center gap-2 text-primary font-semibold mb-2">
                      Status
                    </h4>
                    <p className="text-primary/70">
                      Dostępna po wyczerpaniu puli pilotażowej.
                    </p>
                 </div>
               </div>

               {/* Placeholder button or simple text to indicate it's not active yet, or just link to booking too but it's secondary */}
               <div className="mt-8 pt-6 opacity-50 cursor-not-allowed">
                  <div className="w-full inline-flex items-center justify-center px-6 py-4 border-2 border-dashed border-gray-300 text-gray-400 font-medium rounded-lg">
                    Dostępne wkrótce
                  </div>
               </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}
