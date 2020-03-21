module.exports = {
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