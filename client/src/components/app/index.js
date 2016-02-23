import "../../assets/normalize.css";
import "../../assets/fontello.css";
import "../../assets/fontello-codes.css";

import "./app.styl";

import React from "react";

import Header from "./header";
import Footer from "./footer";

class App extends React.Component {
  static displayName = "App";

  static propTypes = {
    children: React.PropTypes.node
  };

  // Lifecycle methods
  componentWillMount() {
    if (sessionStorage.getItem("over18") !== "1") {
      this.props.history.pushState(null, "/disclaimer");
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
