import "./index.styl";

import React, { Component } from "react";
import { Link } from "react-router";
import { translate } from "react-i18next";
import { map } from "lodash";
import { compose, setDisplayName } from "recompose";

//
// Components
import LanguageSelector from "app-components/language_selector";

const MENU_ITEMS = [
  "catraio", "shopandbar", "events", "photos"
];

export class Header extends Component {

  //----------------------------------------------------------------------------
  // Event handlers
  //----------------------------------------------------------------------------
  scrollToSection(item) {
    const element = document.getElementById(item);
    element.scrollIntoView({ behavior: "smooth" });
    this.setState({ active: item });
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { t } = this.props;

    return (
      <header className="Header">

        <Link className="logo" to="/">
          <h1>Catraio</h1>
        </Link>

        <ul className="Header-menu">
          {map(MENU_ITEMS, (item) => {
            return (
              <li
                key={`header-link-${item}`}
                className="Header-menu-item"
                onClick={() => this.scrollToSection(item)}
              >
                {t(`menu:${item}`)}
              </li>
            );
          })}
        </ul>

        <LanguageSelector />

      </header>
    );
  }
}

export default compose(
  setDisplayName("Header"),

  translate([ "menu" ]),
)(Header);
