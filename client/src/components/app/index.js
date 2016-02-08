import "../../assets/normalize.css";
import "./app.styl";

import React from "react";

import Header from "./header";
import Footer from "./footer";

class App extends React.Component {
  static displayName = "App";

  static propTypes = {
    children: React.PropTypes.node
  };

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
