import "app-assets/normalize.css";
import "app-assets/fontello.css";
import "app-assets/fontello-codes.css";
import "app-assets/hagin.css";
import "app-assets/raleway.css";

import "./app.styl";

import React, { Component, PropTypes } from "react";
import { times, map } from "lodash";
import { compose, getContext, setDisplayName } from "recompose";

//
// Components
import FloatingMenu from "app-components/floating_menu";
import Lightbox from "app-components/lightbox";
import Header from "app-components/header";
import Events from "app-components/events";
import Tagline from "app-components/tagline";
import Billboard from "app-components/billboard";
import Blockquote from "app-components/blockquote";
import Gallery from "app-components/gallery";
import Clipping from "app-components/clipping";
import Footer from "app-components/footer";

const lightboxSources = map(times(20), () => "https://placehold.it/1280x800");
const gallerySources  = map(times(20), () => "https://placehold.it/185x170");

export class App extends Component {

  state = {
    lightboxOpen: true,
    lightboxPosition: 5,
  }

  //----------------------------------------------------------------------------
  // Lifecycle
  //----------------------------------------------------------------------------
  componentWillMount() {
    if (sessionStorage.getItem("over18") !== "1") {
      this.props.router.push("disclaimer");
    }
  }

  //----------------------------------------------------------------------------
  // Callbacks
  //----------------------------------------------------------------------------
  openLightboxAt = (position) => {
    this.setState({
      lightboxOpen: true,
      lightboxPosition: position,
    });
  }

  closeLightbox = () => {
    this.setState({ lightboxOpen: false });
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { lightboxOpen, lightboxPosition } = this.state;

    return (
      <div className="App">

        <FloatingMenu threshold={370} />

        <Lightbox
          isOpen={lightboxOpen}
          sources={lightboxSources}
          position={lightboxPosition}
          onRequestClose={this.closeLightbox}
        />

        <Header />

        <Events />

        <Tagline />

        <Billboard
          double
          src={[
            "https://placehold.it/800x540",
            "https://placehold.it/800x540",
          ]}
        />

        <Billboard src="https://placehold.it/1280x440" />

        <Blockquote
          quote="intro:quote"
          author="intro:author"
          date={new Date()}
        />

        <Gallery
          sources={gallerySources}
          onPictureClick={this.openLightboxAt}
        />

        <Billboard src="https://placehold.it/1280x440" />

        <Clipping
          image="https://placehold.it/630x600"
          author="Nome jornal/revista"
          date={new Date()}
        />

        <Clipping
          image="https://placehold.it/630x600"
          author="Nome jornal/revista"
          date={new Date()}
          right
        />


        <Blockquote
          quote="intro:quote"
          author="intro:author"
          date={new Date()}
        />

        {/*
        <Billboard
          single
          src="https://placehold.it/800x600"
        />
        <Beerlist />

        <Taplist />
        <Billboard
          single
          src="https://placehold.it/800x600"
        />

        <Merchandising />
        */}

        <Footer />

      </div>
    );
  }
}

export default compose(
  setDisplayName("App"),

  getContext({
    router: PropTypes.object.isRequired,
  }),
)(App);
