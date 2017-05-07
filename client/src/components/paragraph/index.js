import "./index.styl";

import React, { PropTypes } from "react";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";

export const Paragraph = ({
  children,
  columnCount,
}) => {
  return (
    <div className="Paragraph" style={{ columnCount }}>
      {children}
    </div>
  )
};

export default compose(
  setDisplayName("Paragraph"),

  setPropTypes({
    colCount: PropTypes.number.isRequired,
  }),

  defaultProps({
    colCount: 1,
  }),
)(Paragraph);
