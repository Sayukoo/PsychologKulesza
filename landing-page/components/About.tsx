import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import Image from 'next/image';
import ProfileImage from './images/Profile_website.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="o-mnie" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="order-2 md:order-1 relative group">
          <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 rounded-lg transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500 ease-out" />
          <div className="relative bg-white/50 h-[500px] w-full flex items-center justify-center text-muted-foreground font-mono text-sm border border-muted rounded-lg shadow-xl overflow-hidden">
             <Image
               src={ProfileImage}
               alt="Kacper Kulesza - Profil"
               fill
               className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
               sizes="(max-width: 768px) 100vw, 50vw"
             />
             <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none" />
          </div>
        </FadeIn>

        <StaggerContainer className="order-1 md:order-2">
          <StaggerItem>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Kim jestem?<br />
              <span className="text-accent">Racjonalność. Bezpieczeństwo. Spokój.</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
             <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Nazywam się Kacper Kulesza. Jestem magistrem psychologii. Na co dzień pracuję również jako <span className="font-semibold text-primary">analityk statystyczny</span> i <span className="font-semibold text-primary">korepetytor</span>. W swojej pracy łączę psychologiczną wiedzę z precyzją liczb i dydaktycznym podejściem. Nie oceniam, nie "kołczuję". Pomagam spojrzeć na Twoją sytuację z dystansu, nazwać to, co nienazwane, i poukładać to, co rozsypane.
              </p>
              <p>
                Prowadzę konsultacje psychologiczne i psychoedukację. Moje podejście opiera się na porządkowaniu myślenia, analizie faktów oraz zrozumieniu mechanizmów, które Tobą kierują. Doświadczenie w analizie danych pozwala mi widzieć wzorce tam, gdzie inni widzą chaos.
              </p>
              <p className="border-l-4 border-accent pl-4 italic text-foreground/70">
                Jestem tu po to, abyś mógł spokojnie przeanalizować swoje decyzje, poczuć stabilizację i odzyskać poczucie wpływu na własne życie. Bez presji, w Twoim tempie.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8">
              <Link
                href="https://www.linkedin.com/in/konstruktywizm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-accent hover:brightness-90 transition-all duration-300 shadow-lg hover:shadow-accent/25 rounded-sm"
              >
                Zobacz mój profil na LinkedIn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
