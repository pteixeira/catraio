import React from "react";
import { translate } from "react-i18next/lib";
import moment from "moment";
import Immutable from "immutable";

import EventDescription from "./event_description";

class Event extends React.Component {
  static displayName = "Event";

  static propTypes = {
    event: React.PropTypes.instanceOf(Immutable.Map).isRequired
  };

  render() {
    const { t, event } = this.props;

    return (
      <div className="Event">
        <div className="Event-eventimage">
          <img src={event.get("cover").get("source")} />
        </div>
        <h3>{event.get("name")}</h3>
        <div><strong>{t("events:where")}</strong>: {event.get("place").get("name")}</div>
        <div>
          <strong>{t("events:when")}</strong>:
          {moment(event.get("start_time")).format("dddd, MMMM Do YYYY, HH:mm")}
        </div>
        <EventDescription description={event.get("description")} />
        <div><strong>Attending</strong>: {event.get("attending_count")}</div>
        <a href={`http://www.facebook.com/events/${event.get("id")}`} target="_blank">
          <strong>{t("events:viewInFacebook")}</strong>
        </a>
      </div>
    );
  }
}

export default translate(["events"])(Event);
