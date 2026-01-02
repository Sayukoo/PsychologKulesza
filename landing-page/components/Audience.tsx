import { CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import AuroraBackground from './AuroraBackground';

export default function Audience() {
  const problems = [
    "Czujesz przeciążenie nadmiarem bodźców i spraw",
    "Stoisz przed trudną decyzją i potrzebujesz chłodnej analizy",
    "Twoje relacje stały się źródłem napięcia, a nie wsparcia",
    "Chcesz zrozumieć własne schematy działania",
    "Potrzebujesz uporządkować chaos w głowie",
    "Szukasz konkretnej rozmowy",
    "Odczuwasz stres i napięcie utrudniające funkcjonowanie",
    "Chcesz zrozumieć źródła swoich reakcji"
  ];

  return (
    <section id="dla-kogo" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary text-white relative overflow-hidden">
       {/* Animated Aurora Background */}
       <AuroraBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
           <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center">
            Dla kogo są konsultacje?<br />
            <span className="text-xl md:text-2xl font-normal block mt-2">Sytuacje, w których pomagam</span>
          </h2>
        </FadeIn>

        <StaggerContainer>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-12 rounded-2xl hover:bg-white/10 transition-colors duration-500 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-12">
              {problems.map((text, idx) => (
                <StaggerItem key={idx}>
                  <li className="flex items-start group">
                    <CheckCircle2 className="mr-3 md:mr-4 h-5 md:h-6 w-5 md:w-6 text-emerald-500 mt-0.5 group-hover:text-emerald-400 transition-colors shrink-0" />
                    <span className="text-slate-200 group-hover:text-white transition-colors text-base md:text-lg leading-relaxed">{text}</span>
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
