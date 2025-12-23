'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-slate-600 text-sm md:text-base">
              <p>
                Ta strona używa plików cookies, aby zapewnić Ci najlepsze doświadczenie.
                Korzystając ze strony, zgadzasz się na naszą{' '}
                <Link href="/polityka-prywatnosci" className="text-accent hover:underline font-medium">
                  Politykę Prywatności
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-primary/10"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
