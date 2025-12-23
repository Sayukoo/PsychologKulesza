'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Audience() {
  const targetAudience = [
    "Dla osób refleksyjnych, które czują, że utknęły w martwym punkcie.",
    "Dla przeciążonych decyzyjnie i emocjonalnie, szukających konkretnych narzędzi.",
    "Dla tych, którzy chcą wziąć brutalną odpowiedzialność za swoje życie.",
    "Dla osób ceniących logikę, analizę i brak \"duchowego bełkotu\"."
  ];

  const notFor = [
    "Dla osób szukających diagnozy klinicznej lub leczenia zaburzeń (depresja, ChAD, lęki).",
    "Dla tych, którzy chcą się tylko \"wygadać\" i poczuć ulgę bez zmian.",
    "Dla oczekujących gotowych recept typu \"5 kroków do szczęścia\".",
    "Dla osób w kryzysie suicydalnym lub ostrym stanie psychotycznym."
  ];

  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Filtr Wejściowy</h2>
          <p className="text-slate-400">Sprawdź, czy nadajemy na tych samych falach.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Success Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-light-navy p-8 rounded-2xl border border-brand-indigo/30 hover:border-brand-indigo/60 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-emerald-400">
              <CheckCircle2 /> Dla Kogo?
            </h3>
            <ul className="space-y-6">
              {targetAudience.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-emerald-500 font-mono text-sm opacity-50">0{i + 1}.</span>
                  <p className="text-slate-200">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Warning Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-brand-light-navy p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-400">
              <XCircle /> Dla Kogo NIE?
            </h3>
            <ul className="space-y-6">
              {notFor.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-red-500 font-mono text-sm opacity-50">0{i + 1}.</span>
                  <p className="text-slate-300">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
