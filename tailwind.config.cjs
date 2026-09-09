/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#171512',
        ivory: '#f5efe4',
        ember: '#bf6b45',
        olive: '#66715d',
        sand: '#c8b79e',
        smoke: '#94897b',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(10, 10, 10, 0.18)',
      },
      backgroundImage: {
        'paper-glow': 'radial-gradient(circle at top, rgba(245,239,228,0.09), transparent 56%)',
        'charcoal-fade': 'linear-gradient(180deg, rgba(23,21,18,0.2) 0%, rgba(23,21,18,0.68) 100%)',
      },
      letterSpacing: {
        editorial: '0.16em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'fade-in': 'fadeIn 0.7s ease both',
        'float-gentle': 'floatGentle 3.6s ease-in-out infinite',
        'modal-in': 'modalIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        modalIn: {
          '0%': { opacity: '0', transform: 'translateY(18px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
