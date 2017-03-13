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
        <BarMenu title={t("shopandbar:bar:title")} />
        <BarTaps title={t("shopandbar:taps:title")} description={t("shopandbar:taps:description")} />
        <Shop title={t("shopandbar:shop:title")} description={t("shopandbar:shop:description")} />
      </div>
    )
  }
}

export default translate(["shopandbar"])(ShopAndBar);
