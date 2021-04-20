const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        watchContentBase: true,
        index: 'index.html',
        open: true
    }
};
