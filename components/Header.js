import React, { Component } from "react";
import headerStyles from "../styles/Header.module.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <h1 className={headerStyles.title}>
          <span>WebDev</span>News
        </h1>
        <p className={headerStyles.description}>
          Up to date latest web development news
        </p>
      </div>
    );
  }
}

export default Header;
