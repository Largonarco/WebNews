import React, { Component } from "react";
import Link from "next/link";

export class article extends Component {
  render() {
    return (
      <>
        <h1>{this.props.article.title}</h1>
        <p>{this.props.article.body}</p>
        <br />
        <Link href="/">Go home</Link>
      </>
    );
  }
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article: article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await res.json();

  const articleId = articles.map((article) => article.id);
  const paths = articleId.map((articleId) => ({
    params: {
      id: articleId.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
