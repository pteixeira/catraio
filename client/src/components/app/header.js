import "./header.styl";

import React from "react";
import { Link } from "react-router";
import { translate } from "react-i18next/lib";

const MENU_ITEMS = [
  "photos", "events", "about", "contact", "beers"
];

class Header extends React.Component {
  static displayName = "Header";

  render() {
    const { t } = this.props;

    return (
      <header className="Header">

        <Link to="/">
          <h1 className="logo">Catraio</h1>
          <h2>{t("header:tagline")}</h2>
        </Link>

        <ul className="Header-menu">
          {MENU_ITEMS.map((item) => {
            return (
              <li className="Header-menu-item" key={`header-link-${item}`}>
                <Link to={item}>{t(`menu:${item}`)}</Link>
              </li>
            );
          })}
        </ul>

      </header>
    );
  }
}

export default translate(["header", "menu"])(Header);
