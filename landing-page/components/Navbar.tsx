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
    { name: 'Start', href: '/#start' },
    { name: 'O mnie', href: '/#o-mnie' },
    { name: 'Dla kogo', href: '/#dla-kogo' },
    { name: 'Proces', href: '/#process' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Umów wizytę', href: '/#booking', cta: true },
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

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent',
        !isOpen && 'backdrop-blur-md',
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
                style={{ filter: 'brightness(0) invert(1)', transform: 'scale(2.8)', transformOrigin: 'center' }}
                priority
              />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-serif text-lg font-bold tracking-wide">Kacper Kulesza</span>
              <span className="text-xs text-slate-300 uppercase tracking-[0.18em]">psycholog</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavLinkClick(event, link.href)}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-accent',
                  link.cta
                    ? 'relative overflow-hidden bg-accent text-white px-5 py-2 rounded-sm hover:brightness-90 hover:text-white shadow-lg hover:shadow-accent/20 group'
                    : 'text-slate-200'
                )}
              >
                {link.cta && (
                  <div className="pointer-events-none absolute inset-0 flex h-full w-full justify-center group-hover:animate-shimmer md:animate-shimmer">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50 relative focus:outline-none"
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
            className="fixed inset-0 bg-[#2E3A44] z-[60] flex flex-col items-center justify-center space-y-8 md:hidden"
            style={{ backgroundColor: '#2E3A44' }}
          >
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
                      ? 'relative overflow-hidden bg-accent text-white px-8 py-3 rounded-sm shadow-lg text-xl font-medium inline-flex items-center justify-center'
                      : 'text-3xl font-serif font-medium text-white hover:text-accent'
                  )}
                >
                  {link.cta && (
                    <div className="pointer-events-none absolute inset-0 flex h-full w-full justify-center animate-shimmer">
                      <div className="relative h-full w-8 bg-white/20" />
                    </div>
                  )}
                  <span className="relative z-10">{link.name}</span>
                  {!link.cta && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
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
