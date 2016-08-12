module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react', 'electron']
            }
        }]
    }
};
