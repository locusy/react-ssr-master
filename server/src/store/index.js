import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

const reducer = function(state = {initState: 'initState'}, action) {
    return state
}
const getStore = () => {
    createStore(reducer, applyMiddleware(thunk))
}

export default getStore