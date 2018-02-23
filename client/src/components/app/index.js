import "app-assets/normalize.css";
import "app-assets/fontello.css";
import "app-assets/fontello-codes.css";
import "app-assets/hagin.css";
import "app-assets/raleway.css";

import "./app.styl";
import "./responsive.styl";

import React, { Component, PropTypes } from "react";
import { compose, getContext, setDisplayName } from "recompose";
import { connect } from "react-redux";
import { translate, Interpolate } from "react-i18next";

//
// Components
import SectionMarker from "app-components/section_marker";
import FloatingMenu from "app-components/floating_menu";
import Lightbox from "app-components/lightbox";
import Header from "app-components/header";
import Events from "app-components/events";
import Tagline from "app-components/tagline";
import Billboard from "app-components/billboard";
import Blockquote from "app-components/blockquote";
import Gallery from "app-components/gallery";
import Paragraph from "app-components/paragraph";
import Taplist from "app-components/taplist";
import Merchandising from "app-components/merchandising";
import Footer from "app-components/footer";

const merchSources = [ "tshirt", "hat", "bag", "cap-opener", "growlers", "hoodie" ].map(item => ({
  thumb: require(`../../assets/images/merch/thumbs/${item}.jpg`),
  large: require(`../../assets/images/merch/${item}.jpg`),
  full: require(`../../assets/images/merch/${item}.jpg`),
}));

export class App extends Component {

  state = {
    galleryLightboxOpen: false,
    galleryLightboxPosition: 0,
    pressLightboxOpen: false,
    pressLightboxPosition: 0,
    merchLightboxOpen: false,
    merchLightboxPosition: 0,
  }

  //----------------------------------------------------------------------------
  // Lifecycle
  //----------------------------------------------------------------------------
  componentWillMount() {
    if (localStorage.getItem("over18") !== "1") {
      this.props.router.push("disclaimer");
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  //----------------------------------------------------------------------------
  // Callbacks
  //----------------------------------------------------------------------------
  openLightboxAt = (lightbox) => {
    return (position) => this.setState({
      [`${lightbox}LightboxOpen`]: true,
      [`${lightbox}LightboxPosition`]: position,
    });
  }

  closeLightbox = () => {
    this.setState({
      galleryLightboxOpen: false,
      pressLightboxOpen: false,
      merchLightboxOpen: false,
    });
  }

  handleKeyDown = (ev) => {
    if (ev.key === "Escape") {
      this.closeLightbox();
    }
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const {
      galleryLightboxOpen,
      galleryLightboxPosition,
      pressLightboxOpen,
      pressLightboxPosition,
      merchLightboxOpen,
      merchLightboxPosition,
    } = this.state;

    const { t, gallery, press } = this.props;

    return (
      <div className="App">

        <FloatingMenu threshold={280} />

        <Lightbox
          isOpen={galleryLightboxOpen}
          sources={gallery}
          position={galleryLightboxPosition}
          onRequestClose={this.closeLightbox}
        />

        <Lightbox
          isOpen={merchLightboxOpen}
          sources={merchSources}
          position={merchLightboxPosition}
          onRequestClose={this.closeLightbox}
        />

        <Lightbox
          isOpen={pressLightboxOpen}
          sources={press}
          position={pressLightboxPosition}
        />

        <Header />

        <SectionMarker id="catraio" />

        <Events onlyShowNext />

        <Tagline />

        {/* Catraio, Bar */}
        <Billboard
          double
          src={[
            "https://catraio.s3.amazonaws.com/gallery/large/Catraio_1.jpg",
            "https://catraio.s3.amazonaws.com/gallery/large/DSC01306.jpg",
          ]}
          altText={[
            "Catraio Craft Beer Shop store front",
            "Catraio's bar"
          ]}
          height="480"
          className="desktop"
        />

        <Billboard
          src="https://catraio.s3.amazonaws.com/gallery/large/DSC03782.jpg"
          width="100%"
          height="550"
          altText="Catraio's Owners Ricardo and Bia"
          className="desktop"
        />

        <Billboard
          src="https://catraio.s3.amazonaws.com/gallery/large/DSC01306.jpg"
          className="mobile"
          height="320"
          altText="Catraio's bar"
        />

        <Blockquote
          quote="intro:quote"
          author="intro:author"
        />

        <SectionMarker id="photos" />

        <Gallery
          sources={gallery}
          onPictureClick={this.openLightboxAt("gallery")}
        />

        <Paragraph columnCount={2}>
          <Interpolate i18nKey={"catraio:main_text"} useDangerouslySetInnerHTML />
        </Paragraph>

        <Billboard
          src="https://catraio.s3.amazonaws.com/gallery/large/DSC02340.jpg"
          height="550"
          width="100%"
          altText="Beer Garden"
          className="desktop"
        />

        <Billboard
          src="https://catraio.s3.amazonaws.com/gallery/large/DSC02340.jpg"
          height="200"
          altText="Beer Garden"
          className="mobile"
        />

        <SectionMarker id="shopandbar" />

        <h1>{t("menu:shopandbar")}</h1>
        <div className="Clearfix section">

          <Billboard
            single
            right
            src="https://catraio.s3.amazonaws.com/gallery/large/DSC01513.jpg"
            altText="Inside Catraio, with an outside view."
            className="desktop"
          />

          <div className="section-bottles">
            <h1 className="section-header">{t("shopandbar:bar:title")}</h1>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link yellow"
              href="https://untappd.com/v/catraio-craft-beer-shop/2524942?ng_menu_id=bedae486-eb19-4312-a18e-e1c8ccff56f4"
            >
              MENU
            </a>

            <Paragraph columnCount={1} extraClasses="left-pad">
              <Interpolate i18nKey={"shopandbar:bar:description"} useDangerouslySetInnerHTML />
            </Paragraph>
          </div>

          <Billboard
            single
            right
            src="https://catraio.s3.amazonaws.com/gallery/large/DSC01513.jpg"
            altText="Inside Catraio, with an outside view."
            className="mobile"
            height="200"
          />

        </div>

        <div className="Clearfix section">

          <div className="section-taps right-pad">

            <h1 className="section-header">{t("shopandbar:taps:title")}</h1>

            <Paragraph columnCount={1}>
              { t("shopandbar:taps:description") }
            </Paragraph>

            <Billboard
              single
              right
              src="https://catraio.s3.amazonaws.com/gallery/large/DSC02299.jpg"
              height="160"
              altText="Catraio's Taps"
              className="mobile"
            />

            <Taplist />

          </div>

          <Billboard
            single
            right
            src="https://catraio.s3.amazonaws.com/gallery/large/DSC02299.jpg"
            altText="Catraio's Taps"
            className="desktop"
          />

        </div>

        <Merchandising
          onItemClick={this.openLightboxAt("merch")}
        />

        <SectionMarker id="events" />

        <Events showPastEvents />

        <h1>{t("press:title")}</h1>

        <Gallery
          sources={press}
          onPictureClick={this.openLightboxAt("press")}
        />

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

  translate(["catraio", "shopandbar", "press"]),

  connect(({ gallery, press }) => ({
    gallery: gallery.toJS(),
    press: press.toJS()
  })),
)(App);
