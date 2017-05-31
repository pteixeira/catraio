import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";
import { compose, setDisplayName, setPropTypes } from "recompose";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

import Beer from "app/components/Beer";

import styles from "./styles";

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.beers.toJS() || []
    }
  }

  //----------------------------------------------------------------------------
  // Lifecycle
  //----------------------------------------------------------------------------
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.beers.toJS()
    })
  }

  //----------------------------------------------------------------------------
  // Helpers
  //----------------------------------------------------------------------------
  _renderSeparator(sectionID, rowID) {
    // rowID is a string
    let lastRow = rowID == this.props.beers.size - 1;

    if (lastRow) return null;


    const s = styles();
    return <View key={`${sectionID}-${rowID}`} style={s.separator} />;
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { backgroundColor, title } = this.props;
    const s = styles({ backgroundColor });

    return (
      <View style={s.container}>
        <Text style={s.title}>
          {title}
        </Text>
        <Text style={s.date}>
          Last updated: {new Date().toUTCString()}
        </Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => <TouchableOpacity><Beer {...item} /></TouchableOpacity>}
          keyExtractor={( item ) => `${item.brand}-${item.name}` }
          ItemSeparatorComponent={this._renderSeparator.bind(this)} />
      </View>
    );
  }

}

export default compose(
  setDisplayName("BeerList"),

  setPropTypes({
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    beers: PropTypes.instanceOf(Immutable.List)
  }),
)(BeerList);
