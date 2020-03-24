import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'

export const render = (store, routes, req, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {/* {routes.map(route => (
                        <Route {...route} />
                    ))} */}
                    {renderRoutes(routes)}
                </div>
            </StaticRouter>
        </Provider>
    )

    // 即使禁用页面的js 页面依然有服务端渲染的样式
    const cssStr = context.css ? context.css : ''

    return (
        `<html>
            <head>
                <link rel="shortcut icon" href="#" />
                <style>${cssStr}</style>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    // 数据注水：将服务端渲染的数据注入这里
                    // 以便于客户端进行数据脱水，无需请求，能够取到store异步数据并直接渲染到页面
                    window.context = {
                        state: ${JSON.stringify(store.getState())}
                    }
                </script>
                <script src="index.js"></script>
            </body>
        </html>`
    )

}