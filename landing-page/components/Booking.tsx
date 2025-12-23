'use client';

import ZnanyLekarzWidget from './ZnanyLekarzWidget';
import { motion } from 'framer-motion';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-light-navy via-brand-navy to-brand-navy opacity-50" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Zdecyduj.</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Jeśli przeczytałeś całość i wiesz, że to forma pracy dla Ciebie – zapraszam.
            Bez presji. Bez nagabywania. Czysty konkret.
          </p>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 text-brand-navy">
            <h3 className="text-2xl font-bold mb-8">Umów Konsultację</h3>
            <ZnanyLekarzWidget />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
