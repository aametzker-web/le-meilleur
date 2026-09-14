import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../ui/Logo';
import { ArrowUpRight } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '../motion/MotionVariants';

interface HeroProps {
  hasLoaded?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ hasLoaded = true }) => {
  const { t } = useLanguage();

  const handleScrollDown = () => {
    const nextSection = document.getElementById('studio');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between items-center px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16 overflow-hidden select-none">
      {/* Ambient Backdrop Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[400px] sm:h-[500px] radial-glow-violet opacity-65 pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[300px] radial-glow-lavender opacity-50 pointer-events-none -z-10" />

      {/* Subtle Geometric Background Dot Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(216,180,254,0.06)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-20 opacity-60" />

      {/* Hero Content Container */}
      <motion.div
        variants={staggerContainerVariant}
        initial="hidden"
        animate={hasLoaded ? 'visible' : 'hidden'}
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto pt-4 sm:pt-6"
      >
        {/* Top Discipline Taxonomy Pill */}
        <motion.div variants={fadeUpVariant} className="mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full liquid-glass-pill text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-brand-lavender-300 uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-400 animate-pulse" />
            <span>{t.hero.disciplines}</span>
          </div>
        </motion.div>

        {/* Floating Crystal Emblem (Pure Levitating in Place, Perfectly Upright) */}
        <motion.div variants={fadeUpVariant} className="my-2 sm:my-4 relative">
          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 5.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="p-5 sm:p-7 rounded-[2.5rem] liquid-glass relative shadow-[0_16px_45px_rgba(114,38,196,0.35)] flex items-center justify-center border border-brand-lavender-400/25"
          >
            {/* Dimensional Crystal Emblem */}
            <Logo size="xl" variant="monogram" interactive />

            {/* Soft Ambient Radial Halo */}
            <div className="absolute -inset-3 rounded-[3rem] bg-brand-lavender-400/15 blur-xl -z-10 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Monumental Headline */}
        <motion.div variants={fadeUpVariant} className="space-y-2 mt-4 sm:mt-6">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-gradient-lavender leading-[1.1] uppercase">
            {t.hero.title}
          </h1>

          <p className="font-mono text-xs sm:text-sm md:text-base tracking-[0.25em] text-brand-lavender-300/80 uppercase">
            {t.hero.subtitle}
          </p>
        </motion.div>

        {/* Supporting Editorial Statement */}
        <motion.p
          variants={fadeUpVariant}
          className="mt-4 sm:mt-5 max-w-xl text-xs sm:text-sm md:text-base text-brand-lavender-200/75 font-light leading-relaxed px-4"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Direct Contact Action CTAs */}
        <motion.div
          variants={fadeUpVariant}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4"
        >
          <a
            href="mailto:contact@lemeilleur.studio"
            className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full liquid-glass-pill hover:bg-brand-purple-900/60 transition-all text-xs font-mono uppercase tracking-wider text-white shadow-md"
          >
            <span>{t.contact.email}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-lavender-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://instagram.com/lemeilleur.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-brand-lavender-300/20 hover:border-brand-lavender-400/50 hover:bg-white/5 transition-all text-xs font-mono uppercase tracking-wider text-brand-lavender-200"
          >
            <span>{t.contact.instagram}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-lavender-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 sm:mt-10 flex flex-col items-center gap-2 text-brand-lavender-400/60 hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll to explore"
      >
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase">
          {t.hero.scrollDown}
        </span>
        <div className="w-4 h-7 rounded-full border border-brand-lavender-300/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-brand-lavender-300"
          />
        </div>
      </motion.button>
    </section>
  );
};
