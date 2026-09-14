import type { Variants } from 'framer-motion';

/**
 * Reusable Framer Motion Variants for Le Meilleur Studio
 * Built exclusively using hardware-accelerated transform and opacity.
 */

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const glassFloatVariant: Variants = {
  animate: {
    y: [-8, 8, -8],
    rotateZ: [-0.5, 0.5, -0.5],
    transition: {
      duration: 7,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const letterRevealVariant: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
