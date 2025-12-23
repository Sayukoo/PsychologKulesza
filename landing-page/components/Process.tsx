import { Brain, Handshake, Target } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white relative">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
          Jak pracuję?<br />
          <span className="text-accent text-2xl font-normal block mt-2">Podejście, które daje efekty.</span>
        </h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Brain,
            title: "Analiza i Zrozumienie",
            desc: "Skupiam się na analizie sytuacji, porządkowaniu myśli i zrozumieniu mechanizmów, które wpływają na Twoje codzienne funkcjonowanie.",
            color: "text-blue-600"
          },
          {
            icon: Handshake,
            title: "Partnerstwo i Wsparcie",
            desc: "Pracuję w sposób analityczny, partnerski i wspierający. Bez oceniania i narzucania gotowych rozwiązań, ale z pełnym zaangażowaniem w Twój proces.",
            color: "text-accent"
          },
          {
            icon: Target,
            title: "Jasność i Cel",
            desc: "Celem konsultacji jest uzyskanie większej jasności oraz wypracowanie możliwych kierunków działania — adekwatnych do Twoich aktualnych potrzeb i możliwości.",
            color: "text-emerald-600"
          }
        ].map((step, idx) => (
          <StaggerItem key={idx} className="group flex flex-col items-center text-center p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full">
            <div className={`absolute top-0 w-full h-1 ${idx === 1 ? 'bg-accent' : idx === 2 ? 'bg-emerald-500' : 'bg-blue-600'}`} />

            <div className={`p-4 rounded-full mb-6 ${idx === 1 ? 'bg-accent/10' : idx === 2 ? 'bg-emerald-500/10' : 'bg-blue-600/10'} group-hover:scale-110 transition-transform duration-300`}>
              <step.icon className={`h-10 w-10 ${idx === 1 ? 'text-accent' : idx === 2 ? 'text-emerald-600' : 'text-blue-600'}`} />
            </div>

            <h3 className="text-xl font-bold mb-4 text-slate-800">{step.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {step.desc}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
