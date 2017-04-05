import React, { Component } from "react";
import Taps from "app-components/taps";
import Beers from "app-components/beers";

class Management extends Component {
  render() {
    return (
      <div>
        <Taps />
        <div className="Management-BeersContainer">
          <Beers />
        </div>
      </div>
    );
  }
}

export default Management;
