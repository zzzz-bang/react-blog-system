import React, { Component } from 'react'
import { Table,Tag } from 'antd';
import axios from 'axios'
import store from '../../redux/store'
export default class Right extends Component {
    actionCreator=()=>{
        return axios.get('http://localhost:8000/rights').then(res=>{
            return({
                type:'setRight',
                payload:res.data
            })
        })
            // this.state.datalist=res.data
           
    }
    componentDidMount(){
        if(store.getState().rightlist.length===0){
            store.dispatch(this.actionCreator()).then(data=>{
                console.log(data)
                this.setState({
                    datalist:store.getState().rightlist
                })
            })
        }else{
            console.log("使用缓存")
            this.setState({
                datalist:store.getState().rightlist
            })
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
        datalist :[]
    }
    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.datalist} 
                pagination={{pageSize:5}} />
            </div>
        )
    }
}
