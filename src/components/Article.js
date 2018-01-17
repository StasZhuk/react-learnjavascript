import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired,
    };

    getBody() {
        const {article, isOpen} = this.props;

        if (!isOpen) return null;

        return (
            <section>
                {article.text}
                <CommentList comments={article.comments} ref={this.setContainerRef} />
            </section>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log('----', 'updating', this.props.isOpen, nextProps.isOpen)
    }

    componentWillMount() {
        console.log('----', 'mounting')
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log('---', findDOMNode(ref));
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props;

        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        );
    }

    componentDidMount() {
        console.log('----', 'mounted')
    }
}

export default Article;