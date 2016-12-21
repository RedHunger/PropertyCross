var webpack = require('webpack');
module.exports={
    context: __dirname + '/app',
    entry: "./app.js",
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    watch: true,
    devServer: {inline: true},
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url' }
        ]
    }
}