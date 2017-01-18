/* eslint-disable global-require */

module.exports = {
	plugins: [
		require('postcss-grouper'),
		require('postcss-fixes')(),
		require('postcss-flexbugs-fixes'),
		require('css-mqpacker'),
		require('postcss-zindex'),
		require('postcss-convert-values'),
		require('postcss-ordered-values'),
		require('postcss-merge-rules'),
		require('postcss-merge-longhand'),
		require('postcss-discard-duplicates'),
		require('postcss-discard-empty')
	]
};

/* eslint-enable global-require */
