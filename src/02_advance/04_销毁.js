import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return(
            <div>
                Navbar
                <button onClick={()=>{
                    console.log(this.props.onevent)
                    this.props.onevent()
                }}>click</button>
            </div>
        )
    }
}
class List extends Component{
    
    state={
        list:[1111,2222,33333]
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.list.map(item=><li key={item}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}
export default class App extends Component {
    state={
        isCreated:true
    }
    handleChange=()=>{
        this.setState({
            isCreated:!this.state.isCreated
        })
    }
    render() {
        return (
            <div>
                app
                <Navbar onevent={this.handleChange}></Navbar>
                {
                    this.state.isCreated?<List></List>:null
                }
            </div>
        )
    }
}
