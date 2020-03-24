import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import clientRequest from './../client/request'
import serverRequest from './../server/request'
import home from './home'

const reducer = combineReducers({
    home
})

export const getStore = () => {
    // 改变服务端store的内容，一定要使用serverRequest 在action里面请求数据的时候可以取到这个axios实例
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverRequest)))
}

export const getClientStore = () => {
    const initialState = window.context.state
    // 改变客户端store的内容，一定要使用clientRequest
    return createStore(reducer, initialState, applyMiddleware(thunk.withExtraArgument(clientRequest)))
}
