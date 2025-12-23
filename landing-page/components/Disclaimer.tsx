import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 border-y-2 border-black">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-12 w-12 text-black" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black mb-2 uppercase tracking-wide">
            OŚWIADCZENIE: To NIE jest terapia
          </h2>
          <p className="text-lg text-black font-medium leading-relaxed">
            Moje konsultacje psychologiczne nie są psychoterapią ani leczeniem zaburzeń psychicznych.
            Pracujemy w oparciu o wiedzę psychologiczną, skupiając się na rozwoju, edukacji i rozwiązywaniu bieżących trudności.
            Dzięki temu proces jest przejrzysty i skoncentrowany na konkretnych celach, zapewniając Ci poczucie bezpieczeństwa i jasne zasady współpracy.
          </p>
        </div>
      </div>
    </section>
  );
}
