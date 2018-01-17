import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';


class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }


    render() {
        return (
            <div>
                <ArticleList articles={this.props.articles} />
            </div>
        );
    }
}

export default App;