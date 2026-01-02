import type { Metadata } from 'next';
import { Mail, Clock, Phone, Send } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import ContactMailtoForm from './ContactMailtoForm';

const email = 'kackul17@gmail.com';
const phone = '881 408 027';

export const metadata: Metadata = {
  title: 'Kontakt | Kacper Kulesza',
  description:
    'Skontaktuj się z Kacprem Kuleszą – psychologiem oferującym konsultacje online. Zadzwoń lub napisz wiadomość e-mail.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-28 pb-16">
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-5 items-start">
          <StaggerContainer className="lg:col-span-2">
            <StaggerItem>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-secondary text-white shadow-2xl border border-primary/20 p-8 sm:p-10">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-10 -right-16 h-40 w-40 bg-accent/25 blur-3xl rounded-full" />
                  <div className="absolute -bottom-14 -left-10 h-44 w-44 bg-white/10 blur-3xl rounded-full" />
                </div>

                <div className="relative space-y-5">
                  <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm tracking-wide uppercase">
                    Porozmawiajmy
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  </p>
                  <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Kontakt z Kacprem</h1>
                  <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                    Najszybciej skontaktujesz się ze mną telefonicznie. Jeśli nie odbiorę, zostaw wiadomość lub napisz
                    e-mail, a wrócę z terminem spotkania online.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+48881408027"
                      className="group inline-flex items-center gap-3 px-5 py-4 bg-accent text-white rounded-lg shadow-lg shadow-accent/25 hover:brightness-95 transition"
                    >
                      <span className="h-10 w-10 rounded-full bg-white/15 grid place-items-center">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-xs uppercase tracking-[0.18em] text-white/70">Telefon</span>
                        <span className="text-lg font-semibold">{phone}</span>
                      </div>
                    </a>

                    <a
                      href={`mailto:${email}`}
                      className="group inline-flex items-center gap-3 px-5 py-4 bg-white/10 text-white rounded-lg shadow-lg shadow-primary/25 hover:bg-white/15 transition border border-white/15"
                    >
                      <span className="h-10 w-10 rounded-full bg-white/10 grid place-items-center">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-xs uppercase tracking-[0.18em] text-white/70">E-mail</span>
                        <span className="text-lg font-semibold">{email}</span>
                      </div>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="sm:col-span-2 flex w-full items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div className="text-sm">
                        <p className="font-semibold text-white">Oddzwaniam lub odpisuję w 24h</p>
                        <p className="text-white/70">W dni robocze</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="lg:col-span-3">
            <StaggerItem>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-10 w-10 rounded-full bg-accent/10 text-accent grid place-items-center border border-accent/20">
                    <Send className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Formularz kontaktowy</p>
                    <h2 className="text-2xl font-semibold text-primary">Napisz wiadomość</h2>
                  </div>
                </div>

                <ContactMailtoForm email={email} />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
