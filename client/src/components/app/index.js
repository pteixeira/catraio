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
import Paragraph from "app-components/paragraph";
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

        <Paragraph columnCount={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis leo tellus. Etiam tempor, dui nec auctor rutrum, est erat feugiat magna, eget dapibus erat ante nec felis. Aenean interdum nibh eget porta fermentum. Proin et iaculis nisl. Nam sollicitudin, est a tincidunt auctor, mi justo varius nibh, non ultricies est lorem nec diam. Suspendisse pretium a tortor ut commodo. Nunc gravida neque dolor, ut cursus ipsum eleifend non. Mauris laoreet nec ante a condimentum. Vestibulum quis felis eu neque ullamcorper facilisis. Praesent a tempor ligula, vel semper sapien. Nam placerat a odio nec blandit. Suspendisse feugiat vel libero sed lacinia. Vestibulum sollicitudin posuere tortor a convallis. Maecenas ut nibh gravida, tincidunt orci nec, imperdiet sem. Nulla ultrices lectus ac interdum efficitur. Fusce lobortis erat augue, at placerat ante dictum a.
          Etiam eleifend massa non semper pellentesque. Quisque a purus sit amet mi auctor vehicula in at lacus. Sed interdum, magna vel pellentesque viverra, orci quam fermentum est, non convallis ex ex in turpis. Maecenas placerat tristique dolor non egestas. In eu augue et lectus pretium mollis. Aliquam consequat nisi vel velit lobortis accumsan. Vestibulum ultricies odio in tellus malesuada lobortis. Integer in iaculis justo. Aliquam porta consequat nisl id placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </Paragraph>

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
