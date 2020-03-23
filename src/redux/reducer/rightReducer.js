const rightReducer=(prevState=[],action)=>{
    let{type,payload}=action
    switch(type){
        case 'setRight':
            var newState=[...prevState,...payload]
            return newState  
        default:
            return prevState
    }
    
}
export default rightReducer