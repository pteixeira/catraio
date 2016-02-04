import "./events.styl";

import React from "react";
import { connect } from "react-redux";
import { map, orderBy } from "lodash";
import moment from "moment";
import { translate } from "react-i18next/lib";

import EventDescription from "./event_description";

class Events extends React.Component {
  static displayName = "Events";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const { t, events } = this.props;
    const sortedEvents = orderBy(events, ["start_time"], "desc");

    return (
      <div className="Events">
      <h2>{t("menu:events")}</h2>
       {
       map(sortedEvents, (event, i) => {
        return(
          <div className="Events-event" key={i}>
            <div className="Events-eventimage">
              <img src={event.cover.source} />
            </div>
            <h3>{event.name}</h3>
            <div><strong>{t("events:where")}</strong>: {event.place.name}</div>
            <div><strong>{t("events:when")}</strong>: {moment(event.start_time).format("dddd, MMMM Do YYYY, HH:mm")}</div>
            <EventDescription source={event.description} />
            <div><strong>Attending</strong>: {event.attending_count}</div>
            <div>
              <a href={`http://www.facebook.com/events/${event.id}`} target="null">
                <strong>{t("events:viewInFacebook")}</strong>
              </a>
            </div>
          </div>
        )
      })
      }
      </div>
    );
  }
}

function select(state) {
  return {
    events: state.events,
  };
}

export default translate(["events", "menu"])(connect(select)(Events));
