import "./bartaps.styl";

import React from "react";
import Taps from "app-components/taps";

const BarTaps = () => {
  return (
    <div className="BarTaps">
      <div className="BarTaps-left">
        <div>
          <h2><i className="icon icon-untappd" />Cervejas para beberes connosco!</h2>
          <p>Cerveja à pressão (actualizado semanalmente)</p>
          <Taps />
        </div>
      </div>
      <div className="BarTaps-right">
        <img src="http://lorempicsum.com/simpsons/1000/1000/4" alt=""/>
      </div>
    </div>
  );
}

export default BarTaps;
