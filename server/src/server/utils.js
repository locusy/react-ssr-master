import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './../routes'
import getStore from '../store'

export const render = (req) => {

    const content = renderToString(
        /**
         *  这里用getStore函数而不是 直接返回的store 确保每次进来不同页面的时候获取的store唯一
         */
        <Provider store={getStore()}>
            <StaticRouter location={req.path} context={{}}>
                {Routes}
            </StaticRouter>
        </Provider>
    )
    return (
        `<html>
            <head>
                <link rel="shortcut icon" href="#" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="index.js"></script>
            </body>
        </html> `
    )
}