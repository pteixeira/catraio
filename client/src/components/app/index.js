import "app-assets/normalize.css";
import "app-assets/fontello.css";
import "app-assets/fontello-codes.css";
import "app-assets/hagin.css";
import "app-assets/raleway.css";

import "./app.styl";

import React from "react";

import Header from "./header";
import Footer from "app-components/footer";

class App extends React.Component {
  static displayName = "App";

  static propTypes = {
    children: React.PropTypes.node
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  // Lifecycle methods
  componentWillMount() {
    if (sessionStorage.getItem("over18") !== "1") {
      this.context.router.push("disclaimer");
    }
  }

  render() {
    return (
      <div className="App">

        <Header />

        {this.props.children}

        <Footer />

      </div>
    );
  }
}

export default App;
