import { CheckCircle2, XCircle } from 'lucide-react';

export default function Audience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 uppercase text-center">Filtr wejściowy</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Dla kogo to jest */}
          <div className="border border-white/20 p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center text-green-400">
              <CheckCircle2 className="mr-3 h-6 w-6" />
              DLA KOGO TO JEST?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-green-400 font-mono">01.</span>
                <span>Dla osób refleksyjnych, które czują, że utknęły w martwym punkcie.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-400 font-mono">02.</span>
                <span>Dla przeciążonych decyzyjnie i emocjonalnie, szukających konkretnych narzędzi.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-400 font-mono">03.</span>
                <span>Dla tych, którzy chcą wziąć brutalną odpowiedzialność za swoje życie.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-400 font-mono">04.</span>
                <span>Dla osób ceniących logikę, analizę i brak "duchowego bełkotu".</span>
              </li>
            </ul>
          </div>

          {/* Dla kogo to NIE jest */}
          <div className="border border-white/20 p-8 bg-white/5">
            <h3 className="text-xl font-bold mb-6 flex items-center text-red-500">
              <XCircle className="mr-3 h-6 w-6" />
              DLA KOGO TO NIE JEST?
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 text-red-500 font-mono">01.</span>
                <span>Dla osób szukających diagnozy klinicznej lub leczenia zaburzeń (depresja, ChAD, lęki).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500 font-mono">02.</span>
                <span>Dla tych, którzy chcą się tylko "wygadać" i poczuć ulgę bez zmian.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500 font-mono">03.</span>
                <span>Dla oczekujących gotowych recept typu "5 kroków do szczęścia".</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500 font-mono">04.</span>
                <span>Dla osób w kryzysie suicydalnym lub ostrym stanie psychotycznym.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
