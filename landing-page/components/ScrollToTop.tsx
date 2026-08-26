'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const next = window.scrollY > 300;
        setIsVisible((prev) => (prev === next ? prev : next));
      });
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top-btn fixed bottom-24 right-4 md:bottom-8 md:right-8 z-30 p-3 bg-accent text-white rounded-full shadow-lg hover:brightness-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent ${isVisible ? 'show' : ''}`}
      aria-label="Wróć na górę"
      tabIndex={isVisible ? undefined : -1}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
