'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      const show = window.scrollY > 300;
      setIsVisible(show);
    };

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
            className="flex items-center justify-center w-full bg-accent text-white font-bold py-4 rounded-lg shadow-xl shadow-accent/20 hover:brightness-95 transition-all"
          >
            <CalendarCheck className="w-5 h-5 mr-2" />
            Umów wizytę
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
