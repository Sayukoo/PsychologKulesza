import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { GraduationCap, Users, LineChart, ShieldCheck, Quote } from 'lucide-react';
import profileImage from './images/Profile_website.png';



const credentials = [
  {
    icon: GraduationCap,
    title: 'Wykształcenie',
    desc: 'Magister psychologii — dyplom ukończenia studiów wyższych',
  },
  {
    icon: Users,
    title: '7 lat z młodzieżą i dydaktyką',
    desc: 'Praktyczne doświadczenie w pracy z ludźmi i przekazywaniu wiedzy',
  },
  {
    icon: LineChart,
    title: 'Podejście analityczne',
    desc: 'Codzienne operowanie na danych, strukturze i logicznym wnioskowaniu',
  },
  {
    icon: ShieldCheck,
    title: 'Pełna poufność',
    desc: 'Rozmowa objęta tajemnicą zawodową — nic nie wychodzi poza sesję',
  },
];

export default function About() {
  return (
    <section id="o-mnie" className="bg-white overflow-hidden border-t border-[#F0EDE7]">



      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Image ── */}
          <FadeIn direction="right" duration={0.7} className="order-1">
            <div className="mx-auto max-w-md lg:max-w-full">
              {/* Photo container with relative context for offset frame */}
              <div className="relative">
                {/* Decorative offset frame */}
                <div
                  className="absolute top-5 -left-5 w-full h-full rounded-2xl border-2 border-[#C9A85C]/25 hidden md:block"
                  aria-hidden="true"
                />

                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5] bg-[#FAF7F2]">
                  <Image
                    src={profileImage}
                    alt="Kacper Kulesza — psycholog, konsultant decyzyjny"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Credential badge placed under the photo */}
              <div className="mt-6 bg-[#FAF8F4] border border-[#E8E3DA] rounded-xl px-4 py-3 shadow-md flex items-center gap-3 w-full">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-[#C9A85C]/10 border border-[#C9A85C]/30 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#C9A85C]" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#0F1923] uppercase tracking-wide">Zweryfikowany specjalista</p>
                  <p className="text-xs text-[#6B7280] truncate">Magister psychologii · dyplom SWPS</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Right: Text + credentials ── */}
          <div className="order-2">
            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <span className="section-label">Kim jestem</span>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2B2E33] leading-tight">
                  Pomagam myśleć jasno wtedy, gdy wszystko się miesza.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-4 text-[1.05rem] text-[#4A4A4A] leading-relaxed">
                  <p>Nazywam się Kacper Kulesza.</p>
                  <p>
                    Jestem psychologiem z analitycznym podejściem — na co dzień pracuję z danymi,
                    strukturą i logicznym wnioskowaniem. Posiadam 7-letnie doświadczenie w pracy
                    z młodzieżą i dydaktyce.
                  </p>
                  <p>
                    W konsultacjach robię to samo, tylko na Twojej sytuacji: porządkujemy fakty,
                    oddzielamy emocje od decyzji i nazywamy to, co naprawdę blokuje ruch.
                  </p>
                </div>
              </StaggerItem>

              {/* Credential badge grid — Trust & Authority pattern */}
              <StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {credentials.map((c) => (
                    <div
                      key={c.title}
                      className="group flex items-start gap-3.5 bg-[#FAF8F4] border border-[#E8E3DA] rounded-xl p-4 transition-all duration-200 hover:border-[#C9A85C]/50 hover:bg-[#C9A85C]/[0.04] hover:shadow-sm cursor-default"
                    >
                      <span className="grid place-items-center h-10 w-10 rounded-lg bg-white border border-[#E8E3DA] group-hover:border-[#C9A85C]/40 group-hover:bg-[#C9A85C]/5 transition-colors duration-200 shrink-0 shadow-sm">
                        <c.icon className="w-4.5 h-4.5 text-[#C9A85C]" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#2B2E33] leading-snug mb-0.5">{c.title}</p>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </StaggerItem>

              {/* Pull quote — editorial blockquote style */}
              <StaggerItem>
                <blockquote className="relative pl-6 border-l-4 border-[#C9A85C] py-1">
                  <Quote
                    className="absolute -top-2 -left-1 w-5 h-5 text-[#C9A85C]/40 rotate-180"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="text-lg font-serif italic text-[#2E3A44] leading-relaxed">
                    Jeśli wychodzisz z rozmów z innymi z poczuciem „fajnie było, ale dalej nie
                    wiem co robić" — tu pracujemy inaczej.
                  </p>
                </blockquote>
              </StaggerItem>

              <StaggerItem>
                <Link
                  href="https://www.linkedin.com/in/konstruktywizm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-shine relative inline-flex items-center gap-2.5 rounded-lg border border-[#C9A85C] bg-white px-6 py-3 text-sm font-semibold text-[#2E3A44] shadow-sm transition-all duration-200 hover:bg-[#C9A85C]/5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A85C]/40 cursor-pointer"
                >
                  {/* LinkedIn icon */}
                  <svg
                    className="w-4 h-4 text-[#0A66C2] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Zobacz profil zawodowy
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 text-[#C9A85C]">→</span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
