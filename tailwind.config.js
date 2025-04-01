// tailwind.config.js
module.exports = {
  content: [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(20) forwards',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: '#3B82F6' },
        },
      },
    },
  },
  plugins: [],
};
