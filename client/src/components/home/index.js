import React from "react";

import Intro from "app-components/intro";
import Catraio from "app-components/catraio";
import ShopAndBar from "app-components/shopandbar";
// import Events from "app-components/events";
// import Photos from "app-components/photos";

class Home extends React.Component {
  static displayName = "Home";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className="Home">
        <Intro />
        <Catraio />
        <ShopAndBar />
{/*        <Events />
        <Photos />*/}
      </div>
    );
  }
}

export default Home;
