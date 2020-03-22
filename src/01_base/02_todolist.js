import React,{Component} from 'react'

class list extends Component{
    state={
        datalist:[111,222],
        mytext:''
    }
    render(){
        var objstyle={
            listStyle:'none'
        }
        return(
            <div>
                <input type='text' value={this.state.mytext} onChange={(e)=>{
                    console.log(e.target.value)
                    this.setState({
                        mytext:e.target.value
                    })
                }}/>
                {/* <input type="text" ref="mytext" value={this.state.mytext}/> */}
                <button onClick={this.handleClick}>add</button>
                {
                    this.state.datalist.map((item,index)=><li key={index} style={objstyle}>
                        {item}
                        <span onClick={this.handleDelete.bind(this,index)}>&times;</span>
                    </li>)
                }
            </div>
        )
    }
    handleClick=()=>{
        // console.log(this.refs.mytext.value)
        console.log(this.state.mytext)
        this.setState({
            datalist:[...this.state.datalist,this.state.mytext],
            mytext:""
        })
    }
    handleDelete=(index)=>{
        console.log(index)
        var newlist=[...this.state.datalist]
        newlist.splice(index,1)
        this.setState({
            datalist:newlist
        })
    }
}
export default list