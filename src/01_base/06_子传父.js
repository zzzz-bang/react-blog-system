import React,{Component} from 'react'

class Navbar extends Component{
    render(){
        return(
            <div>
                <span style={{background:'pink'}}>navbar</span>
                <button onClick={this.handleClick}>创建删除</button>
            </div>
        )
    }
    handleClick=()=>{
        console.log(this.props.onevent)
        this.props.onevent()
    }
}

class List extends Component{
    state={
        datalist:['11111','222222','333333']
    }
    render(){
        return(
            <div>
                <ul style={{background:'red'}}>
                    {
                        this.state.datalist.map(item=><li key={item}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}

class App extends Component{
    state={
        isCreate:true
    }
    render(){     
        return(
            <div>
                app
                <Navbar onevent={()=>{
                    console.log("根组件触发")
                    this.setState({
                        isCreate:!this.state.isCreate
                    })
                }}></Navbar>
                {
                    this.state.isCreate?
                    <List></List>:null
                }
            </div>
        )
    }
}

export default App