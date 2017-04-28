import "./shopandbar.styl";

import { translate, Interpolate } from "react-i18next";
import React from "react";
import BarMenu from "./barmenu";
import BarTaps from "./bartaps";
import Shop from "./shop";

class ShopAndBar extends React.Component {
  render() {
    const { t } = this.props;
    let link = <a href="http://www.untappd.com">Untappd</a>;

    return (
      <div className="ShopAndBar" id="shopandbar">
        <BarMenu title={t("shopandbar:bar:title")} description={<Interpolate i18nKey={t("shopandbar:bar:description")} useDangerouslySetInnerHTML />} />
        <BarTaps title={t("shopandbar:taps:title")} description={<Interpolate i18nKey="shopandbar:taps:description" link={link} />} />
        <Shop title={t("shopandbar:shop:title")} description={t("shopandbar|shop|description", {nsSeparator: "|"}) } />
      </div>
    )
  }
}

export default translate(["shopandbar"])(ShopAndBar);
