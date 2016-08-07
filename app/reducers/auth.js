import {AUTH_LOGIN, AUTH_LOGOUT} from '../constants/ActionTypes';


const auth = (state = [], action) => {
    switch(action.type) {
        case AUTH_LOGIN:
            console.log('AUTH LOGIN Reducer')
            return state
        default:
            return state
    }
}

export default auth;

