module.exports={
    context: __dirname + '/app',
    entry: "./app.js",
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    watch: true,
}