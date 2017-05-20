import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";

import { View, Text, ListView } from "react-native";

import Beer from "app/components/Beer";

import styles from "./styles";

const dummyDS = [{"brand":"Budvar","name":"","style":"CZ · Czech Pilsner","abv":"5.0","pint":"3.00","halfPint":"1.50"},{"brand":"Vandoma","name":"Vandominator","style":"PT · Doppelbock ","abv":"8.0","pint":"5.50","halfPint":"3.00"},{"brand":"Weihenstephaner ","name":"Vitus","style":"GER · Weizenbock","abv":"7.7","pint":"5.50","halfPint":"3.00"},{"brand":"Barona","name":"","style":"PT · Blonde Ale","abv":"5.8","pint":"4.50","halfPint":"2.50"},{"brand":"Post Scriptum ","name":"","style":"PT · Black IPA","abv":"7.5","pint":"5.50","halfPint":"3.00"},{"brand":"Browar Widawa","name":"Tropical Storm IPA","style":"POL · American IPA","abv":"6.2","pint":"5.50","halfPint":"3.00"},{"brand":"D'Ourique","name":"Condestável","style":"PT · Belgian Strong Dark Ale","abv":"9.0","pint":"5.50","halfPint":"3.00"},{"brand":"De Molen","name":"Tsarina Esra","style":"NLD · Imperial Porter","abv":"10.1","pint":"6.50","halfPint":"3.50"},{"brand":"LETRA ","name":"Letra D","style":"PT · American Red Ale","abv":"6.0","pint":"4.50","halfPint":"2.50"},{"brand":"Oitava Colina","name":"Zé Arnaldo","style":"PT · Robust Porter","abv":"6.0","pint":"4.50","halfPint":"2.50"},{"brand":"Dois Corvos","name":"Guanabana Mañana","style":"PT · American IPA","abv":"7.6","pint":"5.50","halfPint":"3.00"},{"brand":"Musa","name":"Café D'Ale Mar","style":"PT · Coffee Red Ale","abv":"5.8","pint":"4.50","halfPint":"2.50"}];

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.taps.toJS() || dummyDS)
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    taps: PropTypes.instanceOf(Immutable.List)
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.taps.toJS())
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

    console.log("render", this.props.taps.toJS())

    const s = styles({ backgroundColor });


    return (
      <View style={s.container}>
        <Text style={s.title}>
          {title}
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Beer {...rowData} />}
          renderSeparator={this._renderSeparator.bind(this)} />
      </View>
    );
  }

}

function mapStateToProps(state) {
  return { taps: state.taps };
}

export default connect(mapStateToProps)(BeerList);
