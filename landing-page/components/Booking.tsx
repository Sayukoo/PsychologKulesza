import ZnanyLekarzWidget from './ZnanyLekarzWidget';
import { CalendarCheck } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Booking() {
  return (
    <section id="booking" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4 md:mb-6">
            <CalendarCheck className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Umów konsultację</h2>
          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            Jeżeli to podejście jest Ci bliskie, zapraszam do rezerwacji terminu.
            <span className="block mt-2 text-sm text-slate-500">Wybierz dogodną datę poniżej.</span>
          </p>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl shadow-primary/5 min-h-[400px] border border-slate-100">
            <ZnanyLekarzWidget />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
