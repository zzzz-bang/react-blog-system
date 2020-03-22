import React ,{Component} from 'react'
import './css/index.css'
class hidden extends Component{
    state={
        ishidden:false,
        isCreate:true
    }
    render(){
        return(
            <div>
                <span className={this.state.ishidden?"active":""}>2222222</span>
                <button onClick={()=>{
                    this.setState({
                        ishidden:!this.state.ishidden
                    })
                }}>隐藏显示</button>
                {
                    this.state.isCreate?
                    <div>创建</div>:null
                }
                <button onClick={()=>{
                    this.setState({
                        isCreate:!this.state.isCreate
                    })
                }}>create</button>
            </div>
        )
    }
}
export default hidden