module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        glitch: 'glitch 0.5s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'skew(0.5deg)' },
          '50%': { transform: 'skew(-0.5deg)' },
          '100%': { transform: 'skew(0.5deg)' },
        },
      },
      fontFamily: {
        handwritten: ['"Rock Salt"', 'cursive'],
      },
    },
  },
  plugins: [],
}