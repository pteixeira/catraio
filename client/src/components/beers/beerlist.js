import "./beers.styl";

import React from "react";
import { createStore } from "redux";
import { connect } from "react-redux";
import { map } from "lodash";

import{ setBeers } from "../../constants/ActionTypes";
import "exports?self.fetch!whatwg-fetch";

class BeerList extends React.Component {
  static displayName = "BeerList";

  static propTypes = {
    beers: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    "beers": []
  };

  componentWillMount() {
    console.log("before");
    const { dispatch, beers } = this.props;
    // the following fetches from the server
    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => dispatch(setBeers(beers)));
    // dispatch(setBeers(this.props.beers));
    console.log("after");
  }

  render() {
    return (
      <div className="BeerList">
        <table>
          <tbody>
            <tr>
              <th>Brand</th>
              <th>Name</th>
              <th>ABV</th>
              <th>Style</th>
              <th>Country</th>
              <th>City</th>
            </tr>
            {map(this.props.beers, (src, i) => {
                return (
                  <tr key={i}>
                    <td>{src.brand}</td>
                    <td>{src.name}</td>
                    <td>{src.abv}%</td>
                    <td>{src.style}</td>
                    <td>{src.country}</td>
                    <td>{src.city}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    beers: state.beers
  };
}

export default connect(mapStateToProps)(BeerList);
