import React from 'react';
import { Route } from 'react-router-dom';
import App from './App'
import Home from './container/Home'
import Login from './container/Login'
import NotFound from './container/NotFound'

/**
 * 路由配置需要在客户端和服务端 都跑一遍
 */
// export default (
//     <div>
//         <Route path="/" exact component={Home}></Route>
//         <Route path="/login" exact component={Login}></Route>
//     </div>
// )

const routes = [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/login',
                component: Login,
                exact: true
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
]

export default routes

