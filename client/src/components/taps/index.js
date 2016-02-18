import React from "react";
import { connect } from "react-redux";
import { map } from "lodash";
import { translate } from "react-i18next/lib";
import classnames from "classnames";

import "exports?self.fetch!whatwg-fetch";

import { addTap, deleteTap } from "../../actions/taps";

class Taps extends React.Component {
  static propTypes = {
    taps: React.PropTypes.array
  };

  static defaultProps = {
    taps: []
  };

  //---------------------------------------------------------------------------
  // Event handlers
  //---------------------------------------------------------------------------

  createTap(ev) {
    ev.preventDefault();

    const { brand, name, style, abv, country, city, half_price, full_price } = this.refs;
    const params = {
      brand: brand.value,
      name: name.value,
      style: style.value,
      abv: abv.value,
      country: country.value,
      city: city.value,
      half_price: half_price.value,
      full_price: full_price.value,
    }

    this.props.dispatch(addTap(params));
  }

  removeTap(tap, ev) {
    ev.preventDefault();

    this.props.dispatch(deleteTap(tap));
  }

  moveTapUp(tap, ev) {
    ev.preventDefault();

    // this.props.dispatch(moveTapUp(tap));
  }

  moveTapDown(id, ev) {
    ev.preventDefault();

    // this.props.dispatch(moveTapDown(tap));
  }

  render() {
    const { taps, user, t } = this.props;
    const tapActionsCx = classnames({ "hide": user.length === 0 })

    return (
      <div className="Taps">
        <table>
          <thead>
            <tr>
              <th>{t("taps:brand")}</th>
              <th>{t("taps:name")}</th>
              <th>{t("taps:style")}</th>
              <th>{t("taps:abv")}</th>
              <th>{t("taps:country")}</th>
              <th>{t("taps:city")}</th>
              <th>{t("taps:half_price")}</th>
              <th>{t("taps:full_price")}</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {map(taps, tap => {
              return (
                <tr key={tap.id}>
                  <td>{tap.brand}</td>
                  <td>{tap.name}</td>
                  <td>{tap.style}</td>
                  <td>{tap.abv}%</td>
                  <td>{tap.country}</td>
                  <td>{tap.city}</td>
                  <td>{tap.half_price}€</td>
                  <td>{tap.full_price}€</td>
                  <td className={tapActionsCx}>
                    <button onClick={this.removeTap.bind(this, tap)}>X</button>
                    <button onClick={this.moveTapUp.bind(this, tap)}>^</button>
                    <button onClick={this.moveTapDown.bind(this, tap)}>v</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <form className={tapActionsCx}>
          <input type="text" placeholder="Brand" ref="brand" />
          <input type="text" placeholder="Name" ref="name" />
          <input type="text" placeholder="Style" ref="style" />
          <input type="text" placeholder="ABV" ref="abv" />
          <input type="text" placeholder="Country" ref="country" />
          <input type="text" placeholder="City" ref="city" />
          <input type="text" placeholder="Half pint price" ref="half_price" />
          <input type="text" placeholder="Full pint price" ref="full_price" />

          <input type="submit" value="Add tap" onClick={this.createTap.bind(this)} />
        </form>
      </div>
    );
  }
}

function select(state) {
  return {
    taps: state.taps,
    user: state.user
  };
}

const reduxComponent = connect(select)(Taps);
export default translate(["contact"])(reduxComponent);
