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
import NeuralBackground from './NeuralBackground';

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
    <section id="dla-kogo" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary overflow-hidden">
        {/* Background Layer with Neural Network Visualization */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary/95 z-0" />
            <NeuralBackground />
             {/* Gradient overlay to soften edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary z-0 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
                <div className="text-center mb-20">
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight font-serif">
                        Dla kogo są konsultacje?
                    </h2>
                    <p className="text-xl text-accent/90 font-light tracking-wide uppercase text-sm md:text-base">
                        Obszary wsparcia i analizy
                    </p>
                </div>
            </FadeIn>

            <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {problems.map((item, idx) => (
                        <StaggerItem key={idx} className="h-full">
                             <div className="group h-full p-6 md:p-8 rounded-xl bg-[#1F2226]/80 backdrop-blur-md border border-white/5 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(181,158,93,0.15)] flex flex-col items-start gap-5 relative overflow-hidden isolate">

                                {/* Geometric accent lines - 'Diagram' feel */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Icon container */}
                                <div className="p-3.5 rounded-lg bg-secondary border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors duration-500 shadow-lg">
                                    <item.icon className="w-6 h-6 text-accent group-hover:text-[#D4C495] transition-colors duration-300" strokeWidth={1.5} />
                                </div>

                                {/* Connector Line Visualization */}
                                <div className="absolute top-8 left-16 right-0 h-[1px] bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />

                                <p className="text-gray-300 group-hover:text-white transition-colors text-base md:text-lg leading-relaxed font-light z-10">
                                    {item.text}
                                </p>

                                {/* Corner marker for technical feel */}
                                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-accent/20 rounded-full group-hover:bg-accent transition-colors duration-500" />
                             </div>
                        </StaggerItem>
                    ))}
                </div>
            </StaggerContainer>
        </div>
    </section>
  );
}
