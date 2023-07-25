/** @type {import('tailwindcss').Config} */
const PrettyError = require("pretty-error").start()
module.exports = {
  content: ["./src/**/*.{njk, md}"],
  theme: {
    extends: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwindcss-animated')
  ]
}
