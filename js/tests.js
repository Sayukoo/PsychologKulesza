/**
 * Kacper Kulesza - Psycholog | Psychological Tests Engine
 */

const FREQ4 = ["Wcale nie dokuczały", "Kilka dni", "Więcej niż połowę dni", "Niemal codziennie"];
const WHO6 = ["Nigdy", "Od czasu do czasu", "Mniej niż połowę czasu", "Więcej niż połowę czasu", "Prawie cały czas", "Cały czas"];
const ASRS5 = ["Nigdy", "Rzadko", "Czasami", "Często", "Bardzo często"];
const LSAS_FEAR = ["Brak", "Łagodny", "Umiarkowany", "Silny"];
const LSAS_AVOID = ["Nigdy", "Niekiedy", "Często", "Zawsze"];

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
  bdi: `<svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="#1C86EE" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 28c4-6 8-10 12-10s8 4 12 10"></path>
    <path d="M20 6v12"></path>
    <circle cx="20" cy="6" r="2.6" fill="#FF7A29" stroke="none"></circle>
  </svg>`,
  asrs: `<svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="#1C86EE" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="20" cy="20" r="14"></circle>
    <path d="M20 10v10l7 4"></path>
    <path d="M12 28l4-4" stroke="#FF7A29"></path>
    <circle cx="12" cy="28" r="2" fill="#FF7A29" stroke="none"></circle>
  </svg>`,
  lsas: `<svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="#1C86EE" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="24" cy="15" r="4.2"></circle>
    <circle cx="31" cy="24" r="4.2"></circle>
    <circle cx="23" cy="29" r="4.2"></circle>
    <circle cx="9" cy="20" r="4.6" stroke="#FF7A29"></circle>
    <path d="M15 20h2.5" stroke="#FF7A29" stroke-dasharray="1 3.4"></path>
  </svg>`
};

