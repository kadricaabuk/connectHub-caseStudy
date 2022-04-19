module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {content: [
    "./src/**/*.{html,ts}",
  ],
    extend: {
      colors: {
        'orange-200' : '#FCDBCB',
        'orange-300' : '#FBCDB8',
        'orange-500' : '#EC6F3B',
        'green' : '#7fcb3d'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
