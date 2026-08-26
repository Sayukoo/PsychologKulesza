'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, Phone } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    let bookingInView = false;

    const update = () => {
      ticking = false;
      setIsVisible(window.scrollY > 120 && !bookingInView);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    // Hide the bar while the booking section (Calendly) is on screen,
    // so it never covers the calendar controls.
    const booking = document.getElementById('booking');
    let observer: IntersectionObserver | null = null;
    if (booking && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          bookingInView = entries[0]?.isIntersecting ?? false;
          update();
        },
        { threshold: 0.08 },
      );
      observer.observe(booking);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-3 right-3 z-40 md:hidden"
        >
          <div className="flex gap-2">
            <a
              href="tel:+48881408027"
              onClick={() => trackEvent({ action: 'cta_mobile_call_click', category: 'Engagement', label: 'Mobile Sticky Call' })}
              aria-label="Zadzwoń teraz"
              className="flex items-center justify-center w-16 shrink-0 bg-[#0F1923] text-white rounded-lg shadow-xl border border-white/10 active:brightness-90 transition-all"
            >
              <span className="relative z-10 flex flex-col items-center py-1.5">
                <Phone className="w-6 h-6" />
                <span className="text-[10px] font-semibold mt-0.5">Zadzwoń</span>
              </span>
            </a>
            <Link
              href="/#booking"
              onClick={() => trackEvent({ action: 'cta_mobile_sticky_click', category: 'Engagement', label: 'Mobile Sticky CTA' })}
              className="relative overflow-hidden flex items-center justify-center flex-grow bg-[#C9A85C] text-white font-bold py-4 rounded-lg shadow-xl shadow-[#C9A85C]/20 hover:brightness-95 transition-all"
            >
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
              <span className="relative z-10 flex items-center">
                <CalendarCheck className="w-5 h-5 mr-2" />
                Bezpłatne 15 minut
              </span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
