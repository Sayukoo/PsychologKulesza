import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-8">Polityka Prywatności</h1>
      <div className="prose prose-slate">
        <p>
          Szanujemy Twoją prywatność. Poniżej znajduje się opis zasad przetwarzania danych osobowych na naszej stronie.
        </p>
        <p className="mt-4 italic text-slate-500">
          [Tu pojawi się pełna treść polityki prywatności dostosowana do wymogów RODO.]
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">1. Administrator Danych</h2>
        <p>
          Administratorem Twoich danych osobowych jest Kacper Kulesza.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">2. Kontakt</h2>
        <p>
          W sprawach związanych z ochroną danych możesz skontaktować się pod adresem: kackul17@gmail.com.
        </p>
      </div>
    </main>
  );
}
