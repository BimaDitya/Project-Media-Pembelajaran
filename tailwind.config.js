/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs,js}"],
  theme: {
    fontFamily: {
      headline: ['Fira Sans'],
      body: ['Source Sans Pro'],
    },
    extend: {
      animation: {
        text: 'text 10s linear infinite',
      },
      keyframes: {
        text: {
          '0%, 25%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '25%, 50% ': {
            'background-size': '200% 200%',
            'background-position': 'center right',
          },
          '50%, 75% ': {
            'background-size': '200% 200%',
            'background-position': 'center right',
          },
          '75%, 100% ': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
        },
      },
    },
  },
  plugins: [],
};