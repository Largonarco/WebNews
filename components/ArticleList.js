import React, { Component } from "react";
import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

export class ArticleList extends Component {
  render() {
    return (
      <div className={articleStyles.grid}>
        {this.props.articles.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))}
      </div>
    );
  }
}

export default ArticleList;
