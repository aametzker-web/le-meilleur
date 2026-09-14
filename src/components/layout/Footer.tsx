import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../ui/Logo';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [almatyTime, setAlmatyTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // GMT+5 Almaty time formatting
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Almaty',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setAlmatyTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-black border-t border-brand-lavender-300/10 overflow-hidden text-brand-lavender-100">
      {/* Subtle top specular glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-lavender-400/40 to-transparent" />

      {/* Atmospheric Background Ambient */}
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 radial-glow-lavender pointer-events-none opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Main Footer Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-lavender-300/10">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <Logo size="md" variant="full" interactive />
            </Link>

            <p className="text-sm text-brand-lavender-200/70 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-3 font-mono text-xs text-brand-lavender-300/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALMATY, KAZAKHSTAN</span>
              {almatyTime && <span className="text-white/40">({almatyTime} GMT+5)</span>}
            </div>
          </div>

          {/* Disciplines / Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-lavender-400">
              // Disciplines
            </span>
            <ul className="space-y-2.5 font-mono text-xs text-brand-lavender-200/80">
              <li className="hover:text-white transition-colors">DIGITAL &amp; WEB ARCHITECTURE</li>
              <li className="hover:text-white transition-colors">CONTENT &amp; VISUAL DIRECTION</li>
              <li className="hover:text-white transition-colors">AI INTEGRATIONS &amp; AUTOMATION</li>
              <li className="hover:text-white transition-colors">DIGITAL PRODUCTS &amp; SAAS</li>
            </ul>
          </div>

          {/* Direct External Contacts (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-lavender-400">
              // Direct Channels
            </span>
            <div className="flex flex-col space-y-3 font-mono text-xs">
              <a
                href="https://instagram.com/lemeilleur.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl liquid-glass hover:border-brand-lavender-400/40 transition-all text-white"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-violet-400" />
                  <span>Instagram</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-lavender-300 group-hover:text-white transition-colors">
                  <span className="text-[10px] text-white/50">@lemeilleur.studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              <a
                href="mailto:contact@lemeilleur.studio"
                className="group flex items-center justify-between p-3.5 rounded-xl liquid-glass hover:border-brand-lavender-400/40 transition-all text-white"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-400" />
                  <span>Email</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-lavender-300 group-hover:text-white transition-colors">
                  <span className="text-[10px] text-white/50">contact@lemeilleur.studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Language Switcher, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-brand-lavender-300/60">
          <div>
            <span>&copy; {new Date().getFullYear()} LE MEILLEUR D&amp;C STUDIO.</span>
            <span className="hidden sm:inline mx-2 text-white/20">|</span>
            <span className="hidden sm:inline">{t.footer.rights}</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Language Switch */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('ru')}
                className={`hover:text-white transition-colors ${language === 'ru' ? 'text-brand-lavender-300 font-bold' : ''}`}
              >
                RU
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`hover:text-white transition-colors ${language === 'en' ? 'text-brand-lavender-300 font-bold' : ''}`}
              >
                EN
              </button>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-brand-lavender-300 hover:text-white transition-colors group uppercase tracking-wider"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
