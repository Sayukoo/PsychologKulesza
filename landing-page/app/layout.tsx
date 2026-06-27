import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GLRYY28TND"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GLRYY28TND');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
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
