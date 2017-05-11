import "./index.styl";

import React, { PropTypes } from "react";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";
import { translate } from "react-i18next";
import { map, noop } from "lodash";

const ITEMS = [
  "tshirt",
  "sweatshirt",
  "bag",
  "capOpener",
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
            key={i}
            className="item ClickablePicture"
            onClick={() => onItemClick(i)}
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
