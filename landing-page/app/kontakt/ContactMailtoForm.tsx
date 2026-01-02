'use client';

import { useMemo } from 'react';

export default function ContactMailtoForm({ email }: { email: string }) {
  const defaultSubject = 'Zapytanie z formularza kontaktowego';

  const buildMailto = useMemo(
    () => (data: { name: string; sender: string; subject?: string; message: string }) => {
      const subject = data.subject?.trim() || defaultSubject;
      const bodyLines = [
        `Imię i nazwisko: ${data.name}`,
        `E-mail: ${data.sender}`,
        '',
        data.message,
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));
      return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    },
    [email]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mailto = buildMailto({
      name: String(formData.get('name') || ''),
      sender: String(formData.get('email') || ''),
      subject: String(formData.get('subject') || ''),
      message: String(formData.get('message') || ''),
    });
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Imię i nazwisko
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition"
            placeholder="Jan Kowalski"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Adres e-mail
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition"
            placeholder="jan.kowalski@email.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
        Temat
        <input
          type="text"
          name="subject"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition"
          placeholder="Umówienie konsultacji / pytanie o przebieg pracy"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
        Wiadomość
        <textarea
          name="message"
          rows={6}
          required
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition resize-none"
          placeholder="Opisz krótko swoją sytuację lub pytanie. Dzięki temu mogę lepiej przygotować odpowiedź."
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow-md shadow-primary/15 hover:bg-primary/90 transition"
      >
        Wyślij wiadomość
      </button>

      <p className="text-xs text-slate-500 leading-relaxed">
        Przycisk otworzy domyślnego klienta poczty z uzupełnionym tematem i treścią wiadomości.
      </p>
    </form>
  );
}
