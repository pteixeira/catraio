import "./intro.styl";

import React from "react";

import Taps from "../taps";
import Slideshow from "../slideshow";
import LoginForm from "../login";

const URLS = [
  "http://placingbad.com/800/200",
  "http://placingbad.com/800/200/marie",
  "http://placingbad.com/800/200/hank"
]

class Intro extends React.Component {
	render() {
    return (
      <div className="Intro">
        <LoginForm />
        <Taps />
        <div className="Intro-slideshowcontainer">
          <Slideshow sources={URLS} hideIndicators={false} hideSlidingImages={1} initialSlide={0} />
        </div>
      </div>
    )
  }
}

export default Intro;
