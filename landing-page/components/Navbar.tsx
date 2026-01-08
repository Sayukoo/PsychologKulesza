'use client';

import { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const targetId = hash.replace('#', '');

      const scrollTarget = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      requestAnimationFrame(scrollTarget);
      setTimeout(scrollTarget, 75);
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [isHome]);

  const navLinks = [
    { name: 'Dla kogo', href: '/#dla-kogo' },
    { name: 'Jak wygląda konsultacja', href: '/#process' },
    { name: 'O mnie', href: '/#o-mnie' },
    { name: 'Cennik', href: '/#cennik' },
    { name: 'Umów konsultację', href: '/#booking', cta: true },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if ((href.startsWith('/#') || href.startsWith('#')) && isHome) {
      const targetId = href.replace('/#', '').replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `${window.location.pathname}#${targetId}`);
      }
    }

    setIsOpen(false);
  };

  // Visual Logic:
  // Top (Hero): Transparent BG, Ivory Text (scrolled=false)
  // Scrolled: Ivory BG, Navy Text, Shadow (scrolled=true)
  const navBgClass = scrolled ? 'bg-[#FAF7F2] shadow-sm border-b border-[var(--color-border)]' : 'bg-transparent';
  const textColorClass = scrolled ? 'text-[var(--color-primary)]' : 'text-[#FAF7F2]';
  const logoFilter = scrolled ? 'none' : 'brightness(0) invert(1)';
  // Note: Logo image is dark by default? If yes, invert makes it white.
  // Assuming Logo is dark (Navy/Black).
  // Scrolled (Ivory BG) -> Dark Logo (No filter)
  // Top (Dark/Transparent BG) -> White Logo (Invert)

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        navBgClass,
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="z-50 relative group flex items-center gap-3"
            onClick={(event) => handleNavLinkClick(event, '/')}
            aria-label="Strona główna - Kacper Kulesza"
          >
            <motion.div
              className="relative h-12 w-12 overflow-visible"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src={Logo}
                alt="Logo Kacper Kulesza"
                fill
                className="object-contain"
                sizes="96px"
                style={{ filter: logoFilter, transform: 'scale(2.8)', transformOrigin: 'center', transition: 'filter 0.3s' }}
                priority
              />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className={clsx("font-serif text-lg font-bold tracking-wide transition-colors", textColorClass)}>
                Kacper Kulesza
              </span>
              <span className={clsx("text-xs uppercase tracking-[0.18em] transition-colors", scrolled ? "text-slate-500" : "text-slate-300")}>
                psycholog
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavLinkClick(event, link.href)}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-accent',
                  link.cta
                    ? 'relative overflow-hidden bg-[#FAF7F2] text-[var(--color-primary)] border border-[var(--color-accent)] px-5 py-2.5 rounded-sm hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] shadow-sm group'
                    : textColorClass
                )}
              >
                {/* Shine effect for CTA */}
                {link.cta && (
                   <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx("md:hidden z-50 relative focus:outline-none transition-colors", isOpen ? "text-white" : textColorClass)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center space-y-8 md:hidden"
            style={{ backgroundColor: '#111827' }}
          >
             {/* Navy Background for Mobile Menu */}
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={(event) => handleNavLinkClick(event, link.href)}
                  className={clsx(
                    'transition-colors relative group',
                    link.cta
                      ? 'bg-[#FAF7F2] text-[var(--color-primary)] border border-[var(--color-accent)] px-8 py-3 rounded-sm shadow-lg text-xl font-medium inline-flex items-center justify-center'
                      : 'text-3xl font-serif font-medium text-[#FAF7F2] hover:text-[var(--color-accent)]'
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {!link.cta && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all group-hover:w-full" />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
