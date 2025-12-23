'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Search, Settings } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <BrainCircuit size={40} />,
      title: "1. Identyfikacja",
      desc: "Analizujemy Twoje schematy myślenia. Nie pytam 'jak się z tym czujesz?', pytam 'dlaczego tak pomyślałeś?' i 'jakie dane potwierdzają to przekonanie?'."
    },
    {
      icon: <Search size={40} />,
      title: "2. Debugowanie",
      desc: "Szukamy błędów w Twoim 'oprogramowaniu'. Zniekształcenia poznawcze, błędne założenia, automatyzmy, które sabotują Twoje działania."
    },
    {
      icon: <Settings size={40} />,
      title: "3. Rekonfiguracja",
      desc: "Wdrażasz nowe strategie. Nie 'afirmacje', ale konkretne protokoły działania w sytuacjach stresowych i decyzyjnych. Testujesz je w rzeczywistości."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-brand-navy mb-4">Proces Poznawczy</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group p-8 rounded-3xl bg-brand-cream border border-slate-100 hover:shadow-xl hover:border-brand-indigo/20 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit text-brand-indigo group-hover:scale-110 group-hover:bg-brand-indigo group-hover:text-white transition-all duration-300 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
