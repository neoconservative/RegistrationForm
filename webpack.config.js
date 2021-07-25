const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'eval-source-map',
    devServer: {
        writeToDisk: true,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.m?ts|tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 [
                    //                     "autoprefixer",
                    //                     {
                    //                         // Options
                    //                     },
                    //                 ],
                    //             ],
                    //         },
                    //     },
                    //     },
                    // {
                    //     loader: 'postcss-loader',
                        // options: {
                        //     plugins: () => [require('autoprefixer')({
                        //         'browsers': ['> 1%', 'last 2 versions']
                        //     })],
                        // }
                    // },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.css'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
};