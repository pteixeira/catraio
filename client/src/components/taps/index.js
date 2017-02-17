import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { translate } from "react-i18next";
import classnames from "classnames";
import Immutable from "immutable";

import { addTap, deleteTap, moveTap, updateTap } from "../../actions/taps";

class Taps extends React.Component {
  static propTypes = {
    taps: React.PropTypes.instanceOf(Immutable.Map)
  };

  static defaultProps = {
    taps: Immutable.Map()
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

  moveTap(tap, action, ev) {
    ev.preventDefault();
    this.props.dispatch(moveTap(tap.get("id"), action));
  }

  sortedTaps() {
    const { taps } = this.props;
    return taps.sortBy(tap => tap.get("position")).toList();
  }

  updateTap(tap, field, ev) {
    const params = {
      id: tap.get("id"),
      [field]: ev.target.value,
    };

    this.props.dispatch(updateTap(params));
  }

  handleKeyUp(tap, field, ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      this.updateTap(tap, field, ev);
    }
  }

  tapField(tap, field) {
    if (isEmpty(this.props.user)) return tap.get(field);

    const type = (field === "abv" || field === "half_price" || field === "full_price") ? "number" : "text";
    const val = tap.get(field);

    return (
      <input
        type={type}
        defaultValue={val}
        onBlur={this.updateTap.bind(this, tap, field)}
        onKeyUp={this.handleKeyUp.bind(this, tap, field)}
      />
    )
  }

  render() {
    const { user, t } = this.props;
    const tapActionsCx = classnames({ "hide": user.length === 0 });

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
            </tr>
          </thead>

          <tbody>
            {this.sortedTaps().map(tap => {
              return (
                <tr key={`tap-${tap.get("id")}`}>
                  <td>{this.tapField(tap, "brand")}</td>
                  <td>{this.tapField(tap, "name")}</td>
                  <td>{this.tapField(tap, "abv")}%</td>
                  <td>{this.tapField(tap, "style")}</td>
                  <td>{this.tapField(tap, "country")}</td>
                  <td>{this.tapField(tap, "city")}</td>
                  <td>{this.tapField(tap, "half_price")}</td>
                  <td>{this.tapField(tap, "full_price")}</td>
                  <td className={tapActionsCx}>
                    <button onClick={this.removeTap.bind(this, tap)}>X</button>
                    <button onClick={this.moveTap.bind(this, tap, "move_up")}>^</button>
                    <button onClick={this.moveTap.bind(this, tap, "move_down")}>v</button>
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
