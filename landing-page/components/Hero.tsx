'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-navy overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-brand-indigo blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-brand-gold blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-gold font-medium text-sm mb-6 border border-brand-gold/20 backdrop-blur-sm">
            <Zap size={16} />
            <span>Nowoczesna Psychologia Decyzyjna</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Zrozum Swoje <br/>
            <span className="text-brand-gold">Mechanizmy.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kacper Kulesza. Magister psychologii.
            <br />
            Konsultacje dla osób, które chcą odzyskać kontrolę, zrozumieć swoje schematy i podejmować lepsze decyzje. Bez lania wody.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBooking}
              className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-white rounded-xl font-bold text-lg flex items-center gap-2 transition-colors shadow-lg shadow-brand-gold/20"
            >
              Umów Konsultację
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-medium text-lg hover:border-white/40 transition-colors"
            >
              Jak pracuję?
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
