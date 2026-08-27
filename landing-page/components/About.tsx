'use client';

import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { GraduationCap, Users, LineChart, ShieldCheck } from 'lucide-react';
import profileImage480 from './images/profile-480.webp';
import profileImage960 from './images/profile-960.webp';



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
                  className="absolute top-5 -left-5 w-full h-full rounded-lg border-2 border-[#C9A85C]/25 hidden md:block"
                  aria-hidden="true"
                />

                {/* Photo */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5] bg-[#FAF7F2]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profileImage480.src}
                    srcSet={`${profileImage480.src} 480w, ${profileImage960.src} 960w`}
                    sizes="(max-width: 768px) 92vw, 44vw"
                    alt="Kacper Kulesza — psycholog, konsultant decyzyjny"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Credential badge placed under the photo */}
              <div className="mt-4 flex items-center gap-3 px-2 py-2 text-[#0F1923]">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-[#C9A85C]/15 text-[#C9A85C] shrink-0">
                  <ShieldCheck className="w-4 h-4" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0F1923]">Zweryfikowany specjalista</p>
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

              {/* Clean, unified credentials list (No busy bento boxes) */}
              <StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2 pb-2">
                  {credentials.map((c) => (
                    <div
                      key={c.title}
                      className="flex items-start gap-3.5 group cursor-default"
                    >
                      <span className="w-8 h-8 rounded-lg bg-[#C9A85C]/10 flex items-center justify-center shrink-0 text-[#C9A85C] mt-0.5 group-hover:bg-[#C9A85C]/20 transition-colors">
                        <c.icon className="w-4 h-4" strokeWidth={2} />
                      </span>
                      <div className="space-y-0.5 min-w-0">
                        <p className="text-sm font-semibold text-[#0F1923] leading-snug">
                          {c.title}
                        </p>
                        <p className="text-xs text-[#6B7280] leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </StaggerItem>

              {/* Refined editorial quote (No heavy left border) */}
              <StaggerItem>
                <div className="relative pt-4 pb-2">
                  <p className="text-lg sm:text-xl font-serif italic text-[#0F1923] leading-relaxed">
                    „Jeśli wychodzisz z rozmów z innymi z poczuciem &bdquo;fajnie było, ale dalej nie wiem co robić&rdquo; — tu pracujemy inaczej.”
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
