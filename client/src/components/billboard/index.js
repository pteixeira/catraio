import "./index.styl";

import React, { PropTypes } from "react";
import classnames from "classnames";
import { isString, isArray } from "lodash";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";

export const Billboard = ({
  double,
  single,
  src,
  height,
  left,
  right,
}) => {
  const cx = classnames("Billboard", { double, single, left, right });
  return (
    <div className={cx}>
      {isString(src) &&
        <img src={src} height={height} />
      }

      {isArray(src) &&
        <div>
          <img src={src[0]} />
          <img src={src[1]} />
        </div>
      }
    </div>
  )
};

export default compose(
  setDisplayName("Billboard"),

  setPropTypes({
    double: PropTypes.bool.isRequired,
    single: PropTypes.bool.isRequired,
    src: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    left: PropTypes.bool.isRequired,
    right: PropTypes.bool.isRequired,
  }),

  defaultProps({
    double: false,
    single: false,
    wide: true,
    left: false,
    right: false,
  }),
)(Billboard);
