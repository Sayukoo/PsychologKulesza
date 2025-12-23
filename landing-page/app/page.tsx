import Hero from '@/components/Hero';
import Disclaimer from '@/components/Disclaimer';
import About from '@/components/About';
import Audience from '@/components/Audience';
import Process from '@/components/Process';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-white overflow-hidden">
      <Hero />
      <Disclaimer />
      <About />
      <Audience />
      <Process />
      <Comparison />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  );
}
