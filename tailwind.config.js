/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        pink: 'rgba(249, 60, 101, 1)',
        customGray: 'rgba(245, 246, 250, 1)',
        customDarkGray: 'rgba(163, 163, 163, 1)',
        customBlack: 'rgba(33, 33, 33, 1)',
        liteBlue: 'rgba(72, 128, 255, 1)',

        statusCompleted: 'rgba(0, 182, 155, 0.2)',
        statusProcessing: 'rgba(98, 38, 239, 0.2)',
        statusRejected: 'rgba(239, 56, 38, 0.2)',
      },

      textColor: {
        customGray: 'rgba(96, 96, 96, 1)',
        customLiteGray: 'rgba(166, 166, 166, 1)',
        customBlue: 'rgba(67, 121, 238, 1)',
        customBlack: 'rgba(32, 34, 36, 1)',
        customLinkBlue: 'rgba(90, 140, 255, 1)',
        customCheckGray: 'rgba(101, 101, 101, 1)',
        customRed: 'rgba(234, 2, 52, 1)',

        statusCompleted: 'rgba(0, 182, 155, 1)',
        statusProcessing: 'rgba(98, 38, 239, 1)',
        statusRejected: 'rgba(239, 56, 38, 1)',
      },

      borderColor: {
        pink: 'rgba(249, 60, 101, 0.61)',
        customGray: 'rgba(213, 213, 213, 1)',
        customDarkGray: 'rgba(163, 163, 163, 1)',
      },

      boxShadow: {
        custom: '0px 9px 40px 0px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'xs': '480px',
        'lg': '1052px',
      },
    },
  },
  plugins: [],
}
