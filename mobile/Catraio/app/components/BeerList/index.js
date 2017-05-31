import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";
import { compose, setDisplayName, setPropTypes } from "recompose";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

import Beer from "app/components/Beer";

import styles from "./styles";

const dummyDS = [{"brand":"Sovina","name":"Helles","style":"PT · Helles","abv":"5.2","image":"https://untappd.akamaized.net/site/beer_logos/beer-_326262_sm_7a134d3cf04097efe82ceedc2eb355.jpeg","pint":"3.00","halfPint":"1.50"},{"brand":"Browar Widawa","name":"Simcoe Pils","style":"POL · Hoppy Lager","abv":"4.7","image":"https://untappd.akamaized.net/site/beer_logos/beer-674154_b5280_sm.jpeg","pint":"4.50","halfPint":"2.50"},{"brand":"D'os Diabos","name":"Weizenbier","style":"PT · Hefeweizen","abv":"5.4","image":"https://untappd.akamaized.net/site/beer_logos/beer-1162090_72216_sm.jpeg","pint":"4.50","halfPint":"2.50"},{"brand":"OPO 74","name":"Red Mosquito","style":"PT · American Amber Ale","abv":"5.5","image":"https://untappd.akamaized.net/site/beer_logos/beer-1054927_2da0f_sm.jpeg","pint":"4.50","halfPint":"2.50"},{"brand":"Vadia","name":"Extra","style":"PT · Strong Ale","abv":"8.5","image":"https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png","pint":"4.50","halfPint":"2.50"},{"brand":"Post Scriptum vs. Guineu","name":"Nüen","style":"PT | ES · NEIPA","abv":"6.5","image":"https://untappd.akamaized.net/site/brewery_logos/brewery-4723_f9a9f.jpeg","pint":"5.50","halfPint":"3.00"},{"brand":"Gíria","name":"","style":"PT · Belgian Dubbel","abv":"7.0","image":"https://untappd.akamaized.net/site/beer_logos/beer-1047071_fe18e_sm.jpeg","pint":"4.50","halfPint":"2.50"},{"brand":"Naparbier","name":"Pumpkin Tzar (2017)","style":"ES · Russian Imperial Stout","abv":"11.6","image":"https://untappd.akamaized.net/site/brewery_logos/brewery-25784_e6226.jpeg","pint":"6.50","halfPint":"3.50"},{"brand":"D'os Diabos","name":"","style":"PT · English Brown Ale","abv":"6.0","image":"https://untappd.akamaized.net/site/beer_logos/beer-1182124_3acd8_sm.jpeg","pint":"4.50","halfPint":"2.50"},{"brand":"Magic Rock Brewing","name":"Dark Arts","style":"UK · Stout","abv":"6.0","image":"https://untappd.akamaized.net/site/beer_logos/beer-60245_13552_sm.jpeg","pint":"6.50","halfPint":"3.50"},{"brand":"Oitava Colina","name":"Urraca Vendaval","style":"PT · American IPA","abv":"6.0","image":"https://untappd.akamaized.net/site/beer_logos/beer-960307_d12ee_sm.jpeg","pint":"4.50","halfPint":"2.50"},{"brand":"Passarola Brewing","name":"Marquês De Pale Ale","style":"PT· American Pale Ale","abv":"5.2","image":"https://untappd.akamaized.net/site/beer_logos/beer-1652311_0f650_sm.jpeg","pint":"5.50","halfPint":"3.00"}];

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.beers.toJS() || dummyDS
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
