const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.blueGray,
      white: colors.white,
      black: colors.black,
      },
      screens: {
        'sm': '300px',
        'lg': '700px'
        },
      // fontFamily: {
      //   'sans': ['ui-sans-serif', 'system-ui'],
      //   'serif': ['ui-serif', 'Georgia'],
      //   'mono': ['ui-monospace', 'SFMono-Regular'],
      //   'montserrat': ['Montserrat'],
      //  },
      extend: {
        backgroundImage: theme => ({
     
        })
      },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}
