import "./footer.styl";

import React from "react";
import { translate } from "react-i18next/lib";

import ContactForm from "./contactform";

const icons = [
  "facebook-1",
  "gplus-1",
  "pinterest-1",
  "instagram",
  "tripadvisor",
  "untappd",
  "zomato",
];

class Footer extends React.Component {
  static displayName = "Footer";

  render() {
    const { t } = this.props;

    return (
      <footer className="Footer">

        <div className="Footer-section Footer-schedule">
          <div>{t("footer:schedule-line1")}</div>
          <div>{t("footer:schedule-line2")}</div>
        </div>

        <div className="Footer-section Footer-location">
          <div className="Location-address">
            Rua de Cedofeita 256<br />
            4050-174 Porto
          </div>
        </div>

        <div className="Footer-section Footer-contacts">
          +351 934 360 070<br />
          <a href="mailto:catraiobeershop@gmail.com">catraiobeershop@gmail.com</a>
        </div>

        <div className="Footer-section Footer-social">
          {icons.map(icon => {
            return <i className={`icon icon-${icon}`} />;
          })}
        </div>

      </footer>
    );
  }
}

export default translate(["footer"])(Footer);
