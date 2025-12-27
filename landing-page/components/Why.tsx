import { Lightbulb, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export default function Why() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
            Dlaczego warto?<br />
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <div className="flex flex-col h-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6 text-primary">
                <Lightbulb className="w-8 h-8 mr-3 text-accent" />
                <h3 className="text-xl font-bold">Porządkowanie myślenia</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Zamiast chaosu i natłoku myśli — struktura. Pomagam nazwać to, co nienazwane, i ułożyć sprawy w logiczną całość. 
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col h-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6 text-primary">
                <CheckCircle2 className="w-8 h-8 mr-3 text-emerald-600" />
                <h3 className="text-xl font-bold">Klarowność i decyzje</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Wspólnie analizujemy zyski, straty i możliwe scenariusze. Dzięki temu podejmujesz decyzje świadomie, w zgodzie ze swoimi wartościami, a nie pod wpływem chwilowych emocji.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col h-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6 text-primary">
                <ShieldCheck className="w-8 h-8 mr-3 text-blue-600" />
                <h3 className="text-xl font-bold">Bez pustych obietnic</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Nie obiecuję, że "naprawię" Twoje życie w godzinę.  Oferuję rzetelną, merytoryczną rozmowę, która daje oparcie i pozwala ruszyć z miejsca.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
