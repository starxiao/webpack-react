const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function(env, argv) {
    return {
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '',
            filename: env.prod ? '[name].[contenthash].js' : '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-react'
                                ],
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs: {
                                            version: 3,
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    auto: (resourcePath) => resourcePath.endsWith('.module.css'), //css文件匹配规则
                                    localIdentName: '[name]__[local]__[hash:base64:5]' //样式名转化规则
                                }
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [require('autoprefixer')()]
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use:{
                        loader: 'html-loader'
                    }
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use:{
                        loader: 'file-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]?[hash]'
                        }
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use:{
                        loader: 'file-loader'
                    }
                }
            ],
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../src'),
                '@pages': path.resolve(__dirname, '../src/pages'),
                '@components': path.resolve(__dirname, '../src/components'),
                '@commons': path.resolve(__dirname, '../src/commons'),
                '@static': path.resolve(__dirname, '../src/static'),
                '@store': path.resolve(__dirname, '../src/store')
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname,'../src/static/template.html'),
            }),
        ]
    }
}