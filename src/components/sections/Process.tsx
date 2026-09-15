import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, Lightbulb, Code2, Rocket, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  const processIcons = [Compass, Lightbulb, Code2, Rocket, Sparkles];

  return (
    <section
      id="process"
      className="scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-brand-lavender-300/10 relative w-full min-w-0 overflow-hidden"
    >
      {/* Background Ambient */}
      <div className="absolute top-1/3 right-1/4 w-[280px] sm:w-[450px] h-[220px] sm:h-[300px] radial-glow-lavender opacity-20 pointer-events-none -z-10" />

      {/* Header */}
      <div className="space-y-3 mb-10 sm:mb-12">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-400 flex-shrink-0" />

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-lavender-400">
            // {t.process.badge}
          </span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight break-words">
          {t.process.title}
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-brand-lavender-300/70 max-w-lg font-light leading-relaxed">
          {t.process.subtitle}
        </p>
      </div>

      {/* Process Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 w-full min-w-0">
        {t.process.steps.map((step, idx) => {
          const StepIcon = processIcons[idx % processIcons.length];

          return (
            <div
              key={step.num}
              className="w-full min-w-0 p-5 sm:p-6 rounded-3xl liquid-glass-card flex flex-col justify-between shadow-md"
            >
              <div className="min-w-0">
                {/* Step Top Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-brand-lavender-300/10">
                  <span className="font-mono text-xs font-bold text-brand-lavender-400">
                    {step.num}
                  </span>

                  <div className="w-7 h-7 rounded-lg liquid-glass flex-shrink-0 flex items-center justify-center text-brand-lavender-300">
                    <StepIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Step Name */}
                <h3 className="mt-4 font-display font-bold text-base sm:text-lg text-white tracking-wide break-words">
                  {step.name}
                </h3>

                {/* Step Description */}
                <p className="mt-2 text-xs text-brand-lavender-200/75 leading-relaxed font-light break-words">
                  {step.description}
                </p>
              </div>

              {/* Step Flow Indicator */}
              <div className="mt-6 pt-3.5 border-t border-brand-lavender-300/10 flex items-center justify-between gap-2 text-[10px] font-mono text-brand-lavender-400/60 uppercase">
                <span>Phase</span>

                <span className="whitespace-nowrap">
                  0{idx + 1} // Step
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};