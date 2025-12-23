import { Mail } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary mb-8">Masz pytania?</h2>
          <p className="text-slate-600 mb-12 text-lg">
            Jeśli chcesz dopytać o szczegóły współpracy przed umówieniem wizyty, napisz do mnie.
          </p>

          <a
            href="mailto:kackul17@gmail.com"
            className="inline-flex items-center gap-4 px-8 py-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <span className="text-xl font-medium text-primary group-hover:text-accent transition-colors">
              kackul17@gmail.com
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
