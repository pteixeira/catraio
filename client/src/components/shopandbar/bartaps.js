import "./bartaps.styl";

import React from "react";
import Taps from "app-components/taps";

const BarTaps = ({ title, description }) => {
  return (
    <div className="BarTaps">
      <div className="BarTaps-left">
        <div>
          <h2><i className="icon icon-untappd" />{title}</h2>
          <p>{description}</p>
          <Taps />
        </div>
      </div>
      <div className="BarTaps-right">
        <img src="http://lorempicsum.com/simpsons/1000/1000/4" alt=""/>
      </div>
    </div>
  );
}

BarTaps.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default BarTaps;
