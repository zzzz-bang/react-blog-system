import React, { Component } from 'react'
import { PageHeader} from 'antd';
import axios from 'axios'
export default class preview extends Component {
    state={
        datalist:[],
        title:"",
        category:[],
        content:""
    }
    componentDidMount(){
        // console.log(this.props.match.params.id)
        axios.get(`http://localhost:8000/articles/${this.props.match.params.id}`).then(res=>{
            // console.log(res.data)
            let {title,category,content}=res.data
            this.setState({
                title,
                category,
                content
            })
        })
        
    }
    render() {
        // console.log(this.state.datalist)
        return (
            <div>
                 {/* 页头 */}
                 <PageHeader
                    className="site-page-header"
                    onBack={() => {
                        this.props.history.goBack()
                    }}
                    title={this.state.title}
                    subTitle={this.state.category.join("/")}
                />
                <div style={{padding:'20px'}} dangerouslySetInnerHTML={{
                    __html:this.state.content
                }}>
                    {/* {this.state.content} */}
                </div>
            </div>
        )
    }
}
