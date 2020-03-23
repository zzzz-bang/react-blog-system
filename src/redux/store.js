import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import collapsedReducer from './reducer/collapsedReducer'
import rightReducer from './reducer/rightReducer'
import roleReducer from './reducer/roleReducer'
const reducer=combineReducers({
    iscollapsed:collapsedReducer,
    rolelist:roleReducer,
    rightlist:rightReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)))

export default store