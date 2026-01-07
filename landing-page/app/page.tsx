import Hero from '@/components/Hero';
import About from '@/components/About';
import TargetAudience from '@/components/TargetAudience';
import Process from '@/components/Process';
import Why from '@/components/Why';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <FadeIn direction="down" duration={0.8}>
        <Hero />
      </FadeIn>

      <TargetAudience />

      <About />
      {/* About has its own internal animations */}

      <StaggerContainer className="py-8">
         <StaggerItem><Process /></StaggerItem>
      </StaggerContainer>

      <FadeIn direction="up">
        <Why />
      </FadeIn>

      <FadeIn direction="up">
        <Booking />
      </FadeIn>

      <Footer />
    </main>
  );
}
