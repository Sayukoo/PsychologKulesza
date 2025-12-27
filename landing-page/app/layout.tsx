import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://psychologkacper.pl'),
  title: {
    default: "Psycholog Kacper",
    template: "%s | Kacper Kulesza"
  },
  description:
    "Konsultacje rozwojowe, kt?re pomog? Ci zrozumie? w?asny system operacyjny i budowa? ?ycie w zgodzie z Twoim potencja?em.",
  openGraph: {
    title: "Psycholog Kacper",
    description: "Konsultacje rozwojowe, kt?re pomog? Ci zrozumie? w?asny system operacyjny i budowa? ?ycie w zgodzie z Twoim potencja?em.",
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
      <body
        className={`${playfair.variable} ${lato.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
