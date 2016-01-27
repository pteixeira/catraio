import React from "react";
import { connect } from "react-redux";
import { map } from "lodash";

import "exports?self.fetch!whatwg-fetch";

import { addTap } from "../../actions/taps";

class Taps extends React.Component {
  static propTypes = {
    taps: React.PropTypes.array
  };

  static defaultProps = {
    taps: []
  };

  constructor(props) {
    super(props);

    this.state = {
      taps: props.taps
    };
  }

  //---------------------------------------------------------------------------
  // Event handlers
  //---------------------------------------------------------------------------

  createTap(ev) {
    ev.preventDefault();

    const { brand, name, style, abv, country, city, half_price, full_price } = this.refs;
    const params = {
      tap: {
        brand: brand.value,
        name: name.value,
        style: style.value,
        abv: abv.value,
        country: country.value,
        city: city.value,
        half_price: half_price.value,
        full_price: full_price.value,
        position: "last"
      }
    }

    this.props.dispatch(addTap(params));

    // fetch("http://localhost:3000/taps", {
    //   method: "post",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(params)
    // })
    // .then(res => {
    //   if (res.ok)
    //     return res.json();

    //   throw new Error(res.status);
    // })
    // .then(tap => this.setState({ taps: this.state.taps.concat([tap]) }))
    // .catch(() => alert("FUDEU"));
  }

  render() {
    
    const { taps } = this.props;

    return (
      <div className="Taps">
        {map(taps, tap => {
          return (
            <p>{JSON.stringify(tap)}</p>
          )
        })}

        <form>
          <input type="text" placeholder="Brand" ref="brand" />
          <input type="text" placeholder="Name" ref="name" />
          <input type="text" placeholder="Style" ref="style" />
          <input type="text" placeholder="ABV" ref="abv" />
          <input type="text" placeholder="Country" ref="country" />
          <input type="text" placeholder="City" ref="city" />
          <input type="text" placeholder="Half pint price" ref="half_price" />
          <input type="text" placeholder="Full pint price" ref="full_price" />

          <input type="submit" value="Add tap" onClick={this.createTap.bind(this)}/>
        </form>
      </div>
    );
  }
}

function select(state) {
  return {
    taps: state.taps,
  };
}

export default connect(select)(Taps);
