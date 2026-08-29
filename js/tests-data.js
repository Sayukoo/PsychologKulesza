/**
 * Kacper Kulesza - Psycholog | Psychological Tests Dictionary & Norms
 * Contains test items, answer scale choices, SVG glyphs, and interpretation bands.
 */

const FREQ4 = ["Wcale nie dokuczały", "Kilka dni", "Więcej niż połowę dni", "Niemal codziennie"];
const WHO6 = ["Nigdy", "Od czasu do czasu", "Mniej niż połowę czasu", "Więcej niż połowę czasu", "Prawie cały czas", "Cały czas"];
const ASRS5 = ["Nigdy", "Rzadko", "Czasami", "Często", "Bardzo często"];

const GLYPHS = {
  who5: `<svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="#1C86EE" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="20" cy="20" r="15"></circle>
    <path d="M8 24c3.5 0 3.5-6 7-6s3.5 6 7 6 3.5-8 7-8"></path>
  </svg>`,
  gad7: `<svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="#1C86EE" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 20a4 4 0 1 1 4 4 7 7 0 0 1-7-7 10 10 0 0 1 10-10"></path>
    <path d="M27 7a13 13 0 1 1-13 26"></path>
  </svg>`,
  phq9: `<svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="#1C86EE" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 12c4 0 5 4 8 8s5 8 9 8 7-3 11-3"></path>
    <circle cx="23" cy="28" r="2.6" fill="#FF7A29" stroke="none"></circle>
  </svg>`,
  asrs: `<svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="#1C86EE" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="20" cy="20" r="14"></circle>
    <path d="M20 10v10l7 4"></path>
    <path d="M12 28l4-4" stroke="#FF7A29"></path>
    <circle cx="12" cy="28" r="2" fill="#FF7A29" stroke="none"></circle>
  </svg>`
};

