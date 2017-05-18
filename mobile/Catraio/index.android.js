import React, { Component } from "react";
import { Provider } from "react-redux";
import { AppRegistry, View } from "react-native";
import store from "app/store";

//
// Components
import App from "./app/components/App";

export default class Catraio extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("Catraio", () => Catraio);
