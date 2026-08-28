/**
 * Kacper Kulesza - Psycholog | Psychological Tests Engine
 * 4 Core Pillars: WHO-5 (Dobrostan), GAD-7 (Lęk), PHQ-9 (Depresja), ASRS (ADHD u dorosłych)
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

function pickOption(slot, value, isLast) {
  state.answers[slot] = value;
  
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
  const isLast = state.step === total - 1;
  const currentItem = t.items[state.step];
  
  const runnerContainer = document.getElementById('quiz-runner-content');
  if (!runnerContainer) return;
  
  const progressPct = Math.round((state.step / total) * 100);
  const slot = `${state.step}-v`;
  const val = state.answers[slot];
  
  let scalesHtml = '';
  if (t.scaleType === 'asrs') {
    scalesHtml = `
      <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;">
        ${t.options.map((opt, i) => {
          const scoreVal = i + 1;
          return `
            <button class="quiz-option-btn ${val === scoreVal ? 'selected' : ''}" onclick="pickOption('${slot}', ${scoreVal}, ${isLast})">
              <span class="quiz-option-mark">${val === scoreVal ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2"><path d="m5 12.5 5 5 9-10"></path></svg>' : ''}</span>
              <span style="font-size: 0.95rem; font-weight: 600; color: var(--color-text-main);">${opt}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  } else {
    scalesHtml = `
      <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;">
        ${t.options.map((opt, i) => `
          <button class="quiz-option-btn ${val === i ? 'selected' : ''}" onclick="pickOption('${slot}', ${i}, ${isLast})">
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
  const displayScore = Object.values(state.answers).reduce((a, b) => a + b, 0);
  const maxScore = state.activeTest === 'who5' ? 25 : (state.activeTest === 'asrs' ? 90 : (state.activeTest === 'gad7' ? 21 : 27));
  const band = BANDS[state.activeTest].find(b => displayScore <= b.max) || BANDS[state.activeTest][BANDS[state.activeTest].length - 1];
  
  const isCrisis = state.activeTest === 'phq9' && (state.answers['8-v'] > 0 || displayScore >= 20);
  
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
          <span style="margin-top: 3px; font-size: 0.78rem; font-weight: 600; opacity: 0.9;">na ${maxScore} pkt</span>
        </div>
        <div>
          <h2 style="font-size: 1.5rem; line-height: 1.25; font-weight: 800; letter-spacing: -0.02em;">${band.title}</h2>
          <p style="margin-top: 8px; font-size: 0.95rem; line-height: 1.55; color: var(--color-text-muted);">${band.text}</p>
        </div>
      </div>

      <!-- Action Buttons: Copy Result & Download PDF -->
      <div style="margin-top: 22px; padding-top: 18px; border-top: 1px solid rgba(28, 134, 238, 0.14); display: flex; flex-wrap: gap; gap: 10px; align-items: center;">
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
  const displayScore = Object.values(state.answers).reduce((a, b) => a + b, 0);
  const maxScore = state.activeTest === 'who5' ? 25 : (state.activeTest === 'asrs' ? 90 : (state.activeTest === 'gad7' ? 21 : 27));
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
  const displayScore = Object.values(state.answers).reduce((a, b) => a + b, 0);
  const maxScore = state.activeTest === 'who5' ? 25 : (state.activeTest === 'asrs' ? 90 : (state.activeTest === 'gad7' ? 21 : 27));
  const band = BANDS[state.activeTest].find(b => displayScore <= b.max) || BANDS[state.activeTest][BANDS[state.activeTest].length - 1];
  const dateStr = new Date().toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  
  let answersListHtml = '';
  t.items.forEach((item, idx) => {
    let questionTitle = item.replace(/^\d+\.\s*/, '');
    let chosenAnsText = '';
    
    if (t.scaleType === 'asrs') {
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
        @page { size: A4 portrait; margin: 0mm; }
        * { box-sizing: border-box; }
        html, body { 
          margin: 0; 
          padding: 0; 
          background: #FFF; 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; 
          color: #0F172A; 
          -webkit-print-color-adjust: exact; 
          print-color-adjust: exact; 
        }
        .page-wrapper { padding: 14mm 16mm; width: 100%; }
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
      <div class="page-wrapper">
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
            <span class="score-sub">na ${maxScore} pkt</span>
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
