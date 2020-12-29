const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: {
			import: "./src/index.js",
			dependOn: "shared",
		},

		shared: ["react", "react-dom"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[bundle].js",
	},
	devServer: {
		open: true,
		contentBase: "./dist",
		hot: true,
	},
	optimization: {
		runtimeChunk: "single",
		moduleIds: "deterministic",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
				include: path.resolve(__dirname, "src"),
			},

			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				include: path.resolve(__dirname, "src"),
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				include: path.resolve(__dirname, "src"),
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			filename: "index.html",
		}),
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false,
		}),
	],
};
