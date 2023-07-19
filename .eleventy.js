const PrettyError = require("pretty-error").start()
const format = require("date-fns/format")
const esLocale = require("date-fns/locale/es")
const metagen = require('eleventy-plugin-metagen')
const markdownIt = require('markdown-it')
const markdownItGithubHeadings = require("markdown-it-github-headings")
const markdownLibrary = require("./libs/headerAnchors.js")


module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPlugin(metagen)
  eleventyConfig.setLibrary("md", markdownLibrary);
  

  eleventyConfig.addFilter("readableDate", dateObj => {
    const fecha = new Date(dateObj)
    const fechaFormateada = format(fecha, 'MMMM dd, yyyy', { locale: esLocale })
    const fechaLegible = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.substring(1)
    return fechaLegible
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
