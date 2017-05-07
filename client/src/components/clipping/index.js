import "./index.styl"

import React, { PropTypes } from "react";
import classnames from "classnames";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";

export const Clipping = ({
  image,
  author,
  date,
  right,
}) => {
  const cx = classnames("Clipping", { right });

  return (
    <div className={cx}>
      <div className="ClippingImage">
        <img src={image} alt={`${author}, ${date}`} />
      </div>
      <div className="ClippingSource">{author}, {date.toString()}</div>
    </div>
  )
}

export default compose(
  setDisplayName("Clipping"),

  setPropTypes({
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    right: PropTypes.bool.isRequired,
  }),

  defaultProps({
    right: false,
  })
)(Clipping);
