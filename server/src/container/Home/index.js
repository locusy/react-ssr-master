import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionGetList } from './../../store/home/actions';
import styles from './style.css'

// 同构：一套react代码，在服务器端执行一次，再客户端执行一次
class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        // 只有服务端才有this.props.staticContext和styles._getCss() 因为服务端用的是isomorphic-style-loader
        // console.log(this.props.staticContext, styles._getCss())
        if(this.props.staticContext) {
            this.props.staticContext.css = styles._getCss()
        }
    }

    componentDidMount() {
        // 使用数据注水后无需再调用action，页面的数据直接从window.context拿
        // 但是因为react服务端渲染只是网站的第一个页面的渲染，如果第一次进入的是login页面，那么home页的这个数据是取不到的
        // 但是第一次进入的页面是home页，那么这里可以取到服务端的数据，无需再请求一次，所以采取折衷，如果没有数据才请求
        if(!this.props.list.length) {
            this.props.getList()
        }
    }

    render() {
        return (
            <div className={styles.wrap}>
                {this.props.list.map(item => (item))}
                <br/>
                hello,{this.props.name}
                <button onClick={() => alert(123)}>click</button>
            </div>
        )
    }
}

Home.loadData = (store) => {
    // 这个函数负责在服务端渲染之前 把这个路由需要的数据提前加载好
    // 服务端运行的代码传true,但是使用了thunk.withExtraArgument()后就不需要传了
    return store.dispatch(ActionGetList(true))
}

const mapStateToProps = (state) => ({
    name: state.home.name,
    list: state.home.list
})

const mapStateToDispatch = (dispatch) => ({
    getList: () => dispatch(ActionGetList())
})

export default connect(mapStateToProps, mapStateToDispatch)(Home)
