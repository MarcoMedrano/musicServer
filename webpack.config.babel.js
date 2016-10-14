export default {
	entry: './server/wwwroot/js/index.js',
	output: {
		path: './server/wwwroot',
		filename: 'bundle.js',
		pathinfo: false
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loaders: ['babel']
			}
		]
	}
};
