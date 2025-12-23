import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-primary/5">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Polityka Prywatności</h1>

        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="lead">
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej <strong>Kacper Kulesza - Twój Partner w Rozwoju</strong>.
          </p>

          <h3>1. Administrator Danych</h3>
          <p>
            Administratorem danych osobowych jest <strong>[TU WPISZ NAZWĘ FIRMY]</strong> z siedzibą przy <strong>[TU WPISZ ADRES]</strong>, NIP: <strong>[TU WPISZ NIP]</strong>.
          </p>

          <h3>2. Cele przetwarzania danych</h3>
          <p>
            Dane osobowe przetwarzane są w celu:
          </p>
          <ul>
            <li>Realizacji usług konsultacyjnych i szkoleniowych.</li>
            <li>Kontaktu z Użytkownikiem w odpowiedzi na zapytania przesłane przez formularz lub e-mail.</li>
            <li>Marketingu bezpośredniego własnych usług (za zgodą Użytkownika).</li>
          </ul>

          <h3>3. Pliki Cookies</h3>
          <p>
            Strona internetowa wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania serwisu oraz w celach statystycznych.
          </p>
          <ul>
            <li><strong>Cookies niezbędne:</strong> Wymagane do funkcjonowania strony (np. nawigacja).</li>
            <li><strong>Cookies analityczne:</strong> Pomagają zrozumieć, jak użytkownicy korzystają ze strony (np. Google Analytics).</li>
          </ul>
          <p>
            Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej.
          </p>

          <h3>4. Udostępnianie danych</h3>
          <p>
            Dane osobowe mogą być udostępniane podmiotom wspierającym nas w świadczeniu usług drogą elektroniczną (np. dostawcy hostingu, usługi księgowe, system rezerwacji ZnanyLekarz). Nie sprzedajemy Twoich danych podmiotom trzecim.
          </p>

          <h3>5. Prawa Użytkownika</h3>
          <p>
            Każdemu Użytkownikowi przysługuje prawo do:
          </p>
          <ul>
            <li>Wglądu do swoich danych osobowych.</li>
            <li>Sprostowania, usunięcia lub ograniczenia przetwarzania danych.</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
            <li>Przenoszenia danych.</li>
          </ul>
          <p>
            W celu realizacji swoich praw, prosimy o kontakt pod adresem e-mail: <strong>kontakt@kacperkulesza.pl</strong> (lub innym wskazanym).
          </p>

          <h3>6. Zmiany w Polityce Prywatności</h3>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Wszelkie zmiany będą publikowane na tej stronie.
          </p>

          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
            <span className="text-sm text-slate-400">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</span>
            <Link href="/" className="text-accent font-medium hover:text-amber-600 transition-colors">
              &larr; Powrót do strony głównej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
