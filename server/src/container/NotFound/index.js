import React, { Component } from 'react'


export default class NotFound extends Component {
    componentWillMount() {
        // 只有服务端才有 在render之前context会自动加上NOT_FOUNED属性
        if(this.props.staticContext) {
            this.props.staticContext.NOT_FOUNED = true
        }
    }

    render() {
        return (
            <div>
                404...页面丢失啦
            </div>
        )
    }
}
