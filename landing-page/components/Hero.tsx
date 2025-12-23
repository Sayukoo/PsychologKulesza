import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 uppercase">
          Kacper Kulesza.<br />
          Magister Psychologii.
        </h1>
        <p className="text-xl sm:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
          Praca z myśleniem, regulacją emocji i schematami decyzyjnymi.
          <span className="block mt-2 font-bold">Analiza. Konkret. Odpowiedzialność.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="https://www.znanylekarz.pl/kacper-kulesza"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200"
          >
            Umów konsultację na ZnanyLekarz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a
            href="#jak-pracuje"
            className="inline-flex items-center justify-center px-8 py-4 border border-black text-base font-medium text-black bg-transparent hover:bg-gray-100 transition-colors duration-200"
          >
            Jak pracuję?
          </a>
        </div>
      </div>
    </section>
  );
}
