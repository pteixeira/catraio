import "./index.styl";

import React, { PropTypes } from "react";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";
import { translate } from "react-i18next";
import { map, noop } from "lodash";

const ITEMS = [
  { name: "tshirt", src: require("../../assets/images/merch/thumbs/tshirt.jpg") },
  { name: "hat", src: require("../../assets/images/merch/thumbs/hat.jpg") },
  { name: "bag", src: require("../../assets/images/merch/thumbs/bag.jpg") },
  { name: "cap-opener", src: require("../../assets/images/merch/thumbs/cap-opener.jpg") },
  { name: "growlers", src: require("../../assets/images/merch/thumbs/growlers.jpg") },
  { name: "hoodie", src: require("../../assets/images/merch/thumbs/hoodie.jpg") }
];

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
        {map(ITEMS, (item, i) => (
          <li
            key={item.name}
            className="item ClickablePicture"
            onClick={() => onItemClick(i)}
            style={{ backgroundImage: `url(${item.src})` }}
          >
            {t(`merchandising:${item.name}`)}
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
