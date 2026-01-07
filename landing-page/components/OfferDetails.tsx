import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { Coins, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OfferDetails() {
  return (
    <section id="cennik" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Inwestycja w jasność myślenia
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              Proste i przejrzyste zasady współpracy. Bez ukrytych kosztów.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Pilot Consultation */}
          <StaggerItem>
            <div className="flex flex-col h-full bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[var(--color-border)] relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

               <div className="flex items-center justify-between mb-6">
                 <h3 className="text-xl font-bold text-primary">Konsultacja Wstępna</h3>
                 <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Start</span>
               </div>

               <div className="flex items-baseline gap-1 mb-6">
                 <span className="text-4xl font-bold text-primary">50 PLN</span>
                 <span className="text-muted text-sm">/ 20 min</span>
               </div>

               <p className="text-primary/80 mb-8 flex-grow">
                 Krótka rozmowa zapoznawcza. Sprawdzimy, czy jestem odpowiednią osobą do rozwiązania Twojego problemu i ustalimy plan działania.
               </p>

               <ul className="space-y-4 mb-8">
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                   <span className="text-sm text-primary/70">Weryfikacja oczekiwań</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                   <span className="text-sm text-primary/70">Określenie obszaru pracy</span>
                 </li>
                  <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                   <span className="text-sm text-primary/70">Forma online (Google Meet)</span>
                 </li>
               </ul>

               <Link href="#booking" className="w-full inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-sm hover:bg-primary hover:text-white transition-colors">
                 Umów pilot
               </Link>
            </div>
          </StaggerItem>

          {/* Card 2: Full Consultation */}
          <StaggerItem>
            <div className="flex flex-col h-full bg-primary text-primary-foreground rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden ring-1 ring-white/10">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Coins className="w-24 h-24" />
               </div>

               <div className="flex items-center justify-between mb-6 relative z-10">
                 <h3 className="text-xl font-bold text-white">Konsultacja Pełna</h3>
                 <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-white/20">Standard</span>
               </div>

               <div className="flex items-baseline gap-1 mb-6 relative z-10">
                 <span className="text-4xl font-bold text-white">250 PLN</span>
                 <span className="text-gray-400 text-sm">/ 60 min</span>
               </div>

               <p className="text-gray-300 mb-8 flex-grow relative z-10">
                 Głęboka analiza sytuacji i praca nad rozwiązaniem. Pełne skupienie na Twoim problemie w modelu Single-Session Therapy.
               </p>

               <ul className="space-y-4 mb-8 relative z-10">
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-300">Analiza i porządkowanie myśli</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-300">Konkretne wnioski i plan</span>
                 </li>
                  <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-300">Nagranie (opcjonalnie)</span>
                 </li>
               </ul>

               <Link href="#booking" className="relative z-10 w-full inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-bold rounded-sm hover:bg-[#D4B56A] transition-colors shadow-lg">
                 Rezerwuję termin <ArrowRight className="w-4 h-4 ml-2" />
               </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
