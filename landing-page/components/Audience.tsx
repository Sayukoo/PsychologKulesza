import { CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Audience() {
  const mainAreas = [
    "Kryzys życiowy i emocjonalny",
    "Niskie poczucie własnej wartości",
    "Wypalenie zawodowe",
    "Zaburzenia w relacjach międzyludzkich",
    "Brak sensu życia",
    "Kryzys w związku",
    "Kryzys zawodowy"
  ];

  const secondaryAreas = [
    "Bezsenność",
    "Ból emocjonalny",
    "DDA - Dorosłe Dzieci Alkoholików",
    "DDD - Dorosłe Dzieci z Rodzin Dysfunkcyjnych",
    "Lęki i niepokój",
    "Nerwica",
    "Zaburzenia emocjonalne",
    "Zaburzenia koncentracji i pamięci",
    "Zmęczenie i wyczerpanie",
    "Zaburzenia psychosomatyczne",
    "Zaburzenia nastroju",
    "Doradztwo zawodowe"
  ];

  return (
    <section id="dla-kogo" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
       {/* Ambient bg */}
       <div className="absolute inset-0 bg-primary/20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-slate-900 to-slate-900 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Kiedy warto skorzystać?<br />
            <span className="text-slate-400 text-2xl font-normal block mt-2">Konsultacje psychologiczne dla Ciebie.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Main Areas */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-500">
            <StaggerItem>
              <h3 className="text-2xl font-bold text-emerald-100 mb-8 pb-4 border-b border-white/10">
                Wsparcie w kryzysie
              </h3>
            </StaggerItem>
            <ul className="space-y-4">
              {mainAreas.map((text, idx) => (
                <StaggerItem key={idx}>
                  <li className="flex items-start group">
                    <CheckCircle2 className="mr-4 h-6 w-6 text-emerald-500 mt-0.5 group-hover:text-emerald-400 transition-colors shrink-0" />
                    <span className="text-slate-200 group-hover:text-white transition-colors text-lg">{text}</span>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </div>

          {/* Secondary Areas */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <StaggerItem>
               <h3 className="text-2xl font-bold text-accent mb-8 pb-4 border-b border-white/10">
                 Trudności codzienne
               </h3>
            </StaggerItem>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryAreas.map((text, idx) => (
                <StaggerItem key={idx}>
                  <li className="flex items-start">
                    <span className="mr-3 h-2 w-2 bg-accent rounded-full mt-2.5 shrink-0" />
                    <span className="text-slate-200">{text}</span>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
