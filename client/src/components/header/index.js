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
  "catraio",
  "photos",
  "shopandbar",
  "events",
];

export class Header extends Component {

  //----------------------------------------------------------------------------
  // Event handlers
  //----------------------------------------------------------------------------
  scrollToSection(item) {
    const element = document.getElementById(item);
    element.scrollIntoView();
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
                className={`Header-menu-item ${item}`}
                onClick={() => this.scrollToSection(item)}
              >
                <span className="desktop">{t(`menu:${item}`)}</span>
                <span className="mobile">{t(`mobile_menu:${item}`)}</span>
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
