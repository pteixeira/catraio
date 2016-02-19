import { map } from "lodash";
import React from "react";

class EventDescription extends React.Component {
  static displayName = "EventDescription";

  static propTypes = {
    description: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        {map(this.props.description.split("\n \n"), (par, i) => {
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
