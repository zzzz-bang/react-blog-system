import React, { Component } from 'react'
  
 class App extends Component {
     state={
         datalist:['aaa','bbb']
     }
    render() {
    var newlist=this.state.datalist.map(item=><li key={item}>{item}</li>)
        return (
            <div id='box'>
                <input type="text" ref="mytext"/>
                <button onClick={this.handleClcik}>add</button>
                {newlist}
            </div>
        )
        
    }
    handleClcik=()=>{
        this.state.datalist.push(this.refs.mytext.value)
        this.setState({
            datalist:this.state.datalist
        })
    }
}

export default App