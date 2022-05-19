const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		bundle: './src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.ts|\*.tsx|\.js|\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
		],
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		mainFields: ['browser', 'jsnext:main', 'main'],
	},
}
