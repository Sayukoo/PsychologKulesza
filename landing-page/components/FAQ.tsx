'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Dlaczego konsultacje, a nie terapia?",
      answer: "Terapia to proces leczenia klinicznego. Moje konsultacje to trening mentalny i doradztwo strategiczne. Pracujemy na zasobach poznawczych osoby zdrowej, która chce funkcjonować lepiej, sprawniej i bardziej świadomie, a nie 'leczyć się' z zaburzeń."
    },
    {
      question: "Czym to się różni od coachingu?",
      answer: "Nie pytam tylko 'co czujesz'. Analizuję 'jak myślisz'. Wnoszę twardą wiedzę psychologiczną o mechanizmach poznawczych. Coaching często zakłada, że masz wszystkie odpowiedzi – ja zakładam, że czasem potrzebujesz zewnętrznej perspektywy, by dostrzec błędy w swoim rozumowaniu."
    },
    {
      question: "Jak długo trwa współpraca?",
      answer: "Nie ma reguły, ale nie dążymy do wieloletniej zależności. To może być jedna sesja 'kalibracyjna' lub cykl spotkań projektowych. Celem jest Twoja samodzielność i skuteczność, a nie niekończące się rozmowy."
    },
    {
      question: "Jak wygląda pierwsze spotkanie?",
      answer: "To konkretna diagnoza Twojej sytuacji. Bez 'lania wody'. Ustalamy cel, mapujemy problem i szukamy pierwszych dźwigni zmiany. Wychodzisz z konkretnymi wnioskami już po godzinie."
    }
  ];

  return (
    <section id="pytania" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <FadeIn>
        <div className="flex items-center justify-center gap-3 mb-12">
           <HelpCircle className="w-8 h-8 text-accent" />
           <h2 className="text-3xl font-bold text-primary uppercase text-center">Pytania i Odpowiedzi</h2>
        </div>
      </FadeIn>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-accent/50 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-hidden"
              >
                <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
