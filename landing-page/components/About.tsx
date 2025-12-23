'use client';

import { motion } from 'framer-motion';
import { User, Shield, Target } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <User size={24} />,
      title: "Magister Psychologii",
      desc: "Absolwent SWPS. Wiedza akademicka, nie internetowe teorie."
    },
    {
      icon: <Shield size={24} />,
      title: "Bezpieczeństwo",
      desc: "Praca w oparciu o etykę zawodową. Jasne granice i zasady."
    },
    {
      icon: <Target size={24} />,
      title: "Konkret",
      desc: "Analiza schematów. Brak pseudonauki i magicznych rozwiązań."
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-2xl bg-brand-navy overflow-hidden relative shadow-2xl">
               {/* Placeholder for real image */}
               <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xl font-bold">
                 [ZDJĘCIE PROFILOWE]
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />

               <div className="absolute bottom-8 left-8 right-8 text-white">
                 <h3 className="text-3xl font-bold mb-2">Kacper Kulesza</h3>
                 <p className="text-brand-gold font-medium">Psycholog, Konsultant</p>
               </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/30 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl font-bold text-brand-navy">
              Nie naprawiam Cię.<br/>
              <span className="text-brand-indigo">Uczę Cię obsługi własnego umysłu.</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Wielu ludzi szuka "uzdrowienia", podczas gdy potrzebują <strong>zrozumienia</strong>.
              Jako psycholog pracuję analitycznie. Pomagam Ci zobaczyć "system operacyjny" Twojego umysłu – schematy myślenia, automatyczne reakcje emocjonalne i błędy poznawcze, które sabotują Twoje decyzje.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-indigo/30 transition-all"
                >
                  <div className="text-brand-gold mb-3">{card.icon}</div>
                  <h4 className="font-bold text-brand-navy mb-1">{card.title}</h4>
                  <p className="text-sm text-slate-500">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
