import React, { Component, PropTypes } from "react";
import { compact, map } from "lodash";

//
// react-native components
import { View, Text, TouchableOpacity, Alert } from "react-native";

//
// Styles
import styles from "./styles";

export default class Navbar extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,

    height: PropTypes.number,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      active: 0,
    };
  }

  //----------------------------------------------------------------------------
  // Event handlers
  //----------------------------------------------------------------------------
  onPressOut(active) {
    return () => {
      this.setState({ active });
      this.props.onChange(active);
    };
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { active } = this.state;
    const { items, height } = this.props;

    const s = styles(compact({ height }));

    return (
      <View style={s.navbar}>
        {map(items, (item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={s.button}
              onPressOut={this.onPressOut(index)}
            >
              <Text style={[ s.text, active === index && s.textActive ]}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

}
