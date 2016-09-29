/**
 * Created by diana.kanatova on 28.09.2016.
 */
import React, {Component} from 'react'
import CommentSection from './CommentSection'


export default class CommentButton extends Component {

    constructor(props) {
        super()
        this.state = {
            buttonText: 'Show Comments',
            hidden: true
        }
    }

    render() {
        const {buttonText} = this.state
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

