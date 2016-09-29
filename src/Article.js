import React, { Component } from 'react'
import CommentButton from './CommentButton'


export default class Article extends Component {

    constructor(props) {
        super()
        this.state = {
            isOpen: false
        }
    }


    render() {
        const { article } = this.props
        const { isOpen } = this.state

        const body = isOpen ? <section>{article.text}</section> : null
        const articleComments = <CommentButton comments = {article.comments} isOpen = {this.state.isOpen}/>

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
                {articleComments}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

