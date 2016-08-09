import * as types from '../constants/ActionTypes';
import $ from 'jquery';
import history from '../store/history';

export function submitForm(authinfo) {
    console.log("AUTH LOGIN Action", authinfo)
    return {
        type : types.AUTH_LOGIN,
        authinfo
    }
}

export function authUser(authinfo) {
    return dispatch => {
        $.ajax('/auth/login', {
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(authinfo),
                async : true,
                success: function(data, status, xhr) {
                    if(data.status == 400) {
                        alert('Login errro, username/password is test/test')
                        dispatch(authFailed())
                    } else {
                        dispatch(authSuccess())
                        history.pushState(null, '/main')
                    }
                },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true
        });

       
    }
}

export function authSuccess() {
    return {
        type : types.AUTH_SUCCESS
    }
}

export function authFailed() {
    return {
        type : types.AUTH_FAILED
    }
}



