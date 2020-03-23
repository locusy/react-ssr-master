import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/" >首页</Link>
                <Link to="/login" >登录</Link>
            </div>
        )
    }
}

export default Header
