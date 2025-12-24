import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import NeuralBackground from "@/components/NeuralBackground";
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
  metadataBase: new URL('https://www.kacperkulesza.pl'),
  title: {
    default: "Kacper Kulesza - Twój Partner w Rozwoju",
    template: "%s | Kacper Kulesza"
  },
  description:
    "Konsultacje rozwojowe, które pomogą Ci zrozumieć własny system operacyjny i budować życie w zgodzie z Twoim potencjałem.",
  openGraph: {
    title: "Kacper Kulesza - Twój Partner w Rozwoju",
    description: "Konsultacje rozwojowe, które pomogą Ci zrozumieć własny system operacyjny i budować życie w zgodzie z Twoim potencjałem.",
    url: 'https://www.kacperkulesza.pl',
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
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased font-sans`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <NeuralBackground />
          <Navbar />
          {children}
          <ScrollToTop />
          <CookieBanner />
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-PLACEHOLDER"} />
      </body>
    </html>
  );
}
