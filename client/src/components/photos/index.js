import "./photos.styl";

import React from "react";
import { map } from "lodash";

import Modal from "../modal";
import Photo from "./photo";
import Slideshow from "../slideshow"; // TODO: change slideshow to its own component


const URLs = [
  "https://placehold.it/185x170",
  "https://placehold.it/185x170",
  "https://placehold.it/185x170",
  "https://placehold.it/185x170",
  "https://placehold.it/185x170",
  "https://placehold.it/185x170",
  "https://placehold.it/185x170",
  "https://placehold.it/185x170",
  "https://placehold.it/185x170",
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
