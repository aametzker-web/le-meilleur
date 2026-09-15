import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="
        relative mx-auto w-full min-w-0 max-w-5xl
        overflow-hidden
        border-t border-brand-lavender-300/10
        px-4 py-8
        sm:px-6 sm:py-10
      "
    >
      {/* Ambient light */}
      <div
        className="
          pointer-events-none absolute
          right-1/4 top-1/3
          -z-10
          h-[180px] w-[220px]
          opacity-10
          radial-glow-lavender
          sm:h-[240px] sm:w-[360px]
        "
      />

      {/* Header */}
      <div className="relative mb-5 sm:mb-6">
        <div className="mb-2.5 flex items-center">
          <span className="mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-lavender-400" />

          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-brand-lavender-400 sm:text-[9px]">
            // {t.process.badge}
          </span>
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display break-words text-xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-2xl md:text-3xl">
            {t.process.title}
          </h2>

          <p className="mt-2 max-w-lg text-[11px] font-light leading-relaxed text-brand-lavender-300/65 sm:text-xs">
            {t.process.subtitle}
          </p>
        </div>

        <div className="absolute bottom-0 right-0 hidden items-center gap-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/15 sm:flex">
          <span>Simple by design</span>
          <span className="h-px w-6 bg-white/10" />
          <span>003</span>
        </div>
      </div>

      {/* Single Process Block */}
      <div
        className="
          relative w-full min-w-0
          overflow-hidden
          rounded-[1.25rem]
          liquid-glass-card
        "
      >
        {/* Inner glow */}
        <div
          className="
            pointer-events-none absolute
            -right-24 -top-24
            h-48 w-48
            rounded-full
            bg-brand-violet/10
            blur-3xl
          "
        />

        <div className="relative divide-y divide-brand-lavender-300/10">
          {t.process.steps.map((step, idx) => (
            <div
              key={step.num}
              className="
                group flex w-full min-w-0
                items-start gap-4
                px-4 py-4
                sm:gap-6 sm:px-6 sm:py-5
              "
            >
              {/* Number */}
              <div className="w-8 flex-shrink-0 pt-0.5 sm:w-10">
                <span className="font-mono text-[9px] font-bold tracking-wider text-brand-lavender-400 sm:text-[10px]">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="break-words font-display text-sm font-bold leading-tight tracking-wide text-white sm:text-[15px]">
                  {step.name}
                </h3>

                <p className="mt-1.5 max-w-2xl break-words text-[10px] font-light leading-[1.55] text-brand-lavender-200/60 sm:text-[11px]">
                  {step.description}
                </p>
              </div>

              {/* Index */}
              <div className="hidden flex-shrink-0 pt-1 sm:block">
                <span className="font-mono text-[7px] tracking-[0.18em] text-white/15">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="flex items-center justify-between border-t border-brand-lavender-300/10 px-4 py-3 sm:px-6">
          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/15">
            From idea to finished work
          </span>

          <span className="text-[10px] text-brand-lavender-300/40">
            ✦
          </span>
        </div>
      </div>

      {/* Human note */}
      <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-[10px] leading-relaxed text-white/25 sm:text-[11px]">
          Good work doesn't need to be complicated. We keep the process clear,
          talk things through and adjust when needed.
        </p>

        <span className="whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.18em] text-white/12">
          Work in progress
        </span>
      </div>
    </section>
  );
};