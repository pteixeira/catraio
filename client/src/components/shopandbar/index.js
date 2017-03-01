import "./shopandbar.styl";

import React from "react";
import BarMenu from "./barmenu";
import BarTaps from "./bartaps";
import Shop from "./shop";

class ShopAndBar extends React.Component {
  render() {
    return (
      <div className="ShopAndBar">
        <BarMenu />
        <BarTaps />
        <Shop />
      </div>
    )
  }
}

export default ShopAndBar;
