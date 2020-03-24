import axios from 'axios'
import { constant } from './constant';
// import clientRequest from './../../client/request'
// import serverRequest from './../../server/request'

const homeList = data => ({
    type: constant.GET_HOME_LIST,
    data
})

export const ActionGetList = (isServer) => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get("/api").then(res => {
            dispatch(homeList(res.data))
        })

        // let request = isServer ? serverRequest : clientRequest
        // return request.get("/api").then(res => {
        //     dispatch(homeList(res.data))
        // })

        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         dispatch(homeList([123, 456, 7888]))
        //         resolve()
        //     }, 1000)
        // })
    }
}