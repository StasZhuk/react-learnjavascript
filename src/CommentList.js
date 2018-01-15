import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
    state = {
        isOpen: false
    };

    static defaultProps = {
        comments: [],
    };

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    });

    getBody() {
        if (!this.state.isOpen) return null;

        const { comments } = this.props;

        if(!comments.length) return <p>No comment yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        )
    }



    render() {
        const text = this.state.isOpen ? 'hide comments' : 'show comment';

        return (
            <div>
                <button onClick={this.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        );
    }
}