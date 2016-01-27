import "./contact.styl";

import React from "react";
import { translate } from "react-i18next/lib";

import Map from "./map";
import ContactForm from "./contactform";

class ContactInfo extends React.Component {
  static displayName = "ContactInfo";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const { t } = this.props;

    return (
      <div className="ContactInfo">
        <div className="ContactInfo-left">
          <div><strong>Catraio - Craft Beer Shop</strong></div>
          <h3>{t("contact:address")}</h3>
          <span className="ContactInfo-address">
            Rua de Cedofeita 256, 4050-174 Porto
          </span>

          <Map />

          <h3>{t("contact:phone")}</h3>
          <span className="ContactInfo-phone">+351 934 360 070</span>
          <h3>Email</h3>
          <span className="ContactInfo-email">catraiobeershop@gmail.com</span>

          <div className="ContactInfo-schedule">
            <h3>{t("contact:schedule")}</h3>
            <table>
              <tbody>
                <tr>
                  <td className="ContactInfo-weekday">{t("weekdays:monday")}</td>
                  <td>2:00 – 8:00 PM</td>
                </tr>
                <tr>
                  <td className="ContactInfo-weekday">{t("weekdays:tuesday")}</td>
                  <td>2:00 – 8:00 PM</td>
                </tr>
                <tr>
                  <td className="ContactInfo-weekday">{t("weekdays:wednesday")}</td>
                  <td>4:00 PM – 12:00 AM</td>
                </tr>
                <tr>
                  <td className="ContactInfo-weekday">{t("weekdays:thursday")}</td>
                  <td>4:00 PM – 12:00 AM</td>
                </tr>
                <tr>
                  <td className="ContactInfo-weekday">{t("weekdays:friday")}</td>
                  <td>4:00 PM – 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ContactInfo-weekday">{t("weekdays:saturday")}</td>
                  <td>4:00 PM – 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ContactInfo-weekday">{t("weekdays:sunday")}</td>
                  <td>{t("contact:closed")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="ContactInfo-right">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default translate(["contact", "weekdays"])(ContactInfo);
