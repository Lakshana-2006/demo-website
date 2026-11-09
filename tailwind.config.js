/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0a0c0f',
          900: '#121418',
          850: '#171a20',
          800: '#1e222a',
          750: '#252a34',
          700: '#2e3440',
          600: '#3e4657',
        },
        brand: {
          orange: '#FF7009',
          'orange-hover': '#e65e00',
          'orange-glow': '#ff8a2b',
          'orange-dark': '#b94b00',
          cream: '#F7EFE3',
          'cream-light': '#FDFBF7',
          'cream-muted': '#D8C7B0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 112, 9, 0.35)',
        'glow-orange-lg': '0 0 40px -5px rgba(255, 112, 9, 0.45)',
        'inner-dark': 'inset 0 2px 6px 0 rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'steam-1': 'steam 3s ease-in-out infinite',
        'steam-2': 'steam 3s ease-in-out 1.2s infinite',
        'steam-3': 'steam 3s ease-in-out 0.6s infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '15%': { opacity: '0.8' },
          '50%': { transform: 'translateY(-10px) scaleX(1.15)', opacity: '0.6' },
          '95%': { opacity: '0' },
          '100%': { transform: 'translateY(-22px) scaleX(1.3)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

