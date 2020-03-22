import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import React from 'react'
import Login from '../view/login/Login'
import DashBoard from '../view/dashboard/DashBoard'

// class BlogRouter extends Component{
//     render(){
//         return(
//         <HashRouter>
//             <Route path='/home' component={Home}/>
//             <Route path='/login'component={Login}></Route>
//         </HashRouter>
//         )
//     }
// }
const BlogRouter=()=>(
    <Router>
        <Switch>
            <Route path='/login' component={Login}/>
            {/* {
                localStorage.getItem('isLogin')==='true'?
                <Route path='/' component={DashBoard}/>:
                <Redirect to='/login'/>
            } */}
            <Route path='/' render={()=>(
                localStorage.getItem('isLogin')==='true'?
                <DashBoard></DashBoard>:
                <Redirect to='/login'/>
            )}/>
           
        </Switch>
    </Router>
)
export default BlogRouter