const TESTS = {
  asrs: {
    official: "ASRS-v1.1 (ADHD)",
    title: "Czy to może być ADHD u dorosłych?",
    meta: "18 pytań · 3 min",
    blurb: "Kwestionariusz samooceny ADHD u dorosłych. Autorska punktacja 1–5 (wynik 18–90 pkt) powiązana z kryteriami wywiadu diagnostycznego DIVA-5.",
    prompt: "Jak często w ciągu ostatnich 6 miesięcy dotyczyło Cię to zachowanie?",
    scaleType: "asrs",
    options: ASRS5,
    items: [
      "Trudności z dopracowaniem szczegółów zadania, po tym jak zostało już prawie wykonane",
      "Trudności w planowaniu i organizowaniu skomplikowanych zadań",
      "Zapominanie o spotkaniach, terminach lub codziennych obowiązkach",
      "Unikanie lub odkładanie na później zadań wymagających długotrwałego wysiłku umysłowego",
      "Nerwowe ruchy rąk lub stóp (wiercenie się), gdy musisz siedzieć przez dłuższy czas",
      "Uczucie nadmiernego pobudzenia — poczucie, że musisz coś robić, jakbyś „był nakręcony”",
      "Błędy wynikające z nieuwagi podczas pracy nad nudnym lub trudnym projektem",
      "Problem z utrzymaniem uwagi nad zadaniami, które są monotonne lub rutynowe",
      "Trudność ze skupieniem się na tym, co mówią inni, nawet gdy mówią bezpośrednio do Ciebie",
      "Gubienie lub odkładanie rzeczy w niewłaściwe miejsce (zarówno w pracy, jak i w domu)",
      "Łatwe rozpraszanie się przez dźwięki, ruch lub inne aktywności wokół Ciebie",
      "Wstawanie z miejsca w sytuacjach wymagających długiego siedzenia (w pracy, na spotkaniach)",
      "Poczucie wewnętrznego niepokoju, napięcia lub trudności z usiedzeniem w bezruchu",
      "Trudność ze zrelaksowaniem się i wyciszeniem, gdy masz wolny czas dla siebie",
      "Mówienie zbyt dużo lub nadmierna gadatliwość w sytuacjach społecznych",
      "Kończenie wypowiedzi za innych rozmówców, zanim sami zdążą dokończyć zdanie",
      "Trudność z odczekaniem na swoją kolej podczas rozmowy lub dyskusji",
      "Przeszkadzanie lub przerywanie innym, gdy są czymś zajęci"
    ],
    source: "Adult ADHD Self-Report Scale (ASRS-v1.1) z autorską interpretacją skorelowaną z wywiadem diagnostycznym DIVA-5 (odnośnik 50/90 pkt)."
  },
  gad7: {
    official: "GAD-7 (Lęk)",
    title: "Czy Twoja głowa kiedykolwiek się wyłącza?",
    meta: "7 pytań · 2 min",
    blurb: "Siedem pytań o niepokój, napięcie, zamartwianie się i myśli, których trudno się pozbyć.",
    prompt: "Jak często w ostatnich dwóch tygodniach dokuczało Ci to?",
    scaleType: "freq",
    options: FREQ4,
    items: [
      "Czułeś się podenerwowany, niespokojny, mocno spięty",
      "Nie mogłeś przestać się martwić albo zapanować nad tym",
      "Za bardzo martwiłeś się różnymi rzeczami",
      "Miałeś trudności z relaksowaniem się",
      "Byłeś tak niespokojny, że nie mogłeś usiedzieć na miejscu",
      "Łatwo stawałeś się rozdrażniony lub poirytowany",
      "Obawiałeś się, tak jakby miało się stać coś strasznego"
    ],
    source: "Kwestionariusz GAD-7. Opracowanie: dr Robert L. Spitzer, dr Janet B.W. Williams, dr Kurt Kroenke i współpracownicy."
  },
  phq9: {
    official: "PHQ-9 (Depresja)",
    title: "To zwykłe zmęczenie czy coś więcej?",
    meta: "9 pytań · 2 min",
    blurb: "Dziewięć pytań o nastrój, sen, energię i motywację. Światowy standard przesiewowy w kierunku depresji.",
    prompt: "Jak często w ostatnich dwóch tygodniach dokuczało Ci to?",
    scaleType: "freq",
    options: FREQ4,
    items: [
      "Niewielkie zainteresowanie lub odczuwanie przyjemności z wykonywania czynności",
      "Uczucie smutku, przygnębienia lub beznadziejności",
      "Kłopoty z zaśnięciem lub przerywany sen, albo zbyt długi sen",
      "Uczucie zmęczenia lub brak energii",
      "Brak apetytu lub przejadanie się",
      "Poczucie niezadowolenia z siebie, poczucie winy lub zawiedzenia bliskich",
      "Problemy ze skupieniem się (np. przy czytaniu, pracy lub oglądaniu)",
      "Spowolnienie ruchowe/mowy lub przeciwnie — wyraźne pobudzenie i niepokój",
      "Myśli, że lepiej byłoby umrzeć, albo chęć zrobienia sobie jakiejś krzywdy"
    ],
    source: "Kwestionariusz PHQ-9. Opracowanie: dr Robert L. Spitzer, dr Janet B.W. Williams, dr Kurt Kroenke i współpracownicy."
  },
  who5: {
    official: "WHO-5 (Dobrostan)",
    title: "Jak naprawdę się masz?",
    meta: "5 pytań · 1 min",
    blurb: "Pięć zdań o ostatnich dwóch tygodniach. Najszybszy sposób na ocenę ogólnego samopoczucia i energii życiowej.",
    prompt: "Jak często w ostatnich dwóch tygodniach?",
    scaleType: "who",
    options: WHO6,
    items: [
      "Czułem się wesoły i w dobrym nastroju",
      "Czułem się spokojny i odprężony",
      "Czułem się aktywny i energiczny",
      "Budziłem się z uczuciem świeżości i wypoczęty",
      "Moje życie codzienne było wypełnione interesującymi mnie sprawami"
    ],
    source: "Wskaźniki Dobrego Samopoczucia WHO-5. © Psychiatric Research Unit, WHO Collaborating Centre in Mental Health."
  }
};

