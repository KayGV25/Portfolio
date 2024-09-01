/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        keyframes: {
          "fade-in": {
              "0%": {
                  opacity: 0
              },
              "100%": {
                  opacity: 1
              },
          },
          "fade-out": {
              "0%": {
                  opacity: 1
              },
              "100%": {
                  opacity: 0
              },
          }
        },
        animation: {
          fadeIn: 'fade-in 1s ease-in-out 0.25s 1',
          fadeOut: 'fade-out 1s ease-out 0.25s 1',
        }
      }
    },
  },
  plugins: [],
}