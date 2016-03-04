import "./header.styl";

import React from "react";
import { Link } from "react-router";
import { translate } from "react-i18next/lib";
import { map } from "lodash";

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
        </Link>

        <ul className="Header-menu">
          {map(MENU_ITEMS, (item) => {
            return (
              <li className="Header-menu-item" key={`header-link-${item}`}>
                <Link to={item} activeClassName="active">{t(`menu:${item}`)}</Link>
              </li>
            );
          })}
        </ul>

      </header>
    );
  }
}

export default translate(["menu"])(Header);
