import "./events.styl";

import React from "react";
import { connect } from "react-redux";
import { map, orderBy } from "lodash";
import classnames from "classnames";
import { translate } from "react-i18next/lib";

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
    // const sortedEvents = orderBy(events, ["start_time"], "desc");
    const sortedEvents = events.sortBy(ev => ev.start_time);
    const sortedPastEvents = pastevents.sortBy(ev => ev.start_time);
    const pastEventsCx = classnames("Events-pastevents", {
      "hide": !this.state.isShowingPastEvents
    });

    return (
      <div className="Events">
        <h2>{t("menu:events")}</h2>
        {sortedEvents.map((event, i) => {
          return(
            <div className="Events-event" key={i}>
              <Event event={event} />
            </div>
          )
        })}
        <div className="Events-showpast" onClick={this.showPastEvents.bind(this)}>
          {this.state.isShowingPastEvents ? t("events:hidepast") : t("events:showpast")}
        </div>
        <div className={pastEventsCx}>
          {sortedPastEvents.map((event, i) => {
            return(
              <div className="Events-event" key={i}>
                <Event event={event} />
              </div>
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
