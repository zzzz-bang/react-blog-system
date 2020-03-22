import React, { Component } from 'react'
import { PageHeader, Steps, Button, message, Form, Input, Cascader } from 'antd';
import axios from 'axios'
import RichEditor from './RichEditor'
const { Step } = Steps;
class Create extends Component {
    state = {
        current: 0,
        categories:[],
        articleform:{},
        content:''
    }
    componentDidMount(){
        axios.get('http://localhost:8000/categories').then(res=>{
            console.log(res.data)
            this.setState({
                categories:res.data
            })
        })
    }
    render() {
        const steps = [
            {
                title: '基本信息',
            },
            {
                title: '文章内容',
            },
            {
                title: '提交文章',
            },
        ];
        // antd 24栅格
        const layout = {
            labelCol: { span: 4 }, //label宽度占几份？
            wrapperCol: { span: 20 },//内容占几份?
        }
        return (
            <div>
                {/* 页头 */}
                <PageHeader
                    className="site-page-header"
                    onBack={() => {
                        this.props.history.goBack()
                    }}
                    title="添加文章"
                    subTitle="该来的总会来不用去猜"
                />
                {/* 步骤条 */}
                <div style={{ padding: '20px' }}>
                    <Steps current={this.state.current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    {/* 步骤条对应的内容 */}
                    <div className="steps-content" style={{ marginTop: '20px', display: this.state.current === 0 ? 'block' : 'none' }}>
                        <Form
                            {...layout}
                            ref='arctileform'
                        >
                            <Form.Item
                                name="title"
                                label="文章标题"
                                // labelAlign='left'
                                rules={[{ required: true, message: 'Please input the title of collection!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="category"
                                label="文章分类"
                                rules={[{ required: true, message: 'Please input the category of collection!' }]}
                            >
                                <Cascader options={this.state.categories}
                                    onChange={this.onchange}
                                    fieldNames={{label:'title'}}
                                    placeholder="Please select" />
                            </Form.Item>
                        </Form>
                    </div>
                    {/* 富文本编辑器 */}
                    <div className="steps-content" style={{ display: this.state.current === 1 ? 'block' : 'none' }}>
                        <RichEditor getcontent={this.getcontent}></RichEditor>
                    </div>
                    <div className="steps-content" style={{ display: this.state.current === 2 ? 'block' : 'none' }}>
                    </div>
                    {/* 控制按钮显示         */}
                    <div className="steps-action">
                        {this.state.current < steps.length - 1 && (
                            <Button type="primary" onClick={() => this.next()}>
                                下一步
                            </Button>
                        )}
                        {this.state.current === steps.length - 1 && (
                            <Button type="primary" onClick={this.handleSubmit}>
                                提交
                            </Button>
                        )}
                        {this.state.current > 0 && (
                            <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                                上一步
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    handleSubmit=()=>{
        let{username,roleType}=JSON.parse(localStorage.getItem('user'))
        axios.post('http://localhost:8000/articles',{
            ...this.state.articleform,
            content:this.state.content,
            author:username,
            roleType:roleType
        }).then(res=>{
            console.log(res.data)
            message.success('Processing complete!')
            this.props.history.push('/article-manage/list')
        })
        // () => message.success('Processing complete!')
    }
    getcontent=(content)=>{
        console.log(content)
        this.setState({
            content
        })
    }


    onchange=()=>{

    }
    next() {
        console.log(this.refs.arctileform)
        if(this.state.current===0){
            this.refs.arctileform.validateFields().then(values=>{
                console.log(values)
                this.setState({
                    current:this.state.current+1,
                    articleform:values
                })
            })
            return
        }



        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
}
export default Create