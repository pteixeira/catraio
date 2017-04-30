import "./intro.styl";

import React from "react";
import { connect } from "react-redux";
import { translate, Interpolate } from "react-i18next";

import Photos from "../photos";
import Event from "../events/event";
import Headliner from "./headliner";

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
          <Interpolate i18nKey="intro:quote" useDangerouslySetInnerHTML />
        </div>
        <Photos />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    firstEvent: state.events.get(0)
  }
}

export default translate(["events", "intro"])(connect(mapStateToProps)(Intro));
