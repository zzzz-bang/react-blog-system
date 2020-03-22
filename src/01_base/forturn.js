import React,{ Component} from 'react'
import './css/index.css'
class forturn extends Component{
    state={
        datalist:['111','222']
    }
    render(){
        var objstyle = {
            margin:"10px",
        }
    // var newlist=this.state.datalist.map(item=><li key={item}>{item}</li>)
        return(
            <div id="box" style={{borderRadius:20}}>
                {/* <div style={objstyle}>11111111</div> */}
                <input type="text" ref="mytext"/>
                <button onClick={this.handleClick.bind(this)}>click</button>
                {
                    this.state.datalist.map((item,index)=>
                        <li key={item+index} style={objstyle}>
                            {index+1}--{item}
                            <button onClick={this.handleDelete.bind(this,index)}>删除</button>
                        </li>)
                }
                {/* {newlist} */}
            </div>
        )
    }
    handleClick(){
        console.log(this.refs.mytext.value)
        this.state.datalist.push(this.refs.mytext.value)
        this.setState({
            datalist:this.state.datalist
        })
    }
    handleDelete(index){
        console.log(index)
        this.state.datalist.splice(index,1)
        this.setState({
            datalist:this.state.datalist
        })
    }
}
export default forturn

