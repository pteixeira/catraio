import "./disclaimer.styl";

import React from "react";
import { Link } from "react-router";

import { translate } from "react-i18next";

class Disclaimer extends React.Component {
  static displayName = "Disclaimer";

  setAdult() {
    localStorage.setItem("over18", "1");
  }

  render() {
    const { t } = this.props;

    return (
      <div className="Disclaimer">
        <h1 className="logo">Catraio</h1>
        <div className="Disclaimer-question">
          <p>{t("disclaimer:question")}</p>
          <div className="Disclaimer-options">
            <Link to="/" onClick={this.setAdult.bind(this)}>{t("disclaimer:yes")}</Link>
            <a href="https://www.google.com">{t("disclaimer:no")}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate(["header"])(Disclaimer);
