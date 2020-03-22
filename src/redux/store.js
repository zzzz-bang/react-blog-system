import {createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
const reducer=(prevState={
    iscollapsed:false,
    rolelist:[],
    rightlist:[]
},action)=>{
    console.log(prevState,action)
    let{type,payload}=action
    switch(type){
        case 'iscollapsed':
            var newState={...prevState}
            newState.iscollapsed=payload
            return newState
        case 'setRole':
            var newState1={...prevState}
            newState1.rolelist=action.payload
            return newState1
        case 'setRight':
            var newState2={...prevState}
            newState2.rightlist=action.payload
            return newState2  
        default:
            return prevState
    }
    
}

const store=createStore(reducer,applyMiddleware(reduxThunk,reduxPromise))

export default store