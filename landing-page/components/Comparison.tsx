'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';
import clsx from 'clsx';

export default function Comparison() {
  const rows = [
    { label: "Koncentracja na mechanizmach tu i teraz", me: true, therapy: "Leczenie zaburzeń, analiza przeszłości", coaching: "Motywowanie, wizualizacja celu" },
    { label: "Analityczne podejście, twarde dane", me: true, therapy: "Relacja terapeutyczna, leczenie traum", coaching: "\"Możesz wszystko\", wysoka energia" },
    { label: "Brak relacji \"lekarz-pacjent\"", me: true, therapy: "Pacjent w procesie leczenia", coaching: "Klient i jego cheerleader" },
    { label: "Konfrontacja z błędami", me: true, therapy: "Akceptacja, wsparcie emocjonalne", coaching: "Budowanie pewności siebie" }
  ];

  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">To NIE JEST to samo</h2>
        </motion.div>

        <div className="overflow-x-auto rounded-3xl shadow-2xl bg-white border border-slate-100">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="p-6 text-left w-1/3">To, co robię</th>
                <th className="p-6 text-left w-1/3 bg-brand-light-navy/50 text-slate-300 font-medium">Psychoterapia</th>
                <th className="p-6 text-left w-1/3 bg-brand-light-navy/30 text-slate-300 font-medium">Coaching</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group hover:bg-slate-50 transition-colors"
                >
                  <td className="p-6 font-bold text-brand-navy flex items-center gap-3">
                    <span className="p-1 rounded-full bg-brand-gold/10 text-brand-gold">
                      <Check size={16} />
                    </span>
                    {row.label}
                  </td>
                  <td className="p-6 text-slate-500">{row.therapy}</td>
                  <td className="p-6 text-slate-500">{row.coaching}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
