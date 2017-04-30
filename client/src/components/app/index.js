import "app-assets/normalize.css";
import "app-assets/fontello.css";
import "app-assets/fontello-codes.css";
import "app-assets/hagin.css";
import "app-assets/raleway.css";

import "./app.styl";

import React, { Component, PropTypes } from "react";
import { compose, getContext, setDisplayName } from "recompose";

//
// Components
import FloatingMenu from "app-components/floating_menu";
import Header from "app-components/header";
import Events from "app-components/events";
import Tagline from "app-components/tagline";
import Billboard from "app-components/billboard";
import Blockquote from "app-components/blockquote";
import Footer from "app-components/footer";

export class App extends Component {

  //----------------------------------------------------------------------------
  // Lifecycle
  //----------------------------------------------------------------------------
  componentWillMount() {
    if (sessionStorage.getItem("over18") !== "1") {
      this.props.router.push("disclaimer");
    }
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    return (
      <div className="App">

        <FloatingMenu threshold={370} />

        <Header />

        <Events />

        <Tagline />

        <Billboard
          double
          src={[
            "https://placehold.it/800x440",
            "https://placehold.it/800x440",
          ]}
        />

        <Billboard src="https://placehold.it/1240x440" />

        <Blockquote
          quote="intro:quote"
          author="intro:author"
          date={new Date()}
        />

        {/*
        <Gallery />

        <Billboard src="https://placehold.it/1024x440" />

        <Clipping
          src="https://800x600"
          author="Nome jornal/revista"
          date={new Date()}
        />

        <Clipping
          src="https://800x600"
          author="Nome jornal/revista"
          date={new Date()}
        />

        <Blockquote />

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
