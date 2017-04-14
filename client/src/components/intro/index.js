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
          <img src="https://placehold.it/800x800" alt=""/>
          <img src="https://placehold.it/800x800" alt=""/>
        </div>

        <div className="Intro-photocatraios" />

        <div className="Blockquote">
          <div className="quote">
            <Interpolate i18nKey="intro:quote" useDangerouslySetInnerHTML />
          </div>
          <div className="author">
            {t("intro:author")}
          </div>
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
