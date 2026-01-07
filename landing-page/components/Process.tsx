'use client';

import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { Heart, BrainCircuit, ArrowRightCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Emocje – co naprawdę czujesz",
    description: "Zatrzymujemy się przy tym, co jest aktualne: napięcie, złość, lęk, smutek, chaos. Nie po to, żeby się w tym utopić, tylko żeby to zrozumieć.",
    icon: Heart
  },
  {
    number: "02",
    title: "Myśli i schematy – jak to interpretujesz",
    description: "Sprawdzamy, jakie myśli, przekonania i automatyczne reakcje napędzają emocje.",
    icon: BrainCircuit
  },
  {
    number: "03",
    title: "Wnioski – co z tym zrobić dalej",
    description: "Nie daję gotowych recept. Pomagam dojść do jednego sensownego wniosku, kierunku albo decyzji, która jest zgodna z Tobą – nie z presją.",
    icon: ArrowRightCircle
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 uppercase tracking-wider">
              CO SIĘ DZIEJE W TRAKCIE 60 MINUT
            </h2>
            <div className="text-xl text-slate-600 font-medium">
              To nie jest luźna pogadanka<br/>
              <span className="text-slate-400">i nie jest też sztywna analiza.</span>
            </div>
            <p className="mt-4 text-lg text-slate-600">
              Pracujemy na trzech poziomach:
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto mb-20">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />

            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative bg-white pt-8 group h-full flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-background rounded-full border-4 border-slate-50 flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
                        <step.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-white text-sm font-bold flex items-center justify-center rounded-full shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  <div className="text-center px-4 flex-grow">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn>
            <div className="max-w-2xl mx-auto text-center p-8 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xl font-medium text-primary mb-2">Celem nie jest „naprawić Cię”.</p>
                <p className="text-lg text-slate-600">Celem jest, żebyś wyszedł / wyszła z większą jasnością i spokojem.</p>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}
