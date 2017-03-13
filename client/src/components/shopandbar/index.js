import "./shopandbar.styl";

import { translate } from "react-i18next";
import React from "react";
import BarMenu from "./barmenu";
import BarTaps from "./bartaps";
import Shop from "./shop";

class ShopAndBar extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <div className="ShopAndBar" id="shopandbar">
        <BarMenu />
        <BarTaps title={t("shopandbar:taps:title")} description={t("shopandbar:taps:description")}/>
        <Shop />
      </div>
    )
  }
}

export default translate(["shopandbar:taps"])(ShopAndBar);
