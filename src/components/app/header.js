import "./header.styl";

import React from "react";
import { Link } from "react-router";

import links from "./header.json";

class Header extends React.Component {
  static displayName = "Header";

  render() {
    return (
      <header className="Header">

        <Link to="/">
          <h1 className="logo">Catraio</h1>
          <h2>Adoramos cerveja</h2>
        </Link>

        <ul className="Header-menu">
          {links.map(({ link, title }) => {
            return (
              <li className="Header-menu-item" key={`header-link-${link}`}>
                <Link to={link}>{title}</Link>
              </li>
            );
          })}
        </ul>

      </header>
    );
  }
}

export default Header;
