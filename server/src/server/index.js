import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import routes from './../routes'
import { getStore } from '../store'
import { render } from './utils'
// import Home from '../container/Home/index'
const app = express();

/**
 * 只要是在express服务器下请求资源文件，比如<script src="index.js"></script>，就会去根目录找public文件夹
 */
app.use(express.static('public'))

// NodeJS中间层代理
// 客户端如果访问 /api/list.json 则req.url = list.json
// 那么相当于代理到localhost:8080/ssr/api/list.json
app.use('/api', proxy('localhost:8080', {
    proxyReqPathResolver: function (req) {
      return '/ssr/api' + req.url
    }
}))

/**
 * 虚拟dom是一个真实Dom的javascript对象映射
 * ReactDOM.render(<Home/>, document.getElementById("root"))
 */

 /**
  * 客户端渲染：react代码在客户端运行，消耗的是浏览器的性能
  * 服务端渲染弊端：react代码在服务器端运行，消耗的是服务器的性能，极大的消耗服务端资源
  * 服务端渲染优势：1、首屏加载速度快 2、有利于seo
  */

/**
 * 将home组件渲染成字符串，直接返回给浏览器，这样在浏览器可以查看到html内容 形成简易的服务端渲染
 * renderToString只能将基本的信息转成字符串 点击事件等无法生效 所以需要同构
 */
// const content = renderToString(<Home />)

app.get('*', function(req, res) {
    // const content = renderToString(
    //     <StaticRouter location={req.path} context={{}}>
    //         {Routes}
    //     </StaticRouter>
    // )
    // res.send(
    //     `<html>
    //         <head>
    //             <link rel="shortcut icon" href="#" />
    //         </head>
    //         <body>
    //             <div id="root">${content}</div>
    //             <script src="index.js"></script>
    //         </body>
    //     </html> `
    // )

    /**
     *  这里用getStore函数而不是 直接使用的store 确保每次进来不同页面的时候获取的store唯一
     */
    const store = getStore()

    const promises = []
    /**
     * 将store里面的异步数据也在页面可以渲染
     */
    // 根据路由的路径，将路由对应的组件放在matchRoutes里面
    const matchedRoutes = matchRoutes(routes, req.path)
    // console.log(matchedRoutes)
    // 让matchRoutes里面所有的组件，对应的loadData方法执行一次，来往store里面加数据
    matchedRoutes.forEach(item => {
        // console.log(item.route.component, 'item')
    
        if(item.route.component.loadData) {
            const promise = new Promise((resolve, reject) => {
                item.route.component.loadData(store).then(resolve).catch(resolve)
            })
            promises.push(promise)
        }
    })

    // console.log('promises', promises)
    // 由于是异步action，所以需要等所有promise都执行完成，数据获取完成后渲染页面
    Promise.all(promises).then(() => {
        // console.log('getState', store.getState())

        const context = {}
        const html = render(store, routes, req, context)

        // console.log(context)
        // 如果context.NOT_FOUNED存在 则访问的是NotFound组件
        if(context.NOT_FOUNED) {
            res.status = 404
            res.send(html)

            // 如果访问重定向的页面Translation，context里面会有重定向的信息，可以用来做服务端渲染
        } else if(context.action == 'REPLACE'){
            res.redirect(301, context.url)
        } else {
            res.send(html)
        }
    }).catch(() => {
        res.send('request error')
    })
})

app.listen(2000, () => {
    console.log('server is listening at port 2000...')
})

