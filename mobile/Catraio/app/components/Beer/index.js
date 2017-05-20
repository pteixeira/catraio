import React from "react";
import { View, Text, ListView, Image } from "react-native";

import styles from "./styles";

const Beer = (props) => {
  const s = styles();

  return (
    <View style={s.container}>
      <Image source={{uri: "http://placehold.it/50x50"}} style={s.image} />
      <View style={s.info}>
        <Text>{`${props.brand} - ${props.name}`}</Text>
        <Text>{`${props.style}`}</Text>
        <Text>{`${props.abv}%`}</Text>
        <Text>{`${props.halfPint}€ - ${props.pint}€`}</Text>
      </View>
    </View>
  );
}

export default Beer;
