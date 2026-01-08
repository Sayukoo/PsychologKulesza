import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import profileImage from './images/Profile_website.png';

export default function About() {
  return (
    <section id="o-mnie" className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text */}
          <div className="order-2 lg:order-1">
            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <span className="text-[#C1AE78] font-bold tracking-widest text-sm uppercase">
                  Kim jestem
                </span>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2B2E33] leading-tight">
                  Pomagam myśleć jasno wtedy, gdy wszystko się miesza.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed font-sans">
                  <p>
                    Nazywam się Kacper Kulesza.
                  </p>
                  <p>
                    Jestem psychologiem z analitycznym podejściem — na co dzień pracuję z danymi,
                    strukturą i logicznym wnioskowaniem.
                  </p>
                  <p>
                    W konsultacjach robię to samo, tylko na Twojej sytuacji: porządkujemy fakty,
                    oddzielamy emocje od decyzji i nazywamy to, co naprawdę blokuje ruch.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="border-l-4 border-[#C1AE78] pl-6 py-2">
                  <p className="text-xl font-medium text-[#2E3A44] italic font-serif">
                  Jeśli wychodzisz z rozmów z innymi z poczuciem „fajnie było, ale dalej nie wiem co robić” to tu pracujemy inaczej
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                 <div className="pt-4">
                    <Link
                        href="https://www.linkedin.com/in/konstruktywizm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group btn-shine relative inline-flex items-center justify-center gap-2 rounded-sm border border-[#C1AE78] bg-[#FAF7F2] px-6 py-3 text-sm font-semibold text-[#2E3A44] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[#C1AE78]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1AE78]/40"
                    >
                        Zobacz profil zawodowy
                        <span className="text-[#2E3A44] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </Link>
                 </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 relative">
             <FadeIn direction="left" duration={0.8}>
                <div className="relative mx-auto max-w-md lg:max-w-full">
                    {/* Decorative element - frame */}
                    <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#C1AE78]/30 rounded-2xl -z-10 translate-x-4 translate-y-4 hidden md:block" />

                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] lg:aspect-[4/5] bg-[#FAF7F2]">
                        <Image
                            src={profileImage}
                            alt="Kacper Kulesza"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
