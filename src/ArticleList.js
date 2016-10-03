import React, {Component, PropTypes} from "react";
import Article from "./Article";
import Chart from "./Chart";
import accordion from "./decorators/accordion";


ArticleList.propTypes = {
    openItemId: PropTypes.string,
    articles: PropTypes.array.isRequired,
    toggleOpen: PropTypes.func.isRequired
}


function ArticleList(props) {
    const {articles, openedArticleId, toggleOpen} = props
    const articleComponents = articles.map(article => (
            <li key={article.id}>
                <Article article={article} isOpen={article.id == openedArticleId}
                         openArticle={toggleOpen(article.id)}/>
            </li>
        )
    )

    return (
        <div>
            <ul>
                {articleComponents}
            </ul>
            <Chart />
        </div>
    )
}


export default accordion(ArticleList)