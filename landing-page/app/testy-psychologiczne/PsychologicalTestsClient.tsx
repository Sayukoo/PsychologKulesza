'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Calendar,
  Copy,
  Check,
  Info,
  X,
  ShieldCheck,
} from 'lucide-react';
import { clsx } from 'clsx';
import {
  PSYCHOLOGICAL_TESTS,
  PsychologicalTest,
} from './data';
import { trackEvent } from '@/lib/analytics';

// ── CUSTOM MINIMALIST VECTOR SVG ICONS ─────────────────────────────────

function DecisionParalysisIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central decision node */}
      <circle cx="16" cy="16" r="3.5" fill="#C9A85C" />
      <circle cx="16" cy="16" r="7.5" stroke="#C9A85C" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.8" />
      {/* Diverging directional paths */}
      <path d="M16 8.5V4M16 4L13 7M16 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 23.5V28M16 28L13 25M16 28L19 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 16H4M4 16L7 13M4 16L7 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23.5 16H28M28 16L25 13M28 16L25 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Subtle analytical quadrants */}
      <circle cx="8" cy="8" r="1.5" fill="#C9A85C" opacity="0.5" />
      <circle cx="24" cy="8" r="1.5" fill="#C9A85C" opacity="0.5" />
      <circle cx="8" cy="24" r="1.5" fill="#C9A85C" opacity="0.5" />
      <circle cx="24" cy="24" r="1.5" fill="#C9A85C" opacity="0.5" />
    </svg>
  );
}

function StressLevelIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Waveform / Stress balance pulse */}
      <path
        d="M3 16H8L11 9L15 23L19 12L22 18L24 16H29"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Upper & Lower equilibrium thresholds */}
      <line x1="6" y1="7" x2="26" y2="7" stroke="#C9A85C" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
      <line x1="6" y1="25" x2="26" y2="25" stroke="#C9A85C" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
      {/* Peak indicators */}
      <circle cx="15" cy="23" r="2" fill="#C9A85C" />
      <circle cx="11" cy="9" r="2" fill="#C9A85C" />
    </svg>
  );
}

function DecisionStyleIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 5-point radar polygon / GDMS multidimensional prism */}
      <polygon
        points="16,4 27.5,12.5 23,26.5 9,26.5 4.5,12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Internal style coordinates connecting to center */}
      <line x1="16" y1="16" x2="16" y2="4" stroke="#C9A85C" strokeWidth="1.2" />
      <line x1="16" y1="16" x2="27.5" y2="12.5" stroke="#C9A85C" strokeWidth="1.2" />
      <line x1="16" y1="16" x2="23" y2="26.5" stroke="#C9A85C" strokeWidth="1.2" />
      <line x1="16" y1="16" x2="9" y2="26.5" stroke="#C9A85C" strokeWidth="1.2" />
      <line x1="16" y1="16" x2="4.5" y2="12.5" stroke="#C9A85C" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="2.5" fill="#C9A85C" />
      <circle cx="16" cy="4" r="1.5" fill="currentColor" />
      <circle cx="27.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="23" cy="26.5" r="1.5" fill="currentColor" />
      <circle cx="9" cy="26.5" r="1.5" fill="currentColor" />
      <circle cx="4.5" cy="12.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CognitiveFatigueIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cognitive battery / Focus meter container */}
      <rect x="5" y="9" width="20" height="14" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M27 13.5V18.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Energy level indicators */}
      <rect x="8" y="12" width="3.5" height="8" rx="1" fill="#C9A85C" />
      <rect x="13" y="12" width="3.5" height="8" rx="1" fill="#C9A85C" />
      <rect x="18" y="12" width="3.5" height="8" rx="1" fill="#C9A85C" opacity="0.3" />
      {/* Neural discharge */}
      <path d="M10 4L16 7L13 9" stroke="#C9A85C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="5" r="1" fill="#C9A85C" opacity="0.7" />
    </svg>
  );
}

