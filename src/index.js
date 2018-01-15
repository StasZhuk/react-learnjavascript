import React from 'react';
import { render } from 'react-dom';
import ArticleList from './components/ArticleList';
import { articles } from './fixtures';

function Root() {
    return (
        <ArticleList articles={articles} />
    )
}

render(<Root />, document.getElementById('container'));