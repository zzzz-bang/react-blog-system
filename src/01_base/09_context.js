import React, { Component} from 'react'
const GlobalContext=React.createContext()
class Child1 extends Component{
    render(){
        return(
            <GlobalContext.Consumer>
                {
                    context=>(
                    <div>child1--{context.text}</div>
                    )
                }
            </GlobalContext.Consumer>
        )
    }
}
class Child2 extends Component{
    render(){
        return(
            <GlobalContext.Consumer>
                {
                    context=>(
                    <div>
                        child2--{context.call}
                        <button onClick={()=>{this.handleClick(context)}}>child2问候</button>
                    </div>
                    )
                }
            </GlobalContext.Consumer>
        )
    }
    handleClick=(context)=>{
        context.changeText('child2问候')
    }
}
class Child3 extends Component{
    render(){
        return(
            <div>child3</div>
        )
    }
}
export default class App extends Component {
    state={
        text:'11111'
    }
    changeText=(data)=>{
        this.setState({
            text:data
        })
    }
    render() {
        return (
            <GlobalContext.Provider value={{
                mes:'短信服务',
                call:'电话服务',
                text:this.state.text,
                changeText:this.changeText,
            }}>
                <div>
                    <Child1></Child1>
                    <Child2></Child2>
                    <Child3></Child3>
                </div>
            </GlobalContext.Provider>
        )
    }
}
