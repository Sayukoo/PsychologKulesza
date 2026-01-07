import {
  BrainCircuit,
  Scale,
  Users,
  Workflow,
  Library,
  MessageSquare,
  Activity,
  Microscope,
  LucideIcon
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

interface ProblemItem {
  text: string;
  icon: LucideIcon;
}

export default function Audience() {
  const problems: ProblemItem[] = [
    {
      text: "Czujesz przeciążenie nadmiarem bodźców i spraw",
      icon: BrainCircuit
    },
    {
      text: "Stoisz przed trudną decyzją i potrzebujesz chłodnej analizy",
      icon: Scale
    },
    {
      text: "Twoje relacje stały się źródłem napięcia, a nie wsparcia",
      icon: Users
    },
    {
      text: "Chcesz zrozumieć własne schematy działania",
      icon: Workflow
    },
    {
      text: "Potrzebujesz uporządkować chaos w głowie",
      icon: Library
    },
    {
      text: "Szukasz konkretnej rozmowy",
      icon: MessageSquare
    },
    {
      text: "Odczuwasz stres i napięcie utrudniające funkcjonowanie",
      icon: Activity
    },
    {
      text: "Chcesz zrozumieć źródła swoich reakcji",
      icon: Microscope
    }
  ];

  return (
    <section id="dla-kogo" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] overflow-hidden">
        {/* Ivory Background - removed NeuralBackground to keep it clean/calm as per 'Ivory dominant' rule */}

        <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
                <div className="text-center mb-20">
                     <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 tracking-tight font-serif">
                        Dla kogo są konsultacje?
                    </h2>
                    <p className="text-xl text-[var(--color-muted)] font-light tracking-wide uppercase text-sm md:text-base">
                        Obszary wsparcia i analizy
                    </p>
                </div>
            </FadeIn>

            <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {problems.map((item, idx) => (
                        <StaggerItem key={idx} className="h-full">
                             <div className="group h-full p-6 md:p-8 rounded-xl bg-white border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-start gap-5 relative overflow-hidden">

                                {/* Icon container */}
                                <div className="p-3.5 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] group-hover:bg-[var(--color-accent)]/10 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
                                </div>

                                <p className="text-[var(--color-primary)] group-hover:text-black transition-colors text-base md:text-lg leading-relaxed font-light z-10">
                                    {item.text}
                                </p>

                                {/* Corner marker */}
                                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-[var(--color-border)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors duration-500" />
                             </div>
                        </StaggerItem>
                    ))}
                </div>
            </StaggerContainer>
        </div>
    </section>
  );
}
