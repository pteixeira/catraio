import "./events.styl";

import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { translate } from "react-i18next";

import Event from "./event";
import { addPastEvents } from "../../actions/pastevents";

class Events extends React.Component {
  static displayName = "Events";

  static propTypes = {
    children: React.PropTypes.node
  };

  state = {
    isShowingPastEvents: false
  };

  showPastEvents() {
    this.setState({ isShowingPastEvents: !this.state.isShowingPastEvents });
    if (this.props.pastevents.size > 0) {
      return;
    }

    this.props.dispatch(addPastEvents());
  }

  render() {
    const { t, events, pastevents } = this.props;

    const sortedEvents = events.sortBy(ev => ev.start_time);
    const sortedPastEvents = pastevents.sortBy(ev => ev.start_time);
    const pastEventsCx = classnames("Events-pastevents", {
      "hide": !this.state.isShowingPastEvents
    });
    const noEventsCx = classnames("Events-noevents", {
      "hide": sortedEvents.size > 0
    });

    return (
      <div className="Events">
        <div className="Events-nextevents">
          <h2>{t("menu:events")}</h2>
          <div className={noEventsCx}>
            {t("events:noevents")}
          </div>
          {sortedEvents.map((event, i) => {
            return (
              <div className="Events-event" key={i}>
                <Event event={event} />
              </div>
            )
          })}
        </div>
        <div className="Events-showpast">
          <span className="Showpast-toggle" onClick={this.showPastEvents.bind(this)}>
            <i className="icon-calendar"/>
            {this.state.isShowingPastEvents ? t("events:hidepast") : t("events:showpast")}
          </span>
        </div>
        <div className={pastEventsCx}>
          <h2>{t("events:pastevents")}</h2>
          {sortedPastEvents.map((event, i) => {
            return (
              <Event event={event} key={i} />
            )
          })}
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    events: state.events,
    pastevents: state.pastevents
  };
}

export default translate(["events", "menu"])(connect(select)(Events));
