import React from "react";

class App extends React.Component {
  static displayName = "App";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
