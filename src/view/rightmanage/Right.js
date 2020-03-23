import React, { Component } from 'react'
import { Table,Tag } from 'antd';
import axios from 'axios'
import {connect} from 'react-redux'
class Right extends Component {
    
    componentDidMount(){
        if(this.props.datalist.length===0){
            this.props.actionCreator()
        }
        
    }
   
    state={
        columns :[
            {
              title: '#',
              dataIndex: 'id',
              key: 'id',
              render: text => <b>{text}</b>,
            },
            {
              title: '权限名称',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title: '权限等级',
              dataIndex: 'grade',
              key: 'grade',
              align:'center',
              render: item=>{
                  let arr=['magenta','gold','geekblue']
                  return <Tag color={arr[item-1]}>{item}</Tag>
              }
            }
        ],
    }
    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.props.datalist} 
                pagination={{pageSize:5}} />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        datalist:state.rightlist
    }
}
const mapDispatchToProps={
    actionCreator:()=>{
        return axios.get('http://localhost:8000/rights').then(res=>{
            return({
                type:"setRight",
                payload:res.data
            })
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Right)