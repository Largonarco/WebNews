import React, { Component } from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export class Nav extends Component {
  render() {
    return (
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
