import express from 'express'
import Home from './container/Home/index'
import React from 'react'
import {renderToString} from 'react-dom/server'

const app = express();
// 将home组件渲染成字符串，直接返回给浏览器，这样在浏览器可以查看到htmt内容 形成简易的服务端渲染
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

