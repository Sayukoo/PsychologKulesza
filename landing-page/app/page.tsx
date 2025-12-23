import Hero from '@/components/Hero';
import Disclaimer from '@/components/Disclaimer';
import About from '@/components/About';
import Audience from '@/components/Audience';
import Process from '@/components/Process';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <FadeIn direction="down" duration={0.8}>
        <Hero />
      </FadeIn>

      <FadeIn direction="up">
        <Disclaimer />
      </FadeIn>

      <About />
      {/* About has its own internal animations */}

      <FadeIn direction="up">
        <Audience />
      </FadeIn>

      <StaggerContainer className="py-8">
         <StaggerItem><Process /></StaggerItem>
      </StaggerContainer>

      <FadeIn direction="up">
        <Comparison />
      </FadeIn>

      <FadeIn direction="up">
        <FAQ />
      </FadeIn>

      <FadeIn direction="up">
        <Booking />
      </FadeIn>

      <FadeIn direction="up">
        <Contact />
      </FadeIn>

      <Footer />
    </main>
  );
}
