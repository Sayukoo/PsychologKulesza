import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://psychologkacper.pl'),
  title: {
    default: "Psycholog Kacper",
    template: "%s | Kacper Kulesza"
  },
  description:
    "Konsultacje psychologiczne, zrozum siebie dzięki podejściu science based ",
  openGraph: {
    title: "Psycholog Kacper",
    description: "Konsultacje psychologiczne, zrozum siebie dzięki podejściu science based",
    url: 'https://psychologkacper.pl',
    siteName: 'Kacper Kulesza',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1923",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kacper Kulesza — Psycholog",
  description:
    "Konsultacje psychologiczne i decyzyjne online. Bezpłatna 15-minutowa rozmowa wstępna.",
  url: "https://psychologkacper.pl",
  telephone: "+48572450606",
  email: "kackul17@gmail.com",
  priceRange: "0-150 zł",
  areaServed: "PL",
  availableLanguage: "pl",
  founder: {
    "@type": "Person",
    name: "Kacper Kulesza",
    jobTitle: "Psycholog",
    sameAs: ["https://www.linkedin.com/in/konstruktywizm/"],
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Bezpłatna konsultacja wstępna (15 minut)",
      price: "0",
      priceCurrency: "PLN",
    },
    {
      "@type": "Offer",
      name: "Konsultacja decyzyjna (60 minut)",
      price: "150",
      priceCurrency: "PLN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Early connections to third-party origins (cheap, no download) */}
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Content must be readable without JS (reveal animations start hidden) */}
        <noscript>
          <style>{`.reveal,.stagger-group>.stagger-item{opacity:1!important;transform:none!important}.mobile-menu{display:none!important}`}</style>
        </noscript>
        {/* Google Analytics — deferred until the page is fully loaded */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GLRYY28TND"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GLRYY28TND');
          `}
        </Script>
        {/* Microsoft Clarity — heavy session recording, load last */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xdloekxfbn");
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <MobileStickyCTA />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
