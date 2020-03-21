import React from 'react'
import ReactDOM from 'react-dom'
// import Home from '../container/Home'
import { BrowserRouter } from 'react-router-dom'
import Routes from './../routes'

const App = () => {
    return (
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
    )
}

// ReactDOM.render(<Home />, document.getElementById("root"))

/**
 * 同构的原因只能用hydrate
 */
ReactDOM.hydrate(<App />, document.getElementById("root"))