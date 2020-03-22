import React, { Component } from 'react'
import User from '../usermanage/User'
import Manage from '../rightmanage/Manage'
import Role from '../rightmanage/Role'
import Right from '../rightmanage/Right'
import Notfound from '../notfound/Notfound'
import Home from '../home/Home'
import {
  Route,
  Switch,
  Redirect,
  // NavLink
} from 'react-router-dom'
import List from '../articlemanage/List'
import Preview from '../articlemanage/Preview'
import './DashBoard.css'
// import { Button } from 'antd';
import { Layout } from 'antd';

import SideMenu from './SideMenu'
import TopHeader from './TopHeader'
import Create from '../articlemanage/Create'
import Updated from '../articlemanage/Updated'
const { Content } = Layout;



export default class DashBoard extends Component {
  

  render() {
    var roleType=JSON.parse(localStorage.getItem('user')).roleType
    return (
        <Layout style={ {height:"100%"} }>
          <SideMenu></SideMenu>
          <Layout className="site-layout">
            <TopHeader></TopHeader>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path='/home' component={Home} />
                {
                    roleType===3?
                    <Route path='/user-manage/users' component={User} />:
                    null
                }
                <Route path='/article-manage/list' component={List} />
                <Route path='/article-manage/create' component={Create} />
                <Route path='/article-manage/updated/:id' component={Updated} />
                <Route path='/article-manage/preview/:id' component={Preview} />

                {
                  roleType===3?
                  <Route path='/right-manages' render={() => (
                    <Manage>
                      <Switch>
                        <Route path='/right-manages/roles' component={Role} />
                        <Route path='/right-manages/rights' component={Right} />
                        <Redirect from='/right-manages' to='/right-manages/roles' />
                      </Switch>
                    </Manage>
                  )} />:null
                }
                <Redirect from='/' to='/home' exact />
                <Route path='*' component={Notfound} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
    )
  }
}
