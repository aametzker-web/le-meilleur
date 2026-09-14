import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from '../components/ui/Logo';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-6 text-center text-brand-lavender-50">
      <Logo size="lg" variant="exploded" className="mb-8" />
      <span className="font-mono text-xs tracking-widest text-brand-lavender-400 uppercase">
        Error 404
      </span>
      <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white mt-2 mb-4">
        {t.notFound.headline}
      </h1>
      <p className="text-brand-lavender-300/70 max-w-md mb-8 text-sm md:text-base">
        {t.notFound.description}
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-glass-pill hover:bg-brand-purple-900/60 transition-all text-sm font-medium text-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t.notFound.homeButton}</span>
      </Link>
    </div>
  );
};
