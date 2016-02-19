import React from "react";
import { translate } from "react-i18next/lib";

import BeerList from "./beerlist";

class Beers extends React.Component {
  static displayName = "Beers";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const { t } = this.props;

    return (
      <div className="Beers">
        <h3>{t("beers:mainheader")}</h3>
        <BeerList />
      </div>
    );
  }
}

export default translate(["beers"])(Beers);
