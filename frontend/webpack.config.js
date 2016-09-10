const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: `${__dirname}/src`,
	entry: ['babel-polyfill', './main'],
	output: {
		filename: 'bundle.js',
	},
	resolve: {
        root: path.resolve(__dirname, 'src'),
        extensions: ['', '.js', '.jsx'],
    },
	module: {
		loaders: [
			 {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                include: [
                    path.resolve(__dirname, 'src'),
                ],
            },
		],
	},
	 plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],	
    devServer: {
        historyApiFallback: true,
        port: 5000,
        proxy: {
            '/api': {
                target: 'http://localhost:7000/',
                secure: false,
            },
        },
    },
}