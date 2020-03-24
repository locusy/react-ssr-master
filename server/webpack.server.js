const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')

const serverConfig = {
    // 客户端(浏览器端)的nodejs代码webpack会打包，而服务器端的不用
    // 以下配置代表打包的是服务器端的代码，会保留nodejs写法的代码，比如require,module.exports
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: ['isomorphic-style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    }
                }]
            }
        ]
    }
}

module.exports = merge(config, serverConfig)