import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import Menus from '../../router/Menus';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
const { Sider } = Layout;
const { SubMenu } = Menu;

class SideMenu extends Component {
    render() {
        var pathname=this.props.location.pathname;
        var openname=['/'+pathname.split('/')[1]]
        // var SelectedKeys = [pathname]
        // console.log(pathname.split('/'))
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
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
const mapStatefromProps=(state)=>{
    return{
        collapsed:state.iscollapsed
    }
}

export default withRouter(connect(mapStatefromProps)(SideMenu))