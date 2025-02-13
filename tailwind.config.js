/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'xs': '0.6rem',   // 12px
        'sm': '0.7rem',  // 14px
        'base': '0.72rem',  // default (14.4px)
        'lg': '0.8rem',      // 16px
        'xl': '1rem',   // 20px
      },

      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
