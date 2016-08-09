import $ from 'jquery';
import * as types from '../constants/ActionTypes';


const auth = (state = [], action) => {
    switch(action.type) {
        case types.AUTH_SUCCESS:
            console.log('reducer login success')
            return state;
        case types.AUTH_FAILED:
            console.log('reducer login failed')
            return state;
        default:
            return state;
    }
}

export default auth;

