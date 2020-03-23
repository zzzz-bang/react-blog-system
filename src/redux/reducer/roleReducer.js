const roleReducer=(prevState=[],action)=>{
    let{type,payload}=action
    switch(type){
        case 'setRole':
            var newState=[...prevState,...payload]
            newState.rolelist=payload
            return newState
        default:
            return prevState
    }
    
}
export default roleReducer