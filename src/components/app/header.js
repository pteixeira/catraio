import React from "react";

import links from "./header.json";

class Header extends React.Component {
  static displayName = "Header";

  render() {
    return (
      <header>
        <h1 className="logo">Catraio</h1>
        <h2>Adoramos cerveja</h2>
        <ul className="">
          {links.map(link => {
            return (
              <li key={`header-link-${link.link}`}>{link.title}</li>
            );
          })}
        </ul>
      </header>
    );
  }
}

export default Header;
