/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#05070d',
          900: '#07080f',
          850: '#0b0d18',
          800: '#111424',
          700: '#1a1f36',
        },
        cyber: {
          purple: '#7c3aed',
          lavender: '#a78bfa',
          soft: '#c4b5fd',
          indigo: '#4f46e5',
          cyan: '#06b6d4',
          emerald: '#10b981',
          accent: '#8b5cf6'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
