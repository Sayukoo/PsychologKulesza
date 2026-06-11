'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <Link
            href="/#booking"
            className="relative overflow-hidden flex items-center justify-center w-full bg-[#C9A85C] text-white font-bold py-4 rounded-lg shadow-xl shadow-[#C9A85C]/20 hover:brightness-95 transition-all"
          >
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
            <span className="relative z-10 flex items-center">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Bezpłatne 15 minut
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
