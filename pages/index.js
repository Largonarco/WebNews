import React, { Component } from "react";
import ArticleList from "../components/ArticleList";
import Head from "next/head";

export class index extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default index;
