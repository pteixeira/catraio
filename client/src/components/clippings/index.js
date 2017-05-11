import "./index.styl"

import React, { PropTypes } from "react";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";

export const Clippings = (props) => {
  return (
    <div className="Clippings Clearfix">
      {[ "Left", "Right" ].map(side => (
        <div className="Clipping" key={side}>
          <div className="ClippingImage">
            <img src={props[`image${side}`]} />
          </div>
          <div className="ClippingSource">
            {props[`author${side}`]}, {props[`date${side}`].toString()}
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
    dateLeft: PropTypes.instanceOf(Date).isRequired,
    imageRight: PropTypes.string.isRequired,
    authorRight: PropTypes.string.isRequired,
    dateRight: PropTypes.instanceOf(Date).isRequired,
  }),

  defaultProps({
    right: false,
  }),
)(Clippings);
