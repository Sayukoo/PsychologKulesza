import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import Image from 'next/image';

export default function About() {
  return (
    <section id="o-mnie" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="order-2 md:order-1 relative group">
          <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 rounded-lg transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500 ease-out" />
          <div className="relative bg-slate-100 h-[500px] w-full flex items-center justify-center text-slate-400 font-mono text-sm border border-slate-200 rounded-lg shadow-xl overflow-hidden">
             <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
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
              O mnie.<br />
              <span className="text-accent">Partner w Twoim rozwoju.</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
             <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Nazywam się <strong>Kacper Kulesza</strong>. Jestem magistrem psychologii.
                Moją pasją jest tłumaczenie złożonych mechanizmów psychologicznych na język konkretnych strategii życiowych.
              </p>
              <p>
                Wierzę, że kluczem do sukcesu – zawodowego i osobistego – nie jest &quot;myślenie życzeniowe&quot;, ale głębokie zrozumienie własnego &quot;systemu operacyjnego&quot;.
                Pracujemy nad tym, jak przetwarzasz informacje, jak regulujesz emocje i jakie schematy decyzyjne kierują Twoim życiem.
              </p>
              <p className="border-l-4 border-accent pl-4 italic text-slate-600">
                Moim celem jest wyposażenie Cię w narzędzia, które pozwolą Ci odzyskać sprawczość i budować życie w zgodzie z Twoim potencjałem.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <ul className="grid grid-cols-1 gap-4 mt-8">
              {[
                "Magister psychologii (Uniwersytet SWPS)",
                "Ekspert w zakresie psychologii poznawczej i efektywności",
                "Doświadczenie w pracy z liderami i przedsiębiorcami"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-primary font-medium">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
