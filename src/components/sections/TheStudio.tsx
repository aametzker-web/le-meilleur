import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export const TheStudio: React.FC = () => {
  const { t } = useLanguage();

  const disciplineData = [
    {
      id: 'digital',
      number: '01',
      icon: Terminal,
      title: t.studio.disciplines.digital.title,
      description: t.studio.disciplines.digital.description,
      items: [
        'Custom Web & Platform Architecture',
        'Frontend & React Engineering',
        'AI Automation & Intelligent Agents',
        'Telegram Bots & Mini Applications',
        'High-Performance Digital Products & SaaS MVPs',
      ],
    },
    {
      id: 'content',
      number: '02',
      icon: Sparkles,
      title: t.studio.disciplines.content.title,
      description: t.studio.disciplines.content.description,
      items: [
        'E-Commerce & Marketplace Product Cards',
        'Editorial Art Direction & Brand Identity',
        'High-End Professional Photo Retouching',
        'Dynamic Viral Reels & Short-Form Content',
        'Social Media Narrative & Asset Toolkits',
      ],
    },
  ];

  return (
    <section
      id="studio"
      className="scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-brand-lavender-300/10 relative w-full min-w-0 overflow-hidden"
    >
      {/* Background Ambient Light */}
      <div className="absolute top-1/3 left-1/4 w-[280px] sm:w-[450px] h-[220px] sm:h-[300px] radial-glow-violet opacity-20 pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-3 mb-10 sm:mb-12">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-400 flex-shrink-0" />

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-lavender-400">
            // {t.studio.badge}
          </span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase break-words">
          {t.studio.headline}
        </h2>

        <p className="font-mono text-xs sm:text-sm text-brand-lavender-300 uppercase tracking-[0.2em] break-words">
          {t.studio.subheadline}
        </p>

        <p className="text-xs sm:text-sm md:text-base text-brand-lavender-200/80 max-w-2xl leading-relaxed font-light pt-1">
          {t.studio.description}
        </p>
      </div>

      {/* Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-w-0">
        {disciplineData.map((disc, idx) => {
          const IconComponent = disc.icon;

          return (
            <div
              key={disc.id}
              className="w-full min-w-0 p-6 sm:p-8 rounded-3xl liquid-glass-card flex flex-col justify-between shadow-md"
            >
              <div className="min-w-0">
                {/* Discipline Header */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-brand-lavender-300/10">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-2xl liquid-glass flex-shrink-0 flex items-center justify-center text-brand-lavender-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-xl text-white tracking-wide break-words">
                        {disc.title}
                      </h3>

                      <span className="font-mono text-[9px] text-brand-lavender-400/70 uppercase tracking-widest">
                        Discipline 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-sm text-white/30 font-bold flex-shrink-0">
                    {disc.number}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 text-xs sm:text-sm text-brand-lavender-200/85 font-medium leading-relaxed">
                  {disc.description}
                </p>

                {/* Deliverables */}
                <ul className="mt-6 space-y-2.5">
                  {disc.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2.5 text-xs text-brand-lavender-300/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-violet-400 flex-shrink-0 mt-0.5" />

                      <span className="leading-snug min-w-0 break-words">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Info */}
              <div className="mt-8 pt-5 border-t border-brand-lavender-300/10 flex items-center justify-between gap-3 text-[11px] font-mono text-brand-lavender-400/60 uppercase">
                <span className="whitespace-nowrap">Le Meilleur D&amp;C</span>

                <span className="text-right">
                  0{idx + 1} // {disc.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};