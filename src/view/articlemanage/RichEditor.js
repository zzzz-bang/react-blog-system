import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import drafttohtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';
class RichEditor extends Component {
    state = {
        editorState: '',
        contentState: ''
    }
    componentDidMount() {
        // console.log(this.props.content)
        if(!this.props.content){
            return
        }
        const html = this.props.content;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({
            editorState
            })
        }
        
    }
    render() {
        return (
            <Editor
                editorState={this.state.editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
                onContentStateChange={this.onContentStateChange}
                onBlur={() => {
                    this.props.getcontent(drafttohtml(this.state.contentState))
                }}
            />
        )
    }
    onContentStateChange = (contentState) => {
        this.setState({
            contentState
        })
        // console.log(drafttohtml(contentState),this.props.getcontent)
    }
    onEditorStateChange = (editorState) => {
        // console.log(editorState)
        this.setState({
            editorState
        })
    }
}

export default RichEditor