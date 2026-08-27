import type { Metadata } from 'next';
import PsychologicalTestsClient from './PsychologicalTestsClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Testy psychologiczne | Kacper Kulesza — Psycholog',
  description:
    'Darmowe, anonimowe testy psychologiczne online z natychmiastową interpretacją: Test paraliżu decyzyjnego, test poziomu stresu, style podejmowania decyzji (GDMS) oraz zmęczenie decyzyjne.',
  openGraph: {
    title: 'Testy psychologiczne online | Kacper Kulesza',
    description:
      'Sprawdź swój poziom stresu, paraliż analityczny i poznaj swój dominujący styl podejmowania decyzji. Narzędzia oparte na psychologii poznawczej.',
    url: 'https://psychologkacper.pl/testy-psychologiczne',
    siteName: 'Kacper Kulesza',
    locale: 'pl_PL',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Testy psychologiczne online — Kacper Kulesza',
  description:
    'Zbiór bezpłatnych, anonimowych testów i kwestionariuszy psychoedukacyjnych badających proces podejmowania decyzji, poziom stresu i przeciążenie poznawcze.',
  url: 'https://psychologkacper.pl/testy-psychologiczne',
  author: {
    '@type': 'Person',
    name: 'Kacper Kulesza',
    jobTitle: 'Psycholog',
  },
};

export default function PsychologicalTestsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background text-foreground pt-28 pb-12">
        <PsychologicalTestsClient />
      </main>
      <Footer />
    </>
  );
}
