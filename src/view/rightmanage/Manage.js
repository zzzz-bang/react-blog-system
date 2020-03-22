import React, { Component } from 'react'
// import {Route} from 'react-router-dom'
// import Role from './Role'
// import Right from './Right'
import { Tabs } from 'antd';
import {withRouter} from 'react-router'

const { TabPane } = Tabs;
class Manage extends Component {
    callback=(key)=>{
        console.log(key,this.props);
        this.props.history.push(key)
    }
    render() {
        return (
            <div>
                <Tabs activeKey={this.props.location.pathname} onChange={this.callback}>
                    <TabPane tab="角色列表" key="/right-manages/roles">
                        {/* {this.props.children} */}
                    </TabPane>
                    <TabPane tab="权限列表" key="/right-manages/rights">
                        
                    </TabPane>
                </Tabs>
                {this.props.children}
                {/* <Route path='/right-manage/roles' component={Role}/>
                <Route path='/right-manage/rights' component={Right}/> */}
            </div>
        )
    }
}
export default withRouter(Manage)