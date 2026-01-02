import React from 'react';

const sections = [
  {
    title: '§1. Informacje ogólne',
    items: [
      'Usługi świadczone są przez osobę fizyczną prowadzącą działalność gospodarczą / osobę fizyczną przygotowującą się do jej rozpoczęcia (dalej: „Usługodawca”).',
      'Usługi mają charakter konsultacji psychologicznych, obejmujących rozmowę, psychoedukację, wsparcie w rozumieniu trudności oraz pracę nad celami osobistymi.',
      'Usługi nie stanowią psychoterapii, leczenia ani świadczeń zdrowotnych w rozumieniu ustawy o ochronie zdrowia psychicznego.',
    ],
  },
  {
    title: '§2. Zakres usług',
    items: [
      'Konsultacje odbywają się w formie spotkań online (Google Meet).',
      'Czas trwania jednej sesji wynosi 50 minut.',
      'Konsultacje mogą mieć charakter jednorazowy lub cykliczny (np. cotygodniowy).',
      'Usługa ma charakter wspierający, rozwojowy i psychoedukacyjny.',
    ],
  },
  {
    title: '§3. Zasady rezerwacji i płatności',
    items: [
      'Rezerwacja odbywa się poprzez system rezerwacyjny (np. Calendly).',
      'Płatność dokonywana jest po zakończonej sesji.',
      'Odwołanie lub zmiana terminu możliwa jest najpóźniej 24 godziny przed umówioną sesją.',
      'W przypadku późniejszego odwołania lub nieobecności Usługodawca zastrzega sobie prawo do naliczenia opłaty za sesję.',
      'Zwroty są możliwe wyłącznie w przypadku spełnienia warunków określonych indywidualnie.',
    ],
  },
  {
    title: '§4. Odpowiedzialność',
    items: [
      'Konsultacje nie zastępują psychoterapii ani leczenia psychiatrycznego.',
      'Usługodawca nie ponosi odpowiedzialności za decyzje podejmowane przez Klienta poza sesją.',
      'Klient korzysta z usług dobrowolnie i ponosi odpowiedzialność za swoje decyzje.',
    ],
  },
  {
    title: '§5. Poufność',
    items: [
      'Wszystkie informacje przekazywane w trakcie konsultacji są poufne.',
      'Wyjątkiem są sytuacje przewidziane prawem (zagrożenie życia lub zdrowia).',
    ],
  },
  {
    title: '§6. Postanowienia końcowe',
    items: [
      'Regulamin może ulec zmianie.',
      'Aktualna wersja regulaminu dostępna jest na stronie internetowej Usługodawcy.',
      'Skorzystanie z usługi oznacza akceptację regulaminu.',
    ],
  },
];

export default function Terms() {
  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-secondary text-white shadow-2xl border border-primary/20 px-6 sm:px-10 py-10 sm:py-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-20 h-48 w-48 bg-accent/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 -left-10 h-52 w-52 bg-white/15 blur-3xl rounded-full" />
        </div>
        <div className="relative space-y-4">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-wide uppercase">
            Dokument dla Klientów
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Regulamin świadczenia usług konsultacyjnych
          </h1>
          <p className="text-sm sm:text-base text-white/80">
         Zawiera zasady świadczenia usług, rezerwacji,
            płatności oraz kluczowe obowiązki obu stron.
          </p>
        </div>
      </section>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:gap-8">
        {sections.map((section, idx) => (
          <article
            key={section.title}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200/80 px-6 py-6 sm:px-8 sm:py-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60" />
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold grid place-items-center border border-primary/20">
                {idx + 1}
              </div>
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            </div>
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent/70 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
