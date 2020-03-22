import React, { Component } from 'react'
import { Table, Button, Switch, Modal, Form, Input ,Select} from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

import axios from 'axios'

const { Option } = Select;
export default class User extends Component {
    componentDidMount() {
        axios.get('http://localhost:8000/users').then(res => {
            console.log(res.data)
            this.setState({
                datalist: res.data
            })
        })
        // axios.get('http://localhost:8000/roles').then(res => {
        //     this.setState({
        //         roleList:res.data
        //     })
        //     var list=this.state.roleList.map(item=>item.roleName)
        
        //     // this.state.roleList.map(item=>{
        //     //     item.roleName.map(data=>data)
        //     // })
        // })
    }
    state = {
        roleList:[],
        columns: [
            {
                title: '用户名称',
                dataIndex: 'roleName',
                key: 'roleName',
            },
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '用户状态',
                roleState: 'roleState',
                key: 'roleState',
                render: (item) => {
                    return <Switch defaultChecked={item.roleState} disabled={item.default} 
                    onChange={(checked)=>{this.handleChange(checked,item)}}/>
                }
            },
            {
                title: '操作',
                dataIndex: '',
                key: 'x',
                align: 'center',
                render: (item) => (
                    <div>
                        <Button type="primary" shape="circle" disabled={item.default} icon={<EditOutlined />}
                        onClick={()=>{this.handleopen(item)}} />&nbsp;
                        <Button type="danger" shape="circle" disabled={item.default} icon={<DeleteOutlined />} 
                        onClick={()=>{this.handleDelect(item)}}/>
                    </div>
                )
            },
        ],
        datalist: [],
        visible: false,
        roledata:null,
        updatevisible:false,
        roleType:1,
        fromdata:null,
    }
    render() {
        // console.log(this.state.datalist)
        return (
            <div>
                <Button type="primary" shape="round" icon={<PlusOutlined />} size='32' onClick={this.handleClick}>
                    添加用户
                </Button>
                <Table columns={this.state.columns} dataSource={this.state.datalist}
                    rowKey={item => item.id}
                />,
                {/* 添加模态框 */}
                <Modal
                    title="添加用户"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                >
                    <Form
                        // form={form}
                        ref='addform'
                        layout="vertical"
                        name="form_in_modal"
                        initialValues={{ modifier: 'public' }}
                    >
                        <Form.Item
                            name="username"
                            label="用户名"
                            rules={[{ required: true, message: 'Please input the title of collection!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="密码"
                            rules={[{ required: true, message: 'Please input the title of collection!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="roleName" label="角色" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                // onChange={onGenderChange}
                                allowClear
                                onChange={this.onChange}
                            >
                                {/* {
                                    axios.get('http://localhost:8000/roles').then(res=>{
                                        res.data.map(item=>{
                                            console.log(item.roleName)
                                            return <Option value={item.roleName}>{item.roleName}</Option>
                                        })
                                    })
                                } */}
                                <Option value="超级管理员">超级管理员</Option>
                                <Option value="管理员">管理员</Option>
                                <Option value="小编">小编</Option>
                            </Select>
                        </Form.Item>

                    </Form>
                </Modal>
                {/* 修改模态框 */}
                <Modal
                    title="更新用户"
                    visible={this.state.updatevisible}
                    onOk={this.handleUpdate}
                    onCancel={() => {
                        this.setState({
                            updatevisible: false
                        })
                    }}
                >
                    <Form
                        // form={form}
                        ref='updateform'
                        layout="vertical"
                        name="form_in_modal"
                        initialValues={{ modifier: 'public' }}
                    >
                        <Form.Item
                            name="username"
                            label="用户名"
                            rules={[{ required: true, message: 'Please input the title of collection!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="密码"
                            rules={[{ required: true, message: 'Please input the title of collection!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="roleName" label="角色" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                                onChange={this.onChange}
                            >
                                <Option value="超级管理员">超级管理员</Option>
                                <Option value="管理员">管理员</Option>
                                <Option value="小编">小编</Option>
                            </Select>
                        </Form.Item>

                    </Form>
                </Modal>
            </div>
        )
    }
    // 改变状态
    handleChange=(checked,item)=>{
        console.log(checked,item)
        axios.put(`http://localhost:8000/users/${item.id}`,{
            ...item,
            roleState:checked
        }).then(res=>{
            console.log(res.data)
        })
    }
    // 编辑打开模态框
    handleopen=(data)=>{
        this.setState({
            updatevisible:true
        },()=>{
            setTimeout(()=>{
                // console.log(data)
                this.setState({
                    fromdata:data
                })
                this.refs.updateform.setFieldsValue(data)
            },0)
        })
    }
    // 更新用户
    handleUpdate=()=>{
        console.log(this.state.fromdata)
        this.refs.updateform.validateFields().then(values => {
                // console.log(values)
                // console.log(this.state.fromdata.id)
                axios.put(`http://localhost:8000/users/${this.state.fromdata.id}`,{
                    ...values,
                    roleType:this.state.roleType,
                    roleState: false
                }).then(res=>{
                    // console.log(res.data,this.state.datalist)
                    var newlist=this.state.datalist.map(item=>{
                        if(this.state.fromdata.id===item.id){
                            return res.data
                        }else{
                            return item
                        }
                    })
                    // console.log(newlist)
                    this.setState({
                        datalist:newlist,
                        updatevisible:false
                    })
                })
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }
    // 获取select的值
    onChange=(data)=>{
        console.log(data,'onchange')
        var arr=['小编','管理员','超级管理员']
        var roleType=arr.indexOf(data)+1
        this.setState({
            roledata:data,
            roleType
        },()=>{
            console.log(this.state.roleType)
        })
    }
    // 删除用户
    handleDelect=(data)=>{
        console.log(data)
        axios.delete(`http://localhost:8000/users/${data.id}`).then(res=>{
            console.log(res.data)
            this.setState({
                datalist:this.state.datalist.filter(item=>item.id!==data.id)
            })
        })
    }
    // 添加用户
    handleOk = () => {
        // console.log('ok', this.refs.addform)
        this.refs.addform.validateFields()
            .then(values => {
                // console.log(values)
                this.refs.addform.resetFields();
                // onCreate(values);
                axios.post('http://localhost:8000/users',{...values,
                    roleType:this.state.roleType,
                    roleState:false
                }).then(res=>{
                        console.log(res.data)
                        this.setState({
                            datalist:[...this.state.datalist,res.data],
                            visible:false
                        })
                    })
                })
                .catch(info => {
                    console.log('Validate Failed:', info);
                });
    }
    handleClick = () => {
        this.setState({
            visible: true
        })
    }
}
