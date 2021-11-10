import React, { Component } from "react";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export class Layout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
