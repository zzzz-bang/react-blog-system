import React,{Component} from 'react'

class setstate extends Component{
    state={
        count:1
    }
    render(){
        return(
            <div>
                {this.state.count}
                {/* <button onClick={this.handleAdd}>add</button> */}
                <button onClick={this.handleAdd1}>add1</button>
                <button onClick={this.handleAdd2}>add2</button>
            </div>
        )
    }
    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count,'第二个参数回调函数')
        })
        console.log(this.state.count)
        
    }
    handleAdd1=()=>{
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            count:this.state.count+1
        })
    }
    handleAdd2=()=>{
        this.setState((prevstate)=>{
            return{
                count:prevstate.count+1
            }
        })
        this.setState((prevState)=>{
            console.log(prevState)
            return{
                count:prevState.count+1
            }
        })
    }
}
export default setstate