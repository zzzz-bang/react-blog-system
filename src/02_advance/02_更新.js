import React, { Component } from 'react'

export default class App extends Component {
    state={
        text:'22222'
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.text!==nextState.text){
            return true
        }
        return false
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    render() {
        console.log('render')
        return (
            <div>
                {this.state.text}
                <button onClick={()=>{
                    this.setState({
                        text:'666666'
                    })
                }}>click</button>
            </div>
        )
    }
}
