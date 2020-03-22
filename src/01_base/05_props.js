import React ,{Component} from 'react'
import MyPropType from 'prop-types'
// console.log(MyPropType)
class Navbar extends Component{
    static propTypes={
        myshow:MyPropType.bool
    }
    static defaultProps={
        myshow:true
    }


    render(){
        return(
            <div>
                <button>list</button>
                <span>navbar--{this.props.mytitle}</span>
                {
                    this.props.myshow?<button>home</button>:null
                }
                
            </div>
        )
    }
}
// Navbar.propTypes={
//     myshow:MyPropType.bool
// }

class app extends Component{
    render() {
        return (
            <div>
                <Navbar mytitle="home" myshow={false}></Navbar>
                <Navbar mytitle="list" ></Navbar>
                <Navbar mytitle="shopcar" ></Navbar>
            </div>
        )
    }   
}
export default app