const BANDS = {
  asrs: [
    { max: 35, color: "#1C86EE", title: "Brak wskazań do ADHD",
      text: "Twój wynik (18–35 pkt) mieści się poniżej progu DIVA-5 (wymagane ≥ 50/90 pkt). Trudności ze skupieniem mieszczą się w normie." },
    { max: 49, color: "#FFC542", title: "Umiarkowane trudności (poniżej progu)",
      text: "Twój wynik (36–49 pkt) jest poniżej progu DIVA-5 (≥ 50/90 pkt), wskazując na okresowe rozproszenie lub prokrastynację." },
    { max: 90, color: "#FF7A29", title: "Wskazanie do diagnostyki ADHD (Próg DIVA-5)",
      text: "Twój wynik (50–90 pkt) przekracza próg odniesienia DIVA-5 (≥ 50/90 pkt), sugerując wysokie nasilenie cech ADHD." }
  ],
  gad7: [
    { max: 4, color: "#1C86EE", title: "Brak istotnych objawów lęku",
      text: "Twój wynik (0–4 pkt) mieści się w normie. Poziom napięcia nie wpływa negatywnie na codzienne życie." },
    { max: 9, color: "#FFC542", title: "Łagodne objawy lękowe",
      text: "Twój wynik (5–9 pkt) wskazuje na łagodne napięcie. Pomocne mogą być techniki relaksacji i higiena pracy." },
    { max: 14, color: "#FF9445", title: "Umiarkowane nasilenie lęku",
      text: "Twój wynik (10–14 pkt) wskazuje na zauważalny lęk utrudniający koncentrację lub sen. Zalecana konsultacja." },
    { max: 21, color: "#FF7A29", title: "Nasilone objawy lęku",
      text: "Wysoki wynik (15–21 pkt). Wskazana konsultacja z psychologiem lub lekarzem psychiatrą." }
  ],
  phq9: [
    { max: 4, color: "#1C86EE", title: "Brak objawów depresyjnych",
      text: "Twój wynik (0–4 pkt) mieści się w normie. Brak przesłanek wskazujących na trudności depresyjne." },
    { max: 9, color: "#FFC542", title: "Łagodne objawy depresyjne",
      text: "Twój wynik (5–9 pkt) wskazuje na lekki spadek energii i nastroju. Warto poobserwować samopoczucie." },
    { max: 14, color: "#FF9445", title: "Umiarkowane objawy depresyjne",
      text: "Twój wynik (10–14 pkt) sugeruje zauważalny spadek motywacji i nastroju. Zalecana konsultacja psychologiczna." },
    { max: 19, color: "#FF7A29", title: "Umiarkowanie ciężka depresja",
      text: "Twój wynik (15–19 pkt) wskazuje na nasilone trudności nastroju. Zalecany kontakt ze specjalistą." },
    { max: 27, color: "#FF7A29", title: "Ciężkie objawy depresyjne",
      text: "Bardzo wysoki wynik (20–27 pkt). Wskazana pilna konsultacja z psychiatrą lub psychologiem." }
  ],
  who5: [
    { max: 7, color: "#FF7A29", title: "Samopoczucie mocno obniżone",
      text: "Twój wynik (0–7 pkt) wskazuje na znaczny spadek dobrostanu psychicznego. Warto skonsultować się ze specjalistą." },
    { max: 12, color: "#FFC542", title: "Samopoczucie poniżej normy",
      text: "Twój wynik (8–12 pkt) wskazuje na obniżony nastrój i energię. Warto zadbać o regenerację i sen." },
    { max: 19, color: "#1C86EE", title: "Samopoczucie w normie",
      text: "Twój wynik (13–19 pkt) mieści się w typowym, zdrowym zakresie dobrostanu psychicznego." },
    { max: 25, color: "#1C86EE", title: "Wysoki dobrostan",
      text: "Twój wynik (20–25 pkt) wskazuje na wysoki poziom spokoju, motywacji i życiowej energii." }
  ]
};
