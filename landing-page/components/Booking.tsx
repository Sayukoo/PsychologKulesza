import GoogleCalendarWidget from './GoogleCalendarWidget';
import { CalendarCheck, ShieldCheck, Clock, Video } from 'lucide-react';
import { FadeIn } from './FadeIn';

const reassurances = [
  { icon: Clock, label: '15 minut, bez zobowiązań' },
  { icon: Video, label: 'Telefon lub online' },
  { icon: ShieldCheck, label: 'Pełna poufność' },
];

export default function Booking() {
  return (
    <section
      id="booking"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8E3DA]"
    >
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-[#C9A85C]/10 border border-[#C9A85C]/20 rounded-full mb-5 md:mb-6">
            <CalendarCheck className="w-6 h-6 md:w-8 md:h-8 text-[#C9A85C]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1923] mb-4 md:mb-6">
            Zrób pierwszy krok
          </h2>
          <p className="text-base md:text-lg text-[#374151] mb-8 max-w-2xl mx-auto leading-relaxed">
            Wybierz dogodną datę poniżej i umów się na bezpłatną, 15-minutową rozmowę wstępną.
            Zobaczymy, czy nadajemy na tych samych falach i czy moje podejście jest dla Ciebie
            odpowiednie.
          </p>

          {/* Reassurance strip */}
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-10">
            {reassurances.map((r) => (
              <li
                key={r.label}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0F1923] bg-[#FAF8F4] border border-[#E8E3DA] rounded-full px-4 py-2"
              >
                <r.icon className="w-4 h-4 text-[#C9A85C]" strokeWidth={1.75} />
                {r.label}
              </li>
            ))}
          </ul>

          <div className="bg-[#FAF8F4] p-4 md:p-6 rounded-2xl shadow-xl shadow-[#0F1923]/5 min-h-[400px] border border-[#E8E3DA]">
            <GoogleCalendarWidget />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
