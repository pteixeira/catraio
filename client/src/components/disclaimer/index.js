import React from "react";
import { Link } from "react-router";

import { translate } from "react-i18next/lib";

class Disclaimer extends React.Component {
  static displayName = "Disclaimer";

  setAdult() {
    sessionStorage.setItem("over18", "1");
  }

  render() {
    const { t } = this.props;

    return(
      <div className="Disclaimer">
        <h1 className="logo">Catraio</h1>
        <h2>{t("header:tagline")}</h2>
        <div>{t("disclaimer:question")}</div>
        <Link to="/" onClick={this.setAdult.bind(this)}>{t("disclaimer:yes")}</Link>
        <a href="http://www.disney.com">{t("disclaimer:no")}</a>
      </div>
    );
  }
}

export default translate(["header"])(Disclaimer);
