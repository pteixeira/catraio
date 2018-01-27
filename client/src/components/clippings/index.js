import "./index.styl"

import React, { PropTypes } from "react";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";

export const Clippings = (props) => {
  return (
    <div className="Clippings Clearfix">
      {[ "Left", "Right" ].map(side => (
        <div className="Clipping" key={side}>
          <div className="ClippingImage">
            <img src={props[`image${side}`]} alt={props[`altText${side}`]} />
          </div>
          <div className="ClippingSource">
            {props[`text${side}`]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default compose(
  setDisplayName("Clippings"),

  setPropTypes({
    imageLeft: PropTypes.string.isRequired,
    authorLeft: PropTypes.string.isRequired,
    textLeft: PropTypes.string.isRequired,
    imageRight: PropTypes.string.isRequired,
    authorRight: PropTypes.string.isRequired,
    textRight: PropTypes.string.isRequired
  }),

  defaultProps({
    right: false,
  }),
)(Clippings);
