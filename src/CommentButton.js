/**
 * Created by diana.kanatova on 28.09.2016.
 */
import React, {Component} from 'react'
import CommentSection from './CommentSection'


export default class CommentButton extends Component {

    constructor(props) {
        super()
        this.state = {
            //лучше хранить минимальный стейт, ведь ты можешь текст просто ининциализировать в render в зависимости от hidden
            buttonText: 'Show Comments',
            hidden: true
        }
    }

    render() {
        const {buttonText} = this.state
        // можно const {isOpen, comments}   = this.props хотя isOpen здесь вообще лишнее - надо было в Article решить, показывать ли CommentButton
        const {isOpen}   = this.props
        const {comments}   = this.props
        return (
            <div>
                <button style={{display: isOpen ? 'block' : 'none'}} onClick={this.hideComments}>{buttonText}</button>
                <CommentSection isOpen={!this.state.hidden} comments = {comments}></CommentSection>
            </div>
        )
    }

    hideComments = ev => {
        this.setState({
            hidden: !this.state.hidden,
            buttonText: this.state.hidden ? 'Hide Comments' : 'Show Comments'
        }
        )
    }
}

