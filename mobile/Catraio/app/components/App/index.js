import React, { Component } from "react";
import { View, ScrollView, Alert, Text } from "react-native";
import Swiper from "react-native-page-swiper";

//
// Components
import Navbar from "app/components/UIKit/Navbar";
import BeerList from "app/components/BeerList";

//
// Styles
import styles from "./styles";

//
// Constants
const ON_TAP = 0;
const BOTTLED = 1;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: ON_TAP,
    };
  }

  render() {
    const { active } = this.state;

    return (
      <View style={styles.container}>

        <Navbar
          items={[ "On Tap", "Bottled" ]}
          onChange={(active) => this.setState({ active })}
        />
        
        <ScrollView
          style={styles.listContainer}
          pagingEnabled
          horizontal
          swipeEnabled
        >
          <BeerList title="On Tap" />
          <BeerList title="Bottled" />
        </ScrollView>

      </View>
    );
  }

};

export default App;
