import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../ui/Logo';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? 'py-2.5 sm:py-3 px-3 sm:px-6' : 'py-5 px-4 sm:px-8 md:px-12'
        }`}
      >
        <nav
          className={`relative w-full isolate [backface-visibility:hidden] [transform:translateZ(0)] transition-[max-width,padding,box-shadow,background-color] duration-500 ease-out flex items-center justify-between ${
            isScrolled
              ? 'max-w-4xl rounded-full liquid-glass-pill py-2 px-4 sm:px-6 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
              : 'max-w-6xl shadow-none'
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5"
          >
            <Logo
              size="sm"
              variant={isScrolled ? 'monogram' : 'full'}
              interactive
              className="transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.2em] uppercase md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-nowrap">
            <button
              onClick={() => handleNavClick('studio')}
              className="text-brand-lavender-200/80 hover:text-white transition-colors duration-300 relative py-1 uppercase"
            >
              {t.nav.studio}
            </button>

            <button
              onClick={() => handleNavClick('process')}
              className="text-brand-lavender-200/80 hover:text-white transition-colors duration-300 relative py-1 uppercase"
            >
              {language === 'ru' ? 'ПРОЦЕСС' : 'PROCESS'}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="text-brand-lavender-200/80 hover:text-white transition-colors duration-300 relative py-1 uppercase"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Actions: Language Switcher & Direct CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-0.5 rounded-full bg-brand-surface/80 border border-brand-lavender-300/15 text-xs font-mono">
              <button
                onClick={() => setLanguage('ru')}
                className={`relative px-2.5 py-1 rounded-full transition-colors duration-300 ${
                  language === 'ru' ? 'text-white' : 'text-brand-lavender-300/60 hover:text-white'
                }`}
              >
                {language === 'ru' && (
                  <motion.div
                    layoutId="navbar-lang-pill"
                    className="absolute inset-0 rounded-full bg-brand-violet-600/70 border border-brand-lavender-400/30"
                    transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                  />
                )}
                <span className="relative z-10 font-medium">RU</span>
              </button>

              <button
                onClick={() => setLanguage('en')}
                className={`relative px-2.5 py-1 rounded-full transition-colors duration-300 ${
                  language === 'en' ? 'text-white' : 'text-brand-lavender-300/60 hover:text-white'
                }`}
              >
                {language === 'en' && (
                  <motion.div
                    layoutId="navbar-lang-pill"
                    className="absolute inset-0 rounded-full bg-brand-violet-600/70 border border-brand-lavender-400/30"
                    transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                  />
                )}
                <span className="relative z-10 font-medium">EN</span>
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="px-2.5 py-1 rounded-full liquid-glass-pill text-[11px] font-mono text-brand-lavender-300 hover:text-white"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full liquid-glass-pill text-brand-lavender-100 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-2xl flex flex-col justify-between px-6 pt-24 pb-10 md:hidden"
          >
            {/* Ambient Violet Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 radial-glow-violet pointer-events-none -z-10" />

            {/* Nav Links */}
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-lavender-400">
                // Menu
              </span>

              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => handleNavClick('studio')}
                  className="font-display font-bold text-2xl sm:text-3xl text-white hover:text-brand-lavender-300 transition-colors flex items-center justify-between text-left"
                >
                  <span>{t.nav.studio}</span>
                  <span className="font-mono text-xs text-white/40">01</span>
                </button>

                <button
                  onClick={() => handleNavClick('process')}
                  className="font-display font-bold text-2xl sm:text-3xl text-white hover:text-brand-lavender-300 transition-colors flex items-center justify-between text-left"
                >
                  <span>{language === 'ru' ? 'Процесс' : 'Process'}</span>
                  <span className="font-mono text-xs text-white/40">02</span>
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="font-display font-bold text-2xl sm:text-3xl text-white hover:text-brand-lavender-300 transition-colors flex items-center justify-between text-left"
                >
                  <span>{t.nav.contact}</span>
                  <span className="font-mono text-xs text-white/40">03</span>
                </button>
              </nav>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-brand-lavender-300/15 space-y-5">
              {/* Language Switcher Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-lavender-300">
                  <Globe className="w-3.5 h-3.5 text-brand-lavender-400" />
                  <span>LANGUAGE:</span>
                </div>
                <div className="flex gap-2 font-mono text-xs">
                  <button
                    onClick={() => setLanguage('ru')}
                    className={`px-3 py-1 rounded-full ${
                      language === 'ru'
                        ? 'bg-brand-violet-600 text-white font-bold'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    RU
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full ${
                      language === 'en'
                        ? 'bg-brand-violet-600 text-white font-bold'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                <a
                  href="https://instagram.com/lemeilleur.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl liquid-glass-pill flex items-center justify-between text-white"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-lavender-400" />
                </a>
                <a
                  href="mailto:contact@lemeilleur.studio"
                  className="p-3 rounded-xl liquid-glass-pill flex items-center justify-between text-white"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-lavender-400" />
                </a>
              </div>

              <p className="text-[10px] font-mono text-white/40 tracking-wider text-center">
                ALMATY, KAZAKHSTAN • LE MEILLEUR D&amp;C STUDIO
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};