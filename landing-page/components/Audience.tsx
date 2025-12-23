import { CheckCircle2, User, UserX } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Audience() {
  return (
    <section id="dla-kogo" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
       {/* Ambient bg */}
       <div className="absolute inset-0 bg-primary/20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-slate-900 to-slate-900 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Twój Profil.<br />
            <span className="text-slate-400 text-2xl font-normal block mt-2">Dla kogo jest ten proces?</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Ideal Client */}
          <StaggerContainer delay={0.2} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-500">
            <StaggerItem>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                   <User className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-100">
                  Idealny Kandydat
                </h3>
              </div>
            </StaggerItem>

            <ul className="space-y-6">
              {[
                "Osoby nastawione na rozwój, szukające strategicznego partnera, a nie 'pocieszyciela'.",
                "Liderzy i specjaliści przeciążeni decyzyjnie, szukający jasności myślenia.",
                "Ci, którzy chcą wziąć pełną odpowiedzialność za swoje wyniki.",
                "Osoby ceniące logikę, wiedzę naukową i konkretne narzędzia."
              ].map((text, idx) => (
                <StaggerItem key={idx}>
                  <li className="flex items-start group">
                    <CheckCircle2 className="mr-4 h-6 w-6 text-emerald-500 mt-0.5 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-slate-300 group-hover:text-white transition-colors">{text}</span>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          {/* Not for you */}
          <StaggerContainer delay={0.4} className="bg-transparent border border-white/5 p-8 rounded-2xl opacity-80 hover:opacity-100 transition-opacity">
            <StaggerItem>
               <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-rose-500/10 rounded-lg">
                   <UserX className="w-8 h-8 text-rose-400" />
                </div>
                <h3 className="text-2xl font-bold text-rose-100">
                  To nie jest oferta dla...
                </h3>
              </div>
            </StaggerItem>

            <ul className="space-y-6">
              {[
                "Osób wymagających diagnozy klinicznej lub leczenia zaburzeń (depresja, stany lękowe).",
                "Tych, którzy szukają jedynie emocjonalnego 'wygadania się' bez chęci wprowadzania zmian.",
                "Poszukiwaczy magicznych pigułek i szybkich rozwiązań bez pracy własnej.",
                "Osób w ostrym kryzysie, wymagających natychmiastowej interwencji medycznej."
              ].map((text, idx) => (
                <StaggerItem key={idx}>
                  <li className="flex items-start">
                    <span className="mr-4 h-6 w-6 flex items-center justify-center text-rose-500 font-mono text-sm border border-rose-500/50 rounded-full mt-0.5">✕</span>
                    <span className="text-slate-400">{text}</span>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
