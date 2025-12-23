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
          <p className="text-lg text-gray-900 font-medium leading-relaxed">
            Nie prowadzę psychoterapii, nie stawiam diagnoz klinicznych, nie leczę zaburzeń psychicznych.
            Jeśli szukasz leczenia lub Twoje funkcjonowanie jest znacząco zaburzone – <span className="underline">opuść tę stronę</span> i skontaktuj się z psychoterapeutą lub psychiatrą.
            Tu pracujemy nad Twoją efektywnością, samoświadomością i mechanizmami decyzyjnymi metodami psychologicznymi.
          </p>
        </div>
      </div>
    </section>
  );
}
