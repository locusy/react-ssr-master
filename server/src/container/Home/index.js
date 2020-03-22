import React from 'react'
import Header from '../../components/Header'

// 同构：一套react代码，在服务器端执行一次，再客户端执行一次

const Home = () => {
    return (
        <div>
            <Header />
            首页1234
            <button onClick={() => alert(123)}>click</button>
        </div>
    )
}
export default Home
