import { constant } from './constant';

const initState = {
    name: 'locusy',
    list: []
}

export function reducer(state = initState, action) {
    switch(action.type) {
        case constant.GET_HOME_LIST: 
            return {
                ...state,
                list: action.data
            }
        default:
            return state
    }
}