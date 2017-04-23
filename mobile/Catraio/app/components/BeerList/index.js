import React, { Component, PropTypes } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class BeerList extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
  };

  render() {
    const { backgroundColor, title } = this.props;

    const s = styles({ backgroundColor });

    return (
      <View style={s.container}>
        <Text style={s.title}>
          {title}
        </Text>
      </View>
    );
  }

}
