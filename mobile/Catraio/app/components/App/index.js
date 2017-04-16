import React, { Component } from "react";
import { View, Alert, Text } from "react-native";

//
// Components
import Navbar from "app/components/UIKit/Navbar";

//
// Styles
import styles from "./styles";

//
// Constants
const ON_TAP = 0;
const BOTTLES = 1;

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      active: ON_TAP,
    };
  }

  render() {
    const { active } = this.state;

    return (
      <View style={styles.container}>
        <Navbar
          items={[ "On Tap", "Bottles" ]}
          onChange={(active) => this.setState({ active })}
        />

        <View style={styles.list}>
          <Text style={{ fontSize: 32 }}>
            { active === ON_TAP ? "On Tap List" : "Bottles List" }
          </Text>
        </View>
      </View>
    );
  }

};

export default App;
