import { CheckCircle2, XCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Comparison() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Dlaczego to działa inaczej?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Zwykłe rozmowy o problemach często kończą się tam, gdzie powinny się zacząć.
              Moje podejście jest skoncentrowane na wnioskach, a nie na samym procesie opowiadania.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Typowe podejście */}
          <StaggerContainer>
            <StaggerItem className="h-full">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-500 mb-8 border-b border-slate-100 pb-4">
                  Standardowa rozmowa
                </h3>
                <ul className="space-y-6 flex-grow">
                  <li className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-slate-600">Rozpływanie się w dygresjach i pobocznych wątkach.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-slate-600">Skupienie na samym "wygadaniu się" bez konkretnego planu.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-slate-600">Brak jasnego podsumowania i kroków do wdrożenia na już.</p>
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Moje podejście */}
          <StaggerContainer delay={0.2}>
            <StaggerItem className="h-full">
              <div className="bg-[#2E3A44] rounded-2xl p-8 md:p-10 shadow-xl border border-[#B59E5D]/20 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B59E5D]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 relative z-10">
                  Konsultacja analityczna
                </h3>
                <ul className="space-y-6 flex-grow relative z-10">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#B59E5D] shrink-0 mt-0.5" />
                    <p className="text-slate-300">Struktura oparta na faktach i logicznym ciągu przyczynowo-skutkowym.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#B59E5D] shrink-0 mt-0.5" />
                    <p className="text-slate-300">Aktywne moderowanie rozmowy, by utrzymać się głównego tematu.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#B59E5D] shrink-0 mt-0.5" />
                    <p className="text-slate-300">Zawsze wychodzisz z minimum jednym, konkretnym wnioskiem lub decyzją.</p>
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
