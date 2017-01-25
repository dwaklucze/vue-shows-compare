/* global __dirname:true */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonLoaders = [
	{ // disabled for firebase
		test: /\.js$/,
		loader: 'babel',
		include: [
			path.resolve(__dirname, 'src')
		],
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
		loader: ExtractTextPlugin.extract('style', 'css?module?sourceMaps&importLoaders=1&!postcss!sass?outputStyle=compressed'),
		exclude: /node_modules/,
	}];

const webpackConfig = {
	context: path.join(__dirname, 'src'),
	entry: {
		javascript: ['babel-polyfill', 'webpack-hot-middleware/client', './scripts/app.js']
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
			'vue$': 'vue/dist/vue.common.js',
			'firebase$': 'firebase/firebase-browser.js',
			'firebasedb$': 'firebase/firebase-database.js',
			'firebaseauth$': 'firebase/firebase-auth.js',
			'styles': path.resolve(__dirname, 'src/styles')
		}
	},

	watch: true,
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	}
};

module.exports = webpackConfig;
