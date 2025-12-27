import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import NeuralBackground from './NeuralBackground';

export default function Hero() {
  return (
    <section id="start" className="relative w-full min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
      {/* Dynamic Background */}
      <NeuralBackground />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <StaggerContainer className="max-w-4xl">
          <StaggerItem>
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-accent/20">
              <Sparkles className="w-4 h-4" />
              <span>Magister Psychologii</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Porządkowanie myślenia.<br />
              <span className="text-accent">Analiza decyzji. Spokój.</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-xl sm:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Dla osób, które szukają zrozumienia.
              <span className="text-white font-semibold"> Konkretna rozmowa</span> o Twoich sprawach.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-accent hover:brightness-90 transition-all duration-300 shadow-lg hover:shadow-accent/25 rounded-sm overflow-hidden"
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
