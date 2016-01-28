import "./footer.styl";

import React from "react";
import { translate } from "react-i18next/lib";

const MENU_ITEMS = [
  "photos", "events", "about", "contact", "beers"
];

class Header extends React.Component {
  static displayName = "Header";

  render() {
    const { t } = this.props;

    return (
      <footer className="Footer">
        <a href="https://www.facebook.com/catraiobeershop/">Facebook</a>
        <a href="https://untappd.com/venue/2524942">Untappd1</a>
      </footer>
    );
  }
}

export default translate(["header", "menu"])(Header);
