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
  "http://placingbad.com/1000/400/tuco"
];

class Photos extends React.Component {
  static displayName = "Photos";

  static propTypes = {
    children: React.PropTypes.node
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
    return (
      <div className="Photos">
        {map(URLs, (source, i) => {
          return (
            <Photo source={source} key={i} imageNumber={i} selected={this.state.selected}
              onClick={this.openModal.bind(this, i)} />
          )
        })}
        <Modal isOpen={this.state.isModalOpen}>
          <div className="Modal-close" onClick={this.closeModal.bind(this)}>X</div>
          <div className="Photos-slideshowcontainer">
            <Slideshow sources={URLs} hideIndicators={1} currentSlide={this.state.selected} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Photos;
