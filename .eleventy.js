const HtmlMin = require("html-minifier");
const ErrorOverlay = require("eleventy-plugin-error-overlay");
const slinkity = require("slinkity");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({}));
  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.setTemplateFormats(["md", "njk", "liquid"]);
  eleventyConfig.addPlugin(ErrorOverlay);
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    jsDataFileSuffix: ".data",
  };
};
