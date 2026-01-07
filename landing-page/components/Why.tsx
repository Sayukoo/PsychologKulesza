import { Lightbulb, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Why() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-sage)] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
           <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-10 md:mb-16 text-center">
            Dlaczego warto?<br />
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StaggerItem>
            <div className="flex flex-col h-full p-6 md:p-8 rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm shadow-sm hover:bg-white/60 transition-colors">
              <div className="flex items-center mb-4 md:mb-6 text-[var(--color-primary)] relative z-10">
                <Lightbulb className="w-6 h-6 md:w-8 md:h-8 mr-3 text-[var(--color-primary)]" />
                <h3 className="text-lg md:text-xl font-bold">Struktura</h3>
              </div>
              <p className="text-[var(--color-primary)]/80 leading-relaxed text-sm md:text-base relative z-10">
                 Pomagam wyciągnąć sedno z natłoku myśli - zamiast analizować wszystko naraz, wspólnie ustalamy priorytety i nazywamy problem po imieniu. 
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col h-full p-6 md:p-8 rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm shadow-sm hover:bg-white/60 transition-colors">
              <div className="flex items-center mb-4 md:mb-6 text-[var(--color-primary)] relative z-10">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 mr-3 text-[var(--color-primary)]" />
                <h3 className="text-lg md:text-xl font-bold">Analiza i wybór</h3>
              </div>
              <p className="text-[var(--color-primary)]/80 leading-relaxed text-sm md:text-base relative z-10">
                Rozkładamy Twoją sytuację na czynniki pierwsze. Sprawdzamy zyski i straty, co pozwala Ci podjąć decyzję w zgodzie z faktami i własnymi wartościami, a nie pod dyktando lęku czy presji.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col h-full p-6 md:p-8 rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm shadow-sm hover:bg-white/60 transition-colors">
              <div className="flex items-center mb-4 md:mb-6 text-[var(--color-primary)] relative z-10">
                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 mr-3 text-[var(--color-primary)]" />
                <h3 className="text-lg md:text-xl font-bold">Konkretny plan</h3>
              </div>
              <p className="text-[var(--color-primary)]/80 leading-relaxed text-sm md:text-base relative z-10">
              Nie oferuję gotowych recept na życie. Wychodzisz ze spotkania z jednym, konkretnym krokiem lub wnioskiem, który realnie możesz wdrożyć, by ruszyć z miejsca.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
