import { Check, X, Minus } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Comparison() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
            Świadomy wybór.<br />
            <span className="text-slate-500 text-2xl font-normal block mt-2">Czym różni się moja praca?</span>
          </h2>
        </FadeIn>

        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-6 px-6 text-lg md:text-xl font-bold w-1/3 border-r border-white/10">Konsultacje Rozwojowe</th>
                <th className="py-6 px-6 text-lg md:text-xl font-medium w-1/3 bg-slate-800/50 text-slate-200 border-r border-white/10">Psychoterapia</th>
                <th className="py-6 px-6 text-lg md:text-xl font-medium w-1/3 bg-slate-800/30 text-slate-300">Coaching</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                {
                  label: "Cel główny",
                  my: "Efektywność i Strategia",
                  therap: "Leczenie i Równowaga",
                  coach: "Motywacja i Cel"
                },
                {
                  label: "Metoda pracy",
                  my: "Analiza danych i trening poznawczy",
                  therap: "Proces kliniczny i relacja",
                  coach: "Pytania i wizualizacje"
                },
                {
                  label: "Podejście do problemu",
                  my: "Konstruktywna konfrontacja",
                  therap: "Wsparcie i akceptacja",
                  coach: "Afirmacja zasobów"
                },
                {
                  label: "Horyzont czasowy",
                  my: "Tu i Teraz + Przyszłość (Strategia)",
                  therap: "Przeszłość + Teraźniejszość",
                  coach: "Przyszłość (Wizja)"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-6 px-6 font-semibold text-slate-900 border-r border-slate-100 relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-xs uppercase tracking-wider text-accent mb-1 font-bold">{row.label}</div>
                    {row.my}
                  </td>
                  <td className="py-6 px-6 text-slate-700 border-r border-slate-100">
                     <span className="md:hidden text-xs font-bold text-slate-400 block mb-1">Psychoterapia:</span>
                     {row.therap}
                  </td>
                  <td className="py-6 px-6 text-slate-600">
                     <span className="md:hidden text-xs font-bold text-slate-400 block mb-1">Coaching:</span>
                     {row.coach}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
