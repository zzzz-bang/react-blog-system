import React, { Component } from 'react'
import Particles from 'react-particles-js';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';
import axios from 'axios'
export default class Login extends Component {
    render() {
        
            const onFinish = values => {
              console.log('Received values of form: ', values);
            //   axios.get('http://localhost:8000/users').then(res=>{
            //       console.log(res.data[0])
            //       if(values.username===res.data[0].username&&+values.password===res.data[0].password){
            //             localStorage.setItem("isLogin",true)
            //             this.props.history.push('/')
            //       }else{
            //           alert('账号或密码错误')
            //       }
            //   })
              axios.get(`http://localhost:8000/users?username=${values.username}&password=${values.password}&roleState=true`).then(res=>{
                  console.log(res.data)
                  if(res.data.length!==0){
                        localStorage.setItem("isLogin",true);
                        localStorage.setItem("user",JSON.stringify(res.data[0]))
                        this.props.history.push('/')
                  }else{
                    alert('账号或密码错误')
                  }
              })
            
            //   axios.get('http://localhost:8000/list/').then(res=>{
            //       console.log(res.data)
            //   })
            //   axios.post('http://localhost:8000/list/',{
            //       title:'dddd'
            //   }).then(res=>{
            //       console.log(res)
            //   })

                // axios.put('http://localhost:8000/list/1',{
                //     title:'修改'
                // }).then(res=>{
                //     console.log(res.data)
                // })

                // axios.delete('http://localhost:8000/list/4').then(
                //     res=>{
                //         console.log(res.data)
                //     }
                // )
            };

        return (
            <div style={{ background: 'rgb(35,36,65)', height: '100%' }}>
                <Form
                    name="normal_login"
                    className="login-form"
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>

                <Particles />
            </div>
        )
    }
}
