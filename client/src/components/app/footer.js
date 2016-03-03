import "./footer.styl";

import React from "react";
import { Link } from "react-router";
import { translate } from "react-i18next/lib";

class Footer extends React.Component {
  static displayName = "Footer";

  render() {
    const { t } = this.props;

    return (
      <footer className="Footer">
        <a href="https://www.facebook.com/catraiobeershop/">Facebook</a>
        <a href="https://untappd.com/venue/2524942">Untappd</a>
        <Link to="/about">{t("menu:about")}</Link>
      </footer>
    );
  }
}

export default translate(["menu"])(Footer);
