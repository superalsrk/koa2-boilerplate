import * as types from '../constants/ActionTypes';

import 'whatwg-fetch';

export function fetchSummaryData() {
    return dispatch => {
        fetch('/mock/summary',  {
                credentials: 'same-origin'
            })
            .then( tresponse => {
                return tresponse.json()
            })
            .then( tjson => {

                dispatch({
                    type : types.MAIN_RECEIVE_SUMMARY,
                    data : tjson.data
                })
            })
    }
}