import "./photos.styl";

import React from "react";
import { map } from "lodash";

import Modal from "../modal";
import Photo from "./photo";
import Slideshow from "../slideshow"; // TODO: change slideshow to its own component


const URLs = [
  "http://placingbad.com/500/500/junior",
  "http://placingbad.com/800/500/hank",
  "http://placingbad.com/500/800/walter",
  "http://placingbad.com/300/200/jesse",
  "http://placingbad.com/300/300/skyler",
  "http://placingbad.com/1000/400/tuco",
  "http://lorempicsum.com/futurama/500/500/1",
  "http://lorempicsum.com/futurama/500/500/2",
  "http://lorempicsum.com/futurama/500/500/3",
  "http://lorempicsum.com/futurama/500/500/4",
  "http://www.placecage.com/g/900/900",
  "http://www.placecage.com/c/500/500",
  "http://www.stevensegallery.com/700/900",
  "http://www.stevensegallery.com/100/100",
  "http://www.stevensegallery.com/100/100",
  "http://www.stevensegallery.com/100/100",
  "http://www.stevensegallery.com/100/100",
  "http://www.stevensegallery.com/100/100",
];

class Photos extends React.Component {
  static displayName = "Photos";

  static propTypes = {
    children: React.PropTypes.node,
    outside: React.PropTypes.string
  };


  state = {
    isModalOpen: false,
    selected: 0
  };

  openModal(i) {
    this.setState({ isModalOpen: true, selected: i });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { outside } = this.props;

    return (
      <div className="Photos" id={outside ? "photos" : ""}>
        {map(URLs, (source, i) => {
          return (
            <Photo source={source} key={i} imageNumber={i} selected={this.state.selected}
              onClick={this.openModal.bind(this, i)} />
          )
        })}
        <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal.bind(this)}>
          <div className="Photos-slideshowcontainer">
            <Slideshow sources={URLs} currentSlide={this.state.selected} hideIndicators />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Photos;
