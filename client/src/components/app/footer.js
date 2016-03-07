import "./footer.styl";

import React from "react";
import { translate } from "react-i18next/lib";

import ContactForm from "../contact/contactform";
import Map from "../contact/map";

class Footer extends React.Component {
  static displayName = "Footer";

  render() {
    const { t } = this.props;

    return (
      <footer className="Footer">
        <div className="Footer-schedule">
          <h2 className="Schedule-title">
            {t("contact:schedule")}
          </h2>
          <table>
            <tbody>
              <tr>
                <td className="Schedule-weekday">{t("weekdays:sunday")}</td>
                <td>{t("contact:closed")}</td>
              </tr>
              <tr>
                <td className="Schedule-weekday">{t("weekdays:monday")}</td>
                <td>{t("contact:closed")}</td>
              </tr>
              <tr>
                <td className="Schedule-weekday">{t("weekdays:tuesday")} - {t("weekdays:thursday")}</td>
                <td>4:00 PM – 12:00 AM</td>
              </tr>
              <tr>
                <td className="Schedule-weekday">{t("weekdays:friday")} - {t("weekdays:saturday")}</td>
                <td>4:00 PM – 2:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Footer-location">
          <div className="Location-address">
            Rua de Cedofeita 256, 4050-174 Porto
          </div>
          <Map />
        </div>
        <div className="Footer-contactinfo">
          <div className="ContactInfo-phone">
            <i className="icon-phone" />+351 934 360 070
          </div>
          <ContactForm />
        </div>
      </footer>
    );
  }
}

export default translate(["menu"])(Footer);
