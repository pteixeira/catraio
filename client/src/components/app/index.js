import "app-assets/normalize.css";
import "app-assets/fontello.css";
import "app-assets/fontello-codes.css";
import "app-assets/hagin.css";
import "app-assets/raleway.css";

import "./app.styl";

import React, { Component, PropTypes } from "react";
import { times, map } from "lodash";
import { compose, getContext, setDisplayName } from "recompose";
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
import Clippings from "app-components/clippings";
import Taplist from "app-components/taplist";
import Merchandising from "app-components/merchandising";
import Footer from "app-components/footer";

const lightboxSources = map(times(20), () => "https://placehold.it/1280x800");
const gallerySources  = map(times(20), () => "https://placehold.it/185x170");
const merchSources = map(times(4), () => "https://placehold.it/1280x800");

export class App extends Component {

  state = {
    galleryLightboxOpen: false,
    galleryLightboxPosition: 0,
    merchLightboxOpen: false,
    merchLightboxPosition: 0,
  }

  //----------------------------------------------------------------------------
  // Lifecycle
  //----------------------------------------------------------------------------
  componentWillMount() {
    if (sessionStorage.getItem("over18") !== "1") {
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
      merchLightboxOpen,
      merchLightboxPosition,
    } = this.state;

    const { t } = this.props;

    return (
      <div className="App">

        <FloatingMenu threshold={280} />

        <Lightbox
          isOpen={galleryLightboxOpen}
          sources={lightboxSources}
          position={galleryLightboxPosition}
          onRequestClose={this.closeLightbox}
        />

        <Lightbox
          isOpen={merchLightboxOpen}
          sources={merchSources}
          position={merchLightboxPosition}
          onRequestClose={this.closeLightbox}
        />

        <Header />

        <SectionMarker id="catraio" />

        <Events onlyShowNext />

        <Tagline />

        <Billboard
          double
          src={[
            "https://catraio.s3.amazonaws.com/gallery/large/18.jpg",
            "https://catraio.s3.amazonaws.com/gallery/large/20.jpg",
          ]}
          height="480"
        />

        <Billboard
          src="https://catraio.s3.amazonaws.com/gallery/large/01.jpg"
          height="550"
          width="1280"
        />

        <Blockquote
          quote="intro:quote"
          author="intro:author"
          date={new Date()}
        />

        <Gallery
          sources={gallerySources}
          onPictureClick={this.openLightboxAt("gallery")}
        />

        <Billboard
          src="https://catraio.s3.amazonaws.com/gallery/large/02.jpg" 
          height="550"
          width="1280"
        />

        <Paragraph columnCount={2}>
          <Interpolate i18nKey={"catraio:main_text"} useDangerouslySetInnerHTML />
        </Paragraph>

        <Clippings
          imageLeft="https://catraio.s3.amazonaws.com/press/large/2017_06%20Timeout%20Porto.jpg"
          authorLeft="Nome jornal/revista"
          dateLeft={new Date()}
          imageRight="https://catraio.s3.amazonaws.com/press/large/2015_04%20-%20Time%20Out%20%282%29.jpg"
          authorRight="Nome jornal/revista"
          dateRight={new Date()}
        />

        <Blockquote
          quote="intro:quote"
          author="intro:author"
          date={new Date()}
        />

        <SectionMarker id="shopandbar" />

        <div className="Clearfix section">
          <Billboard
            single
            left
            src="https://catraio.s3.amazonaws.com/gallery/large/22.jpg"
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

        </div>

        <div className="Clearfix section">

          <div>

            <h1 className="section-header">{t("shopandbar:taps:title")}</h1>

            <Paragraph columnCount={1} extraClasses="right-pad">
              { t("shopandbar:taps:description") }
            </Paragraph>

            <Taplist />

          </div>


          <Billboard
            single
            right
            src="https://catraio.s3.amazonaws.com/gallery/large/06.jpg"
          />

        </div>

        <Merchandising
          onItemClick={this.openLightboxAt("merch")}
        />

        <SectionMarker id="events" />

        <Events showPastEvents />

        <SectionMarker id="photos" />

        <Gallery
          sources={gallerySources}
          onPictureClick={this.openLightboxAt("gallery")}
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

  translate(["catraio", "shopandbar"])
)(App);
