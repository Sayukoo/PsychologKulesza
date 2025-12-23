import { Brain, Cpu, Target } from 'lucide-react';

export default function Process() {
  return (
    <section id="jak-pracuje" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-16 uppercase text-center">Proces poznawczy</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 border border-gray-200 hover:border-black transition-colors">
          <Brain className="h-16 w-16 mb-6 text-black stroke-1" />
          <h3 className="text-xl font-bold mb-4">1. Identyfikacja</h3>
          <p className="text-black">
            Analizujemy Twoje schematy myślenia. Nie pytam "jak się z tym czujesz?", pytam "dlaczego tak pomyślałeś?" i "jakie dane potwierdzają to przekonanie?".
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 border border-gray-200 hover:border-black transition-colors">
          <Cpu className="h-16 w-16 mb-6 text-black stroke-1" />
          <h3 className="text-xl font-bold mb-4">2. Debugowanie</h3>
          <p className="text-black">
            Szukamy błędów w Twoim "oprogramowaniu". Zniekształcenia poznawcze, błędne założenia, automatyzmy, które sabotują Twoje działania.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 border border-gray-200 hover:border-black transition-colors">
          <Target className="h-16 w-16 mb-6 text-black stroke-1" />
          <h3 className="text-xl font-bold mb-4">3. Rekonfiguracja</h3>
          <p className="text-black">
            Wdrażasz nowe strategie. Nie "afirmacje", ale konkretne protokoły działania w sytuacjach stresowych i decyzyjnych. Testujesz je w rzeczywistości.
          </p>
        </div>
      </div>
    </section>
  );
}
