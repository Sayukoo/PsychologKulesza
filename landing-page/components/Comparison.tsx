import { Check, X } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 uppercase text-center">To nie jest to samo</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="py-4 px-6 text-xl font-bold uppercase w-1/3">To, co robię</th>
                <th className="py-4 px-6 text-xl font-bold uppercase w-1/3 text-gray-500">Psychoterapia</th>
                <th className="py-4 px-6 text-xl font-bold uppercase w-1/3 text-gray-500">Coaching</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b border-gray-200 bg-white">
                <td className="py-6 px-6 font-bold flex items-start gap-2">
                  <Check className="h-6 w-6 text-black flex-shrink-0" />
                  Koncentracja na mechanizmach tu i teraz
                </td>
                <td className="py-6 px-6 text-gray-600">
                   Leczenie zaburzeń, analiza przeszłości
                </td>
                <td className="py-6 px-6 text-gray-600">
                   Motywowanie, wizualizacja celu
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-white">
                <td className="py-6 px-6 font-bold flex items-start gap-2">
                  <Check className="h-6 w-6 text-black flex-shrink-0" />
                  Analityczne podejście, twarde dane
                </td>
                <td className="py-6 px-6 text-gray-600">
                   Relacja terapeutyczna, leczenie traum
                </td>
                <td className="py-6 px-6 text-gray-600">
                   "Możesz wszystko", wysoka energia
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-white">
                <td className="py-6 px-6 font-bold flex items-start gap-2">
                  <Check className="h-6 w-6 text-black flex-shrink-0" />
                  Brak relacji "lekarz-pacjent"
                </td>
                <td className="py-6 px-6 text-gray-600">
                   Pacjent w procesie leczenia
                </td>
                <td className="py-6 px-6 text-gray-600">
                   Klient i jego cheerleader
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-white">
                <td className="py-6 px-6 font-bold flex items-start gap-2">
                  <Check className="h-6 w-6 text-black flex-shrink-0" />
                  Konfrontacja z błędami
                </td>
                <td className="py-6 px-6 text-gray-600">
                   Akceptacja, wsparcie emocjonalne
                </td>
                <td className="py-6 px-6 text-gray-600">
                   Budowanie pewności siebie
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
