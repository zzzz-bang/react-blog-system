const collapsedReducer=(prevState=false,action)=>{
    console.log(prevState,action)
    let{type,payload}=action
    switch(type){
        case 'iscollapsed':
            return payload
        default:
            return prevState
    }
}
export default collapsedReducer