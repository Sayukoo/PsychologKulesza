import Link from 'next/link';
import { StaggerContainer, StaggerItem } from './FadeIn';

export default function About() {
  return (
    <section id="o-mnie" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 md:gap-16 items-center">
          <StaggerContainer className="space-y-5">
            <StaggerItem>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A44]">
                Pomagam myśleć jasno, gdy wszystko się miesza.
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-[#1F1F1F]">
                Nazywam się Kacper Kulesza. Pracuję z osobami, które myślą dużo, ale przez to stoją
                w miejscu.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-4 text-base leading-relaxed text-[#5F5F5F]">
                <p>
                  Jestem psychologiem z analitycznym podejściem. Na co dzień pracuję z danymi,
                  strukturą i logicznym wnioskowaniem – i dokładnie ten sposób myślenia przenoszę do
                  konsultacji.
                </p>
                <p>W praktyce oznacza to:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span aria-hidden className="text-[#5F5F5F]">
                      –
                    </span>
                    <span>porządkowanie faktów zamiast kręcenia się w emocjach</span>
                  </li>
                  <li className="flex gap-2">
                    <span aria-hidden className="text-[#5F5F5F]">
                      –
                    </span>
                    <span>oddzielanie tego, co ważne, od tego, co tylko głośne</span>
                  </li>
                  <li className="flex gap-2">
                    <span aria-hidden className="text-[#5F5F5F]">
                      –
                    </span>
                    <span>nazywanie mechanizmów, które realnie blokują decyzję</span>
                  </li>
                </ul>
                <p>
                  Celem nie jest „dobre samopoczucie po rozmowie”, tylko jasność i kierunek
                  działania.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="rounded-[10px] border border-[#C1AE78] bg-[#FAF7F2] p-7 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[#2E3A44]">Jak pracuję?</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex gap-3">
                <span aria-hidden className="text-[#C1AE78]">
                  →
                </span>
                <span className="text-[#1F1F1F]">jedna rozmowa = maksymalna wartość</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="text-[#C1AE78]">
                  →
                </span>
                <span className="text-[#1F1F1F]">skupienie na konkretnym problemie decyzyjnym</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="text-[#C1AE78]">
                  →
                </span>
                <span className="text-[#1F1F1F]">brak przeciągania procesu</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="text-[#C1AE78]">
                  →
                </span>
                <span className="text-[#1F1F1F]">
                  praca oparta na wiedzy naukowej, nie intuicji
                </span>
              </li>
            </ul>
            <div className="mt-6 border-t border-[#C1AE78]/70 pt-4 text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
              Nie prowadzę psychoterapii. Nie diagnozuję i nie leczę zaburzeń psychicznych.
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="https://www.linkedin.com/in/konstruktywizm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#5F5F5F] hover:text-[#2E3A44] transition-colors"
          >
            Zobacz profil zawodowy →
          </Link>
        </div>
      </div>
    </section>
  );
}
