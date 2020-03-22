import React, { Component } from 'react'
import { Table,Button,message} from 'antd';
import { EditOutlined, DeleteOutlined,PlusOutlined,LaptopOutlined } from '@ant-design/icons';
import axios from 'axios';
export default class List extends Component {
    state={
        datalist:[],
        columns: [
            {
                title: '文章标题',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '文章作者',
                dataIndex: 'author',
                key: 'author',
            },
            {
                title: '文章类别',
                dataIndex: 'category',
                key: 'category',
                render:(item)=>{
                    console.log(item)
                return <div>{item}</div>
                }
            },
            {
                title: '操作',
                dataIndex: '',
                key: 'x',
                align: 'center',
                render: (item) => (
                    <div>
                        <Button shape="circle"  icon={<LaptopOutlined />}
                        onClick={()=>{this.handleWatch(item.id)}}/>&nbsp;
                        <Button type="primary" shape="circle"  icon={<EditOutlined />}
                        onClick={()=>{this.handleUpdated(item.id)}}/>&nbsp;
                        <Button type="danger" shape="circle"  icon={<DeleteOutlined />}
                        onClick={()=>{this.handleDelete(item.id)}}/>
                    </div>
                )
            }]
    }
    handleWatch=(id)=>{
        this.props.history.push(`/article-manage/preview/${id}`)
    }
    handleUpdated=(id)=>{
        this.props.history.push(`/article-manage/updated/${id}`)
    }
    handleDelete=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:8000/articles/${id}`).then(res=>{
            message.success('delete complete!')
            this.setState({
                datalist:this.state.datalist.filter(item=>item.id!==id)
            })
        })
    }
    componentDidMount(){
        axios.get('http://localhost:8000/articles').then(res=>{
            this.setState({
                datalist:res.data
            })
        })
    }
    handleClick=()=>{
        this.props.history.push('/article-manage/create')
    }
    render() {
        return (
            <div>
                {/* <h5>文章列表</h5> */}
                <Button type="primary" shape="round" icon={<PlusOutlined />} size='32' onClick={this.handleClick}>
                    添加文章
                </Button>
                <Table columns={this.state.columns} dataSource={this.state.datalist} rowKey={item => item.id}/>
            </div>
        )
    }
    // handleClick=(data)=>{
    //     // console.log(data)
    //     this.props.history.push(`/article-manage/preview/${data}`)
    // }
}
