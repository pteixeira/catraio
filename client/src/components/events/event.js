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
    const backgroundStyle = {
      background: `url(${event.get("cover").get("source")}) no-repeat center center`
    };

    const eventLink = `http://www.facebook.com/events/${event.get("id")}`;

    return (
      <div className="Event">
        <a href={eventLink} target="_blank" className="no-hover">
          <div className="Event-eventheader" style={backgroundStyle}>
            <div className="Eventheader-text">
              <div className="Eventheader-info">
                <div className="Eventheader-date">{moment(event.get("start_time")).format("D MMM")}</div>
                <div className="Eventheader-hour">{moment(event.get("start_time")).format("HH:mm")}</div>
              </div>
              <div className="Eventtext-name">{event.get("name")}</div>
            </div>
          </div>
        </a>
        <div className="Event-info">
          <div><strong>{t("events:where")}</strong>: {event.get("place").get("name")}</div>
          <EventDescription description={event.get("description")} />
          <a href={eventLink} target="_blank" className="black">
            <strong>{t("events:viewInFacebook")}</strong>
          </a>
        </div>
      </div>
    );
  }
}

export default translate(["events"])(Event);
