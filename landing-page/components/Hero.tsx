import Link from 'next/link';
import { ArrowRight, Brain } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import NeuralBackground from './NeuralBackground';

export default function Hero() {
  return (
    <section id="start" className="relative w-full min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Dynamic Background */}
      <NeuralBackground />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <StaggerContainer className="max-w-4xl">
          <StaggerItem>
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-sm shadow-lg shadow-accent/10">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/25 blur-md animate-pulse" aria-hidden />
                <Brain className="relative h-4 w-4 text-accent drop-shadow-[0_0_10px_rgba(181,158,93,0.7)]" />
              </span>
              <span className="relative">Psychologia oparta na badaniach</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15] sm:leading-[1.1]">
             Utknąłeś w myślach i nie możesz podjąć decyzji? <br />
              <span className="text-white/90">
                W{' '}
                <span className="inline-flex items-center gap-2 rounded-md bg-accent/15 px-3 py-2 text-accent ring-1 ring-accent/30 align-top">
                  <span className="text-4xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight">60</span>
                </span>{' '}
                minut uporządkujemy chaos
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg sm:text-2xl text-slate-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
              <span className="text-white font-semibold"> </span>
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="group btn-shine relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/25 rounded-sm overflow-hidden hover:text-white"
              >
                 <span className="relative z-10 flex items-center">
                  Umów konsultację
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                 </span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 hover:bg-white/10 transition-colors duration-200 rounded-sm"
              >
                Zobacz jak pracuję
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
