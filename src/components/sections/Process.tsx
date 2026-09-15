import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Compass,
  Lightbulb,
  Code2,
  Rocket,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  const processIcons = [Compass, Lightbulb, Code2, Rocket, Sparkles];

  return (
    <section
      id="process"
      className="scroll-mt-24 py-10 sm:py-14 px-4 sm:px-6 max-w-5xl mx-auto border-t border-brand-lavender-300/10 relative w-full min-w-0 overflow-hidden"
    >
      {/* Ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[240px] sm:w-[420px] h-[200px] sm:h-[280px] radial-glow-lavender opacity-15 pointer-events-none -z-10" />

      {/* Header */}
      <div className="relative mb-8 sm:mb-10">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-400 flex-shrink-0" />

            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-brand-lavender-400">
              // {t.process.badge}
            </span>
          </div>

          <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            LM / 003
          </span>
        </div>

        <div className="max-w-3xl">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight break-words leading-[1.05]">
            {t.process.title}
          </h2>

          <p className="text-xs sm:text-sm text-brand-lavender-300/70 max-w-xl font-light leading-relaxed mt-3">
            {t.process.subtitle}
          </p>
        </div>

        {/* Editorial detail */}
        <div className="hidden sm:flex absolute right-0 bottom-0 items-center gap-2 font-mono text-[8px] text-white/20 uppercase tracking-[0.2em]">
          <span>Simple by design</span>
          <span className="w-8 h-px bg-white/10" />
          <span>003</span>
        </div>
      </div>

      {/* Process Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full min-w-0">
        {t.process.steps.map((step, idx) => {
          const StepIcon = processIcons[idx % processIcons.length];

          return (
            <div
              key={step.num}
              className="group relative w-full min-w-0 p-5 sm:p-5 rounded-[1.5rem] liquid-glass-card flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle number in corner */}
              <span className="absolute top-4 right-5 font-mono text-[8px] tracking-[0.2em] text-white/15">
                0{idx + 1}
              </span>

              {/* Tiny glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-brand-violet/10 blur-3xl pointer-events-none" />

              <div className="relative min-w-0">
                {/* Top row */}
                <div className="flex items-center justify-between pb-3.5 border-b border-brand-lavender-300/10">
                  <span className="font-mono text-[10px] font-bold text-brand-lavender-400">
                    {step.num}
                  </span>

                  <div className="w-7 h-7 rounded-lg liquid-glass flex-shrink-0 flex items-center justify-center text-brand-lavender-300">
                    <StepIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Step name */}
                <h3 className="mt-4 font-display font-bold text-base text-white tracking-wide break-words leading-tight">
                  {step.name}
                </h3>

                {/* Step description */}
                <p className="mt-2 text-[11px] text-brand-lavender-200/70 leading-relaxed font-light break-words">
                  {step.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="relative mt-6 pt-3.5 border-t border-brand-lavender-300/10 flex items-center justify-between gap-2">
                <span className="font-mono text-[8px] text-brand-lavender-400/50 uppercase tracking-[0.15em]">
                  0{idx + 1}
                </span>

                {idx < t.process.steps.length - 1 ? (
                  <ArrowRight className="w-3 h-3 text-white/20" />
                ) : (
                  <Sparkles className="w-3 h-3 text-brand-lavender-400/40" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Human note */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-[11px] sm:text-xs text-white/30 leading-relaxed max-w-lg">
          Good work doesn't need to be complicated. We keep the process clear,
          talk things through and adjust when needed.
        </p>

        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15 whitespace-nowrap">
          Work in progress
        </span>
      </div>
    </section>
  );
};