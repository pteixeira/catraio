import React, { Component, PropTypes } from "react";
import { View, ScrollView, Alert, Text } from "react-native";
import Swiper from "react-native-page-swiper";
import { compose, setDisplayName, setPropTypes } from "recompose";
import { connect } from "react-redux";
import Immutable from "immutable";

//
// Initialization
import { initStoreFromServer } from "app/util/store";
import store from "app/store";

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

initStoreFromServer(store);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: ON_TAP,
    };
  }

  render() {
    const { active } = this.state;
    const { taps } = this.props;

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
          {this.state.active === ON_TAP ? <BeerList title="On Tap" beers={taps} /> : <BeerList title="Bottled" beers={taps} /> }
        </ScrollView>

      </View>
    );
  }

};

export default compose(
  setDisplayName("App"),

  connect(({ taps }) => ({ taps })),

  setPropTypes({
    taps: PropTypes.instanceOf(Immutable.List),
  }),

)(App);
