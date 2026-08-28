/**
 * Kacper Kulesza - Psycholog | Psychological Tests Engine
 */

const FREQ4 = ["Wcale nie dokuczały", "Kilka dni", "Więcej niż połowę dni", "Niemal codziennie"];
const WHO6 = ["Nigdy", "Od czasu do czasu", "Mniej niż połowę czasu", "Więcej niż połowę czasu", "Prawie cały czas", "Cały czas"];
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
  }
};

const BANDS = {
  who5: [
    { max: 28, color: "#FF7A29", title: "Samopoczucie mocno obniżone",
      text: "Twój wynik jest niski. W ostatnich dwóch tygodniach niewiele rzeczy dawało Ci energię, spokój lub przyjemność. WHO traktuje wynik poniżej 13 punktów surowych jako sygnał, żeby sprawdzić, czy nie chodzi o depresję.",
      advice: "Zrób jeszcze test PHQ-9 — jest po to, żeby odróżnić przejściowy dołek od czegoś, co wymaga pomocy. Jeśli taki stan trwa dłużej niż dwa tygodnie, umów rozmowę z psychologiem albo lekarzem rodzinnym." },
    { max: 50, color: "#FFC542", title: "Samopoczucie poniżej normy",
      text: "Wynik wskazuje na obniżone samopoczucie. To jeszcze nie musi oznaczać zaburzenia, ale też nie jest to poziom, przy którym można powiedzieć, że wszystko gra.",
      advice: "Sprawdź, co konkretnie zabiera Ci energię: sen, praca, relacje, brak ruchu. Wypełnij test za dwa tygodnie i porównaj — zmiana o 10 punktów procentowych jest już istotna." },
    { max: 74, color: "#1C86EE", title: "Samopoczucie w normie",
      text: "Twoje samopoczucie w ostatnich dwóch tygodniach mieściło się w typowym zakresie. Zdarzały się gorsze momenty, ale ogólny poziom jest w porządku.",
      advice: "Nic nie musisz robić. Jeśli chcesz mieć punkt odniesienia, zapisz sobie ten wynik i wróć do testu za miesiąc." },
    { max: 100, color: "#1C86EE", title: "Samopoczucie wysokie",
      text: "Wysoki wynik. W ostatnich dwóch tygodniach czułeś się dobrze, miałeś energię i rzeczy, które Cię interesowały.",
      advice: "Warto wiedzieć, co u Ciebie działa. Zastanów się, co konkretnie sprawiło, że ten okres wypadł dobrze — to informacja, która przyda się w gorszym miesiącu." }
  ],
  gad7: [
    { max: 4, color: "#1C86EE", title: "Brak istotnych objawów lęku",
      text: "Twój wynik mieści się w zakresie, w którym objawy lękowe nie są nasilone. Napięcie zdarza się każdemu — tu nie układa się w problem.",
      advice: "Nie ma powodu do działania. Jeśli coś konkretnego Cię niepokoi, to raczej temat na jedną rozmowę niż na leczenie." },
    { max: 9, color: "#FFC542", title: "Łagodne objawy lęku",
      text: "Objawy są obecne, ale w łagodnym nasileniu. Częste martwienie się i napięcie pojawiają się regularnie, choć zwykle nie blokują codziennego funkcjonowania.",
      advice: "To dobry moment, żeby nauczyć się kilku technik zanim nasilenie wzrośnie. Praca poznawczo-behawioralna nad zamartwianiem daje tu wyraźne efekty w kilku spotkaniach." },
    { max: 14, color: "#FF9445", title: "Umiarkowane objawy lęku",
      text: "Wynik wskazuje na umiarkowane nasilenie lęku. Na tym poziomie objawy zwykle już kosztują — utrudniają sen, koncentrację albo relacje.",
      advice: "Warto skonsultować się z psychologiem. Zaburzenia lękowe dobrze reagują na terapię poznawczo-behawioralną, a im wcześniej się zacznie, tym krócej to trwa." },
    { max: 21, color: "#FF7A29", title: "Nasilone objawy lęku",
      text: "Wysoki wynik. Objawy lękowe są nasilone i najprawdopodobniej istotnie wpływają na Twoje codzienne funkcjonowanie.",
      advice: "Umów się na konsultację z psychologiem lub psychiatrą. Przy tym nasileniu zaleca się aktywne leczenie — psychoterapię, czasem w połączeniu z farmakoterapią. To nie jest coś, co trzeba przeczekać samemu." }
  ],
  phq9: [
    { max: 4, color: "#1C86EE", title: "Brak objawów depresyjnych",
      text: "Twój wynik mieści się w zakresie, w którym objawy depresyjne nie są nasilone.",
      advice: "Nie ma powodu do działania. Jeśli mimo to czujesz, że coś jest nie tak, zaufaj temu — kwestionariusz mierzy tylko dziewięć rzeczy." },
    { max: 9, color: "#FFC542", title: "Łagodne objawy depresyjne",
      text: "Objawy są obecne w łagodnym nasileniu. To poziom, na którym często się słyszy, że jakoś się funkcjonuje, ale kosztuje to więcej wysiłku niż powinno.",
      advice: "Obserwuj to przez dwa tygodnie i wypełnij test ponownie. Jeśli wynik nie spada, umów konsultację — na tym etapie zwykle wystarczy praca psychologiczna bez leków." },
    { max: 14, color: "#FF9445", title: "Umiarkowane objawy depresyjne",
      text: "Wynik wskazuje na umiarkowane nasilenie objawów. Na tym poziomie zwykle cierpi sen, energia i zdolność cieszenia się rzeczami, które wcześniej cieszyły.",
      advice: "Warto skonsultować się z psychologiem. Umiarkowana depresja dobrze reaguje na psychoterapię, a odkładanie tego zwykle tylko wydłuża cały proces." },
    { max: 19, color: "#FF7A29", title: "Umiarkowanie ciężkie objawy depresyjne",
      text: "Wysoki wynik. Objawy są nasilone i prawdopodobnie wyraźnie ograniczają Twoje codzienne funkcjonowanie.",
      advice: "Skonsultuj się z psychiatrą lub psychologiem w najbliższym możliwym terminie. Przy tym nasileniu zaleca się aktywne leczenie, często łączące psychoterapię z farmakoterapią." },
    { max: 27, color: "#FF7A29", title: "Ciężkie objawy depresyjne",
      text: "Bardzo wysoki wynik. Objawy depresyjne są ciężkie i z dużym prawdopodobieństwem znacząco utrudniają Ci codzienne życie.",
      advice: "Nie zostawaj z tym sam. Umów wizytę u psychiatry — do psychiatry w Polsce nie potrzebujesz skierowania. Jeśli czekanie na termin wydaje się nie do zniesienia, zadzwoń pod numery poniżej." }
  ],
  lsas: [
    { max: 54, color: "#1C86EE", title: "Brak fobii społecznej",
      text: "Twój wynik nie wskazuje na fobię społeczną. Część sytuacji może być niekomfortowa — to normalne i nie układa się w zaburzenie.",
      advice: "Nic nie musisz robić. Jeśli konkretna sytuacja, na przykład wystąpienia publiczne, mocno Cię blokuje, to temat na jedno spotkanie, nie na terapię." },
    { max: 65, color: "#FFC542", title: "Łagodna fobia społeczna",
      text: "Wynik wskazuje na łagodne nasilenie lęku społecznego. Prawdopodobnie unikasz niektórych sytuacji albo przechodzisz przez nie kosztem sporego napięcia.",
      advice: "Terapia poznawczo-behawioralna z ekspozycją jest tu metodą pierwszego wyboru i przy łagodnym nasileniu działa szybko. Warto zacząć od nazwania, których sytuacji dokładnie dotyczy." },
    { max: 80, color: "#FF9445", title: "Umiarkowana fobia społeczna",
      text: "Umiarkowane nasilenie. Na tym poziomie unikanie zwykle zaczyna zawężać życie — odmawiasz rzeczy, na które faktycznie masz ochotę.",
      advice: "Skonsultuj się z psychologiem. Im dłużej trwa unikanie, tym mocniej się utrwala, więc to dobry moment, żeby to przerwać." },
    { max: 95, color: "#FF7A29", title: "Nasilona fobia społeczna",
      text: "Wysoki wynik. Lęk społeczny jest nasilony i z dużym prawdopodobieństwem wpływa na Twoją pracę, naukę i relacje.",
      advice: "Umów konsultację z psychologiem lub psychiatrą. Fobia społeczna to jedno z zaburzeń, które najlepiej reagują na leczenie — u większości osób udaje się uzyskać wyraźną poprawę." },
    { max: 144, color: "#FF7A29", title: "Bardzo nasilona fobia społeczna",
      text: "Bardzo wysoki wynik. Poziom lęku i unikania jest na tyle duży, że prawdopodobnie organizuje Twoje codzienne decyzje.",
      advice: "Nie próbuj z tym walczyć samodzielnie. Umów się do psychologa lub psychiatry — dostępne metody leczenia są skuteczne, a przy tym nasileniu profesjonalne prowadzenie robi realną różnicę." }
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
  const hash = (window.location.hash || '').replace('#', '');
  if (TESTS[hash]) {
    startTest(hash);
  } else if (state.activeTest) {
    goHub();
  }
}

function renderHubCards() {
  const hubContainer = document.getElementById('tests-hub-cards');
  if (!hubContainer) return;
  
  hubContainer.innerHTML = Object.keys(TESTS).map(key => {
    const t = TESTS[key];
    return `
      <div class="test-hub-card" onclick="openTest('${key}')">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%;">
          <div class="glyph-circle">${GLYPHS[key]}</div>
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
  if (window.location.hash !== '#' + key) {
    window.location.hash = key;
  } else {
    startTest(key);
  }
}

function startTest(key) {
  state = {
    activeTest: key,
    step: 0,
    answers: {},
    submitted: false
  };
  updateView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHub() {
  state = {
    activeTest: null,
    step: 0,
    answers: {},
    submitted: false
  };
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
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
    // Need both fear and avoidance answered
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

function renderQuizRunner() {
  const t = TESTS[state.activeTest];
  const total = t.items.length;
  const isLsas = t.scaleType === 'lsas';
  const isLast = state.step === total - 1;
  const currentItem = t.items[state.step];
  
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
      <div style="margin-top: 26px;">
        <span style="display: block; margin-bottom: 10px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-blue);">Ile lęku w niej czujesz?</span>
        <div style="display: flex; flex-direction: column; gap: 9px;">
          ${LSAS_FEAR.map((opt, i) => `
            <button class="quiz-option-btn ${valF === i ? 'selected' : ''}" onclick="pickOption('${slotF}', ${i}, ${isLast}, true, '${slotA}')">
              <span class="quiz-option-mark">
                ${valF === i ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}
              </span>
              <span style="font-size: 1rem; font-weight: 600; color: var(--color-text-main);">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
      
      <div style="margin-top: 26px;">
        <span style="display: block; margin-bottom: 10px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-orange);">Jak często jej unikasz?</span>
        <div style="display: flex; flex-direction: column; gap: 9px;">
          ${LSAS_AVOID.map((opt, i) => `
            <button class="quiz-option-btn ${valA === i ? 'selected orange' : ''}" onclick="pickOption('${slotA}', ${i}, ${isLast}, true, '${slotF}')">
              <span class="quiz-option-mark">
                ${valA === i ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}
              </span>
              <span style="font-size: 1rem; font-weight: 600; color: var(--color-text-main);">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    const slot = `${state.step}-v`;
    const val = state.answers[slot];
    
    scalesHtml = `
      <div style="margin-top: 26px; display: flex; flex-direction: column; gap: 9px;">
        ${t.options.map((opt, i) => `
          <button class="quiz-option-btn ${val === i ? 'selected' : ''}" onclick="pickOption('${slot}', ${i}, ${isLast}, false, '')">
            <span class="quiz-option-mark">
              ${val === i ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}
            </span>
            <span style="font-size: 1rem; font-weight: 600; color: var(--color-text-main);">${opt}</span>
          </button>
        `).join('')}
      </div>
    `;
  }
  
  runnerContainer.innerHTML = `
    <div style="display: flex; align-items: center; gap: 16px;">
      <button onclick="goBack()" aria-label="Wstecz" style="width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; cursor: pointer; display: flex; align-items: center; justify-content: center; border: 1.4px solid var(--color-blue-border); background: transparent; color: var(--color-blue); transition: background 0.14s ease;">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6"></path><path d="M11 6l-6 6 6 6"></path></svg>
      </button>
      <div class="quiz-progress-bar">
        <span class="quiz-progress-fill" style="width: ${progressPct}%;"></span>
      </div>
      <span style="font-size: 0.875rem; font-weight: 700; color: var(--color-text-muted); white-space: nowrap;">${state.step + 1} / ${total}</span>
    </div>
    
    <div class="animate-fade-in" style="margin-top: 34px;">
      <span class="section-tag">${t.prompt}</span>
      <h1 style="margin-top: 12px; font-size: 1.85rem; line-height: 1.28; font-weight: 800; letter-spacing: -0.025em; color: var(--color-text-main);">${currentItem}</h1>
      
      ${scalesHtml}
    </div>
    
    <p style="margin-top: 28px; font-size: 0.8125rem; color: var(--color-text-muted); text-align: center;">
      Odpowiedzi nie opuszczają Twojej przeglądarki. Możesz cofnąć się w każdej chwili.
    </p>
  `;
}

function renderQuizResult() {
  const t = TESTS[state.activeTest];
  const raw = Object.values(state.answers).reduce((a, b) => a + b, 0);
  const isWho = state.activeTest === 'who5';
  const displayScore = isWho ? raw * 4 : raw;
  const maxScore = isWho ? 100 : (state.activeTest === 'lsas' ? 144 : (state.activeTest === 'gad7' ? 21 : 27));
  const band = BANDS[state.activeTest].find(b => displayScore <= b.max) || BANDS[state.activeTest][BANDS[state.activeTest].length - 1];
  
  // Crisis condition for PHQ-9: question 9 > 0 or score >= 20
  const isPhqCrisis = state.activeTest === 'phq9' && (state.answers['8-v'] > 0 || displayScore >= 20);
  
  const resultContainer = document.getElementById('quiz-result-content');
  if (!resultContainer) return;
  
  resultContainer.innerHTML = `
    <button onclick="goHub()" class="btn-outline" style="padding: 8px 16px; font-size: 0.875rem;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6"></path><path d="M11 6l-6 6 6 6"></path></svg>
      Wszystkie testy
    </button>
    
    <div style="margin-top: 22px; padding: 36px 32px 30px; border-radius: 22px; border: 1px solid var(--color-blue-border); background: var(--color-bg-card); backdrop-filter: blur(8px); box-shadow: var(--shadow-card);">
      <span class="section-tag">${t.official} — Twój wynik</span>
      
      <div style="margin-top: 22px; display: grid; grid-template-columns: auto 1fr; gap: 30px; align-items: center;" class="result-grid">
        <div class="score-badge-circle" style="background-color: ${band.color}; box-shadow: 0 16px 36px ${band.color}40;">
          <span style="font-size: 2.75rem; font-weight: 800; letter-spacing: -0.04em; line-height: 1;">${displayScore}</span>
          <span style="margin-top: 4px; font-size: 0.8125rem; font-weight: 600; opacity: 0.9;">na ${isWho ? '100' : maxScore}</span>
        </div>
        <div>
          <h2 style="font-size: 1.75rem; line-height: 1.2; font-weight: 800; letter-spacing: -0.025em;">${band.title}</h2>
          <p style="margin-top: 12px; font-size: 0.98rem; line-height: 1.68;">${band.text}</p>
        </div>
      </div>
      
      <div style="margin-top: 26px; padding-top: 24px; border-top: 1px solid rgba(28, 134, 238, 0.16);">
        <h3 style="font-size: 0.98rem; font-weight: 700;">Co z tym zrobić</h3>
        <p style="margin-top: 8px; font-size: 0.95rem; line-height: 1.68;">${band.advice}</p>
      </div>
    </div>
    
    ${isPhqCrisis ? `
      <div class="crisis-box">
        <h3 style="font-size: 1.15rem; font-weight: 800; letter-spacing: -0.02em; color: var(--color-orange-dark);">Jeśli myślisz o zrobieniu sobie krzywdy, zadzwoń teraz</h3>
        <p style="margin-top: 10px; font-size: 0.9375rem; line-height: 1.65;">Nie musisz z tym czekać na wizytę u kogokolwiek. Te numery są bezpłatne i działają całą dobę.</p>
        <div style="margin-top: 18px; display: flex; flex-wrap: wrap; gap: 12px;">
          <a href="tel:116123" class="crisis-card-btn">
            <span style="font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em; color: var(--color-text-main);">116 123</span>
            <span style="font-size: 0.78rem; color: var(--color-text-muted);">Kryzysowy Telefon Zaufania</span>
          </a>
          <a href="tel:800702222" class="crisis-card-btn">
            <span style="font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em; color: var(--color-text-main);">800 70 2222</span>
            <span style="font-size: 0.78rem; color: var(--color-text-muted);">Centrum Wsparcia, całodobowo</span>
          </a>
          <a href="tel:112" class="crisis-card-btn">
            <span style="font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em; color: var(--color-text-main);">112</span>
            <span style="font-size: 0.78rem; color: var(--color-text-muted);">Numer alarmowy</span>
          </a>
        </div>
      </div>
    ` : ''}
    
    <div style="margin-top: 22px; padding: 28px; border-radius: 18px; border: 1px solid var(--color-blue-border); background: var(--color-bg-card);">
      <h3 style="font-size: 1.15rem; font-weight: 800; letter-spacing: -0.02em;">Chcesz przegadać ten wynik?</h3>
      <p style="margin-top: 10px; font-size: 0.9375rem; line-height: 1.65; max-width: 56ch;">Liczba to dopiero początek. Na bezpłatnych 15 minutach powiem Ci, co ona oznacza w Twojej sytuacji i co ma sens jako następny krok.</p>
      <a href="https://calendly.com/kacperkulesza/15min" target="_blank" rel="noopener" class="btn-cta" style="margin-top: 18px; padding: 13px 22px; font-size: 0.95rem;">
        Zarezerwuj bezpłatne 15 minut
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13"></path><path d="M13 6l6 6-6 6"></path></svg>
      </a>
    </div>
    
    <div style="margin-top: 22px; display: flex; flex-wrap: wrap; gap: 12px;">
      <button onclick="startTest('${state.activeTest}')" class="btn-outline">Wypełnij ponownie</button>
      <button onclick="goHub()" class="btn-outline">Zrób inny test</button>
    </div>
    
    <p style="margin-top: 26px; font-size: 0.78rem; line-height: 1.6; color: var(--color-text-muted);">${t.source}</p>
  `;
}
