var webpack = require('webpack');
var path = require("path");
module.exports={
    entry: "./app/app.js",
    output: {
        path: path.resolve(__dirname, "app"),
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