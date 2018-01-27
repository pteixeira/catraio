import "./index.styl";

import React, { PropTypes } from "react";
import { translate, Interpolate } from "react-i18next";
import { compose, setDisplayName, setPropTypes } from "recompose";

export const Blockquote = ({
  quote,
  author,
}) => {
  return (
    <div className="Blockquote">
      <div className="Blockquote-quote">
        <Interpolate i18nKey={quote} useDangerouslySetInnerHTML />
      </div>
      <div className="Blockquote-author">
        <Interpolate i18nKey={author} useDangerouslySetInnerHTML />
      </div>
    </div>
  );
};

export default compose(
  setDisplayName("Blockquote"),

  setPropTypes({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),

  translate([ "intro" ]),
)(Blockquote);
