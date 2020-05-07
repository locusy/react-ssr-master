import React, { Component } from 'react'
import { Redirect } from "react-router-dom";


export default class Translation extends Component {
    render() {
        return (
            <div>
                <Redirect to="/login" />
            </div>
        )
    }
}
