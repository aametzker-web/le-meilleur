import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Preloader } from '../../components/ui/Preloader';
import { Hero } from '../../components/sections/Hero';
import { TheStudio } from '../../components/sections/TheStudio';
import { Process } from '../../components/sections/Process';
import { ArrowUpRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [hasLoaded, setHasLoaded] = useState(() => {
    return sessionStorage.getItem('lm_visited') === 'true';
  });

  const handlePreloaderComplete = () => {
    setHasLoaded(true);
    try {
      sessionStorage.setItem('lm_visited', 'true');
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-brand-violet-500 selection:text-white">
      {/* Premium Geometric Preloader */}
      {!hasLoaded && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Hero Section */}
      <Hero hasLoaded={hasLoaded} />

      {/* The Studio Section (Two Minds. One Studio. Digital & Content) */}
      <TheStudio />

      {/* Process (5 Steps: Discover to Evolve) */}
      <Process />

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-brand-lavender-300/10">
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-400" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-lavender-400">
              // {t.contact.badge}
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-gradient-lavender tracking-tight uppercase">
            {t.contact.headline}
          </h2>

          <p className="text-brand-lavender-200/80 text-xs sm:text-sm md:text-base leading-relaxed font-light px-4">
            {t.contact.subheadline}
          </p>

          <div className="pt-2 sm:pt-4 flex flex-wrap justify-center gap-3 font-mono text-xs">
            <a
              href="https://instagram.com/lemeilleur.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-glass text-white hover:border-brand-lavender-400/50 transition-all uppercase tracking-wider shadow-md text-xs"
            >
              <span>{t.contact.instagram}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-lavender-300" />
            </a>
            <a
              href="mailto:contact@lemeilleur.studio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-glass text-white hover:border-brand-lavender-400/50 transition-all uppercase tracking-wider shadow-md text-xs"
            >
              <span>{t.contact.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-lavender-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
