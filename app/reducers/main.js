import * as types from '../constants/ActionTypes';

const initState = {
   
        avgTime : '-1',
        bounceRate : '-1',
        totalVisitors : '-1',
        uniqueVisitors : '-1',
        uv : [],
        pv : [],
        legends : []
    
}


const main = (state = initState, action) => {
    switch(action.type) {
        case types.MAIN_RECEIVE_SUMMARY: {
            return Object.assign({}, state, {
                avgTime : action.data.avgTime,
                bounceRate : action.data.bounceRate,
                totalVisitors : action.data.totalVisitors,
                uniqueVisitors : action.data.uniqueVisitors,
            });
        }

        case types.MAIN_RECEIVE_LINECHART: {
            return Object.assign({}, state, {
                uv : action.data.uv,
                pv : action.data.pv,
                legends : action.data.legends
            })
        }
           
        default:
            return state;
    }
}

export default main;
