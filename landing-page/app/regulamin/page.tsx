import React from 'react';

export default function Terms() {
  return (
    <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-8">Regulamin</h1>
      <div className="prose prose-slate">
        <p>
          Poniżej znajdują się zasady korzystania ze strony oraz świadczenia usług.
        </p>
        <p className="mt-4 italic text-slate-500">
          [Tu pojawi się pełna treść regulaminu.]
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">1. Postanowienia ogólne</h2>
        <p>
          Niniejszy regulamin określa zasady korzystania z serwisu internetowego.
        </p>
      </div>
    </main>
  );
}
