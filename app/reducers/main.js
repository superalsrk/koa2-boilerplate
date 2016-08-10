import * as types from '../constants/ActionTypes';

const initState = {
   
        avgTime : '-1',
        bounceRate : '-1',
        totalVisitors : '-1',
        uniqueVisitors : '-1',
    
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
           
        default:
            return state;
    }
}

export default main;
