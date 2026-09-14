/**
 * Le Meilleur D&C Studio — Design System Tokens
 * Defines the core color palette, typography scales, glass parameters,
 * transitions, and easing curves for consistent design implementation.
 */

export const tokens = {
  colors: {
    black: '#040108',
    dark: '#080312',
    surface: '#0f061e',
    card: 'rgba(21, 9, 41, 0.55)',
    purple: {
      950: '#14052a',
      900: '#220942',
      800: '#380f68',
      700: '#531995',
      600: '#7226c4',
    },
    violet: {
      600: '#7928e0',
      500: '#8b3bf2',
      400: '#a363f7',
      300: '#bd8bf9',
    },
    lavender: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
    },
    light: {
      bg: '#faf9fc',
      surface: '#f3effa',
      card: '#ffffff',
      text: '#120526',
      muted: '#5e5272',
      border: 'rgba(56, 15, 104, 0.08)',
    },
  },
  typography: {
    fontDisplay: 'Syne, sans-serif',
    fontBody: '"Plus Jakarta Sans", sans-serif',
    fontMono: '"Space Mono", monospace',
  },
  glass: {
    standard: 'backdrop-blur-xl bg-[#150929]/55 border border-[#d8b4fe]/15 shadow-2xl',
    pill: 'backdrop-blur-2xl bg-[#080312]/75 border border-[#d8b4fe]/20 shadow-lg',
    interactive: 'backdrop-blur-md bg-[#180a30]/40 border border-[#d8b4fe]/10 hover:border-[#d8b4fe]/30 transition-all',
  },
  transitions: {
    springSlow: { type: 'spring', damping: 28, stiffness: 120 },
    springSnappy: { type: 'spring', damping: 20, stiffness: 220 },
    cubicSmooth: [0.16, 1, 0.3, 1],
    easeOutExpo: [0.19, 1, 0.22, 1],
  },
} as const;

export type DesignTokens = typeof tokens;
