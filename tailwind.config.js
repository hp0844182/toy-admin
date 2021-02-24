
// tailwind.config.js
const { generateFontSize } = require('./tailwindcss/font');
const { generateSpacing } = require('./tailwindcss/spacing');
const { generateRadius } = require('./tailwindcss/radius');
module.exports = {
  purge: [],
  theme: {
    extend: {
      fontSize: generateFontSize(),
      spacing: generateSpacing(),
      borderRadius: generateRadius(),
      opacity: {
        '02': '0.02',
        '10': '0.1',
        '15': '0.15',
        '20': '0.2',
        '45': '0.45',
        '65': '0.65',
        '75': '0.75',
        '80': '0.8',
        '85': '0.85',
        '95': '0.95',
      },
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '25': 25,
        '30': 30,
        '40': 40,
        '50': 50,
        '75': 75,
        '100': 100,
        '1000': 1000,
        'auto': 'auto',
      },
    },

  },
  variants: {},
  plugins: [],
}