/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': { transform: 'translate3d(104em, 0, 0)' },
          '100%': { transform: 'translate3d(-30em, 0, 0)' },
        },
        tailFade: {
          '0%, 50%': { width: 'var(--star-tail-length)', opacity: '1' },
          '70%, 80%': { width: '0', opacity: '0.4' },
          '100%': { width: '0', opacity: '0' },
        },
        blink: {
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        fall: 'fall var(--fall-duration) var(--fall-delay) linear infinite',
        tailFade: 'tailFade var(--fall-duration) var(--fall-delay) ease-out infinite',
        blink: 'blink 2s linear infinite',
      },
    },
  },
  plugins: [],
}