const CUSTOM_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'paraliz-decyzyjny': DecisionParalysisIcon,
  'poziom-stresu': StressLevelIcon,
  'styl-decyzyjny': DecisionStyleIcon,
  'zmeczenie-decyzyjne': CognitiveFatigueIcon,
};

// ── MINIMALIST INFO TOOLTIP & MOBILE DRAWER ───────────────────────────

interface TestTooltipProps {
  test: PsychologicalTest;
  isHovered: boolean;
  onOpenDrawer: (test: PsychologicalTest) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function TestInfoButton({
  test,
  isHovered,
  onOpenDrawer,
  onMouseEnter,
  onMouseLeave,
}: TestTooltipProps) {
  return (
    <div
      className="relative inline-flex items-center"
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        onClick={() => onOpenDrawer(test)}
        className={clsx(
          'w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-hidden',
          isHovered
            ? 'bg-[#0F1923] text-[#C9A85C]'
            : 'text-[#9CA3AF] hover:text-[#0F1923] hover:bg-[#F0EDE7]'
        )}
        aria-label={`Informacje o teście: ${test.title}`}
        title="Pokaż szczegóły testu"
      >
        <Info className="w-4 h-4" strokeWidth={2} />
      </button>

      {/* Desktop Popover (sm: and up) */}
      {isHovered && (
        <div className="hidden sm:block absolute right-0 top-9 w-[340px] md:w-[380px] z-50 p-5 rounded-2xl bg-[#0F1923] text-white shadow-2xl border border-white/10 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 pointer-events-none">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A85C]">
                {test.tag}
              </span>
              <h4 className="text-sm font-bold font-serif text-white mt-0.5 leading-snug">
                {test.title}
              </h4>
            </div>
          </div>

          {/* Body */}
          <div className="py-3 space-y-3 text-xs leading-relaxed text-white/80">
            <p>{test.description}</p>

            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">
                Co bada kwestionariusz:
              </span>
              <ul className="space-y-1">
                {test.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-white/70">
                    <span className="text-[#C9A85C] font-bold mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-white/50 italic">
              {test.scientificBasis}
            </div>
          </div>

          {/* Footer badge */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#C9A85C]" />
              100% anonimowy
            </span>
            <span className="text-[#C9A85C] font-medium">
              {test.estimatedTime} • {test.questionCount} pytań
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── MAIN CLIENT COMPONENT ──────────────────────────────────────────────

export default function PsychologicalTestsClient() {
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Tooltip & Drawer state
  const [hoveredTooltipTestId, setHoveredTooltipTestId] = useState<string | null>(null);
  const [activeDrawerTest, setActiveDrawerTest] = useState<PsychologicalTest | null>(null);

  const activeTest = useMemo(() => {
    return PSYCHOLOGICAL_TESTS.find((t) => t.id === selectedTestId) || null;
  }, [selectedTestId]);

  const currentQuestion = useMemo(() => {
    if (!activeTest) return null;
    return activeTest.questions[currentQuestionIndex] || null;
  }, [activeTest, currentQuestionIndex]);

  const result = useMemo(() => {
    if (!activeTest || !isCompleted) return null;
    return activeTest.calculateResult(answers);
  }, [activeTest, isCompleted, answers]);

  const handleStartTest = (test: PsychologicalTest) => {
    setActiveDrawerTest(null);
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
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
        }, 180);
      } else {
        setTimeout(() => {
          setIsCompleted(true);
          trackEvent({
            action: 'complete_psychological_test',
            category: 'PsychologicalTests',
            label: activeTest.title,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 220);
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

  // Smooth scroll helper
  useEffect(() => {
    if (selectedTestId && !isCompleted) {
      const el = document.getElementById('test-question-box');
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < 80 || rect.bottom > window.innerHeight) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [currentQuestionIndex, selectedTestId, isCompleted]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* ── 1. ULTRA-MINIMALIST CATALOG VIEW ── */}
      {!activeTest && (
        <div className="space-y-12 animate-in fade-in duration-300">
          {/* Header — Clean & Restrained */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="section-label justify-center inline-flex">
              Autodiagnoza
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#0F1923] tracking-tight">
              Testy psychologiczne
            </h1>
            <p className="text-sm sm:text-base text-[#6B7280]">
              Zwięzłe narzędzia przesiewowe oparte na modelach psychologii poznawczej. Wybierz obszar, który chcesz zbadać:
            </p>
          </div>

          {/* 4 Clean Minimalist Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {PSYCHOLOGICAL_TESTS.map((test) => {
              const CustomIcon = CUSTOM_ICONS[test.id] || DecisionParalysisIcon;
              const isCardElevated = hoveredTooltipTestId === test.id;

              return (
                <div
                  key={test.id}
                  onClick={() => handleStartTest(test)}
                  className={clsx(
                    'group relative bg-white rounded-2xl border p-6 transition-all duration-200 hover:border-[#C9A85C] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between',
                    isCardElevated
                      ? 'z-40 border-[#C9A85C] shadow-md'
                      : 'z-10 border-[#E8E3DA]'
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Minimalist SVG Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F4] border border-[#E8E3DA] flex items-center justify-center text-[#0F1923] group-hover:bg-[#0F1923] group-hover:text-white transition-colors shrink-0">
                      <CustomIcon className="w-6 h-6" />
                    </div>

                    {/* Tooltip button & Desktop popover */}
                    <TestInfoButton
                      test={test}
                      isHovered={hoveredTooltipTestId === test.id}
                      onOpenDrawer={(t) => setActiveDrawerTest(t)}
                      onMouseEnter={() => setHoveredTooltipTestId(test.id)}
                      onMouseLeave={() => setHoveredTooltipTestId(null)}
                    />
                  </div>

                  {/* Main Clean Title & Short metadata */}
                  <div className="pt-6 pb-2 space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold font-serif text-[#0F1923] group-hover:text-[#C9A85C] transition-colors leading-snug">
                      {test.shortTitle}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                      <span>{test.estimatedTime}</span>
                      <span>•</span>
                      <span>{test.questionCount} pytań</span>
                    </div>
                  </div>

                  {/* Minimalist Action Prompt */}
                  <div className="pt-4 border-t border-[#FAF8F4] flex items-center justify-between text-xs font-semibold text-[#0F1923] group-hover:text-[#C9A85C] transition-colors">
                    <span>Rozpocznij</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Minimalist Trust & Consultation Strip */}
          <div className="border border-[#E8E3DA] rounded-2xl p-6 sm:p-8 bg-[#FAF8F4] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold font-serif text-[#0F1923]">
                Chcesz omówić swoje wątpliwości z psychologiem?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280]">
                15-minutowa bezpłatna konsultacja wstępna online. Bez oceniania i 100% poufnie.
              </p>
            </div>
            <Link
              href="/#booking"
              className="shrink-0 btn-shine inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F1923] text-white hover:bg-[#C9A85C] text-xs sm:text-sm font-semibold transition shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              Umów bezpłatne 15 min →
            </Link>
          </div>
        </div>
      )}

      {/* ── MOBILE BOTTOM SHEET DRAWER ── */}
      {activeDrawerTest && (
        <div className="sm:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
            onClick={() => setActiveDrawerTest(null)}
          />

          {/* Drawer content sliding from bottom */}
          <div
            className="relative z-10 bg-[#0F1923] text-white rounded-t-3xl border-t border-[#C9A85C]/30 p-6 pb-8 shadow-2xl max-h-[82vh] overflow-y-auto animate-in slide-in-from-bottom duration-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grab Handle */}
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-2" />

            {/* Header */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A85C]">
                  {activeDrawerTest.tag}
                </span>
                <h3 className="text-lg font-bold font-serif text-white mt-0.5 leading-snug">
                  {activeDrawerTest.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveDrawerTest(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer shrink-0"
                aria-label="Zamknij"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 text-xs leading-relaxed text-white/80">
              <p>{activeDrawerTest.description}</p>

              <div className="space-y-2 pt-1 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                  Co bada kwestionariusz:
                </span>
                <ul className="space-y-1.5">
                  {activeDrawerTest.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/70">
                      <span className="text-[#C9A85C] font-bold mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[11px] text-white/50 italic pt-1">
                {activeDrawerTest.scientificBasis}
              </p>
            </div>

            {/* Action CTA & Badge */}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A85C]" />
                  100% anonimowy
                </span>
                <span className="text-[#C9A85C] font-medium">
                  {activeDrawerTest.estimatedTime} • {activeDrawerTest.questionCount} pytań
                </span>
              </div>

              <button
                onClick={() => handleStartTest(activeDrawerTest)}
                className="w-full btn-shine flex items-center justify-center gap-2 py-3.5 px-4 bg-[#C9A85C] text-[#0F1923] font-bold text-sm rounded-xl transition shadow-lg cursor-pointer"
              >
                <span>Rozpocznij ten test</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. MINIMALIST QUESTION FLOW ── */}
      {activeTest && !isCompleted && currentQuestion && (
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToCatalog}
              className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#0F1923] transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Wróć do listy testów
            </button>

            <span className="text-xs text-[#9CA3AF] font-medium">
              {currentQuestionIndex + 1} / {activeTest.questions.length}
            </span>
          </div>

          {/* Clean Progress Line */}
          <div className="w-full bg-[#E8E3DA] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#C9A85C] h-full transition-all duration-300 rounded-full"
              style={{
                width: `${((currentQuestionIndex + 1) / activeTest.questions.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Card */}
          <div
            id="test-question-box"
            className="bg-white rounded-2xl border border-[#E8E3DA] p-6 sm:p-10 shadow-sm space-y-8"
          >
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-[#C9A85C] font-semibold">
                {activeTest.shortTitle}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0F1923] leading-relaxed">
                {currentQuestion.text}
              </h2>
              {currentQuestion.context && (
                <p className="text-xs text-[#9CA3AF] italic">
                  {currentQuestion.context}
                </p>
              )}
            </div>

            {/* Answer Options */}
            <div className="space-y-2.5">
              {activeTest.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelectOption(currentQuestion.id, option.value)}
                    className={clsx(
                      'w-full text-left px-5 py-4 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer group',
                      isSelected
                        ? 'bg-[#0F1923] text-white border-[#0F1923] shadow-xs'
                        : 'bg-[#FAF8F4] text-[#0F1923] border-[#E8E3DA] hover:bg-white hover:border-[#C9A85C]'
                    )}
                  >
                    <span className="text-sm sm:text-base font-medium">
                      {option.label}
                    </span>
                    <div
                      className={clsx(
                        'w-5 h-5 rounded-full border flex items-center justify-center transition-colors',
                        isSelected
                          ? 'border-[#C9A85C] bg-[#C9A85C] text-white'
                          : 'border-[#D1D5DB] group-hover:border-[#C9A85C]'
                      )}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#FAF8F4]">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                className={clsx(
                  'text-xs font-medium inline-flex items-center gap-1 transition cursor-pointer',
                  currentQuestionIndex === 0
                    ? 'opacity-20 cursor-not-allowed text-[#9CA3AF]'
                    : 'text-[#6B7280] hover:text-[#0F1923]'
                )}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Poprzednie
              </button>

              <button
                onClick={handleRestartCurrentTest}
                className="text-[11px] text-[#9CA3AF] hover:text-[#0F1923] transition cursor-pointer inline-flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 3. CLEAN RESULT SUMMARY ── */}
      {activeTest && isCompleted && result && (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
          {/* Nav */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToCatalog}
              className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#0F1923] transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Wróć do testów
            </button>

            <button
              onClick={handleRestartCurrentTest}
              className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#0F1923] transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Wykonaj ponownie
            </button>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl border border-[#E8E3DA] p-6 sm:p-10 shadow-md space-y-8">
            {/* Header with Title & Copy Button */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#F0EDE7]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#C9A85C] font-semibold">
                  Podsumowanie wyniku
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#0F1923]">
                  {activeTest.title}
                </h1>
              </div>

              <button
                onClick={handleCopySummary}
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FAF8F4] hover:bg-[#F0EDE7] border border-[#E8E3DA] text-xs font-semibold text-[#0F1923] transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Skopiowano
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#C9A85C]" />
                    Kopiuj
                  </>
                )}
              </button>
            </div>

            {/* Standard Level Result */}
            {result.level && (
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-[#FAF8F4] border border-[#E8E3DA] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold">
                        Twój poziom
                      </span>
                      <h2 className="text-xl font-bold font-serif text-[#0F1923]">
                        {result.level.title}
                      </h2>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold font-serif text-[#0F1923]">
                        {result.score}
                        <span className="text-xs font-normal text-[#6B7280]">
                          /{result.maxScore}
                        </span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {result.level.summary}
                  </p>

                  <div className="w-full bg-[#E8E3DA] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#C9A85C] h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(8, result.percentage)}%` }}
                    />
                  </div>
                </div>

                {/* Practical takeaways */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-[#E8E3DA] bg-white space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F1923]">
                      Kluczowe mechanizmy
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#4B5563]">
                      {result.level.mechanisms.map((m, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#C9A85C] font-bold">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl border border-[#E8E3DA] bg-white space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F1923]">
                      Rekomendowany krok
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#4B5563]">
                      {result.level.recommendations.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Multidimensional Result (GDMS) */}
            {activeTest.isMultiDimensional && result.dominantDimension && (
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-[#0F1923] text-white space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A85C]">
                    Dominujący styl decyzyjny
                  </span>
                  <h2 className="text-2xl font-bold font-serif text-white">
                    {result.dominantDimension.title}
                  </h2>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {result.dominantDimension.summary}
                  </p>
                </div>

                {result.dimensionResults && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F1923]">
                      Profil pozostałych stylów:
                    </h3>
                    <div className="space-y-2">
                      {result.dimensionResults.map((dim) => {
                        const isDominant = dim.dimension === result.dominantDimension?.dimension;
                        return (
                          <div
                            key={dim.dimension}
                            className="p-3.5 rounded-xl border border-[#E8E3DA] bg-[#FAF8F4] flex items-center justify-between text-xs"
                          >
                            <span className={clsx('font-medium', isDominant ? 'font-bold text-[#0F1923]' : 'text-[#6B7280]')}>
                              {dim.title} {isDominant && '(Dominujący)'}
                            </span>
                            <span className="font-semibold text-[#0F1923]">
                              {dim.score} / {dim.maxScore} pkt
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Consultation CTA */}
            <div className="border border-[#E8E3DA] rounded-xl p-6 bg-[#FAF8F4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-sm sm:text-base font-bold font-serif text-[#0F1923]">
                  Chcesz omówić ten wynik podczas bezpłatnej rozmowy?
                </h3>
                <p className="text-xs text-[#6B7280]">
                  W 15 minut przeanalizujemy Twoją sytuację i wyznaczymy kolejny logiczny krok.
                </p>
              </div>
              <Link
                href="/#booking"
                onClick={() => {
                  trackEvent({
                    action: 'cta_test_result_booking_click',
                    category: 'PsychologicalTests',
                    label: activeTest.title,
                  });
                }}
                className="shrink-0 btn-shine inline-flex items-center gap-1.5 px-5 py-3 rounded-lg bg-[#0F1923] hover:bg-[#C9A85C] text-white text-xs font-semibold transition shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                Umów bezpłatne 15 min →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
