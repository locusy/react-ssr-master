import React from 'react'
import { Button } from 'antd'

// 同构：一套react代码，在服务器端执行一次，再客户端执行一次

const Home = () => {
    return (
        <div>
            首页1234
            <Button onClick={() => alert(123)}>click</Button>
        </div>
    )
}
export default Home
