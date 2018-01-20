import "./index.styl";

import React, { PropTypes } from "react";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";

export const Paragraph = ({
  children,
  columnCount,
  extraClasses
}) => {
  return (
    <div className={`Paragraph ${extraClasses}`} style={{ columnCount }}>
      {children}
    </div>
  )
};

export default compose(
  setDisplayName("Paragraph"),

  setPropTypes({
    colCount: PropTypes.number.isRequired,
    extraClasses: PropTypes.string
  }),

  defaultProps({
    colCount: 1,
    extraClasses: ""
  }),
)(Paragraph);