const TESTS = {
  who5: {
    official: "WHO-5",
    title: "Jak naprawdę się masz?",
    meta: "5 pytań · 1 min",
    blurb: "Pięć zdań o ostatnich dwóch tygodniach. Najkrótszy sposób, żeby sprawdzić, czy Twoje samopoczucie trzyma poziom.",
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
    source: "Wskaźniki Dobrego Samopoczucia WHO-5. © Psychiatric Research Unit, WHO Collaborating Centre in Mental Health, Frederiksborg General Hospital, Hillerød."
  },
  gad7: {
    official: "GAD-7",
    title: "Czy Twoja głowa kiedykolwiek się wyłącza?",
    meta: "7 pytań · 2 min",
    blurb: "Siedem pytań o niepokój, napięcie i myśli, których nie da się zatrzymać.",
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
    source: "Kwestionariusz GAD-7. Opracowanie: dr Robert L. Spitzer, dr Janet B.W. Williams, dr Kurt Kroenke i współpracownicy, z wykorzystaniem grantu oświatowego firmy Pfizer Inc."
  },
  phq9: {
    official: "PHQ-9",
    title: "To zwykłe zmęczenie czy coś więcej?",
    meta: "9 pytań · 2 min",
    blurb: "Dziewięć pytań o nastrój, sen, energię i apetyt. Najczęściej używany na świecie test przesiewowy w kierunku depresji.",
    prompt: "Jak często w ostatnich dwóch tygodniach dokuczało Ci to?",
    scaleType: "freq",
    options: FREQ4,
    items: [
      "Niewielkie zainteresowanie lub odczuwanie przyjemności z wykonywania czynności",
      "Uczucie smutku, przygnębienia lub beznadziejności",
      "Kłopoty z zaśnięciem lub przerywany sen, albo zbyt długi sen",
      "Uczucie zmęczenia lub brak energii",
      "Brak apetytu lub przejadanie się",
      "Poczucie niezadowolenia z siebie, uczucie, że jest się do niczego, albo że zawiodło się siebie lub rodzinę",
      "Problemy ze skupieniem się, na przykład przy czytaniu gazety lub oglądaniu telewizji",
      "Poruszanie się lub mówienie tak wolno, że inni mogliby to zauważyć. Albo przeciwnie: niemożność usiedzenia w miejscu i ruchliwość większa niż zwykle",
      "Myśli, że lepiej byłoby umrzeć, albo chęć zrobienia sobie jakiejś krzywdy"
    ],
    source: "Kwestionariusz Zdrowia Pacjenta PHQ-9. Opracowanie: dr Robert L. Spitzer, dr Janet B.W. Williams, dr Kurt Kroenke i współpracownicy, z wykorzystaniem grantu oświatowego firmy Pfizer Inc."
  },
  bdi: {
    official: "BDI (Skala Becka)",
    title: "Skala Depresji Becka",
    meta: "21 pytań · 4 min",
    blurb: "Klasyczny, 21-pytaniowy kwestionariusz służący do samodzielnej oceny samopoczucia i nasilenia objawów depresyjnych w ostatnich 7 dniach.",
    prompt: "Wybierz odpowiedź najlepiej opisującą Twoje uczucia podczas ostatnich 7 dni:",
    scaleType: "custom",
    items: [
      {
        title: "Uczucie smutku i przygnębienia",
        options: [
          "Nie jestem smutny ani przygnębiony.",
          "Odczuwam często smutek, przygnębienie.",
          "Przeżywam stale smutek, przygnębienie i nie mogę uwolnić się od tych przeżyć.",
          "Jestem stale tak smutny i nieszczęśliwy, że jest to nie do wytrzymania."
        ]
      },
      {
        title: "Spojrzenie w przyszłość",
        options: [
          "Nie przejmuję się zbytnio przyszłością.",
          "Często martwię się o przyszłość.",
          "Obawiam się, że w przyszłości nic dobrego mnie nie czeka.",
          "Czuję, że przyszłość jest beznadziejna i nic tego nie zmieni."
        ]
      },
      {
        title: "Poczucie popełniania błędów i zaniedbań",
        options: [
          "Sądzę, że nie popełniam większych zaniedbań.",
          "Sądzę, że czynię więcej zaniedbań niż inni.",
          "Kiedy spoglądam na to, co robiłem, widzę mnóstwo błędów i zaniedbań.",
          "Jestem zupełnie niewydolny i wszystko robię źle."
        ]
      },
      {
        title: "Zadowolenie i odczuwanie przyjemności",
        options: [
          "To, co robię, sprawia mi przyjemność.",
          "Nie cieszy mnie to, co robię.",
          "Nic mi teraz nie daje prawdziwego zadowolenia.",
          "Nie potrafię przeżywać zadowolenia i przyjemności; wszystko mnie nuży."
        ]
      },
      {
        title: "Poczucie winy",
        options: [
          "Nie czuję się winnym ani wobec siebie, ani wobec innych.",
          "Dość często miewam wyrzuty sumienia.",
          "Często czuję, że zawiniłem.",
          "Stale czuję się winny."
        ]
      },
      {
        title: "Poczucie zasługiwania na karę",
        options: [
          "Sądzę, że nie zasługuję na karę.",
          "Sądzę, że zasługuję na karę.",
          "Spodziewam się ukarania.",
          "Wiem, że jestem karany (lub ukarany)."
        ]
      },
      {
        title: "Stosunek do samego siebie",
        options: [
          "Jestem z siebie zadowolony.",
          "Nie jestem z siebie zadowolony.",
          "Czuję do siebie niechęć.",
          "Nienawidzę siebie."
        ]
      },
      {
        title: "Samooskarżanie i poczucie gorszości",
        options: [
          "Nie czuję się gorszy od innych ludzi.",
          "Zarzucam sobie, że jestem nieudolny i popełniam błędy.",
          "Stale potępiam siebie za popełnione błędy.",
          "Winię siebie za wszelkie zło, które istnieje."
        ]
      },
      {
        title: "Myśli samobójcze i rezygnacyjne",
        options: [
          "Nie myślę o odebraniu sobie życia.",
          "Myślę o samobójstwie — ale nie mógłbym tego dokonać.",
          "Pragnę odebrać sobie życie.",
          "Popełnię samobójstwo, jak będzie odpowiednia sposobność."
        ]
      },
      {
        title: "Płaczliwość",
        options: [
          "Nie płaczę częściej niż zwykle.",
          "Płaczę częściej niż dawniej.",
          "Ciągle chce mi się płakać.",
          "Chciałbym płakać, lecz nie jestem w stanie."
        ]
      },
      {
        title: "Podenerwowanie i drażliwość",
        options: [
          "Nie jestem bardziej podenerwowany niż dawniej.",
          "Jestem bardziej nerwowy i przykry niż dawniej.",
          "Jestem stale zdenerwowany lub rozdrażniony.",
          "Wszystko, co dawniej mnie drażniło, stało się obojętne."
        ]
      },
      {
        title: "Zainteresowanie kontaktami z ludźmi",
        options: [
          "Ludzie interesują mnie jak dawniej.",
          "Interesuję się ludźmi mniej niż dawniej.",
          "Utraciłem większość zainteresowań innymi ludźmi.",
          "Utraciłem wszelkie zainteresowanie innymi ludźmi."
        ]
      },
      {
        title: "Podejmowanie decyzji",
        options: [
          "Decyzje podejmuję łatwo, tak jak dawniej.",
          "Częściej niż kiedyś odwlekam podjęcie decyzji.",
          "Mam dużo trudności z podjęciem decyzji.",
          "Nie jestem w stanie podjąć żadnej decyzji."
        ]
      },
      {
        title: "Ocena własnego wyglądu",
        options: [
          "Sądzę, że wyglądam nie gorzej niż dawniej.",
          "Martwię się tym, że wyglądam staro i nieatrakcyjnie.",
          "Czuję, że wyglądam coraz gorzej.",
          "Jestem przekonany, że wyglądam okropnie i odpychająco."
        ]
      },
      {
        title: "Zdolność do pracy i działania",
        options: [
          "Mogę pracować jak dawniej.",
          "Z trudem rozpoczynam każdą czynność.",
          "Z wielkim wysiłkiem zmuszam się do zrobienia czegokolwiek.",
          "Nie jestem w stanie nic zrobić."
        ]
      },
      {
        title: "Jakość snu",
        options: [
          "Sypiam dobrze, jak zwykle.",
          "Sypiam gorzej niż dawniej.",
          "Rano budzę się 1–2 godziny za wcześnie i trudno jest mi ponownie usnąć.",
          "Budzę się kilka godzin za wcześnie i nie mogę usnąć."
        ]
      },
      {
        title: "Męczliwość i brak energii",
        options: [
          "Nie męczę się bardziej niż dawniej.",
          "Męczę się znacznie łatwiej niż poprzednio.",
          "Męczę się wszystkim, co robię.",
          "Jestem zbyt zmęczony, aby cokolwiek robić."
        ]
      },
      {
        title: "Apetyt",
        options: [
          "Mam apetyt nie gorszy niż dawniej.",
          "Mam trochę gorszy apetyt.",
          "Apetyt mam wyraźnie gorszy.",
          "Nie mam w ogóle apetytu."
        ]
      },
      {
        title: "Spadek masy ciała",
        options: [
          "Nie tracę na wadze (w okresie ostatniego miesiąca).",
          "Straciłem na wadze więcej niż 2 kg.",
          "Straciłem na wadze więcej niż 4 kg.",
          "Straciłem na wadze więcej niż 6 kg."
        ]
      },
      {
        title: "Troska o zdrowie somatyczne",
        options: [
          "Nie martwię się o swoje zdrowie bardziej niż zawsze.",
          "Martwię się swoimi dolegliwościami (żołądek, bóle, zaparcia).",
          "Stan mojego zdrowia bardzo mnie martwi, często o tym myślę.",
          "Tak bardzo martwię się o swoje zdrowie, że nie mogę o niczym innym myśleć."
        ]
      },
      {
        title: "Zainteresowania seksualne",
        options: [
          "Moje zainteresowania seksualne nie uległy zmianom.",
          "Jestem mniej zainteresowany sprawami płci (seksu).",
          "Problemy płciowe wyraźnie mniej mnie interesują.",
          "Utraciłem wszelkie zainteresowanie sprawami seksu."
        ]
      }
    ],
    source: "Skala Depresji Becka (BDI). Beck AT, Ward CH, Mendelson M, Mock J, Erbaugh J (1961). An inventory for measuring depression. Arch Gen Psychiatry 4:561-571."
  },
  lsas: {
    official: "LSAS",
    title: "Ludzie Cię męczą czy przerażają?",
    meta: "24 sytuacje · 6 min",
    blurb: "Dwadzieścia cztery codzienne sytuacje. Przy każdej oceniasz dwie rzeczy: ile lęku czujesz i jak bardzo jej unikasz.",
    prompt: "Ta sytuacja:",
    scaleType: "lsas",
    items: [
      "Rozmawianie przez telefon przy innych",
      "Bycie w małej grupie osób",
      "Jedzenie w miejscu publicznym",
      "Picie z innymi w miejscu publicznym",
      "Rozmawianie ze zwierzchnikiem, kimś ważnym",
      "Wygłaszanie mowy, bycie aktywnym przed dowolną publicznością",
      "Wyjście na imprezę, spotkanie towarzyskie",
      "Praca, gdy jesteś obserwowany",
      "Pisanie, gdy jesteś obserwowany",
      "Dzwonienie do osoby, której nie znasz dobrze",
      "Rozmawianie z ludźmi, których nie znasz dobrze",
      "Spotykanie nieznajomych osób",
      "Korzystanie z publicznej toalety",
      "Wchodzenie do pomieszczenia, gdzie inni już siedzą",
      "Bycie w centrum zainteresowania",
      "Przemawianie na spotkaniu",
      "Wykonywanie testu wiedzy lub umiejętności",
      "Spieranie się z osobą, której nie znasz dobrze",
      "Patrzenie w oczy ludziom, których nie znasz",
      "Wygłaszanie przygotowanego wykładu lub raportu przed grupą osób",
      "Podrywanie kogoś",
      "Reklamowanie towaru w sklepie",
      "Urządzanie przyjęcia",
      "Opieranie się natrętnemu sprzedawcy"
    ],
    source: "Skala Lęku Społecznego Liebowitza (LSAS). Opracowano na podstawie: Liebowitz MR, Social Phobia, Mod Probl Pharmacopsychiatry 1987;22:141-173."
  },
  asrs: {
    official: "ASRS-v1.1 (ADHD)",
    title: "Czy to może być ADHD u dorosłych?",
    meta: "18 pytań · 3 min",
    blurb: "Kwestionariusz samooceny ADHD u dorosłych. Autorska skala 1–5 (wynik 18–90 pkt) powiązana z kryteriami wywiadu diagnostycznego DIVA-5 (próg 50/90).",
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
const BANDS = {
  who5: [
    { max: 28, color: "#FF7A29", title: "Samopoczucie mocno obniżone",
      text: "Twój wynik wskazuje na znaczny spadek dobrostanu. Warto skonsultować się ze specjalistą." },
    { max: 50, color: "#FFC542", title: "Samopoczucie poniżej normy",
      text: "Wynik wskazuje na obniżone samopoczucie. Warto poobserwować swój poziom energii i snu." },
    { max: 74, color: "#1C86EE", title: "Samopoczucie w normie",
      text: "Twoje samopoczucie mieści się w typowym, zdrowym zakresie." },
    { max: 100, color: "#1C86EE", title: "Samopoczucie wysokie",
      text: "Wysoki poziom dobrostanu psychicznego i życiowej energii." }
  ],
  gad7: [
    { max: 4, color: "#1C86EE", title: "Brak istotnych objawów lęku",
      text: "Objawy lękowe mieszczą się w normie i nie wpływają negatywnie na codzienne życie." },
    { max: 9, color: "#FFC542", title: "Łagodne objawy lęku",
      text: "Umiarkowane napięcie i zamartwianie się. Warto zadbać o techniki relaksacji." },
    { max: 14, color: "#FF9445", title: "Umiarkowane objawy lęku",
      text: "Wynik wskazuje na zauważalny poziom lęku, który może utrudniać koncentrację lub sen." },
    { max: 21, color: "#FF7A29", title: "Nasilone objawy lęku",
      text: "Wysoki poziom lęku. Zalecana konsultacja z psychologiem lub psychiatrą." }
  ],
  phq9: [
    { max: 4, color: "#1C86EE", title: "Brak objawów depresyjnych",
      text: "Twój wynik mieści się w normie. Brak przesłanek wskazujących na depresję." },
    { max: 9, color: "#FFC542", title: "Łagodne objawy depresyjne",
      text: "Lekkie obniżenie nastroju i energii. Warto poobserwować stan przez kolejne 2 tygodnie." },
    { max: 14, color: "#FF9445", title: "Umiarkowane objawy depresyjne",
      text: "Zauważalny spadek nastroju i motywacji. Zalecana konsultacja psychologiczna." },
    { max: 19, color: "#FF7A29", title: "Umiarkowanie ciężka depresja",
      text: "Nasilone objawy depresyjne. Wskazany pilny kontakt ze specjalistą." },
    { max: 27, color: "#FF7A29", title: "Ciężkie objawy depresyjne",
      text: "Bardzo wysoki wynik. Konieczna pilna konsultacja z lekarzem psychiatrą lub psychologiem." }
  ],
  lsas: [
    { max: 54, color: "#1C86EE", title: "Brak fobii społecznej",
      text: "Poziom lęku społecznego mieści się w typowym zakresie." },
    { max: 65, color: "#FFC542", title: "Łagodna fobia społeczna",
      text: "Łagodne napięcie w wybranych sytuacjach społecznych lub zawodowych." },
    { max: 80, color: "#FF9445", title: "Umiarkowana fobia społeczna",
      text: "Zauważalny lęk społeczny, który może prowadzić do unikania wyzwań." },
    { max: 95, color: "#FF7A29", title: "Nasilona fobia społeczna",
      text: "Wysoki poziom lęku społecznego utrudniający relacje i pracę." },
    { max: 144, color: "#FF7A29", title: "Bardzo nasilona fobia społeczna",
      text: "Bardzo wysokie nasilenie lęku społecznego. Zalecana terapia CBT." }
  ],
  bdi: [
    { max: 11, color: "#1C86EE", title: "Brak depresji (wynik w normie)",
      text: "Twój nastrój mieści się w normie. Brak przesłanek depresyjnych." },
    { max: 19, color: "#FFC542", title: "Łagodna depresja",
      text: "Łagodne obniżenie nastroju. Warto skonsultować się z psychologiem." },
    { max: 25, color: "#FF9445", title: "Umiarkowana depresja",
      text: "Umiarkowane nasilenie objawów depresyjnych. Zalecana konsultacja i psychoterapia." },
    { max: 63, color: "#FF7A29", title: "Ciężka depresja",
      text: "Nasilone objawy depresyjne. Wskazany pilny kontakt z psychiatrą lub psychologiem." }
  ],
  asrs: [
    { max: 35, color: "#1C86EE", title: "Brak wskazań do ADHD (wynik w normie)",
      text: "Wynik poniżej progu wywiadu DIVA-5 (próg: ≥ 50/90 pkt). Trudności ze skupieniem mieszczą się w typowej normie." },
    { max: 49, color: "#FFC542", title: "Umiarkowane trudności (poniżej progu)",
      text: "Wynik poniżej progu DIVA-5 (≥ 50/90 pkt), wskazujący na okresowe trudności z organizacją lub prokrastynacją." },
    { max: 90, color: "#FF7A29", title: "Wskazanie do diagnostyki ADHD (Próg DIVA-5)",
      text: "Wynik przekracza próg odniesienia DIVA-5 (≥ 50/90 pkt), co sugeruje wysokie prawdopodobieństwo cech ADHD u dorosłych." }
  ]
};

// Application State
let state = {
  activeTest: null,
  step: 0,
  answers: {},
  submitted: false
};

document.addEventListener('DOMContentLoaded', () => {
  renderHubCards();
  syncFromHash();
  window.addEventListener('hashchange', syncFromHash);
});

function syncFromHash() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash && TESTS[hash]) {
    startTest(hash);
  } else {
    goHub();
  }
}

