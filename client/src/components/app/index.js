import "app-assets/normalize.css";
import "app-assets/fontello.css";
import "app-assets/fontello-codes.css";
import "app-assets/hagin.css";
import "app-assets/raleway.css";

import "./app.styl";

import React, { Component } from "react";
import { compose, getContext, setDisplayName } from "recompose";

//
// Components
import Header from "app-components/header";
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

        <Header />

        {/*
        <Menu />

        <Events />

        <Tagline />

        <Billboard
          double
          src={[
            "https://placehold.it/800x800",
            "https://placehold.it/800x800",
          ]}
        />

        <Billboard wide src="https://placehold.it/1024x440" />

        <Blockquote />

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
