/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
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
      },
      fontFamily: {
  display: ['Unbounded', 'sans-serif'],
  sans: ['Manrope', 'sans-serif'],
  mono: ['Space Mono', 'monospace'],
},
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.2em',
        ultra: '0.3em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
