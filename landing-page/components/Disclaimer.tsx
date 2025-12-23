'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <section className="bg-brand-cream py-12 relative z-20 -mt-10 mx-4 md:mx-auto max-w-5xl">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-brand-navy/5 flex flex-col md:flex-row items-start gap-6"
      >
        <div className="p-3 bg-brand-navy/5 rounded-full shrink-0 text-brand-indigo">
          <AlertCircle size={32} />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-brand-navy tracking-wide uppercase">
            Ważne Rozróżnienie
          </h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            Moje konsultacje to <strong>praca rozwojowa i edukacyjna</strong>.
            Nie prowadzę psychoterapii, nie leczę zaburzeń klinicznych (takich jak depresja czy stany lękowe) i nie stawiam diagnoz medycznych.
            <br/><br/>
            Pracujemy na Twoich <strong>zasobach</strong>, skupiając się na przyszłości, strategii i zrozumieniu mechanizmów, które Tobą kierują. To proces dla osób zdrowych, które chcą żyć bardziej świadomie.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
