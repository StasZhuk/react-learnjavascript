import React, { Component } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired,
    };

    static defaultProps = {
        comments: [],
    };

    getBody() {
        const { comments, isOpen } = this.props;

        if (!isOpen) return null;
        if(!comments.length) return <p>No comment yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        )
    }

    render() {
        const { isOpen, toggleOpen } = this.props;
        const text = isOpen ? 'hide comments' : 'show comment';

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        );
    }
}

export default toggleOpen(CommentList);