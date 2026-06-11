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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace('#', '');
      const run = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      requestAnimationFrame(run);
      setTimeout(run, 75);
    };
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [isHome]);

  const navLinks = [
    { name: 'Dla kogo', href: '/#dla-kogo' },
    { name: 'O mnie', href: '/#o-mnie' },
    { name: 'Jak pracujemy', href: '/#process' },
    { name: 'Cennik', href: '/#cennik' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if ((href.startsWith('/#') || href.startsWith('#')) && isHome) {
      const id = href.replace('/#', '').replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
      }
    }
    setIsOpen(false);
  };

  const solid = scrolled || !isHome;

  return (
    <nav
      className={clsx(
        'fixed z-50 transition-all duration-300',
        solid
          ? 'top-0 left-0 right-0 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#E8E3DA] shadow-sm py-3'
          : 'top-4 left-4 right-4 py-3'
      )}
    >
      <div
        className={clsx(
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300',
          !solid && 'bg-[#0F1923]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl px-5 py-1'
        )}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="z-50 relative group flex items-center gap-3 cursor-pointer"
            onClick={(e) => handleNavLinkClick(e, '/')}
            aria-label="Strona główna – Kacper Kulesza"
          >
            <div className="relative h-10 w-10 overflow-visible shrink-0">
              <Image
                src={Logo}
                alt="Logo Kacper Kulesza"
                fill
                className="object-contain"
                sizes="80px"
                style={{
                  filter: solid ? 'none' : 'brightness(0) invert(1)',
                  transform: 'scale(2.6)',
                  transformOrigin: 'center',
                  transition: 'filter 0.3s',
                }}
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={clsx('font-serif text-base font-bold tracking-wide transition-colors', solid ? 'text-[#0F1923]' : 'text-white')}>
                Kacper Kulesza
              </span>
              <span className={clsx('text-[10px] uppercase tracking-[0.18em] transition-colors', solid ? 'text-[#6B7280]' : 'text-white/60')}>
                psycholog
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={clsx(
                  'text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer',
                  solid
                    ? 'text-[#374151] hover:text-[#0F1923] hover:bg-[#F4F1EB]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#booking"
              onClick={(e) => handleNavLinkClick(e, '/#booking')}
              className="ml-2 btn-shine relative overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#C9A85C] text-white shadow-md hover:brightness-95 transition-all duration-200 cursor-pointer"
            >
              <span className="relative z-10">Bezpłatne 15 min →</span>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx('md:hidden z-50 relative p-2 rounded-lg transition-colors cursor-pointer', isOpen ? 'text-white' : solid ? 'text-[#0F1923]' : 'text-white')}
            aria-label="Otwórz menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: '#0F1923' }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="text-3xl font-serif font-medium text-white hover:text-[#C9A85C] transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + navLinks.length * 0.07 }}
            >
              <Link
                href="/#booking"
                onClick={(e) => handleNavLinkClick(e, '/#booking')}
                className="btn-shine relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-[#C9A85C] text-white font-semibold text-xl rounded-xl shadow-lg cursor-pointer"
              >
                <span className="relative z-10">Bezpłatne 15 min →</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
