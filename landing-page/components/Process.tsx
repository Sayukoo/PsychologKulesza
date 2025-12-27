import { Monitor, Clock, MessageSquare, AlertCircle, Video } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white relative">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
          Jak wygląda współpraca?<br />
          <span className="text-accent text-2xl font-normal block mt-2">Zasady i forma spotkań.</span>
        </h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: Monitor,
            title: "Forma online",
            desc: "Spotykamy się przez wideorozmowę. Zapewnia to komfort, oszczędność czasu i możliwość rozmowy z dowolnego miejsca, w którym czujesz się swobodnie.",
            color: "text-blue-600"
          },
          {
            icon: Clock,
            title: "Czas trwania",
            desc: "Standardowa konsultacja trwa 50 minut. To optymalny czas na omówienie bieżących spraw, analizę i wypracowanie wniosków bez pośpiechu.",
            color: "text-accent"
          },
          {
            icon: MessageSquare,
            title: "Charakter rozmowy",
            desc: "Rozmawiamy rzeczowo i wprost. Skupiamy się na 'tu i teraz'. Nie wracamy do przeszłości, jeśli nie jest to konieczne dla zrozumienia obecnej sytuacji.",
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

      {/* Important Disclaimers */}
      <FadeIn direction="up">
        <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 max-w-4xl mx-auto space-y-6">
           <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">To nie jest psychoterapia</h3>
                <p className="text-slate-700 leading-relaxed">
                  Moje konsultacje mają charakter rozwojowy i edukacyjny. Nie prowadzę psychoterapii, nie leczę zaburzeń psychicznych ani nie wystawiam diagnoz klinicznych. Pracujemy na Twoich zasobach poznawczych, skupiając się na strategii i efektywności.
                </p>
              </div>
           </div>

           <div className="w-full h-px bg-primary/10" />

           <div className="flex items-start gap-4">
              <Video className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Nagrywanie spotkań</h3>
                <p className="text-slate-700 leading-relaxed">
                  Działam w sposób transparentny. Konsultacje są nagrywane (za Twoją zgodą) wyłącznie do celów rozwojowych i superwizyjnych, aby zapewnić najwyższą jakość mojej pracy. Nagrania są w pełni poufne i bezpieczne.
                </p>
              </div>
           </div>
        </div>
      </FadeIn>
    </section>
  );
}
