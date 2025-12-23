import ZnanyLekarzWidget from './ZnanyLekarzWidget';

export default function Booking() {
  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6 uppercase">Umów konsultację</h2>
        <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
          Wybierz dogodny termin w kalendarzu poniżej.
          Proces rezerwacji jest obsługiwany przez bezpieczną platformę ZnanyLekarz.
        </p>

        <div className="bg-white p-4 min-h-[400px]">
          <ZnanyLekarzWidget />
        </div>
      </div>
    </section>
  );
}
