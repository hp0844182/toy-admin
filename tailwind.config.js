const { generateColors } = require('./config/theme');
console.log(generateColors());

// tailwind.config.js
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: generateColors()
    },

  },
  variants: {},
  plugins: [],
}