import {AUTH_LOGIN} from '../constants/ActionTypes';


export const submitForm = (authinfo) => {

    console.log("AUTH LOGIN Action", authinfo)
    return {
        type : AUTH_LOGIN,
        authinfo
    }
}