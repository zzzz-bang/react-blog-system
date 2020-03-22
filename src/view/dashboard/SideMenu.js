import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import Menus from '../../router/Menus';
import {withRouter} from 'react-router'
import store from '../../redux/store'
const { Sider } = Layout;
const { SubMenu } = Menu;

class SideMenu extends Component {
    state = {
        collapsed: false,
    };
    componentDidMount(){
        this.unscirbe=store.subscribe(()=>{
            console.log('订阅',store.getState())
            this.setState({
                collapsed:store.getState().iscollapsed
            })
        })
    }
    componentWillUnmount(){
        this.unscirbe()
    }
    render() {
        var pathname=this.props.location.pathname;
        var openname=['/'+pathname.split('/')[1]]
        // var SelectedKeys = [pathname]
        // console.log(pathname.split('/'))
        return (
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline"  onClick={this.handleClick}
                defaultOpenKeys={openname} selectedKeys = {pathname}>
                    
                    {this.renderItem(Menus)}
                   
                </Menu>
            </Sider>
        )
    }
    handleClick=(obj)=>{
        this.props.history.push(obj.key)
        console.log(this.props.location)
    }
    renderItem = (Menus) => {
        // console.log(Menus)
        var roleType=JSON.parse(localStorage.getItem('user')).roleType
        return (
            Menus.map(item => {
                if (item.children) {
                    // console.log(item.children)
                    if(item.permission>roleType){
                        return null
                    }
                   return(
                    <SubMenu
                    key={item.path}
                    title={
                        <span>
                            <item.icon />
                            <span>{item.title}</span>
                        </span>
                    }
                >
                    {this.renderItem(item.children)}
                </SubMenu>
                   )
                } else {
                    if(item.permission>roleType){
                        return null
                    }
                    return(
                        <Menu.Item key={item.path}>
                        <item.icon />
                        <span>{item.title}</span>
                        </Menu.Item>
                    )
                }
            })
        )
    }
}
export default withRouter(SideMenu)