function startTest(testKey) {
  state.activeTest = testKey;
  state.step = 0;
  state.answers = {};
  state.submitted = false;
  if (window.location.hash !== `#${testKey}`) {
    window.location.hash = testKey;
  }
  updateView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHub() {
  state.activeTest = null;
  state.step = 0;
  state.answers = {};
  state.submitted = false;
  if (window.location.hash) {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }
  updateView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
  if (state.step === 0) {
    goHub();
  } else {
    state.step--;
    updateView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function pickOption(slot, value, isLast, isLsas, otherSlot) {
  state.answers[slot] = value;
  
  if (isLsas && state.answers[otherSlot] === undefined) {
    updateView();
    return;
  }
  
  if (isLast) {
    state.submitted = true;
    updateView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    state.step++;
    updateView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updateView() {
  const hubSec = document.getElementById('hub-section');
  const testSec = document.getElementById('runner-section');
  const resultSec = document.getElementById('result-section');
  
  if (!hubSec || !testSec || !resultSec) return;
  
  if (!state.activeTest) {
    hubSec.style.display = 'block';
    testSec.style.display = 'none';
    resultSec.style.display = 'none';
    return;
  }
  
  if (!state.submitted) {
    hubSec.style.display = 'none';
    testSec.style.display = 'block';
    resultSec.style.display = 'none';
    renderQuizRunner();
  } else {
    hubSec.style.display = 'none';
    testSec.style.display = 'none';
    resultSec.style.display = 'block';
    renderQuizResult();
  }
}

function renderHubCards() {
  const hubContainer = document.getElementById('tests-hub-cards') || document.getElementById('test-hub-grid');
  if (!hubContainer) return;
  
  hubContainer.innerHTML = Object.keys(TESTS).map(key => {
    const t = TESTS[key];
    return `
      <div class="test-hub-card" onclick="openTest('${key}')">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%;">
          <div class="glyph-circle">${GLYPHS[key] || ''}</div>
          <span class="test-card-tag">${t.meta}</span>
        </div>
        <h3 style="margin-top: 22px; font-size: 1.35rem; font-weight: 800; letter-spacing: -0.02em;">${t.title}</h3>
        <p style="margin-top: 10px; font-size: 0.9375rem; line-height: 1.6;">${t.blurb}</p>
        <span style="margin-top: auto; padding-top: 24px; display: inline-flex; align-items: center; gap: 8px; font-size: 0.9rem; font-weight: 700; color: var(--color-blue);">
          Zacznij test
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13"></path><path d="M13 6l6 6-6 6"></path></svg>
        </span>
      </div>
    `;
  }).join('');
}

function openTest(key) {
  startTest(key);
}

function renderQuizRunner() {
  const t = TESTS[state.activeTest];
  const total = t.items.length;
  const isLsas = t.scaleType === 'lsas';
  const isCustom = t.scaleType === 'custom';
  const isLast = state.step === total - 1;
  const currentItem = isCustom ? t.items[state.step].title : t.items[state.step];
  
  const runnerContainer = document.getElementById('quiz-runner-content');
  if (!runnerContainer) return;
  
  const progressPct = Math.round((state.step / total) * 100);
  
  let scalesHtml = '';
  if (isLsas) {
    const slotF = `${state.step}-f`;
    const slotA = `${state.step}-a`;
    const valF = state.answers[slotF];
    const valA = state.answers[slotA];
    
    scalesHtml = `
      <div style="margin-top: 24px;">
        <span style="display: block; margin-bottom: 8px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-blue);">Ile lęku w niej czujesz?</span>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${LSAS_FEAR.map((opt, i) => `
            <button class="quiz-option-btn ${valF === i ? 'selected' : ''}" onclick="pickOption('${slotF}', ${i}, ${isLast}, true, '${slotA}')">
              <span class="quiz-option-mark">${valF === i ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}</span>
              <span style="font-size: 0.95rem; font-weight: 600; color: var(--color-text-main);">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
      
      <div style="margin-top: 24px;">
        <span style="display: block; margin-bottom: 8px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-orange);">Jak często jej unikasz?</span>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${LSAS_AVOID.map((opt, i) => `
            <button class="quiz-option-btn ${valA === i ? 'selected orange' : ''}" onclick="pickOption('${slotA}', ${i}, ${isLast}, true, '${slotF}')">
              <span class="quiz-option-mark">${valA === i ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}</span>
              <span style="font-size: 0.95rem; font-weight: 600; color: var(--color-text-main);">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (isCustom) {
    const slot = `${state.step}-v`;
    const val = state.answers[slot];
    const customOpts = t.items[state.step].options;
    
    scalesHtml = `
      <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;">
        ${customOpts.map((opt, i) => `
          <button class="quiz-option-btn ${val === i ? 'selected' : ''}" onclick="pickOption('${slot}', ${i}, ${isLast}, false, '')" style="align-items: flex-start; padding: 13px 16px;">
            <span class="quiz-option-mark" style="margin-top: 2px;">${val === i ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}</span>
            <span style="font-size: 0.95rem; font-weight: 600; color: var(--color-text-main); text-align: left; line-height: 1.4;">${opt}</span>
          </button>
        `).join('')}
      </div>
    `;
  } else if (t.scaleType === 'asrs') {
    const slot = `${state.step}-v`;
    const val = state.answers[slot];
    
    scalesHtml = `
      <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;">
        ${t.options.map((opt, i) => {
          const scoreVal = i + 1;
          return `
            <button class="quiz-option-btn ${val === scoreVal ? 'selected' : ''}" onclick="pickOption('${slot}', ${scoreVal}, ${isLast}, false, '')">
              <span class="quiz-option-mark">${val === scoreVal ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}</span>
              <span style="font-size: 0.95rem; font-weight: 600; color: var(--color-text-main);">${opt}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  } else {
    const slot = `${state.step}-v`;
    const val = state.answers[slot];
    
    scalesHtml = `
      <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;">
        ${t.options.map((opt, i) => `
          <button class="quiz-option-btn ${val === i ? 'selected' : ''}" onclick="pickOption('${slot}', ${i}, ${isLast}, false, '')">
            <span class="quiz-option-mark">${val === i ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}</span>
            <span style="font-size: 0.95rem; font-weight: 600; color: var(--color-text-main);">${opt}</span>
          </button>
        `).join('')}
      </div>
    `;
  }
  
  runnerContainer.innerHTML = `
    <div style="display: flex; align-items: center; gap: 14px;">
      <button onclick="goBack()" aria-label="Wstecz" style="width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0; cursor: pointer; display: flex; align-items: center; justify-content: center; border: 1.4px solid var(--color-blue-border); background: transparent; color: var(--color-blue);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6"></path><path d="M11 6l-6 6 6 6"></path></svg>
      </button>
      <div class="quiz-progress-bar">
        <span class="quiz-progress-fill" style="width: ${progressPct}%;"></span>
      </div>
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-text-muted); white-space: nowrap;">${state.step + 1} / ${total}</span>
    </div>
    
    <div class="animate-fade-in" style="margin-top: 28px;">
      <span class="section-tag">${t.prompt}</span>
      <h1 style="margin-top: 10px; font-size: 1.75rem; line-height: 1.3; font-weight: 800; letter-spacing: -0.02em; color: var(--color-text-main);">${currentItem}</h1>
      ${scalesHtml}
    </div>
    
    <p style="margin-top: 22px; font-size: 0.78rem; color: var(--color-text-muted); text-align: center;">
      Odpowiedzi są w 100% poufne i nie opuszczają Twojej przeglądarki.
    </p>
  `;
}

function renderQuizResult() {
  const t = TESTS[state.activeTest];
  const raw = Object.values(state.answers).reduce((a, b) => a + b, 0);
  const isWho = state.activeTest === 'who5';
  const displayScore = isWho ? raw * 4 : raw;
  const maxScore = isWho ? 100 : (state.activeTest === 'lsas' ? 144 : (state.activeTest === 'asrs' ? 90 : (state.activeTest === 'bdi' ? 63 : (state.activeTest === 'gad7' ? 21 : 27))));
  const band = BANDS[state.activeTest].find(b => displayScore <= b.max) || BANDS[state.activeTest][BANDS[state.activeTest].length - 1];
  
  const isCrisis = (state.activeTest === 'phq9' && (state.answers['8-v'] > 0 || displayScore >= 20)) ||
                   (state.activeTest === 'bdi' && (state.answers['8-v'] > 0 || displayScore >= 26));
  
  const resultContainer = document.getElementById('quiz-result-content');
  if (!resultContainer) return;
  
  resultContainer.innerHTML = `
    <button onclick="goHub()" class="btn-outline" style="padding: 7px 14px; font-size: 0.85rem;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6"></path><path d="M11 6l-6 6 6 6"></path></svg>
      Wszystkie testy
    </button>
    
    <div style="margin-top: 20px; padding: 30px 28px 24px; border-radius: 20px; border: 1.2px solid var(--color-blue-border); background: var(--color-bg-card); backdrop-filter: blur(8px); box-shadow: var(--shadow-card);">
      <span class="section-tag">${t.official} — Twój wynik</span>
      
      <div style="margin-top: 18px; display: grid; grid-template-columns: auto 1fr; gap: 24px; align-items: center;" class="result-grid">
        <div class="score-badge-circle" style="background-color: ${band.color}; box-shadow: 0 12px 28px ${band.color}35;">
          <span style="font-size: 2.5rem; font-weight: 800; letter-spacing: -0.04em; line-height: 1;">${displayScore}</span>
          <span style="margin-top: 3px; font-size: 0.78rem; font-weight: 600; opacity: 0.9;">na ${isWho ? '100' : maxScore}</span>
        </div>
        <div>
          <h2 style="font-size: 1.5rem; line-height: 1.25; font-weight: 800; letter-spacing: -0.02em;">${band.title}</h2>
          <p style="margin-top: 8px; font-size: 0.95rem; line-height: 1.55; color: var(--color-text-muted);">${band.text}</p>
        </div>
      </div>

      <!-- Action Buttons: Copy Result & Download PDF -->
      <div style="margin-top: 22px; padding-top: 18px; border-top: 1px solid rgba(28, 134, 238, 0.14); display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
        <button id="btn-copy-result" onclick="copyTestResult()" class="btn-action-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Skopiuj wynik na wizytę</span>
        </button>
        
        <button id="btn-download-pdf" onclick="downloadTestPdf()" class="btn-action-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>Pobierz raport (PDF)</span>
        </button>
      </div>
    </div>
    
    ${isCrisis ? `
      <div class="crisis-box" style="margin-top: 18px;">
        <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--color-orange-dark);">Bezpłatna pomoc psychologiczna (całodobowo)</h3>
        <div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 10px;">
          <a href="tel:116123" class="crisis-card-btn">
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--color-text-main);">116 123</span>
            <span style="font-size: 0.75rem; color: var(--color-text-muted);">Kryzysowy Telefon Zaufania</span>
          </a>
          <a href="tel:800702222" class="crisis-card-btn">
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--color-text-main);">800 70 2222</span>
            <span style="font-size: 0.75rem; color: var(--color-text-muted);">Centrum Wsparcia</span>
          </a>
          <a href="tel:112" class="crisis-card-btn">
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--color-text-main);">112</span>
            <span style="font-size: 0.75rem; color: var(--color-text-muted);">Numer alarmowy</span>
          </a>
        </div>
      </div>
    ` : ''}
    
    <div style="margin-top: 18px; padding: 22px 24px; border-radius: 16px; border: 1px solid var(--color-blue-border); background: var(--color-bg-card); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
      <div>
        <h3 style="font-size: 1.05rem; font-weight: 800;">Chcesz skonsultować ten wynik?</h3>
        <p style="margin-top: 4px; font-size: 0.88rem; color: var(--color-text-muted);">Omówimy go podczas bezpłatnej, 15-minutowej rozmowy online.</p>
      </div>
      <a href="https://calendly.com/kacperkulesza/15min" target="_blank" rel="noopener" class="btn-cta" style="padding: 11px 20px; font-size: 0.9rem;">
        Umów 15 minut
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13"></path><path d="M13 6l6 6-6 6"></path></svg>
      </a>
    </div>
    
    <div style="margin-top: 18px; display: flex; flex-wrap: wrap; gap: 10px;">
      <button onclick="startTest('${state.activeTest}')" class="btn-outline" style="font-size: 0.85rem; padding: 8px 14px;">Wypełnij ponownie</button>
      <button onclick="goHub()" class="btn-outline" style="font-size: 0.85rem; padding: 8px 14px;">Inny test</button>
    </div>
  `;
}

function copyTestResult() {
  const t = TESTS[state.activeTest];
  const raw = Object.values(state.answers).reduce((a, b) => a + b, 0);
  const isWho = state.activeTest === 'who5';
  const displayScore = isWho ? raw * 4 : raw;
  const maxScore = isWho ? 100 : (state.activeTest === 'lsas' ? 144 : (state.activeTest === 'asrs' ? 90 : (state.activeTest === 'bdi' ? 63 : (state.activeTest === 'gad7' ? 21 : 27))));
  const band = BANDS[state.activeTest].find(b => displayScore <= b.max) || BANDS[state.activeTest][BANDS[state.activeTest].length - 1];
  const dateStr = new Date().toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  
  let text = `📋 WYNIK TESTU SAMOOCENY (${t.official})\n`;
  text += `Data: ${dateStr}\n`;
  text += `Wynik: ${displayScore} / ${maxScore} pkt — ${band.title}\n`;
  text += `${band.text}\n\n`;
  text += `Konsultacja: https://psychologkacper.pl`;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('btn-copy-result');
      if (btn) {
        const origHtml = btn.innerHTML;
        btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.6"><polyline points="20 6 9 17 4 12"></polyline></svg><span style="color: #059669; font-weight: 700;">Skopiowano!</span>`;
        setTimeout(() => { btn.innerHTML = origHtml; }, 2000);
      }
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    alert("Wynik został skopiowany do schowka!");
  } catch (err) {
    alert("Zaznacz i skopiuj wynik.");
  }
  document.body.removeChild(ta);
}

function downloadTestPdf() {
  const t = TESTS[state.activeTest];
  const raw = Object.values(state.answers).reduce((a, b) => a + b, 0);
  const isWho = state.activeTest === 'who5';
  const displayScore = isWho ? raw * 4 : raw;
  const maxScore = isWho ? 100 : (state.activeTest === 'lsas' ? 144 : (state.activeTest === 'asrs' ? 90 : (state.activeTest === 'bdi' ? 63 : (state.activeTest === 'gad7' ? 21 : 27))));
  const band = BANDS[state.activeTest].find(b => displayScore <= b.max) || BANDS[state.activeTest][BANDS[state.activeTest].length - 1];
  const dateStr = new Date().toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  
  let answersListHtml = '';
  t.items.forEach((item, idx) => {
    let rawTitle = typeof item === 'object' ? item.title : item;
    let questionTitle = rawTitle.replace(/^\d+\.\s*/, '');
    let chosenAnsText = '';
    
    if (t.scaleType === 'lsas') {
      const fearVal = state.answers[`${idx}-f`] ?? '-';
      const avoidVal = state.answers[`${idx}-a`] ?? '-';
      chosenAnsText = `Lęk: ${LSAS_FEAR[fearVal] || '-'} | Unikanie: ${LSAS_AVOID[avoidVal] || '-'}`;
    } else if (t.scaleType === 'custom') {
      const ansVal = state.answers[`${idx}-v`] ?? 0;
      chosenAnsText = `${item.options[ansVal] || '-'} (${ansVal} pkt)`;
    } else if (t.scaleType === 'asrs') {
      const ansVal = state.answers[`${idx}-v`] ?? 1;
      chosenAnsText = `${t.options[ansVal - 1] || '-'} (${ansVal} pkt)`;
    } else {
      const ansVal = state.answers[`${idx}-v`] ?? 0;
      chosenAnsText = `${t.options[ansVal] || '-'} (${ansVal} pkt)`;
    }
    
    answersListHtml += `
      <tr style="border-bottom: 1px solid #E2E8F0;">
        <td style="padding: 6px 8px; font-size: 11px; color: #334155; vertical-align: top; width: 55%; font-weight: 500;">${idx + 1}. ${questionTitle}</td>
        <td style="padding: 6px 8px; font-size: 11px; color: #0F172A; vertical-align: top; width: 45%; font-weight: 600;">${chosenAnsText}</td>
      </tr>
    `;
  });

  const printHtml = `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
      <meta charset="UTF-8">
      <title>Raport_${state.activeTest.toUpperCase()}_PsychologKacper</title>
      <style>
        @page { size: A4; margin: 12mm 15mm; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #0F172A; background: #FFF; margin: 0; padding: 12px; }
        .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #1C86EE; padding-bottom: 10px; margin-bottom: 14px; }
        .logo { font-size: 17px; font-weight: 800; color: #0F172A; }
        .logo span { color: #1C86EE; }
        .sub { font-size: 10.5px; color: #64748B; margin-top: 2px; }
        .meta { text-align: right; font-size: 10.5px; color: #64748B; line-height: 1.4; }
        .score-card { display: flex; align-items: center; gap: 16px; background: #F8FAFC; border: 1.2px solid #E2E8F0; border-radius: 10px; padding: 12px 16px; margin-bottom: 14px; }
        .score-badge { width: 52px; height: 52px; border-radius: 50%; background: ${band.color}; color: #FFF; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 800; font-size: 17px; line-height: 1; flex-shrink: 0; }
        .score-sub { font-size: 8px; font-weight: 600; opacity: 0.9; margin-top: 2px; }
        .score-title { font-size: 13.5px; font-weight: 800; color: #0F172A; margin: 0 0 3px; }
        .score-desc { font-size: 11px; line-height: 1.4; color: #475569; margin: 0; }
        .table-title { font-size: 11.5px; font-weight: 700; margin: 12px 0 6px; color: #0F172A; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 14px; }
        th { text-align: left; padding: 6px 8px; font-size: 10px; font-weight: 700; text-transform: uppercase; color: #475569; background: #F1F5F9; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #CBD5E1; }
        .footer { border-top: 1px solid #E2E8F0; padding-top: 8px; font-size: 9.5px; color: #94A3B8; line-height: 1.4; text-align: center; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="logo">Kacper Kulesza <span>·</span> Psycholog</div>
          <div class="sub">Konsultacje psychologiczne online | psychologkacper.pl</div>
        </div>
        <div class="meta">
          <div><strong>Data badania:</strong> ${dateStr}</div>
          <div><strong>Kwestionariusz:</strong> ${t.official}</div>
        </div>
      </div>
      
      <div class="score-card">
        <div class="score-badge">
          ${displayScore}
          <span class="score-sub">na ${isWho ? '100' : maxScore}</span>
        </div>
        <div>
          <div class="score-title">${band.title}</div>
          <p class="score-desc">${band.text}</p>
        </div>
      </div>
      
      <div class="table-title">Szczegółowy wykaz odpowiedzi:</div>
      <table>
        <thead>
          <tr>
            <th>Pytanie</th>
            <th>Twoja odpowiedź</th>
          </tr>
        </thead>
        <tbody>
          ${answersListHtml}
        </tbody>
      </table>
      
      <div class="footer">
        Raport stanowi wynik wstępnej samooceny i nie zastępuje diagnozy lekarskiej. | Kacper Kulesza – Psycholog | psychologkacper.pl
      </div>
    </body>
    </html>
  `;

  const printIframe = document.createElement('iframe');
  printIframe.style.position = 'fixed';
  printIframe.style.right = '0';
  printIframe.style.bottom = '0';
  printIframe.style.width = '0';
  printIframe.style.height = '0';
  printIframe.style.border = '0';
  document.body.appendChild(printIframe);
  
  const iframeDoc = printIframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(printHtml);
  iframeDoc.close();
  
  setTimeout(() => {
    printIframe.contentWindow.focus();
    printIframe.contentWindow.print();
    setTimeout(() => {
      if (document.body.contains(printIframe)) document.body.removeChild(printIframe);
    }, 2500);
  }, 250);
}
