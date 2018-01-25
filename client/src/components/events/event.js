/* eslint-disable react/no-multi-comp */
import React, { PropTypes } from "react";
import moment from "moment";
import Immutable from "immutable";
import { map } from "lodash";
import { compose, setDisplayName, setPropTypes } from "recompose";

const Description = ({ description }) => {
  if (!description) return null;

  return (
    <div className="description">
      {map(description.split("\n \n"), (par, i) => (
        <p key={i}>
          {map(par.split("\n"), (line, j) => (
            <span key={j}>{line}<br /></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export const Event = ({ event }) => {
  const cover = {
    backgroundImage: `url(${event.get("link")})`,
  };

  const link = `https://www.facebook.com/events/${event.get("id")}`;

  return (
    <div className="Event">
      <a href={link} target="_blank">
        <div className="cover" style={cover} />

        <div className="details">
          <div className="date">
            <span className="d">{moment(event.get("start_time")).format("D")}</span>
            <span className="m">{moment(event.get("start_time")).format("MMM")}</span>
          </div>
          <h1 className="title">{event.get("name")}</h1>
        </div>
      </a>

      <Description description={event.get("description")} />
    </div>
  );
}

export default compose(
  setDisplayName("Event"),

  setPropTypes({
    event: PropTypes.instanceOf(Immutable.Map).isRequired,
  }),
)(Event);
/* eslint-enable react/no-multi-comp */
