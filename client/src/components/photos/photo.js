import React from "react";
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
    const photoImageCx = classnames("Photo-image", {
      "Photo-image-selected": this.props.selected === this.props.imageNumber
    })
    return (
      <div className="Photo" ref={ref} onClick={this.props.onClick}>
        <img src={this.props.source} className={photoImageCx} />
      </div>
    );
  }
}

export default Photo;
