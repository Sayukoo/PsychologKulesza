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

  // Close the menu with Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

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
            className={clsx('md:hidden z-50 relative p-2 rounded-lg transition-colors cursor-pointer', isOpen || !solid ? 'text-white' : 'text-[#0F1923]')}
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile overlay (CSS-driven, sibling of nav so it always covers the viewport) */}
      <div className={`mobile-menu md:hidden ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen} role="dialog" aria-modal="true">
        <button
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? undefined : -1}
          aria-label="Zamknij menu"
          className="absolute top-5 right-5 p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-7 h-7" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            tabIndex={isOpen ? undefined : -1}
            onClick={(e) => handleNavLinkClick(e, link.href)}
            className="menu-item text-3xl font-serif font-medium text-white hover:text-[#C9A85C] transition-colors cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
        <div className="menu-item flex flex-col items-center gap-4 pt-2">
          <Link
            href="/#booking"
            tabIndex={isOpen ? undefined : -1}
            onClick={(e) => handleNavLinkClick(e, '/#booking')}
            className="btn-shine relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-[#C9A85C] text-white font-semibold text-xl rounded-xl shadow-lg cursor-pointer"
          >
            <span className="relative z-10">Bezpłatne 15 min →</span>
          </Link>
          <a
            href={PHONE_HREF}
            tabIndex={isOpen ? undefined : -1}
            onClick={() => trackEvent({ action: 'cta_menu_call_click', category: 'Engagement', label: 'Mobile Menu Call' })}
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/25 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Phone className="w-5 h-5 text-[#C9A85C]" />
            Zadzwoń: 572 450 606
          </a>
        </div>
      </div>
    </>
  );
}
