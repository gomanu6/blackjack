const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: {},
		app: {},
		shared: ["react", "react-dom"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[bundle].js",
	},
	devServer: {
		open: true,
		contentBase: "./dist",
	},
};
