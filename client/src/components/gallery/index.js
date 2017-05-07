import "./index.styl";

import React, { PropTypes, Component } from "react";
import classnames from "classnames";
import { map, noop } from "lodash";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";

//
// Utils
import { horizontalSmoothScroll } from "app-root/util/scroll";

//
// Constants
const SCROLL_AMOUNT = 360;
const SCROLL_DURATION = 450;

export class Gallery extends Component {
  state = {
    firstVisible: 0,
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0,
  }

  //----------------------------------------------------------------------------
  // Lifecycle
  //----------------------------------------------------------------------------
  componentDidMount() {
    // we have to wait, otherwise child elements are not rendered, and scrollWidth
    // reports wrong values
    window.setTimeout(() => {
      const { scrollWidth, clientWidth } = this.refs.scroller;

      this.setState({ scrollWidth, clientWidth });
    }, 1000);
  }

  //----------------------------------------------------------------------------
  // Event handlers
  //----------------------------------------------------------------------------
  scrollLeft = () => {
    horizontalSmoothScroll(
      this.refs.scroller,
      -SCROLL_AMOUNT,
      SCROLL_DURATION,
      "easeInOutQuad",
      (scrollLeft) => this.setState({ scrollLeft }),
    );
  }
  scrollRight = () => {
    horizontalSmoothScroll(
      this.refs.scroller,
      SCROLL_AMOUNT,
      SCROLL_DURATION,
      "easeInOutQuad",
      (scrollLeft) => this.setState({ scrollLeft }),
    );
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { scrollLeft, clientWidth, scrollWidth } = this.state;
    const { sources, onPictureClick } = this.props;

    const cx = classnames("Gallery", {
      "arrow-left": scrollLeft > 0,
      "arrow-right": scrollLeft + clientWidth < scrollWidth,
    });

    return (
      <div className={cx}>
        <div
          className="Gallery-arrow-left"
          onClick={this.scrollLeft}
        >
          <i className="icon icon-left-open" />
        </div>
        <div
          className="Gallery-arrow-right"
          onClick={this.scrollRight}
        >
          <i className="icon icon-right-open" />
        </div>

        <div className="scroller" ref="scroller">
          {map(sources, (url, i) => {
            return (
              <div
                key={i}
                className="Thumbnail ClickablePicture"
                onClick={() => onPictureClick(i)}
              >
                <img src={url} />
              </div> 
            );
          })}
        </div>
      </div>
    );
  }
}

export default compose(
  setDisplayName("Gallery"),

  setPropTypes({
    sources: PropTypes.arrayOf(PropTypes.string).isRequired,
    onPictureClick: PropTypes.func,
  }),

  defaultProps({
    sources: [],
    onPictureClick: noop,
  }),
)(Gallery);
