import { ArrowRight } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './FadeIn';
import { WavyBackground } from './ui/wavy-background';

export default function Hero() {
  return (
    <section id="start" className="relative w-full min-h-screen min-h-[100svh] flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-primary-foreground)] overflow-hidden pt-32 pb-20 md:pt-28 md:pb-20">
      <WavyBackground
        containerClassName="absolute inset-0 z-0 pointer-events-none"
        colors={['#C6A75E', '#8FA99A', '#5C7280', '#3B4E59']}
        backgroundFill="#111827"
        waveOpacity={0.96}
        waveWidth={40}
        blur={14}
        speed="slow"
        waveCount={8}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <StaggerContainer className="max-w-4xl">
          <StaggerItem>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#FAF7F2] mb-6 leading-[1.15] sm:leading-[1.1]">
             Utknąłeś w myślach i nie możesz podjąć decyzji? <br />
              <span className="text-gray-300">
                W <span className="text-[var(--color-accent)]">60 minut</span> uporządkujemy chaos
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg sm:text-2xl text-gray-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
              <span className="text-[#FAF7F2] font-semibold"> </span>
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="group btn-shine relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[var(--color-primary)] bg-[#FAF7F2] border border-[var(--color-accent)] transition-all duration-300 shadow-lg hover:shadow-accent/25 rounded-sm overflow-hidden hover:brightness-90"
              >
                 <span className="relative z-10 flex items-center">
                  Umów 60-minutową konsultację
                  <ArrowRight className="ml-2 h-5 w-5 text-[var(--color-primary)] group-hover:translate-x-1 transition-transform" />
                 </span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#FAF7F2] border border-[#FAF7F2]/30 hover:bg-[#FAF7F2]/10 transition-colors duration-200 rounded-sm"
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
