import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

import Beer from "app/components/Beer";

import styles from "./styles";

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.taps.toJS() || []
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    taps: PropTypes.instanceOf(Immutable.List)
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.taps.toJS()
    })
  }

  _renderSeparator(sectionID, rowID) {
    // rowID is a string Oo
    let lastRow = rowID == this.props.taps.size - 1;

    if (lastRow) return null;


    const s = styles();
    return <View key={`${sectionID}-${rowID}`} style={s.separator} />;
  }

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

function mapStateToProps(state) {
  return { taps: state.taps };
}

export default connect(mapStateToProps)(BeerList);
