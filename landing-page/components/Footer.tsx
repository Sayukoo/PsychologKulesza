import Link from 'next/link';
import { FadeIn } from './FadeIn';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      {/* Footer Accents */}
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn>
          <div className="text-sm text-slate-300 w-full space-y-8">
             {/* Disclaimer */}
             <div className="space-y-2 opacity-80">
               <p>Strona ma charakter informacyjny i edukacyjny.</p>
               <p>Treści nie zastępują porady lekarskiej ani psychoterapii.</p>
               <p>W przypadku problemów zdrowotnych skonsultuj się z lekarzem.</p>
             </div>

             {/* Copyright & Links */}
             <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4">
                <p>&copy; 2026 Kacper Kulesza</p>
                <div className="flex gap-4 text-xs uppercase tracking-wider">
                  <Link href="/polityka-prywatnosci" className="hover:text-accent transition-colors">Polityka prywatności</Link>
                  <span className="text-white/20">|</span>
                  <Link href="/regulamin" className="hover:text-accent transition-colors">Regulamin</Link>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
