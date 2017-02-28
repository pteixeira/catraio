import "./intro.styl";

import React from "react";
import { connect } from "react-redux";
import { translate } from "react-i18next";

import Photos from "../photos";
// import Slideshow from "../slideshow";
import LoginForm from "../login";
import Event from "../events/event";
import Headliner from "./headliner";

// const URLS = [
//   "http://placingbad.com/800/200",
//   "http://placingbad.com/800/200/marie",
//   "http://placingbad.com/800/200/hank"
// ]

class Intro extends React.Component {
  render() {
    const { firstEvent, t } = this.props;

    return (
      <div className="Intro">
        <div className="Intro-firstevent">
          { firstEvent ? <Event event={firstEvent} /> : t("events:noevents") }
        </div>
        <Headliner />
        <div className="Intro-highlights">
          <img src="http://lorempicsum.com/futurama/800/800/1" alt=""/>
          <img src="https://www.stevensegallery.com/g/800/800" alt=""/>
        </div>
        <div className="Intro-photocatraios">
          <img src="https://www.stevensegallery.com/1500/800" alt=""/>
        </div>
        <div className="Intro-quote">
          “It is sometimes an appropriate response to reality to go insane.” <br />
          ― Philip K. Dick, VALIS
        </div>
        <Photos />
        <LoginForm />
        {/* remove from here
        <div className="Intro-slideshowcontainer">
          <Slideshow sources={URLS} hideIndicators={false} hideSlidingImages={1} initialSlide={0} />
        </div>*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    firstEvent: state.events[0]
  }
}

export default translate(["events"])(connect(mapStateToProps)(Intro));
