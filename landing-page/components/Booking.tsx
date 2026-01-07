import GoogleCalendarWidget from './GoogleCalendarWidget';
import { CalendarCheck, MessageCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Booking() {
  return (
    <section id="booking" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center">

          <div className="mb-12">
             <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-6">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-accent" />
             </div>

             <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-8 leading-tight">
              Jeśli czujesz, że:
             </h2>

             <ul className="text-lg md:text-xl text-slate-600 space-y-3 mb-10 max-w-2xl mx-auto">
                <li>emocje i myśli zaczynają się mieszać</li>
                <li>coś w Tobie domaga się uwagi</li>
                <li>chcesz to spokojnie zrozumieć, zamiast zagłuszać</li>
             </ul>

             <h3 className="text-xl font-bold text-accent uppercase tracking-wider mb-2">
                Umów 60-minutową konsultację
             </h3>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-lg shadow-primary/5 min-h-[400px] border border-slate-200 relative">
            <GoogleCalendarWidget />

            <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500 max-w-lg mx-auto">
              <p>
                Przed spotkaniem poproszę Cię o krótką informację, z czym przychodzisz – żebyśmy dobrze wykorzystali ten czas.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
