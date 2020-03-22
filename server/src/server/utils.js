import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from './../routes'

export const render = (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
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