import { Mail, Send } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Skontaktuj się ze mną</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Masz pytania dotyczące współpracy? Chcesz dowiedzieć się więcej o procesie?
              Wypełnij formularz, a odpowiem najszybciej jak to możliwe.
            </p>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-muted">
            <form action="https://formspree.io/f/mqapelbo" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Adres email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="Tutaj wpisz swoją wiadomość..."
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] font-medium"
                >
                  <Send className="w-5 h-5" />
                  Wyślij wiadomość
                </button>
              </div>
            </form>

            <div className="mt-10 pt-8 border-t border-muted flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Możesz też napisać bezpośrednio:
              </span>
              <a href="mailto:kackul17@gmail.com" className="text-accent hover:underline font-medium">
                kackul17@gmail.com
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
