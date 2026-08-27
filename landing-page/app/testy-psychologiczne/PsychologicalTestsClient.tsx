'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Brain,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  BarChart3,
  Calendar,
  Layers,
  Activity,
  Award,
  AlertCircle,
  Copy,
  Check,
  Compass,
  Zap,
} from 'lucide-react';
import { clsx } from 'clsx';
import {
  PSYCHOLOGICAL_TESTS,
  PsychologicalTest,
  ResultLevel,
  MultiDimensionResult,
} from './data';
import { trackEvent } from '@/lib/analytics';

const TEST_ICONS: Record<string, typeof Brain> = {
  'paraliz-decyzyjny': Compass,
  'poziom-stresu': Activity,
  'styl-decyzyjny': Layers,
  'zmeczenie-decyzyjne': Zap,
};

export default function PsychologicalTestsClient() {
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeTest = useMemo(() => {
    return PSYCHOLOGICAL_TESTS.find((t) => t.id === selectedTestId) || null;
  }, [selectedTestId]);

  const currentQuestion = useMemo(() => {
    if (!activeTest) return null;
    return activeTest.questions[currentQuestionIndex] || null;
  }, [activeTest, currentQuestionIndex]);

  const progressPercentage = useMemo(() => {
    if (!activeTest) return 0;
    const answeredCount = Object.keys(answers).length;
    return Math.round((answeredCount / activeTest.questions.length) * 100);
  }, [activeTest, answers]);

  const result = useMemo(() => {
    if (!activeTest || !isCompleted) return null;
    return activeTest.calculateResult(answers);
  }, [activeTest, isCompleted, answers]);

  const handleStartTest = (test: PsychologicalTest) => {
    setSelectedTestId(test.id);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCompleted(false);
    setCopied(false);
    trackEvent({
      action: 'start_psychological_test',
      category: 'PsychologicalTests',
      label: test.title,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCatalog = () => {
    setSelectedTestId(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (questionId: number, optionValue: number) => {
    const updatedAnswers = { ...answers, [questionId]: optionValue };
    setAnswers(updatedAnswers);

    if (activeTest) {
      if (currentQuestionIndex < activeTest.questions.length - 1) {
        // Subtle auto-advance for smooth UX
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
        }, 220);
      } else {
        // Last question completed
        setTimeout(() => {
          setIsCompleted(true);
          trackEvent({
            action: 'complete_psychological_test',
            category: 'PsychologicalTests',
            label: activeTest.title,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 250);
      }
    }
  };

  const handleRestartCurrentTest = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopySummary = () => {
    if (!activeTest || !result) return;
    let text = `Wynik testu psychologicznego: ${activeTest.title}\n`;
    if (result.level) {
      text += `Poziom: ${result.level.title} (${result.score}/${result.maxScore} pkt)\n`;
      text += `Podsumowanie: ${result.level.summary}\n\n`;
      text += `Kluczowe mechanizmy:\n${result.level.mechanisms.map((m) => `• ${m}`).join('\n')}\n\n`;
      text += `Rekomendacje:\n${result.level.recommendations.map((r) => `• ${r}`).join('\n')}\n`;
    } else if (result.dominantDimension) {
      text += `Dominujący styl: ${result.dominantDimension.title}\n`;
      text += `Podsumowanie: ${result.dominantDimension.summary}\n\n`;
      text += `Mocne strony:\n${result.dominantDimension.strengths.map((s) => `• ${s}`).join('\n')}\n\n`;
      text += `Wskazówka:\n${result.dominantDimension.tip}\n`;
    }
    text += `\nWykonano na: https://psychologkacper.pl/testy-psychologiczne`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Scroll smoothly when question index changes
  useEffect(() => {
    if (selectedTestId && !isCompleted) {
      const el = document.getElementById('test-question-container');
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < 100 || rect.bottom > window.innerHeight) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [currentQuestionIndex, selectedTestId, isCompleted]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* ── 1. CATALOG VIEW (NO ACTIVE TEST) ── */}
      {!activeTest && (
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-label justify-center inline-flex">
              Autodiagnoza i psychoedukacja
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#0F1923] tracking-tight">
              Testy i narzędzia psychologiczne
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Sprawdź swoje nawyki decyzyjne, poziom przeciążenia poznawczego oraz odporność na stres.
              Wszystkie narzędzia są oparte na sprawdzonych modelach psychologii poznawczej i decyzyjnej.
            </p>

            {/* Privacy & science strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs sm:text-sm text-[#4B5563]">
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F4] border border-[#E8E3DA] px-3 py-1.5 rounded-full shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#C9A85C]" />
                100% anonimowo (brak zapisu danych)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F4] border border-[#E8E3DA] px-3 py-1.5 rounded-full shadow-xs">
                <Brain className="w-4 h-4 text-[#C9A85C]" />
                Naukowe modele psychologiczne
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F4] border border-[#E8E3DA] px-3 py-1.5 rounded-full shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C9A85C]" />
                Natychmiastowa interpretacja
              </span>
            </div>
          </div>

          {/* Test Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {PSYCHOLOGICAL_TESTS.map((test) => {
              const IconComp = TEST_ICONS[test.id] || Brain;
              return (
                <div
                  key={test.id}
                  className="flex flex-col justify-between bg-white rounded-xl border border-[#E8E3DA] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#C9A85C]/60 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Meta row */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FAF8F4] text-[#C9A85C] border border-[#C9A85C]/20">
                        {test.tag}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#C9A85C]" />
                          {test.estimatedTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A85C]" />
                          {test.questionCount} pytań
                        </span>
                      </div>
                    </div>

                    {/* Title and icon */}
                    <div className="flex items-start gap-4 pt-1">
                      <div className="grid place-items-center w-12 h-12 rounded-xl bg-[#FAF8F4] border border-[#E8E3DA] group-hover:bg-[#0F1923] group-hover:text-white transition-colors shrink-0 text-[#0F1923]">
                        <IconComp className="w-6 h-6 text-[#C9A85C]" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0F1923] leading-snug group-hover:text-[#0F1923] transition-colors">
                          {test.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                      {test.description}
                    </p>

                    {/* Key benefits list */}
                    <div className="bg-[#FAF8F4] rounded-lg p-4 border border-[#E8E3DA]/80 space-y-2">
                      <p className="text-xs font-bold text-[#0F1923] uppercase tracking-wider">
                        Co sprawdzisz w teście:
                      </p>
                      <ul className="space-y-1.5">
                        {test.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B5563]">
                            <span className="text-[#C9A85C] font-bold mt-0.5">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-xs text-[#9CA3AF] italic">
                      {test.scientificBasis}
                    </p>
                  </div>

                  {/* Start CTA Button */}
                  <div className="pt-6 mt-4 border-t border-[#F0EDE7]">
                    <button
                      onClick={() => handleStartTest(test)}
                      className="w-full btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-[#0F1923] text-white hover:bg-[#1E2D3D] transition-all shadow-md group-hover:bg-[#C9A85C] group-hover:text-white cursor-pointer"
                    >
                      <span>Rozpocznij test</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Educational / Consultation Banner */}
          <div className="bg-gradient-to-br from-[#0F1923] via-[#1A2634] to-[#0F1923] text-white rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#C9A85C]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#C9A85C] tracking-wide uppercase font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Praca 1:1 z psychologiem
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Potrzebujesz ustrukturyzować myśli i podjąć trudną decyzję?
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  Testy są świetnym pierwszym krokiem do samopoznania. Jeśli jednak czujesz, że sam(a) kręcisz
                  się w kółko, zapraszam na bezpłatną 15-minutową rozmowę wstępną. W 60 minut uporządkujemy fakty
                  i wyznaczymy kolejny krok.
                </p>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <Link
                  href="/#booking"
                  className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C9A85C] text-white font-bold text-base rounded-lg hover:brightness-95 transition shadow-lg cursor-pointer text-center"
                >
                  <Calendar className="w-5 h-5" />
                  Umów bezpłatne 15 min →
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white hover:bg-white/15 border border-white/15 font-semibold text-sm rounded-lg transition cursor-pointer text-center"
                >
                  Skontaktuj się
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ section */}
          <div className="bg-white rounded-xl border border-[#E8E3DA] p-6 sm:p-10 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-[#F0EDE7] pb-4">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-[#FAF8F4] text-[#C9A85C] border border-[#E8E3DA]">
                <HelpCircle className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0F1923]">
                Często zadawane pytania o testy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <h3 className="font-semibold text-base text-[#0F1923]">
                  Czy te testy stanowią diagnozę kliniczną?
                </h3>
                <p className="text-[#4B5563] leading-relaxed">
                  Nie. Narzędzia prezentowane na tej stronie mają charakter samopoznawczy, przesiewowy i psychoedukacyjny.
                  Pozwalają nazwać i ustrukturyzować własne doświadczenia, ale nie zastępują pełnej diagnozy psychiatrycznej ani psychoterapii.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base text-[#0F1923]">
                  Gdzie są zapisywane moje odpowiedzi?
                </h3>
                <p className="text-[#4B5563] leading-relaxed">
                  Nigdzie. Wszystkie obliczenia i wyniki są generowane wyłącznie w Twojej przeglądarce (lokalnie).
                  Nie zbieramy Twoich odpowiedzi ani danych osobowych. Gwarantujemy 100% anonimowości.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base text-[#0F1923]">
                  Co mogę zrobić z otrzymanym wynikiem?
                </h3>
                <p className="text-[#4B5563] leading-relaxed">
                  Otrzymasz konkretne rekomendacje i omówienie psychologiczne. Możesz skopiować swoje podsumowanie
                  i odnieść się do niego podczas naszej bezpłatnej 15-minutowej konsultacji wstępnej.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base text-[#0F1923]">
                  Na czym polega analityczne podejście Kacpra Kuleszy?
                </h3>
                <p className="text-[#4B5563] leading-relaxed">
                  Jako magister psychologii pracujący na co dzień z danymi i logiką, łączę empatię z ustrukturyzowanym
                  procesem decyzyjnym. Nie oceniam – pomagam rozłożyć problem na czynniki pierwsze i oddzielić fakty od lęku.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. ACTIVE TEST VIEW (IN PROGRESS) ── */}
      {activeTest && !isCompleted && currentQuestion && (
        <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
          {/* Top navigation & progress header */}
          <div className="space-y-4">
            <button
              onClick={handleBackToCatalog}
              className="inline-flex items-center gap-2 text-sm text-[#4B5563] hover:text-[#0F1923] transition cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#C9A85C]" />
              Wróć do listy testów
            </button>

            <div className="bg-white rounded-xl border border-[#E8E3DA] p-5 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C9A85C] font-semibold">
                    {activeTest.shortTitle}
                  </span>
                  <h1 className="text-lg sm:text-xl font-bold font-serif text-[#0F1923]">
                    {activeTest.title}
                  </h1>
                </div>
                <span className="text-xs font-semibold bg-[#FAF8F4] border border-[#E8E3DA] px-3 py-1 rounded-full text-[#4B5563]">
                  Pytanie {currentQuestionIndex + 1} z {activeTest.questions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#FAF8F4] rounded-full h-2.5 overflow-hidden border border-[#E8E3DA]">
                <div
                  className="bg-[#C9A85C] h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${((currentQuestionIndex + 1) / activeTest.questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div
            id="test-question-container"
            className="bg-white rounded-2xl border border-[#E8E3DA] p-6 sm:p-10 shadow-lg space-y-8"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E3DA] text-xs font-semibold text-[#0F1923]">
                <HelpCircle className="w-3.5 h-3.5 text-[#C9A85C]" />
                Pytanie #{currentQuestionIndex + 1}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0F1923] leading-snug">
                {currentQuestion.text}
              </h2>
              {currentQuestion.context && (
                <p className="text-xs sm:text-sm text-[#6B7280] italic">
                  Wskazówka: {currentQuestion.context}
                </p>
              )}
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {activeTest.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelectOption(currentQuestion.id, option.value)}
                    className={clsx(
                      'w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer group',
                      isSelected
                        ? 'bg-[#0F1923] text-white border-[#0F1923] shadow-md'
                        : 'bg-[#FAF8F4] text-[#0F1923] border-[#E8E3DA] hover:bg-white hover:border-[#C9A85C] hover:shadow-xs'
                    )}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={clsx(
                          'w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors',
                          isSelected
                            ? 'border-[#C9A85C] bg-[#C9A85C] text-white'
                            : 'border-[#D1D5DB] bg-white group-hover:border-[#C9A85C]'
                        )}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-sm sm:text-base font-medium">
                        {option.label}
                      </span>
                    </div>

                    {option.description && (
                      <span
                        className={clsx(
                          'text-xs hidden sm:inline-block',
                          isSelected ? 'text-white/70' : 'text-[#6B7280]'
                        )}
                      >
                        {option.description}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Question Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#F0EDE7]">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                className={clsx(
                  'inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition cursor-pointer',
                  currentQuestionIndex === 0
                    ? 'opacity-30 cursor-not-allowed text-[#9CA3AF]'
                    : 'text-[#4B5563] hover:text-[#0F1923] hover:bg-[#FAF8F4]'
                )}
              >
                <ArrowLeft className="w-4 h-4" />
                Poprzednie
              </button>

              <button
                onClick={handleRestartCurrentTest}
                className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#0F1923] transition cursor-pointer"
                title="Zresetuj odpowiedzi w tym teście"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>

              {currentQuestionIndex < activeTest.questions.length - 1 ? (
                <button
                  disabled={answers[currentQuestion.id] === undefined}
                  onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  className={clsx(
                    'inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition shadow-xs cursor-pointer',
                    answers[currentQuestion.id] !== undefined
                      ? 'bg-[#0F1923] text-white hover:bg-[#1E2D3D]'
                      : 'opacity-40 cursor-not-allowed bg-[#E5E7EB] text-[#9CA3AF]'
                  )}
                >
                  Następne
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  disabled={answers[currentQuestion.id] === undefined}
                  onClick={() => setIsCompleted(true)}
                  className={clsx(
                    'inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-lg transition shadow-md cursor-pointer',
                    answers[currentQuestion.id] !== undefined
                      ? 'bg-[#C9A85C] text-white hover:brightness-95'
                      : 'opacity-40 cursor-not-allowed bg-[#E5E7EB] text-[#9CA3AF]'
                  )}
                >
                  Zobacz wyniki
                  <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── 3. RESULTS VIEW (COMPLETED TEST) ── */}
      {activeTest && isCompleted && result && (
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          {/* Top navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handleBackToCatalog}
              className="inline-flex items-center gap-2 text-sm text-[#4B5563] hover:text-[#0F1923] transition cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#C9A85C]" />
              Wróć do listy wszystkich testów
            </button>

            <button
              onClick={handleRestartCurrentTest}
              className="inline-flex items-center gap-2 text-sm text-[#4B5563] hover:text-[#0F1923] bg-white border border-[#E8E3DA] px-3.5 py-1.5 rounded-lg transition shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#C9A85C]" />
              Wykonaj ten test ponownie
            </button>
          </div>

          {/* Main Result Card */}
          <div className="bg-white rounded-2xl border border-[#E8E3DA] p-6 sm:p-10 shadow-xl space-y-8">
            {/* Header Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F0EDE7]">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E3DA] text-xs font-semibold text-[#C9A85C] uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Raport z testu psychologicznego
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#0F1923]">
                  {activeTest.title}
                </h1>
              </div>

              <button
                onClick={handleCopySummary}
                className="inline-flex items-center gap-2 self-start sm:self-center px-4 py-2 bg-[#FAF8F4] hover:bg-[#F0EDE7] border border-[#E8E3DA] text-xs font-semibold text-[#0F1923] rounded-lg transition shadow-xs cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    Skopiowano podsumowanie!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#C9A85C]" />
                    Kopiuj podsumowanie
                  </>
                )}
              </button>
            </div>

            {/* Score & Verdict Section */}
            {result.level && (
              <div className="space-y-6">
                <div
                  className={clsx(
                    'rounded-xl p-6 sm:p-8 border relative overflow-hidden',
                    result.level.badgeColor === 'emerald' && 'bg-emerald-50/60 border-emerald-200 text-emerald-950',
                    result.level.badgeColor === 'amber' && 'bg-amber-50/60 border-amber-200 text-amber-950',
                    result.level.badgeColor === 'rose' && 'bg-rose-50/60 border-rose-200 text-rose-950',
                    result.level.badgeColor === 'blue' && 'bg-blue-50/60 border-blue-200 text-blue-950'
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 shadow-xs">
                        <Award className="w-3.5 h-3.5 text-[#C9A85C]" />
                        {result.level.badge}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                        {result.level.title}
                      </h2>
                      <p className="text-sm sm:text-base opacity-90 leading-relaxed max-w-2xl">
                        {result.level.summary}
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-black/5 shadow-sm shrink-0 min-w-[130px]">
                      <span className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold">
                        Twój wynik
                      </span>
                      <span className="text-3xl sm:text-4xl font-bold text-[#0F1923] font-serif">
                        {result.score}
                        <span className="text-base font-normal text-[#6B7280]">
                          /{result.maxScore}
                        </span>
                      </span>
                      <span className="text-xs text-[#6B7280] mt-1 font-medium">
                        {result.percentage}% skali
                      </span>
                    </div>
                  </div>

                  {/* Visual gauge bar */}
                  <div className="mt-6 w-full bg-white/80 rounded-full h-3 overflow-hidden border border-black/5">
                    <div
                      className={clsx(
                        'h-full transition-all duration-500 rounded-full',
                        result.level.badgeColor === 'emerald' && 'bg-emerald-500',
                        result.level.badgeColor === 'amber' && 'bg-amber-500',
                        result.level.badgeColor === 'rose' && 'bg-rose-500',
                        result.level.badgeColor === 'blue' && 'bg-blue-500'
                      )}
                      style={{ width: `${Math.max(5, result.percentage)}%` }}
                    />
                  </div>
                </div>

                {/* In-depth Analysis Section */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0F1923] flex items-center gap-2">
                    <Brain className="w-5 h-5 text-[#C9A85C]" />
                    Co ten wynik oznacza w praktyce?
                  </h3>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed bg-[#FAF8F4] p-5 sm:p-6 rounded-xl border border-[#E8E3DA]">
                    {result.level.description}
                  </p>
                </div>

                {/* Mechanisms & Recommendations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Mechanisms */}
                  <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#E8E3DA] shadow-xs space-y-3">
                    <div className="flex items-center gap-2 text-[#0F1923] font-bold text-sm sm:text-base">
                      <Activity className="w-4.5 h-4.5 text-[#C9A85C]" />
                      Twoje kluczowe schematy:
                    </div>
                    <ul className="space-y-2">
                      {result.level.mechanisms.map((mech, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B5563]">
                          <span className="text-[#C9A85C] font-bold mt-0.5">•</span>
                          <span>{mech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#E8E3DA] shadow-xs space-y-3">
                    <div className="flex items-center gap-2 text-[#0F1923] font-bold text-sm sm:text-base">
                      <Sparkles className="w-4.5 h-4.5 text-[#C9A85C]" />
                      Rekomendowane kroki działania:
                    </div>
                    <ul className="space-y-2">
                      {result.level.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B5563]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Multi-dimensional Result (for GDMS Style Test) */}
            {activeTest.isMultiDimensional && result.dimensionResults && result.dominantDimension && (
              <div className="space-y-8">
                {/* Dominant Style Banner */}
                <div className="bg-gradient-to-br from-[#0F1923] to-[#1E2D3D] text-white rounded-xl p-6 sm:p-8 border border-[#C9A85C]/30 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A85C]/15 blur-3xl pointer-events-none" />
                  <div className="relative z-10 space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#C9A85C] uppercase tracking-wider">
                      <Compass className="w-3.5 h-3.5" />
                      Twój dominujący styl podejmowania decyzji
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                      {result.dominantDimension.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl">
                      {result.dominantDimension.summary}
                    </p>
                  </div>
                </div>

                {/* Breakdown of all 5 dimensions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold font-serif text-[#0F1923] flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#C9A85C]" />
                    Profil wszystkich stylów decyzyjnych:
                  </h3>
                  <div className="space-y-3">
                    {result.dimensionResults.map((dim) => {
                      const isDominant = dim.dimension === result.dominantDimension?.dimension;
                      const dimPercentage = Math.round((dim.score / dim.maxScore) * 100);
                      return (
                        <div
                          key={dim.dimension}
                          className={clsx(
                            'p-4 rounded-xl border transition-all',
                            isDominant
                              ? 'bg-white border-[#C9A85C] shadow-md ring-1 ring-[#C9A85C]/40'
                              : 'bg-[#FAF8F4] border-[#E8E3DA]'
                          )}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm sm:text-base text-[#0F1923]">
                                {dim.title}
                              </span>
                              {isDominant && (
                                <span className="text-[10px] uppercase tracking-wider font-bold bg-[#C9A85C] text-white px-2 py-0.5 rounded-full">
                                  Dominujący
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-bold text-[#0F1923]">
                              {dim.score} / {dim.maxScore} pkt
                            </span>
                          </div>

                          <div className="w-full bg-[#E5E7EB] rounded-full h-2 overflow-hidden mb-2">
                            <div
                              className={clsx(
                                'h-full rounded-full transition-all duration-500',
                                isDominant ? 'bg-[#C9A85C]' : 'bg-[#0F1923]'
                              )}
                              style={{ width: `${dimPercentage}%` }}
                            />
                          </div>

                          <p className="text-xs text-[#6B7280]">{dim.summary}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Deep dive into dominant style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#E8E3DA] shadow-xs space-y-3">
                    <h4 className="font-bold text-sm sm:text-base text-emerald-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Twoje mocne strony:
                    </h4>
                    <ul className="space-y-1.5">
                      {result.dominantDimension.strengths.map((str, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B5563]">
                          <span className="text-emerald-600 font-bold mt-0.5">•</span>
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#E8E3DA] shadow-xs space-y-3">
                    <h4 className="font-bold text-sm sm:text-base text-rose-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600" />
                      Potencjalne pułapki myślowe:
                    </h4>
                    <ul className="space-y-1.5">
                      {result.dominantDimension.risks.map((risk, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B5563]">
                          <span className="text-rose-600 font-bold mt-0.5">•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actionable tip */}
                <div className="bg-[#FAF8F4] p-5 sm:p-6 rounded-xl border border-[#C9A85C]/40 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C9A85C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0F1923] mb-1">
                      Kluczowa wskazówka dla Twojego profilu:
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {result.dominantDimension.tip}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action Box — Consultation with Kacper Kulesza */}
            <div className="bg-gradient-to-br from-[#0F1923] via-[#1A2634] to-[#0F1923] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden border border-[#C9A85C]/30 mt-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A85C]/15 blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#C9A85C] tracking-wide uppercase font-semibold">
                  <Brain className="w-3.5 h-3.5" />
                  Kolejny krok w praktyce
                </div>

                <div className="space-y-2 max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
                    Chcesz omówić ten wynik i znaleźć wyjście ze swojej sytuacji?
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Test daje wstępny zarys, ale to w ustrukturyzowanej rozmowie 1:1 możemy precyzyjnie nazwać
                    Twoją blokadę decyzyjną i zbudować konkretny, 3-krokowy plan działania.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/#booking"
                    onClick={() => {
                      trackEvent({
                        action: 'cta_test_result_booking_click',
                        category: 'PsychologicalTests',
                        label: activeTest.title,
                      });
                    }}
                    className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C9A85C] text-white font-bold text-base rounded-lg hover:brightness-95 transition shadow-lg cursor-pointer text-center"
                  >
                    <Calendar className="w-5 h-5" />
                    Umów bezpłatne 15 minut →
                  </Link>

                  <button
                    onClick={handleBackToCatalog}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm rounded-lg transition cursor-pointer text-center"
                  >
                    Wykonaj inny test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
