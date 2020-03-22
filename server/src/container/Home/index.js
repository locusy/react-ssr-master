import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'

// 同构：一套react代码，在服务器端执行一次，再客户端执行一次

const Home = (props) => {
    return (
        <div>
            <Header />
            hello,{props.initState}
            <button onClick={() => alert(123)}>click</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        initState: state.initState
    }
}

export default connect(mapStateToProps)(Home)
