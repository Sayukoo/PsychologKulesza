import { AlertTriangle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Disclaimer() {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/60">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
               <AlertTriangle className="w-6 h-6 text-orange-400" />
            </div>
            <div className="text-slate-600 text-sm md:text-base leading-relaxed">
              <h3 className="text-primary font-bold text-lg mb-2">Ważna informacja</h3>
              <p className="mb-3">
                Konsultacja decyzyjna i rozwojowa <strong>nie jest psychoterapią</strong>, interwencją kryzysową ani leczeniem psychiatrycznym.
              </p>
              <p>
                Jeśli znajdujesz się w kryzysie psychicznym, doświadczasz myśli rezygnacyjnych lub potrzebujesz natychmiastowej pomocy, skontaktuj się z bezpłatnym Kryzysowym Telefonem Zaufania (116 123) lub wezwij pogotowie (112).
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
