/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs,js}"],
  theme: {
    fontFamily: {
      headline: ['Fira Sans'],
      body: ['Source Sans Pro'],
    },
    extend: {
      width: {
        '128': '32rem',
      },
      animation: {
        text: 'text 5s linear infinite alternate',
      },
      keyframes: {
        text: {
          '0%': {
            'background-size': '250%',
            'background-position': 'left',
          },
          '50%': {
            'background-size': '250%',
            'background-position': 'right',
          },
          '100% ': {
            'background-size': '250%',
            'background-position': 'left',
          },
        },
      },
    },
  },
  plugins: [],
};