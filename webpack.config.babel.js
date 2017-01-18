/* global __dirname:true */

const webpack = require('webpack');
const path = require('path');


const commonLoaders = [
	{
		test: /\.js$/,
		loader: 'babel',
		exclude: '/node_modules/'
	},
	{
		test: /\.jade/,
		loaders: ['html',
			'pug-html-loader?exports=false&pretty=true'
		],
		exclude: '/node_modules'
	},
	{
		test: /\.(scss|sass)$/,
		loaders: ['style',
			'css?importLoaders=1',
			'sass',
			'postcss?sourceMap=inline'
		]
	}

];

const webpackConfig = {
	context: path.join(__dirname, 'src'),
	entry: {
		javascript: ['webpack-hot-middleware/client', './app.js']
	},
	target: 'web',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: '/static'
	},
	devtool: 'cheap-module-eval-source-map',
	debug: true,
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	],
	module: {
		loaders: commonLoaders
	},

	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			vue$: 'vue/dist/vue.js'
		}
	},

	watch: true,
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	}
};

module.exports = webpackConfig;
