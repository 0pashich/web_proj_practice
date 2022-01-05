const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    // mode: 'development',
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
                    // MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]

                // options: {
                //     name: '[path][name].[ext]'
                // }
            },
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            // }
        ]
    },
    plugins: [
        new HtmlPlugin({ template: resolve(__dirname, 'src', 'index.html') })
        // new MiniCssExtractPlugin({
        //     filename: '[name].[contenthash].css'
        // }),
        // new BundleAnalyxerPlugin()
    ]
}