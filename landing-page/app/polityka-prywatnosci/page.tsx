import React from 'react';

const sections = [
  {
    title: '1. Administrator danych',
    items: [
      'Administratorem danych osobowych jest Kacper Kulesza.',
      'Kontakt: kackul17@gmail.com.',
    ],
  },
  {
    title: '2. Zakres przetwarzanych danych',
    items: [
      'imię i nazwisko,',
      'adres e-mail,',
      'numer telefonu,',
      'notatki z sesji,',
      'nagrania rozmów,',
      'dane zawarte w formularzu rezerwacyjnym.',
    ],
  },
  {
    title: '3. Cel przetwarzania danych',
    items: [
      'realizacji usług konsultacyjnych,',
      'kontaktu z klientem,',
      'prowadzenia dokumentacji,',
      'realizacji obowiązków prawnych.',
    ],
  },
  {
    title: '4. Podstawa prawna',
    items: [
      'zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO),',
      'wykonania umowy (art. 6 ust. 1 lit. b RODO),',
      'obowiązków prawnych (art. 6 ust. 1 lit. c RODO).',
    ],
  },
  {
    title: '5. Przechowywanie danych',
    items: [
      'Dane przechowywane są w formie elektronicznej.',
      'Dane są zabezpieczone przed dostępem osób trzecich.',
      'Dane przechowywane są przez okres niezbędny do realizacji celu lub do cofnięcia zgody.',
    ],
  },
  {
    title: '6. Prawa osoby, której dane dotyczą',
    items: [
      'dostępu do danych,',
      'ich poprawienia,',
      'usunięcia,',
      'ograniczenia przetwarzania,',
      'wniesienia sprzeciwu,',
      'cofnięcia zgody w dowolnym momencie.',
    ],
  },
  {
    title: '7. Pliki cookies',
    description:
      'Strona może wykorzystywać pliki cookies w celach technicznych i statystycznych (np. system rezerwacji).',
  },
  {
    title: '8. Postanowienia końcowe',
    description: 'Korzystanie z serwisu oznacza akceptację niniejszej polityki prywatności.',
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-primary to-secondary text-white shadow-2xl border border-primary/20 px-6 sm:px-10 py-10 sm:py-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-12 h-40 w-40 bg-white/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 bg-accent/30 blur-3xl rounded-full" />
        </div>
        <div className="relative space-y-4">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-wide uppercase">
            Transparentność danych
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Polityka prywatności</h1>
          <p className="text-sm sm:text-base text-white/80">
            Zasady gromadzenia, przechowywania i przetwarzania danych osobowych w ramach usług
            konsultacyjnych online.
          </p>
        </div>
      </section>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:gap-8">
        {sections.map((section, idx) => (
          <article
            key={section.title}
            className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200/80 px-6 py-6 sm:px-8 sm:py-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-60" />
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-accent/10 text-accent font-bold grid place-items-center border border-accent/20">
                {idx + 1}
              </div>
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            </div>

            {section.items ? (
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-700 leading-relaxed">{section.description}</p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
