import { map } from "lodash";
import React from "react";

class EventDescription extends React.Component {
  render() {
    return (
      <div>
        {map(this.props.source.split("\n \n"), (par, i) => {
          return (
            <p key={i}>
              {map(par.split("\n"), (line, j) => {
                return (
                  <span key={j}>{line}<br /></span>
                );
              })}
            </p>
          );
        })}
      </div>
    );
  }
}

export default EventDescription;
