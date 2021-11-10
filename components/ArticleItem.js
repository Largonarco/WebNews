import React, { Component } from "react";
import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

export class ArticleItem extends Component {
  render() {
    return (
      <Link href="/article/[id]" as={`/article/${this.props.article.id}`}>
        <a className={articleStyles.card}>
          <h3>{this.props.article.title} &rarr;</h3>
          <p>{this.props.article.body}</p>
        </a>
      </Link>
    );
  }
}

export default ArticleItem;
