const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        conductor: './src/conductor/index.js'
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new CopyWebpackPlugin([
            { from: 'src/widgets' }
        ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}