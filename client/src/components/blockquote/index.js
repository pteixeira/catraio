import "./index.styl";

import React, { PropTypes } from "react";
import { translate, Interpolate } from "react-i18next";
import { compose, setDisplayName, setPropTypes } from "recompose";

export const Blockquote = ({
  quote,
  author,
  date,
}) => {
  return (
    <div className="Blockquote">
      <div className="Blockquote-quote">
        <Interpolate i18nKey={quote} useDangerouslySetInnerHTML />
      </div>
      <div className="Blockquote-author">
        <Interpolate i18nKey={author} useDangerouslySetInnerHTML />
      </div>
      <div className="Blockquote-date">
        {date.toString()}
      </div>
    </div>
  );
};

export default compose(
  setDisplayName("Blockquote"),

  setPropTypes({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }),

  translate([ "intro" ]),
)(Blockquote);
