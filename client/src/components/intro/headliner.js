import "./headliner.styl";

import React, { Component } from "react";
import { translate } from "react-i18next";

class Headliner extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="Headliner">
        <div className="Headliner-section Headliner-tagline">
          {t("header:tagline")}
        </div>
        <div className="Headliner-section Headliner-schedule">
          <div className="">
            <div>{t("footer:schedule-line1")}</div>
            <div>{t("footer:schedule-line2")}</div>
          </div>
        </div>
        <div className="Headliner-section Headliner-location">
          Rua de Cedofeita 256<br />
          4050-174 Porto
        </div>
        <div className="Headliner-section Headliner-contacts">
          +351 934 360 070 <br />
          <a href="mailto:catraiobeershop@gmail.com">catraiobeershop@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default translate(["header"])(Headliner);
