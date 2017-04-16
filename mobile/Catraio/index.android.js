import React, { Component } from "react";
import { AppRegistry, View } from "react-native";

//
// Components
import App from "./app/components/App";

export default class Catraio extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent("Catraio", () => Catraio);
