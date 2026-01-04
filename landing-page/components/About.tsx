import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import Image from 'next/image';
import ProfileImage from './images/Profile_website.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="o-mnie" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <FadeIn direction="right" className="relative group">
          <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 rounded-lg transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500 ease-out" />
          <div className="relative bg-white/50 h-[350px] sm:h-[500px] w-full flex items-center justify-center text-muted-foreground font-mono text-sm border border-muted rounded-lg shadow-xl overflow-hidden">
             <Image
               src={ProfileImage}
               alt="Kacper Kulesza - Profil"
               fill
               className="object-cover object-top transition-all duration-700"
               sizes="(max-width: 768px) 100vw, 50vw"
             />
             <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none" />
          </div>
        </FadeIn>

        <StaggerContainer>
          <StaggerItem>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Kim jestem?<br />
            </h2>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Mam na imię Kacper i jestem psychologiem o umyśle analityka.  Na co dzień pracuję jako <span className="font-semibold text-primary">analityk statystyczny</span> i <span className="font-semibold text-primary">korepetytor matematyki</span>. W swojej pracy łączę psychologiczną wiedzę z precyzją liczb i dydaktycznym podejściem. Pomagam nazwać to, co nienazwane, i poukładać to, co rozsypane.
              </p>
              <p>
                Moje podejście opiera się na porządkowaniu myślenia, analizie faktów oraz zrozumieniu mechanizmów, które Tobą kierują. Wierzę w naukowe podejście i zawsze używam najnowszych książek oraz badań w celu zrozumienia twojej sytuacji.
              </p>
    
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8 flex justify-start">
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
