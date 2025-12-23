import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 uppercase">Zdecyduj.</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Jeśli przeczytałeś całość i wiesz, że to forma pracy dla Ciebie – zapraszam.
          Bez presji. Bez nagabywania.
        </p>

        <a
          href="#booking"
          className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium text-black bg-white hover:bg-gray-200 transition-colors duration-200 mb-12"
        >
          Rezerwuj termin (ZnanyLekarz)
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>

        <div className="text-sm text-gray-400 border-t border-gray-800 pt-8 w-full">
          <p>&copy; {new Date().getFullYear()} Kacper Kulesza. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2">Strona nie stanowi porady medycznej ani psychoterapeutycznej.</p>
        </div>
      </div>
    </footer>
  );
}
