import React from "react";

import { map } from "lodash";
import classnames from "classnames";

class Photo extends React.Component {
  static displayName = "Photo";

  static propTypes = {
    children: React.PropTypes.node,
    source: React.PropTypes.string.isRequired,
    imageNumber: React.PropTypes.number.isRequired
  };

  render() {
    const ref = "Photo-" + this.props.imageNumber;
    return (
      <div className="Photo" ref={ref} onClick={this.props.onClick}>
        <img src={this.props.source} className="Photo-image" />
      </div>
    );
  }
}

export default Photo;
