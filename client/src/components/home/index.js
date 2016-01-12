import React from "react";

import Slideshow from "./slideshow";

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
        <Slideshow sources={URLS} />
      </div>
    );
  }
}

export default Home;
