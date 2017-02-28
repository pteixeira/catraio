import "./shopandbar.styl";

import React from "react";
import Menu from "./menu";
import Taps from "../taps";
import Shop from "./shop";

class ShopAndBar extends React.Component {
  render() {
    return (
      <div className="ShopAndBar">
        <Menu />
        <div className="Taps">
          <div className="Taps-left">
            <h2><i className="icon icon-untappd" />Cervejas para beberes connosco!</h2>
            <p>Cerveja à pressão (actualizado semanalmente)</p>
            <Taps />
          </div>
          <img src="https://placehold.it/400/400" alt=""/>
        </div>
        <Shop />
      </div>
    )
  }
}

export default ShopAndBar;
