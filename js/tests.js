/**
 * Kacper Kulesza - Psycholog | Psychological Tests Runner Engine
 * Handles quiz progression, user input, score calculation, and PDF export.
 */

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
  if (hash && typeof TESTS !== 'undefined' && TESTS[hash]) {
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
  if (!hubContainer || typeof TESTS === 'undefined') return;
  
  hubContainer.innerHTML = Object.keys(TESTS).map(key => {
    const t = TESTS[key];
    return `
      <div class="test-hub-card" onclick="openTest('${key}')">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%;">
          <div class="glyph-circle">${(typeof GLYPHS !== 'undefined' && GLYPHS[key]) || ''}</div>
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
