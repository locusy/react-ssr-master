import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import home from './home'

const reducer = combineReducers({
    home
})

export const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
    const initialState = window.context.state
    return createStore(reducer, initialState, applyMiddleware(thunk))
}
