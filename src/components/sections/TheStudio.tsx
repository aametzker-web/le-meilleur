import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Terminal, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const TheStudio: React.FC = () => {
  const { t } = useLanguage();

  const disciplineData = [
    {
      id: 'digital',
      number: '01',
      icon: Terminal,
      title: t.studio.disciplines.digital.title,
      description:
        'Websites, tools and digital products — built around the way you actually work.',
      items: [
        'Websites that feel custom',
        'React & frontend development',
        'Telegram bots & small tools',
        'Automation for repetitive work',
        'MVPs built to actually launch',
      ],
    },
    {
      id: 'content',
      number: '02',
      icon: Sparkles,
      title: t.studio.disciplines.content.title,
      description:
        'Visual content with a clear point of view — made to look good and make sense.',
      items: [
        'Product photos & marketplace visuals',
        'Art direction & visual identity',
        'Professional photo retouching',
        'Reels & short-form video',
        'Social content that feels native',
      ],
    },
  ];

  return (
    <section
      id="studio"
      className="scroll-mt-24 py-10 sm:py-14 px-4 sm:px-6 max-w-5xl mx-auto border-t border-brand-lavender-300/10 relative w-full min-w-0 overflow-hidden"
    >
      {/* Ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[240px] sm:w-[420px] h-[200px] sm:h-[280px] radial-glow-violet opacity-15 pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="relative mb-8 sm:mb-10">
        {/* Tiny editorial label */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-400 flex-shrink-0" />

            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-brand-lavender-400">
              // {t.studio.badge}
            </span>
          </div>

          <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            LM / 002
          </span>
        </div>

        <div className="max-w-3xl">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase break-words leading-[1.05]">
            {t.studio.headline}
          </h2>

          <p className="font-mono text-[9px] sm:text-[10px] text-brand-lavender-300 uppercase tracking-[0.18em] mt-3 break-words">
            {t.studio.subheadline}
          </p>

          <p className="text-xs sm:text-sm text-brand-lavender-200/75 max-w-xl leading-relaxed font-light mt-3">
            {t.studio.description}
          </p>
        </div>

        {/* Small decorative line */}
        <div className="hidden sm:flex absolute right-0 bottom-0 items-center gap-2 font-mono text-[8px] text-white/20 uppercase tracking-[0.2em]">
          <span>People first</span>
          <span className="w-8 h-px bg-white/10" />
          <span>002</span>
        </div>
      </div>

      {/* Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full min-w-0">
        {disciplineData.map((disc, idx) => {
          const IconComponent = disc.icon;

          return (
            <div
              key={disc.id}
              className="group relative w-full min-w-0 p-5 sm:p-6 rounded-[1.5rem] liquid-glass-card flex flex-col justify-between overflow-hidden"
            >
              {/* Card number / corner detail */}
              <div className="absolute top-4 right-5 font-mono text-[8px] tracking-[0.2em] text-white/15">
                0{idx + 1}
              </div>

              {/* Very subtle inner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-brand-violet/10 blur-3xl pointer-events-none" />

              <div className="relative min-w-0">
                {/* Discipline Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-brand-lavender-300/10">
                  <div className="w-9 h-9 rounded-xl liquid-glass flex-shrink-0 flex items-center justify-center text-brand-lavender-300">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 pr-8">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide break-words leading-tight">
                      {disc.title}
                    </h3>

                    <span className="font-mono text-[8px] text-brand-lavender-400/60 uppercase tracking-[0.18em]">
                      Discipline 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-brand-lavender-200/80 font-medium leading-relaxed max-w-md">
                  {disc.description}
                </p>

                {/* Deliverables */}
                <ul className="mt-5 space-y-2">
                  {disc.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2.5 text-[11px] sm:text-xs text-brand-lavender-300/75"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-violet-400/80 flex-shrink-0 mt-0.5" />

                      <span className="leading-snug min-w-0 break-words">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Info */}
              <div className="relative mt-6 pt-4 border-t border-brand-lavender-300/10 flex items-center justify-between gap-3">
                <span className="font-mono text-[9px] text-brand-lavender-400/50 uppercase tracking-[0.15em] whitespace-nowrap">
                  Le Meilleur
                </span>

                <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/25 uppercase">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Human note */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-[11px] sm:text-xs text-white/30 leading-relaxed max-w-lg">
          No giant team. No endless meetings. Just a small group of people who
          care about the final result.
        </p>

        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15 whitespace-nowrap">
          Made with intention
        </span>
      </div>
    </section>
  );
};