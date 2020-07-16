import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../Reducer'
// import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducers,
    {},
    applyMiddleware(thunk)
    // composeWithDevTools(
    //     ...applyMiddleware(thunk),
    // )
    );
export default store;