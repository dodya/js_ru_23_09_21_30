/**
 * Created by diana.kanatova on 28.09.2016.
 */
import React, {Component} from 'react'

export default class CommentSection extends Component {

    render() {
        console.log(this.props.isOpen)
        const {comments} = this.props
        const {isOpen}   = this.props
        const articleComments = comments ? comments.map(c => <li key={c.id} >{c.text}</li>) : null;
        return (
            <div>
                <ol style={{display: isOpen ? 'block' : 'none'}} >
                {articleComments
                }
                </ol>
            </div>
        )
    }
}
