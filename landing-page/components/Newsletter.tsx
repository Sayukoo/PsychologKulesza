import { Mail } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Newsletter() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Rozwijaj się świadomie
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Dołącz do newslettera i odbierz darmowy PDF: <br />
            <span className="font-semibold text-accent">"5 pytań, które zmienią Twoje myślenie o sobie"</span>.
            Dzielę się wiedzą, nie spamem.
          </p>

          <form action="https://formspree.io/f/mqapelbo" method="POST" className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="Twój adres email"
              className="flex-1 px-6 py-4 rounded-xl text-foreground bg-background border-2 border-transparent focus:border-accent outline-none transition-all placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Odbieram PDF
            </button>
          </form>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Szanuję Twoją prywatność. Możesz wypisać się w każdej chwili.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
