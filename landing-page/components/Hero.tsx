import { ArrowRight } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './FadeIn';
import { BackgroundBeams } from './animate-ui/components/backgrounds/background-beams';

export default function Hero() {
  return (
    <section id="start" className="relative w-full min-h-screen min-h-[100svh] flex items-center justify-center bg-[#FAF7F2] text-foreground overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Dynamic Background */}
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <StaggerContainer className="max-w-4xl">
          <StaggerItem>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.15] sm:leading-[1.1]">
             Utknąłeś w myślach i nie możesz podjąć decyzji? <br />
              <span className="text-foreground/90">
                W <span className="text-accent">60 minut</span> uporządkujemy chaos
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg sm:text-2xl text-foreground/70 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
              Konsultacje dla osób, które myślą za dużo, analizują wszystko i stoją w miejscu
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="group btn-shine relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#FAF7F2] bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/25 rounded-sm overflow-hidden hover:text-[#FAF7F2]"
              >
                 <span className="relative z-10 flex items-center">
                  Umów 60-minutową konsultację
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                 </span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary border border-primary/30 hover:bg-primary/5 transition-colors duration-200 rounded-sm"
              >
                Zobacz, czy to dla mnie →
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
