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

      {/* The Studio Section */}
      <TheStudio />

      {/* Process Section */}
      <Process />

      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-brand-lavender-300/10"
      >
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-400" />

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-lavender-400">
              // {t.contact.badge}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-gradient-lavender tracking-tight uppercase">
            {t.contact.headline}
          </h2>

          {/* Description */}
          <p className="text-brand-lavender-200/80 text-xs sm:text-sm md:text-base leading-relaxed font-light px-4">
            {t.contact.subheadline}
          </p>

          {/* Instagram CTA */}
          <div className="pt-2 sm:pt-4 flex justify-center">
            <a
  href="https://www.instagram.com/lemeilleurdigital"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group relative inline-flex items-center gap-3
    rounded-full
    border border-brand-lavender-300/20
    bg-white/[0.045]
    px-[18px] py-2.5
    font-mono text-[10px] uppercase tracking-[0.2em]
    text-brand-lavender-100
    backdrop-blur-xl
    shadow-[0_8px_30px_rgba(139,59,242,0.12)]
    transition-all duration-300
    hover:border-brand-lavender-300/45
    hover:bg-brand-lavender-300/[0.08]
    hover:shadow-[0_8px_35px_rgba(139,59,242,0.28)]
    active:scale-[0.97]
  "
>
  {/* Instagram icon */}
  <span
    className="
      relative flex h-4 w-4 items-center justify-center
      rounded-[5px]
      border border-brand-lavender-300/80
      transition-transform duration-300
      group-hover:rotate-[-8deg]
    "
  >
    <span
      className="
        h-[6px] w-[6px] rounded-full
        border border-brand-lavender-300/80
      "
    />
    <span
      className="
        absolute right-[2px] top-[2px]
        h-[2px] w-[2px] rounded-full
        bg-brand-lavender-300/80
      "
    />
  </span>

  <span>Instagram</span>

  <ArrowUpRight
    size={13}
    strokeWidth={1.5}
    className="
      text-brand-lavender-300/60
      transition-all duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
      group-hover:text-white
    "
  />
</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;