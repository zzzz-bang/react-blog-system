import React,{Component} from 'react'
import { Layout,Menu, Dropdown,Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
import {withRouter} from 'react-router'
import store from '../../redux/store'

const { Header } = Layout;

class TopHeader extends Component{
    state = {
        collapsed: false,
    };
    
    actionCreater=(collapsed)=>{
      return{
        type:'iscollapsed',
        payload:collapsed
      }
    }
    toggle = (collapsed) => {
      store.dispatch(this.actionCreater(collapsed))
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    render(){
      var rolename=JSON.parse(localStorage.getItem('user')).roleName
        const menu = (
            <Menu>
              <Menu.Item>
                <div>{rolename}</div>
              </Menu.Item>
              <Menu.Item>
                <div onClick={this.handleBack}>退出</div>
              </Menu.Item>
            </Menu>)
        return(
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })} */}
                {
                    this.state.collapsed?
                    <MenuUnfoldOutlined onClick={()=>{this.toggle(false)}} className='trigger'/>:
                    <MenuFoldOutlined onClick={()=>{this.toggle(true)}} className='trigger'/>
                }
                <div style={{float:'right',marginRight:'16px'}}>
                    <Dropdown overlay={menu}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </Header>
        )   
    }
    handleBack=()=>{
        console.log(111)
        localStorage.setItem('isLogin',false)
        localStorage.setItem('user',"")
        this.props.history.push('/login')
        // window.location.reload()
    }
}

export default withRouter(TopHeader)