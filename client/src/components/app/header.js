import "./header.styl";

import SmoothScroll from "smoothscroll-polyfill";
import React from "react";
import { Link } from "react-router";
import { translate } from "react-i18next";
import { map } from "lodash";

import LanguageSelector from "app-components/language_selector";

const MENU_ITEMS = [
  "catraio", "store", "events", "photos"
];

class Header extends React.Component {
  static displayName = "Header";

  componentDidMount() {
    SmoothScroll.polyfill();
  }

  linkClicked(item) {
    const element = document.getElementById(item);
    element.scrollIntoView({ behavior: "smooth"}); // smooth is not supported and polyfill is being a little bitch
  }


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
              <li className="Header-menu-item" key={`header-link-${item}`} onClick={this.linkClicked.bind(this, item)}>
                <Link to={`#${item}`}>{t(`menu:${item}`)}</Link>
              </li>
            );
          })}
        </ul>

        <LanguageSelector />

      </header>
    );
  }
}

export default translate(["menu"])(Header);
