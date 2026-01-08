import Hero from '@/components/Hero';
import About from '@/components/About';
import TargetAudience from '@/components/TargetAudience';
import Process from '@/components/Process';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import OfferDetails from '@/components/OfferDetails';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <FadeIn direction="down" duration={0.8}>
        <Hero />
      </FadeIn>

      {/* New Order: Audience (Dla kogo) -> Process (Jak wygląda) -> Why (Jak pracuję/Dlaczego warto) -> About (O mnie) -> Offer (Cennik) -> Booking */}

      <FadeIn direction="up">
        <TargetAudience />
      </FadeIn>

      <About />

      <StaggerContainer className="py-0">
         <StaggerItem><Process /></StaggerItem>
      </StaggerContainer>

      <FadeIn direction="up">
        <OfferDetails />
      </FadeIn>

      <FadeIn direction="up">
        <Booking />
      </FadeIn>

      <Footer />
    </main>
  );
}
