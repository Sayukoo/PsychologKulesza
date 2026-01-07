'use client';

import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { CircleOff, AlertCircle, HelpCircle, Activity, Brain, Shuffle, BatteryWarning } from 'lucide-react';

export default function Audience() {
  const problems = [
    {
      text: "Czują napięcie, stres lub emocjonalny chaos, ale nie potrafią go nazwać",
      icon: Activity
    },
    {
      text: "Mają wrażenie, że „wszystko analizują”, a emocje i tak robią swoje",
      icon: Brain
    },
    {
      text: "Stoją przed trudną decyzją (relacja, praca, kierunek życia)",
      icon: Shuffle
    },
    {
      text: "Chcą zrozumieć swoje reakcje, zamiast z nimi walczyć",
      icon: HelpCircle
    },
    {
      text: "Są zmęczone byciem „ciągle w głowie” albo „ciągle w emocjach”",
      icon: BatteryWarning
    }
  ];

  const NOT_FOR_YOU = [
    'szukasz psychoterapii długoterminowej',
    'oczekujesz diagnozy klinicznej lub leczenia zaburzeń',
    'chcesz tylko „wygadać się” bez refleksji i wniosków',
    'nie masz gotowości, żeby przyjrzeć się sobie uczciwie'
  ];

  return (
    <section id="audience" className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 uppercase tracking-wider">
              DLA KOGO JEST TA KONSULTACJA
            </h2>
            <p className="text-xl text-slate-600">
              Najczęściej przychodzą do mnie osoby, które:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {problems.map((item, index) => (
            <StaggerItem key={index}>
              <div className="h-full p-8 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 rounded-xl group">
                <div className="mb-6 p-3 bg-accent/10 w-fit rounded-lg group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <p className="text-primary font-medium text-lg leading-relaxed">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
          {/* Last card spans if needed, or fits grid. 5 items -> 3 cols: 3 + 2. */}
           <StaggerItem>
             <div className="h-full p-8 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center text-center">
                <div>
                   <h3 className="text-xl font-serif font-bold text-primary mb-2">Nie musisz mieć „dużego problemu”.</h3>
                   <p className="text-slate-600">Wystarczy, że coś w Tobie nie daje spokoju.</p>
                </div>
             </div>
           </StaggerItem>
        </StaggerContainer>

        {/* Not for you section */}
        <FadeIn>
          <div className="max-w-4xl mx-auto mt-20 p-8 md:p-12 bg-white border border-red-100 shadow-sm rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="p-4 bg-red-50 rounded-full">
                  <CircleOff className="h-10 w-10 text-red-500" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                  To NIE jest dla Ciebie, jeśli:
                </h3>
                <ul className="space-y-4">
                  {NOT_FOR_YOU.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100 text-center md:text-left">
                  <p className="text-lg font-medium text-primary">
                    Ta rozmowa wymaga Twojej obecności, nie tylko obecności emocji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
