import { combineReducers } from 'redux'

import { HELLO_WORLD } from '../constants/ActionTypes'



const helloworld = (state = {message : 'Hello'}, action) => {

    switch (action.type) {
        case HELLO_WORLD:
            console.log('hello world action')
            return Object.assign({}, state, {message : 'hello wolrd'})
        default:
            return state 
    }

}

const rootReducer = combineReducers({
     helloworld
})

export default rootReducer