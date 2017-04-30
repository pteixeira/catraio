import "./events.styl";

import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { compose, setDisplayName } from "recompose";

import Event from "./event";
import { addPastEvents } from "../../actions/pastevents";

class Events extends React.Component {
  state = {
    isShowingPastEvents: false
  }

  //----------------------------------------------------------------------------
  // Event Handlers
  //----------------------------------------------------------------------------
  showPastEvents() {
    this.setState({ isShowingPastEvents: !this.state.isShowingPastEvents });
    if (this.props.pastevents.size > 0) {
      return;
    }

    this.props.dispatch(addPastEvents());
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { t, events, pastevents } = this.props;
    const { isShowingPastEvents } = this.state;

    const sortedEvents = events.sortBy(ev => ev.start_time);
    const sortedPastEvents = pastevents.sortBy(ev => ev.start_time);
    const pastEventsCx = classnames("Events-pastevents", {
      "hide": !isShowingPastEvents
    });
    const noEventsCx = classnames("Events-noevents", {
      "hide": sortedEvents.size > 0
    });

    return (
      <div className="Events" id="events">

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
          {sortedPastEvents.map((event, i) => <Event event={event} key={i} /> )}
        </div>

      </div>
    );
  }
}

export default compose(
  setDisplayName("Events"),

  translate([ "events", "menu" ]),

  connect(({ events, pastevents }) => {
    return {
      events,
      pastevents,
    };
  }),
)(Events);
