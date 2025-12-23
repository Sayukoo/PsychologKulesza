import { Info } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Disclaimer() {
  return (
    <section className="bg-white border-b border-slate-200">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-primary/5 rounded-lg p-6 flex flex-col md:flex-row items-start gap-4 border border-primary/10">
            <div className="flex-shrink-0 mt-1">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-1">
                Zakres współpracy (Scope of Practice)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Moje konsultacje to proces rozwojowy i edukacyjny, a nie leczenie kliniczne.
                Nie prowadzę psychoterapii ani leczenia zaburzeń psychicznych.
                Współpracujemy w oparciu o wiedzę psychologiczną, skupiając się na strategii, efektywności i rozwiązywaniu bieżących wyzwań zawodowych i osobistych.
                Jasne zasady dla Twojego bezpieczeństwa i komfortu.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
