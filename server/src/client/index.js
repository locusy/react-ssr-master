import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../container/Home'

// ReactDOM.render(<Home />, document.getElementById("root"))

/**
 * 同构的原因只能用hydrate
 */
ReactDOM.hydrate(<Home />, document.getElementById("root"))