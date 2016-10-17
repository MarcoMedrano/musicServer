var HappyPack = require('happypack');

exports

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
				loaders: ['babel'],
				happy: {id:'js'},
			}
		]
	},
	plugins: [
	  new HappyPack({
		  id:'js'
		// loaders is the only required parameter:
		//loaders: [ 'babel?presets[]=es2015' ]

		// customize as needed, see Configuration below
	  })
	]
};
