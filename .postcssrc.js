/* eslint-env node */
module.exports = {
	plugins: [
		require('postcss-momentum-scrolling')([
			'scroll',
			'auto',
		]),
		require('postcss-position-alt'),
		require('postcss-short'),
		require('postcss-axis'),
		// to edit target browsers: use "browserslist" field in package.json
		require('autoprefixer'),
	]
}
