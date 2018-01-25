import "./index.styl";

import React, { PropTypes } from "react";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";
import { translate } from "react-i18next";
import { map, noop } from "lodash";

const ITEMS = {
  "tshirt": require("../../assets/images/merch/thumbs/tshirt.jpg"),
  "hat": require("../../assets/images/merch/thumbs/hat.jpg"),
  "bag": require("../../assets/images/merch/thumbs/totebag.jpg"),
  "capOpener": require("../../assets/images/merch/thumbs/cap-opener.jpg"),
  "growlers": require("../../assets/images/merch/thumbs/growlers.jpg"),
};

export const Merchandising = ({
  t,
  onItemClick,
}) => {
  return (
    <div className="Merchandising">
      <h1>
        <span>{t("merchandising:title")}</span>
      </h1>

      <h2>{t("merchandising:subtitle")}</h2>

      <ul className="items">
        {map(ITEMS, (src, item) => (
          <li
            key={item}
            className="item ClickablePicture"
            onClick={() => onItemClick(item)}
            style={{ backgroundImage: `url(${src})` }}
          >
            {t(`merchandising:${item}`)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default compose(
  setDisplayName("Merchandising"),

  setPropTypes({
    onItemClick: PropTypes.func,
  }),

  defaultProps({
    onItemClick: noop,
  }),

  translate([ "merchandising" ]),
)(Merchandising);
