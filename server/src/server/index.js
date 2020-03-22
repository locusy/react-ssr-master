import express from 'express'
import { render } from './utils'
// import Home from '../container/Home/index'
const app = express();

/**
 * 只要是在express服务器下请求资源文件，比如<script src="index.js"></script>，就会去根目录找public文件夹
 */
app.use(express.static('public'))

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
 * 将home组件渲染成字符串，直接返回给浏览器，这样在浏览器可以查看到htmt内容 形成简易的服务端渲染
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

    // 使用封装后的render函数
    res.send(render(req))
})

app.listen(2000, () => {
    console.log('server is listening at port 2000...')
})

