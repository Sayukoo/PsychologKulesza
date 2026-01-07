import Hero from '@/components/Hero';
import About from '@/components/About';
import Audience from '@/components/Audience';
import Process from '@/components/Process';
import Why from '@/components/Why'; // Reused for "Methodology / Jak pracuję"
import OfferDetails from '@/components/OfferDetails';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <FadeIn direction="down" duration={0.8}>
        <Hero />
      </FadeIn>

      <FadeIn direction="up">
        <Audience />
      </FadeIn>

      <StaggerContainer className="py-0">
         <StaggerItem><Process /></StaggerItem>
      </StaggerContainer>

      <FadeIn direction="up">
        <Why />
      </FadeIn>

      <About />

      <OfferDetails />

      <FadeIn direction="up">
        <Booking />
      </FadeIn>

      <Footer />
    </main>
  );
}
