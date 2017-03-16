import "./footer.styl";

import React from "react";
import { translate } from "react-i18next";

const ICON_LINKS = {
  "facebook-1": "https://www.facebook.com/catraiobeershop/",
  "gplus-1": "https://plus.google.com/106780221526985857570",
  "pinterest-1": "https://www.pinterest.com/CatraioBeerShop/",
  "instagram": "https://www.instagram.com/catraio_craftbeer/",
  "tripadvisor": "https://www.tripadvisor.com/Attraction_Review-g189180-d9730575-Reviews-Catraio_Craft_Beer_Shop-Porto_Porto_District_Northern_Portugal.html",
  "untappd": "https://untappd.com/v/catraio-craft-beer-shop/2524942",
  "zomato": "https://www.zomato.com/porto/catraio-craft-beer-shop-cedofeita",
}

class Footer extends React.Component {
  static displayName = "Footer";

  render() {
    const { t } = this.props;

    return (
      <footer className="Footer">

        <div className="Footer-section Footer-info">
          <div className="Footer-schedule">
            <div>{t("footer:schedule-line1")}</div>
            <div>{t("footer:schedule-line2")}</div>
          </div>

          <div className="Footer-location">
            <div className="Location-address">
              Rua de Cedofeita 256<br />
              4050-174 Porto
            </div>
          </div>

          <div className="Footer-contacts">
            +351 934 360 070<br />
            <a href="mailto:catraiobeershop@gmail.com">catraiobeershop@gmail.com</a>
          </div>
        </div>

        <div className="Footer-section Footer-social">
          {
            Object.keys(ICON_LINKS).map((key, index) => {
              return <a href={ICON_LINKS[key]} key={`icon-${index}`} className={`icon icon-${key}`} />;
            })
          }
        </div>

      </footer>
    );
  }
}

export default translate(["footer"])(Footer);
