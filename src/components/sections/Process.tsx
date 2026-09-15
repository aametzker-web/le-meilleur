import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Compass,
  Lightbulb,
  Code2,
  Rocket,
  Sparkles,
} from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  const processIcons = [Compass, Lightbulb, Code2, Rocket, Sparkles];

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
      <div className="relative mb-6 sm:mb-8">
        <div className="mb-3 flex items-center">
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

        {/* Editorial detail */}
        <div className="absolute bottom-0 right-0 hidden items-center gap-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/15 sm:flex">
          <span>Simple by design</span>
          <span className="h-px w-6 bg-white/10" />
          <span>003</span>
        </div>
      </div>

      {/* Process Grid */}
      <div
        className="
          grid w-full min-w-0
          grid-cols-1 gap-2.5
          sm:grid-cols-2
          lg:grid-cols-5
        "
      >
        {t.process.steps.map((step, idx) => {
          const StepIcon = processIcons[idx % processIcons.length];

          return (
            <div
              key={step.num}
              className="
                relative flex w-full min-w-0
                flex-col overflow-hidden
                rounded-[1.15rem]
                liquid-glass-card
                p-4
                sm:p-4
              "
            >
              {/* Tiny corner number */}
              <span className="absolute right-4 top-3.5 font-mono text-[7px] tracking-[0.18em] text-white/12">
                0{idx + 1}
              </span>

              {/* Tiny glow */}
              <div
                className="
                  pointer-events-none absolute
                  -right-10 -top-10
                  h-20 w-20
                  rounded-full
                  bg-brand-violet/10
                  blur-2xl
                "
              />

              <div className="relative min-w-0">
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold text-brand-lavender-400">
                    {step.num}
                  </span>

                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md liquid-glass text-brand-lavender-300">
                    <StepIcon className="h-3 w-3" />
                  </div>
                </div>

                {/* Divider */}
                <div className="mt-3 h-px w-full bg-brand-lavender-300/10" />

                {/* Step name */}
                <h3 className="mt-3 break-words font-display text-sm font-bold leading-tight tracking-wide text-white sm:text-[13px]">
                  {step.name}
                </h3>

                {/* Description */}
                <p className="mt-1.5 break-words text-[10px] font-light leading-[1.55] text-brand-lavender-200/65 sm:text-[10px]">
                  {step.description}
                </p>
              </div>

              {/* Minimal bottom marker */}
              <div className="relative mt-4 flex items-center">
                <div className="h-px flex-1 bg-brand-lavender-300/8" />

                <span className="ml-2 font-mono text-[7px] tracking-[0.15em] text-white/15">
                  {idx === t.process.steps.length - 1 ? '✦' : `0${idx + 1}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Human note */}
      <div className="mt-6 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
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