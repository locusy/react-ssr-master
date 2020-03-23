import React from 'react'
import ReactDOM from 'react-dom'
// import Home from '../container/Home'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from './../routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'

const store = getClientStore()

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/* {routes} */}
                {renderRoutes(routes)}
            </BrowserRouter>
        </Provider>
    )
}

// ReactDOM.render(<Home />, document.getElementById("root"))

/**
 * 同构的原因只能用hydrate
 */
ReactDOM.hydrate(<App />, document.getElementById("root"))