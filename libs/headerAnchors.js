const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const slugify = require("slugify");

const linkInsideHeader = markdownItAnchor.permalink.linkInsideHeader({
  class: "anchor",
  symbol: "<span>#</span>",
  style: "aria-labelledby",
  placement: "before"
});
const markdownItAnchorOptions = {
  level: [1, 2, 3, 4, 5, 6],
  slugify: (str) =>
    slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    }),
  tabIndex: false,
  permalink(slug, opts, state, idx) {
    state.tokens.splice(
      idx,
      0,
      Object.assign(new state.Token("div_open", "div", 1), {
        attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
        block: true,
      })
    );

    state.tokens.splice(
      idx + 4,
      0,
      Object.assign(new state.Token("div_close", "div", -1), {
        block: true,
      })
    );

    linkInsideHeader(slug, opts, state, idx + 1);
  },
};

/* Markdown Overrides */
let markdownLibrary = markdownIt().use(markdownItAnchor, markdownItAnchorOptions);


module.exports = markdownLibrary
