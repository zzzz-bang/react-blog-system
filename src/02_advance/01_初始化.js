import React, { Component } from 'react'

export default class App extends Component {
    state={
        list:[]
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
        fetch('/test.json').then(res=>res.json()).then(res=>{
            // console.log(res.coming)
            this.setState({
                list:res.coming
            })
        })
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('compentDidupdate')
    }
    render() {
        console.log('render')
        return (
            <div>
                zbang
                {
                    this.state.list.map(item=><li key={item.id}>{item.nm}</li>)
                }
            </div>
        )
    }
}
