import "./index.styl";

import React, { PropTypes, Component } from "react";
import classnames from "classnames";
import { map, times, noop } from "lodash";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";

export class Lightbox extends Component {

  state = {
    position: this.props.position,
  }

  //----------------------------------------------------------------------------
  // Lifecycle
  //----------------------------------------------------------------------------
  componentDidMount() {
    this.scrollToPosition();
    document.addEventListener("keydown", this.handleKeydown, false);
  }

  componentWillReceiveProps({ position }) {
    this.setState({ position }, this.scrollToPosition);
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  //----------------------------------------------------------------------------
  // Event handler
  //----------------------------------------------------------------------------
  scrollLeft = () => {
    const { position } = this.state;

    if (position === 0) return;

    this.setState({ position: position - 1 }, this.scrollToPosition);
  }

  scrollRight = () => {
    const { sources } = this.props;
    const { position } = this.state;

    if (position === sources.length - 1) return;

    this.setState({ position: position + 1 }, this.scrollToPosition);
  }

  scrollToPosition = () => {
    const { scroller } = this.refs;
    const { sources } = this.props;
    const { position } = this.state;

    const displacement = -(scroller.scrollWidth / sources.length) * (position);

    scroller.style.transform = `translate3d(${displacement}px, 0, 0)`;
  }

  setPosition = (position) => () => {
    this.setState({ position }, this.scrollToPosition);
  }

  handleKeydown = (ev) => {
    switch (ev.key) {
    case "ArrowLeft":
      ev.preventDefault();
      this.scrollLeft();
      break;
    case "ArrowRight":
      ev.preventDefault();
      this.scrollRight();
      break;
    default:
      return;
    }
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { sources, isOpen, onRequestClose } = this.props;
    const { position } = this.state;

    const cx = classnames("Lightbox", { hidden: !isOpen });

    return (
      <div className={cx}>

        <div className="overlay" />

        <div className="close" onClick={onRequestClose}>
          <i className="icon icon-cancel" />
        </div>
        <div className="left" onClick={this.scrollLeft}>
          <i className="icon icon-left-open" />
        </div>
        <div className="right" onClick={this.scrollRight}>
          <i className="icon icon-right-open" />
        </div>

        <div className="pictures">
          <div
            className="scroller"
            ref="scroller"
            style={{ width: `${sources.length * 100}%`}}
          >
            {map(sources, (source, i) => {
              return (
                <div
                  key={i}
                  className="picture"
                  style={{ width: `${100 / sources.length}%` }}
                >
                  <a href={source.full} target="_blank" rel="noopener noreferrer">
                    <img src={source.large} alt="" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        <div className="guide">
          {times(sources.length, i => {
            const cx = classnames("indicator", { selected: position === i });

            return <div key={i} className={cx} onClick={this.setPosition(i)}/>;
          })}
        </div>

      </div>
    );
  }

}

export default compose(
  setDisplayName("Lightbox"),

  setPropTypes({
    isOpen: PropTypes.bool.isRequired,
    position: PropTypes.number.isRequired,
    sources: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRequestClose: PropTypes.func.isRequired,
  }),

  defaultProps({
    isOpen: false,
    position: 0,
    sources: [],
    onRequestClose: noop,
  }),
)(Lightbox);
