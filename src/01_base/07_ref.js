import React,{Component} from 'react'

class Input extends Component{
    state={
        mytext:""
    }

    reset=()=>{
        this.setState({
            mytext:""
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.mytext} onChange={(e)=>{
                    console.log(e.target.value)
                    this.setState({
                        mytext:e.target.value
                    })
                }}/>
                <span>子组件input</span>
            </div>
        )
    }
}


class App extends Component{
    render(){
        return(
            <div>
                app
                <Input ref="mytext"></Input>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
    handleClick=()=>{
        console.log(this.refs.mytext)
        this.refs.mytext.reset()
    }
    
}
export default App