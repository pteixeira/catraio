import React from "react";
import { View, Text, ListView } from "react-native";

import styles from "./styles";

const Beer = (props) => {
  const s = styles();

  return (
    <View style={s.container}>
      <Text>{`${props.brand} - ${props.name}`}</Text>
    </View>
  );
}

export default Beer;
