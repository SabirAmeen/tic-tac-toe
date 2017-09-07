module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname + '/app/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: ['style', 'css']
            },
            {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    }
};