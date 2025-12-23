'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Dlaczego to nie jest terapia?",
      a: "Terapia zakłada proces leczenia, diagnozę kliniczną i często pracę z głębokimi zaburzeniami osobowości lub nastroju. Ja pracuję na zasobach poznawczych osoby zdrowej, która chce funkcjonować lepiej, sprawniej i bardziej świadomie. Nie zajmuję się przeszłością w celach leczniczych."
    },
    {
      q: "Czy to jest coaching?",
      a: "Nie. Coaching często opiera się na założeniu, że \"masz wszystkie odpowiedzi w sobie\". Moje podejście zakłada, że często Twoje odpowiedzi są błędne, oparte na zniekształceniach poznawczych. Wnoszę wiedzę psychologiczną, by skorygować te błędy, a nie tylko Cię motywować."
    },
    {
      q: "Ile trwa współpraca?",
      a: "To zależy od celu. Konsultacja może być jednorazowa (analiza konkretnego problemu decyzyjnego) lub cykliczna. Nie \"chodzisz\" do mnie latami. Celem jest samodzielność, a nie uzależnienie od spotkań."
    },
    {
      q: "Jak się umówić?",
      a: "Wyłącznie przez ZnanyLekarz. Link znajdziesz poniżej."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-brand-navy text-center mb-16">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-bold text-lg text-brand-navy">{faq.q}</span>
                <span className={clsx("transition-transform duration-300", openIndex === idx ? "rotate-180" : "")}>
                  <ChevronDown className="text-slate-400" />
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openIndex === idx ? "auto" : 0, opacity: openIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-brand-cream"
              >
                <div className="p-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
