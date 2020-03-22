import React,{Component} from 'react'

var observer ={
    list:[],
    subscribe(data){
        console.log(data)
        this.list.push(data)
    },
    dispatch(data){
        this.list.forEach(item=>{
            item(data)
        })
    }
}
class User extends Component{
    componentWillMount(){
        console.log('componentWillMount,user--订阅完成')
        observer.subscribe((data)=>{
            console.log('user--更新完成',data)
        })
    }
    render(){
        return(
            <div>
                user---公众号订阅者1
            </div>
        )
    }
}
class User1 extends Component{
    componentWillMount(){
        console.log('componentWillMount,user--订阅完成')
        observer.subscribe((data)=>{
            console.log('user1--更新完成',data)
        })
    }
    render(){
        return(
            <div>
                user---公众号订阅者1
            </div>
        )
    }
}

class Maker extends Component{
    render(){
        return(
            <div>
                <span>maker---公众号更新</span>
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }
    handleClick=()=>{
        observer.dispatch('maker--发布新的公众号内容')
    }
}


class App extends Component{
    render(){
        return(
            <div>
                app
                <User></User>
                <User1></User1>
                <Maker></Maker>
            </div>
        )
    }
}
export default App