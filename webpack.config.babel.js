/* global __dirname:true */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonLoaders = [
	{
		test: /\.js$/,
		loader: 'babel',
		exclude: '/node_modules/'
	},
	{
		test: /\.vue$/,
		loader: 'vue',
		exclude: '/node_modules/',
	},
	{
		root: path.join(__dirname, 'src/styles'),
		test: /\.(scss|sass)$/,
		loader: ExtractTextPlugin.extract('style', 'css?module&importLoaders=1&!postcss!sass')
	}];

const webpackConfig = {
	context: path.join(__dirname, 'src'),
	entry: {
		javascript: ['webpack-hot-middleware/client', './scripts/app.js']
	},
	vue: {
		loader: ExtractTextPlugin.extract('style', 'css?module&importLoaders=1&!postcss!sass'),
		postcss: require('./postcss.config').plugins
	},
	target: 'web',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: '/static'
	},
	devtool: 'cheap-module-inline-source-map',
	debug: true,
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new ExtractTextPlugin('bundle.css')
	],
	module: {
		loaders: commonLoaders
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js',
			'styles': path.resolve(__dirname, 'src/styles'),
			'sass-bundle': 'css?module&importLoaders=1!sass!postcss'
		}
	},

	watch: true,
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	}
};

module.exports = webpackConfig;
