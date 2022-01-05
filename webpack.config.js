const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {

        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',

                        options: {
                            compress: {
                                webp: true,
                                mode: 'high', // 'lossless', 'low'
                                gifsicle: true,
                                disableOnDevelopment: false,
                            },
                            outputPath: 'image',
                        }
                    }
                ]

            },
            {
                test: /\.(wav|mp3)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'audio',
                    name: '[name].[contenthash].[ext]'
                }
            },
            {
                test: /\.(ogv|mp4)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'video',
                    name: '[name].[contenthash].[ext]'
                }
            },
        ]
    },
    plugins: [
        new HtmlPlugin({ template: resolve(__dirname, 'src', 'index.html') })
    ]
}