import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState)
    return store
}