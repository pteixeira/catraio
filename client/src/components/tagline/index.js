import "./index.styl";

import React, { Component } from "react";
import { translate } from "react-i18next";
import { compose, setDisplayName } from "recompose";

export class Tagline extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="Tagline">
        <div className="Tagline-header">
          {t("header:tagline")}
        </div>
        <div className="Tagline-section schedule">
          <div>{t("footer:schedule-line1")}</div>
          <div>{t("footer:schedule-line2")}</div>
        </div>
        <div className="Tagline-section location">
          <div>Rua de Cedofeita 256</div>
          <div>4050-174 Porto</div>
        </div>
        <div className="Tagline-section contacts">
          <div>+351 934 360 070</div>
          <div><a href="mailto:catraiobeershop@gmail.com">catraiobeershop@gmail.com</a></div>
        </div>
      </div>
    );
  }
}

export default compose(
  setDisplayName("Tagline"),

  translate([ "header" ]),
)(Tagline);
