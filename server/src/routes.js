import React from 'react';
import { Route } from 'react-router-dom';
import Home from './container/Home'

/**
 * 路由配置需要在客户端和服务端 都跑一遍
 */
export default (
    <div>
        <Route path="/" component={Home}></Route>
    </div>
)
