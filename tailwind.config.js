// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },          
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              '&::before': {
                content: '"" !important'
              },
              '&::after': {
                content: '"" !important'
              }
            }
          }
        }
      })
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
