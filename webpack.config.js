const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve('dist'),
        publicPath: "/",
        filename: 'Mybundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg|ico)?$/,
                use: [
                    {
                        loader: 'file-loader',

                    },
                ],
            },
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    }

};