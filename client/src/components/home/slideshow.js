import "./slideshow.styl";

import React from "react";

import { map, times } from "lodash";
import classnames from "classnames";

class Slideshow extends React.Component {
  static propTypes = {
    sources: React.PropTypes.array.isRequired
  };

  state = {
    currentSlide: this.props.initialSlide
  };

  prev() {
    if (this.state.currentSlide === 0) {
      this.setState({
        currentSlide: this.props.sources.length - 1
      });
    } else {
      this.setState({
        currentSlide: this.state.currentSlide - 1
      });
    }
  }

  next() {
    if (this.state.currentSlide === this.props.sources.length -1) {
      this.setState({
        currentSlide: 0
      });
    } else {
      this.setState({
        currentSlide: this.state.currentSlide + 1
      });
    }
  }

  goToSlide(i) {
    this.setState({
      currentSlide: i
    });
  }

  render() {
    return (
      <div className="Slideshow">
        <div className="Slideshow-prev" onClick={this.prev.bind(this)}>
          <div className="arrow-prev">Prev</div>
        </div>

        <div className="Slideshow-images">
          {map(this.props.sources, (src, i) => {
            const imageCx = classnames("Slideshow-image", {
              "active": this.state.currentSlide === i
            });
            return( <img src={src} className={imageCx}/>)
          })}
        </div>

        <div className="Slideshow-next" onClick={this.next.bind(this)}>
          <div className="arrow-next">Next</div>
        </div>

        <div className="Slideshow-indicators">
          {times(this.props.sources.length, i => {
            const indicatorCx = classnames("Slideshow-indicator",
              {"active": this.state.currentSlide === i}
            );
            return (
              <div key={i} className={indicatorCx} onClick={this.goToSlide.bind(this, i)} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Slideshow;
