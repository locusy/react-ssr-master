const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    // 客户端(浏览器端)的nodejs代码webpack会打包到bundle.js，而服务器端的不用
    // 以下配置代表打包的是服务器端的代码，会保留nodejs代码
    target: 'node',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
                // npm install babel-loader babel-core等
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    // npm install babel-preset-react babel-preset-stage-0
                    presets: ['react', 'stage-0', ['env', {
                        // 在打包编译的过程中，babel会兼容所有主流浏览器的最新2个版本
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]]
                }
            }
        ]
    }
}