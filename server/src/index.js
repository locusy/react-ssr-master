import express from 'express'
import Home from './container/Home/index'
import React from 'react'
import {renderToString} from 'react-dom/server'
const app = express();

// 虚拟dom是一个真实Dom的javascript对象映射
// ReactDOM.render(<Home/>, document.getElementById("root"))

// 客户端渲染：react代码在客户端运行，消耗的是浏览器的性能
// 服务端渲染弊端：react代码在服务器端运行，消耗的是服务器的性能，极大的消耗服务端资源
// 服务端渲染优势：1、首屏加载速度快 2、有利于seo

// 将home组件渲染成字符串，直接返回给浏览器，这样在浏览器可以查看到htmt内容 形成简易的服务端渲染
// renderToString只能将基本的信息转成字符串 点击事件等无法生效 所以需要同构
const content = renderToString(<Home />)

app.get('/', function(req, res) {
    res.send(
        `<html>
            <head>
                <link rel="shortcut icon" href="#" />
            </head>
            <body>
                ${content}
            </body>
        </html> `
    )
})

app.listen(2000, () => {
    console.log('server is listening at port 2000...')
})

