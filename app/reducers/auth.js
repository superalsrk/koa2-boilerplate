import $ from 'jquery';
import {AUTH_LOGIN, AUTH_LOGOUT} from '../constants/ActionTypes';


const auth = (state = [], action) => {

    console.log(action)
    switch(action.type) {
        case AUTH_LOGIN:
            $.ajax('/auth/login', {
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(action.authinfo),
                async : true,
                success: function(data, status, xhr) {
                    if(data.status == 400) {
                        alert('Login errro, username/password is test/test')
                    } else {
                        window.location.hash='main'
                    }
                },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true
            });
            console.log('AUTH LOGIN Reducer')
            return state
        default:
            return state
    }
}

export default auth;

