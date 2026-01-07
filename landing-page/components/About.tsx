import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import ProfileImage from './images/Profile_website.png';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Image Column - First on mobile */}
          <div className="w-full md:w-5/12 order-first md:order-last">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 translate-x-4 translate-y-4 -z-10" />
                <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
                  <Image
                    src={ProfileImage}
                    alt="Kacper Kulesza"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    placeholder="blur"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-7/12">
            <StaggerContainer>
                <StaggerItem>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 uppercase tracking-wider">
                        KIM JESTEM
                    </h2>
                </StaggerItem>

                <StaggerItem>
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p className="font-medium text-primary text-xl">
                            Nazywam się Kacper Kulesza.
                        </p>
                        <p>
                            Jestem psychologiem, a równolegle pracuję jako <span className="font-semibold text-primary">analityk statystyczny</span> i <span className="font-semibold text-primary">nauczyciel matematyki</span>.
                        </p>

                        <div className="pl-4 border-l-2 border-accent/50 space-y-2 py-2">
                            <p className="font-medium text-slate-700">Łączę:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>pracę z emocjami</li>
                                <li>logiczne porządkowanie myśli</li>
                                <li>spokojne, edukacyjne tłumaczenie tego, co się z Tobą dzieje</li>
                            </ul>
                        </div>

                        <p>
                        Pomagam nazwać to, co nienazwane, i poukładać to, co się miesza – bez presji, że „powinieneś/powinnaś czuć inaczej”.
                        </p>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <a
                        href="https://www.linkedin.com/in/konstruktywizm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium group"
                        >
                        <Linkedin className="h-5 w-5" />
                        <span>Zobacz mój profil na LinkedIn</span>
                        <span className="block h-px w-0 group-hover:w-full bg-accent transition-all duration-300" />
                        </a>
                    </div>
                </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
