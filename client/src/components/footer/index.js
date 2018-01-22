import "./footer.styl";

import React from "react";
import { translate } from "react-i18next";
import { map } from "lodash";
import { compose, setDisplayName } from "recompose";

const ICONS = {
  "facebook-1": "https://www.facebook.com/catraiobeershop/",
  "instagram": "https://www.instagram.com/catraio_craftbeer/",
  "tripadvisor": "https://www.tripadvisor.com/Attraction_Review-g189180-d9730575-Reviews-Catraio_Craft_Beer_Shop-Porto_Porto_District_Northern_Portugal.html",
  "untappd": "https://untappd.com/v/catraio-craft-beer-shop/2524942",
  "zomato": "https://www.zomato.com/porto/catraio-craft-beer-shop-cedofeita",
}

export const Footer = ({ t }) => {
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
        {map(ICONS, (url, key) => {
          return (
            <a
              href={url}
              key={key}
              className={`icon icon-${key}`}
              target="_blank"
            />
          )
        })}
      </div>

    </footer>
  );
}

export default compose(
  setDisplayName("Footer"),

  translate([ "footer" ]),
)(Footer);
