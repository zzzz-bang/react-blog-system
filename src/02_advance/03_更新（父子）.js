import React, { Component } from 'react'

class Child extends Component{
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps',nextProps)
    }
    render(){
        return(
        <div>child--{this.props.myid}</div>
        )
    }
}

export default class App extends Component {
    state={
        text:4567
    }
    render() {
        console.log('render')
        return (
            <div>
                <Child myid={this.state.text}></Child>
                {
                    this.state.text
                }
                <button onClick={()=>{
                    this.setState({
                        text:4321
                    })
                }}>click</button>
            </div>
        )
    }
}
