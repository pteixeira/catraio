import React from "react";

import BeerList from "./beerlist";

class Beers extends React.Component {
  static displayName = "Beers";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className="Beers">
        <h3>Currently available beers</h3>
        <BeerList />
      </div>
    );
  }
}

export default Beers;
