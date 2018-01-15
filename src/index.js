import React from 'react';
import { render } from 'react-dom';
import Article from './Article';
import ArticleList from './ArticleList';
import { articles } from './fixtures';

function Root() {
    return (
        <ArticleList articles={articles} />
    )
}

render(<Root />, document.getElementById('container'));