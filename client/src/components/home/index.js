import "./home.styl";

import React from "react";

import Taps from "../taps";
import Slideshow from "../slideshow";

const URLS = [
  "http://placingbad.com/800/200",
  "http://placingbad.com/800/200/marie",
  "http://placingbad.com/800/200/hank"
]

class Home extends React.Component {
  static displayName = "Home";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className="Home">
        <Taps />
        <div className="Home-slideshowcontainer">
          <Slideshow sources={URLS} hideIndicators={0} hideSlidingImages={1} initialSlide={0} />
        </div>
      </div>
    );
  }
}

export default Home;
