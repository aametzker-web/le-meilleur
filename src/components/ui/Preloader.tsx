import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Sequence duration: 1.5s assembly and reveal
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 450); // allow exit animation to complete
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black overflow-hidden pointer-events-none"
        >
          {/* Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] radial-glow-violet opacity-60 pointer-events-none" />

          {/* Geometric Monogram Construction */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full drop-shadow-[0_0_35px_rgba(139,59,242,0.6)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="preloaderLGrad" x1="20" y1="20" x2="60" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="60%" stopColor="#D8B4FE" />
                  <stop offset="100%" stopColor="#8B3BF2" />
                </linearGradient>
                <linearGradient id="preloaderMGrad" x1="50" y1="20" x2="115" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FAF5FF" />
                  <stop offset="50%" stopColor="#E9D5FF" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>

              {/* L Component - slides from bottom-left and locks into position */}
              <motion.path
                d="M 22 22 L 36 22 L 36 82 L 62 82 L 62 96 L 22 96 Z"
                fill="url(#preloaderLGrad)"
                initial={{ opacity: 0, x: -35, y: 35, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              />

              {/* M Component - slides from top-right and locks into position */}
              <motion.path
                d="M 52 96 L 66 96 L 66 50 L 78 72 L 88 72 L 100 50 L 100 96 L 114 96 L 114 22 L 98 22 L 83 52 L 68 22 L 52 22 Z"
                fill="url(#preloaderMGrad)"
                initial={{ opacity: 0, x: 35, y: -35, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              />

              {/* Accent Intersection Vertex */}
              <motion.circle
                cx="83"
                cy="52"
                r="3"
                fill="#FFFFFF"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 1], opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </svg>

            {/* Specular horizontal light streak */}
            <motion.div
              initial={{ x: '-150%', opacity: 0 }}
              animate={{ x: '150%', opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.9, delay: 0.75, ease: 'easeInOut' }}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-brand-lavender-200 to-transparent pointer-events-none"
            />
          </div>

          {/* Minimal Status Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-col items-center gap-1.5"
          >
            <span className="font-display font-bold text-xs text-white tracking-[0.3em] uppercase">
              LE MEILLEUR
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-brand-lavender-300/60 uppercase">
              D&amp;C STUDIO
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
