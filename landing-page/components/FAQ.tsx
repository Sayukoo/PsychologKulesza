"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

const faqs = [
  {
    question: "Czy konsultacja zastępuje psychoterapię?",
    answer: "Nie, konsultacja to ukierunkowane, jednorazowe lub doraźne spotkanie skupione na konkretnym problemie i rozwiązaniu. Jeśli Twoja sytuacja wymaga diagnozy lub terapii klinicznej, powiem Ci o tym otwarcie."
  },
  {
    question: "Jak przygotować się do spotkania?",
    answer: "Nie potrzebujesz notatek, ale warto przemyśleć jeden główny cel: 'Z czym chcesz wyjść z konsultacji?'. Zadbaj też o stabilne łącze internetowe i spokojne miejsce, w którym nikt nie będzie Ci przeszkadzał."
  },
  {
    question: "Czy spotkania są poufne?",
    answer: "Tak. Jako psycholog obowiązuje mnie tajemnica zawodowa. Jeśli nagrywam spotkanie (co zawsze ustalamy i o czym informuję), służy ono wyłącznie mojej autoanalizie i superwizji, nigdy nie jest udostępniane osobom trzecim bez Twojej wyraźnej zgody."
  },
  {
    question: "Jak długo czeka się na termin?",
    answer: "Zazwyczaj udaje się znaleźć termin w ciągu 2-3 dni roboczych. Po umówieniu wizyty przez kalendarz otrzymasz potwierdzenie wraz z linkiem do spotkania."
  },
  {
    question: "W jakich godzinach pracujesz?",
    answer: "Konsultacje odbywają się głównie w godzinach popołudniowych i wieczornych, aby umożliwić spotkanie osobom pracującym. Dokładną dostępność zobaczysz w kalendarzu podczas rezerwacji."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Częste pytania
            </h2>
            <p className="text-lg text-slate-600">
              Wszystko, co musisz wiedzieć przed spotkaniem.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-4">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <div
                className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#FAF7F2] shadow-md border-[#B59E5D]/30' : 'bg-white hover:border-slate-300'}`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleOpen(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-left text-lg text-primary">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500">
                     <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent' : ''}`} />
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
