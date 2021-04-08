const Image = require("@11ty/eleventy-img");



(async () => {

    // let options = {
    //     widths: [144],
    //     formats: ['png'],
    //     outputDir: 'src/assets/images/icons',
    //     filenameFormat: function (width, format) {return `icon-${width}x${width}.${format}`}
    
    // }
  let url = "src/assets/images/logo.png";
  let icons = await Image(url, {
      widths: [72, 96, 144, 128, 152],
      formats: ['png'],
      outputDir: './src/assets/images/icons/',
      filenameFormat: function (id, src, width, format, options) {
        return `icon-${width}x${width}.${format}`;
      }
  });

  console.log(icons);
})();



module.exports = function (eleventyConfig) {
	// eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
	// eleventyConfig.addPassthroughCopy("./src/css/main.css");
	// eleventyConfig.addPassthroughCopy("./src/fonts");
	// eleventyConfig.addPassthroughCopy("./src/scripts");
	// eleventyConfig.addPassthroughCopy("./src/images");
	// eleventyConfig.addPassthroughCopy("./src/favicon.ico");

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
};