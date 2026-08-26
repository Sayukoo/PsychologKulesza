'use client';

import { useState, useEffect } from 'react';
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
    <div
      className={`fixed left-0 right-0 z-50 px-4 pb-4 pt-0 md:p-6 transition-all duration-300 ease-out ${isVisible ? 'bottom-[5.5rem] translate-y-0 opacity-100 md:bottom-0' : '-bottom-full translate-y-full opacity-0 pointer-events-none md:translate-y-[150%]'}`}
      aria-hidden={!isVisible}
    >
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-lg p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        <div className="text-slate-600 text-xs sm:text-sm md:text-base">
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
            className="px-5 py-2 sm:px-6 sm:py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-primary/10"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
