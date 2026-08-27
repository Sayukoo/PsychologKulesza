'use client';

import { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import Logo from './images/logo.webp';
import { trackEvent } from '@/lib/analytics';

const PHONE_HREF = 'tel:+48572450606';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const next = window.scrollY > 40;
        setScrolled((prev) => (prev === next ? prev : next));
      });
    };
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

  // Close the menu with Escape, lock body scroll while open,
  // and reset state if viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.documentElement.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Dla kogo', href: '/#dla-kogo' },
    { name: 'O mnie', href: '/#o-mnie' },
    { name: 'Jak pracujemy', href: '/#process' },
    { name: 'Cennik', href: '/#cennik' },
    { name: 'Testy psychologiczne', href: '/testy-psychologiczne' },
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
    <>
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
          !solid && 'bg-[#0F1923]/80 backdrop-blur-md rounded-lg border border-white/10 shadow-2xl px-5 py-1'
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
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={clsx(
                  'text-xs lg:text-sm font-medium px-2 lg:px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap',
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
              className="ml-1 lg:ml-2 btn-shine relative overflow-hidden inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm font-semibold bg-[#C9A85C] text-white shadow-md hover:brightness-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Bezpłatne 15 min →</span>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx('md:hidden z-50 relative p-2 -mr-2 rounded-lg transition-colors cursor-pointer', isOpen || !solid ? 'text-white' : 'text-[#0F1923]')}
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile overlay (CSS-driven, sibling of nav so it always covers the viewport) */}
      <div className={`mobile-menu md:hidden ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen} role="dialog" aria-modal="true">
        {/* Header strip mirroring the navbar so the X sits exactly where the burger was */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 sm:px-6 h-20 shrink-0">
          <span className="flex items-center gap-3 pointer-events-none">
            <span className="font-serif text-base font-bold text-white tracking-wide">Kacper Kulesza</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">psycholog</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? undefined : -1}
            aria-label="Zamknij menu"
            className="p-2 -mr-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav
          className="flex flex-col items-center justify-center gap-5 sm:gap-7 w-full px-6 pt-24 pb-[max(2rem,env(safe-area-inset-bottom))] overflow-y-auto"
          aria-label="Menu mobilne"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              tabIndex={isOpen ? undefined : -1}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              style={{ transitionDelay: isOpen ? `${0.08 + i * 0.06}s` : '0s' }}
              className="menu-item font-serif text-2xl sm:text-3xl font-medium text-white hover:text-[#C9A85C] active:text-[#C9A85C] transition-colors cursor-pointer py-1"
            >
              {link.name}
            </Link>
          ))}
          <div
            className="menu-item flex flex-col items-center gap-4 pt-4"
            style={{ transitionDelay: isOpen ? `${0.08 + navLinks.length * 0.06}s` : '0s' }}
          >
            <Link
              href="/#booking"
              tabIndex={isOpen ? undefined : -1}
              onClick={(e) => handleNavLinkClick(e, '/#booking')}
              className="btn-shine relative overflow-hidden inline-flex items-center justify-center w-full px-8 py-4 bg-[#C9A85C] text-white font-semibold text-lg rounded-lg shadow-lg cursor-pointer"
            >
              <span className="relative z-10">Bezpłatne 15 min →</span>
            </Link>
            <a
              href={PHONE_HREF}
              tabIndex={isOpen ? undefined : -1}
              onClick={() => trackEvent({ action: 'cta_menu_call_click', category: 'Engagement', label: 'Mobile Menu Call' })}
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/25 text-white font-semibold text-base rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5 text-[#C9A85C]" />
              Zadzwoń: 572 450 606
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
