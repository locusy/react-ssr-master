import React from 'react';
import { Route } from 'react-router-dom';
import Home from './container/Home'
import Login from './container/Login'

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
        component: Home,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    }
]

export default routes

