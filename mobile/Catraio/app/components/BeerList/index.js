import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";

import { View, Text, ListView } from "react-native";

import styles from "./styles";

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.taps.toJS() || ["cona"])
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    taps: PropTypes.instanceOf(Immutable.List)
  };

  _renderRow(rowData) {
    return <Text>{JSON.stringify(rowData)}</Text>;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.taps.toJS())
    })
  }

  render() {
    const { backgroundColor, title } = this.props;
    const s = styles({ backgroundColor });

    console.log("render", this.props.taps.toJS())

    return (
      <View style={s.container}>
        <Text style={s.title}>
          {title}
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)} />
      </View>
    );
  }

}

function mapStateToProps(state) {
  return { taps: state.taps };
}

export default connect(mapStateToProps)(BeerList);
