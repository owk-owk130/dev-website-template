const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'js/main': './dev/src/js/main.js'
    },
    output: {
        filename: '[name].js',
        library: ['com', 'example'],
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    'useBuiltIns': 'usage',
                                    'targets': '> 0.25%, not dead'
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|eot|svg|woff|ttf|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 20000,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    devtool: 'inline-source-map'
};
