import React from "react";
import { translate } from "react-i18next/lib";
import moment from "moment";

import EventDescription from "./event_description";

class Event extends React.Component {
  static displayName = "Event";

  static propTypes = {
    event: React.PropTypes.object.isRequired
  };

  render() {
    const { t, event } = this.props;

    return (
      <div className="Event">
        <div className="Event-eventimage">
          <img src={event.cover.source} />
        </div>
        <h3>{event.name}</h3>
        <div><strong>{t("events:where")}</strong>: {event.place.name}</div>
        <div><strong>{t("events:when")}</strong>: {moment(event.start_time).format("dddd, MMMM Do YYYY, HH:mm")}</div>
        <EventDescription description={event.description} />
        <div><strong>Attending</strong>: {event.attending_count}</div>
        <a href={`http://www.facebook.com/events/${event.id}`} target="_blank">
          <strong>{t("events:viewInFacebook")}</strong>
        </a>
      </div>
    );
  }
}

export default translate(["events"])(Event);
