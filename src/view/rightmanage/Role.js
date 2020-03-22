import React, { Component } from 'react'
import { Table ,Tag,Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios'
import store from '../../redux/store'
export default class Role extends Component {

    actionCreator=()=>{
        
        return(dispatch)=>{
            axios.get('http://localhost:8000/roles').then(res=>{
                console.log(res.data)
                dispatch({
                    type:'setRole',
                    payload:res.data
                })
            })
        }
    }
    
    componentDidMount(){
        if(store.getState().rolelist.length===0){
            store.dispatch(this.actionCreator())
        }else{
            console.log('使用缓存')
            this.setState({
                datalist:store.getState().rolelist
            })
        }
        this.unscribe=store.subscribe(()=>{
            this.setState({
                datalist:store.getState().rolelist
            })
        })
    }
    componentWillUnmount(){
        this.unscribe()
    }

    state={
        columns : [
            { title: '#', dataIndex: 'id', key: 'id' },
            { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
            // { title: 'Address', dataIndex: 'address', key: 'address' },
            {
              title: '操作',
              dataIndex: '',
              key: 'x',
              render: () => (
                // <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                // </Tooltip>
              ),
            },
          ],
          datalist : []
    }
    render() {
        return (
            <div>
                Role
                <Table
                      columns={this.state.columns}
                      expandable={{
                        expandedRowRender: record => {
                            // console.log(record)
                            return (<div style={{ margin: 0 }}>
                                {
                                    record.roleRight.map(item=>
                                        // <span>{item.category}</span>
                                        <div key={item.category}>
                                            {
                                                item.list.map(data=>
                                                    <Tag color="geekblue" key={data}>{data}</Tag>
                                                    // <span key={data}></span>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>)
                        }
                        // rowExpandable: record => record.name !== 'Not Expandable',
                      }}
                      rowKey={item=>item.id}
                      dataSource={this.state.datalist}
                />,
            </div>
        )
    }
}
