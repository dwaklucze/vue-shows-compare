import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';


const compiler = webpack(webpackConfig);
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath,
	watchOptions: {
		poll: true
	},
	stats: {
		colors: true
	}
}));


app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
	if (err) {
		return console.error(err);
	}

	console.log('Listening at http://localhost:3000/');
});
