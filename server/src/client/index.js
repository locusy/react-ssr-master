import React from 'react'
import ReactDOM from 'react-dom'
// import Home from '../container/Home'
import { BrowserRouter } from 'react-router-dom'
import Routes from './../routes'
import { Provider } from 'react-redux'
import getStore from '../store'

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                {Routes}
            </BrowserRouter>
        </Provider>
    )
}

// ReactDOM.render(<Home />, document.getElementById("root"))

/**
 * 同构的原因只能用hydrate
 */
ReactDOM.hydrate(<App />, document.getElementById("root"))