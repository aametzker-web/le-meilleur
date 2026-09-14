import React from 'react';
import { motion } from 'framer-motion';
import emblemImg from '../../assets/logos/le-meilleur-emblem.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'monogram' | 'full' | 'exploded';
  interactive?: boolean;
}

const sizeMap = {
  sm: { box: 34, font: 'text-xs' },
  md: { box: 44, font: 'text-sm' },
  lg: { box: 68, font: 'text-base' },
  xl: { box: 110, font: 'text-lg' },
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'monogram',
  interactive = false,
}) => {
  const dims = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <motion.div
        className="relative flex items-center justify-center rounded-2xl overflow-hidden p-0.5"
        style={{ width: dims.box, height: dims.box }}
        whileHover={interactive ? { scale: 1.06 } : undefined}
        transition={{ type: 'spring', damping: 20, stiffness: 280 }}
      >
        {/* Ambient glow backing */}
        <div className="absolute inset-0 bg-brand-violet-600/30 blur-md rounded-2xl pointer-events-none" />

        {/* Official LM 3D Crystal Emblem Asset */}
        <img
          src={emblemImg}
          alt="Le Meilleur LM Logo"
          className="w-full h-full object-cover rounded-xl shadow-[0_4px_20px_rgba(139,59,242,0.4)] border border-brand-lavender-400/30"
          loading="eager"
        />
      </motion.div>

      {variant === 'full' && (
        <div className="flex flex-col tracking-wider">
          <span className="font-display font-extrabold text-white tracking-[0.2em] text-sm uppercase leading-tight">
            LE MEILLEUR
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-brand-lavender-300/80 uppercase">
            D&amp;C STUDIO
          </span>
        </div>
      )}
    </div>
  );
};
