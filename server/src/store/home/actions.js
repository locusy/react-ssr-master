import { constant } from './constant';

const homeList = data => ({
    type: constant.GET_HOME_LIST,
    data
})

export const ActionGetList = () => {
    return (dispatch) => {
        // 处理异步请求
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(homeList([123, 456, 7888]))
                resolve()
            }, 1000)
        })
    }
}