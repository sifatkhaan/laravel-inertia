/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily:{
      cursive:['Oleo Script','system-ui'],
      crismo:['Crimson Pro','serif']
    }
  },
  plugins: [],
}

