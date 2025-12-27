import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      {/* Footer Accents */}
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-6">Zacznij działać.</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Jeśli jesteś gotów na pracę, która wymaga zaangażowania, ale daje wymierne efekty – zapraszam.
          </p>

          <a
            href="#booking"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-accent hover:brightness-90 transition-all duration-300 rounded-sm shadow-lg mb-12"
          >
            Rezerwuj termin
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="text-sm text-slate-300 border-t border-white/10 pt-8 w-full">
             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Kacper Kulesza. Wszelkie prawa zastrzeżone.</p>
                <div className="flex gap-6">
                  <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka Prywatności</Link>
                  <Link href="/regulamin" className="hover:text-white transition-colors">Regulamin</Link>
                </div>
             </div>
             <p className="mt-4 text-xs opacity-60 max-w-2xl mx-auto">
               Strona ma charakter informacyjny i edukacyjny. Treści tu zawarte nie zastępują porady lekarskiej ani psychoterapii. W przypadku problemów zdrowotnych skonsultuj się z lekarzem.
             </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
