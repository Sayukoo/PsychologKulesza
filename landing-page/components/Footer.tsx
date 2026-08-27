import Link from 'next/link';
import { FadeIn } from './FadeIn';

const footerLinks = [
  { name: 'Dla kogo', href: '/#dla-kogo' },
  { name: 'O mnie', href: '/#o-mnie' },
  { name: 'Jak pracujemy', href: '/#process' },
  { name: 'Cennik', href: '/#cennik' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeIn>
          {/* Top row: brand + nav */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
            <div className="text-center md:text-left">
              <p className="font-serif text-xl font-bold text-white">Kacper Kulesza</p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/50 mt-1">
                psycholog · konsultacje decyzyjne
              </p>
            </div>

            <nav aria-label="Nawigacja w stopce">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom row */}
          <div className="pt-8 text-sm text-white/60">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; {new Date().getFullYear()} Kacper Kulesza. Wszelkie prawa zastrzeżone.</p>
              <div className="flex gap-6">
                <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors cursor-pointer">
                  Polityka Prywatności
                </Link>
                <Link href="/regulamin" className="hover:text-white transition-colors cursor-pointer">
                  Regulamin
                </Link>
              </div>
            </div>
            <p className="mt-6 text-xs text-white/40 max-w-2xl mx-auto md:mx-0 text-center md:text-left leading-relaxed">
              Strona ma charakter informacyjny i edukacyjny. Treści tu zawarte nie zastępują porady
              lekarskiej ani psychoterapii. W przypadku problemów zdrowotnych skonsultuj się z lekarzem.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
