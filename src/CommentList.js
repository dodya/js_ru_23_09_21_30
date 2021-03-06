import React, {Component, PropTypes} from "react";
import Comment from "./Comment";
import toggleOpen from "./decorators/toggleOpen";

CommentList.propTypes = {
    isOpen: PropTypes.bool,
    comments: PropTypes.array,
    toggleOpen: PropTypes.func.isRequired
};

function CommentList(props) {
    const {comments, isOpen, toggleOpen} = props
    if (!comments || !comments.length) return <p>No comments yet</p>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <ul>{commentItems}</ul>

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{text}</a>
            {body}
        </div>
    )
}

export default toggleOpen(CommentList)