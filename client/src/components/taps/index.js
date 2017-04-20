import React from "react";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import Immutable from "immutable";

class Taps extends React.Component {
  static propTypes = {
    taps: React.PropTypes.instanceOf(Immutable.List)
  };

  static defaultProps = {
    taps: Immutable.Map()
  };

  render() {
    const { t, taps } = this.props;

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
              {/* <th>{t("taps:half_price")}</th>
                            <th>{t("taps:full_price")}</th> */}
            </tr>
          </thead>

          <tbody>
            {taps.map((tap, i) => {
              return (
                <tr key={`tap-${i}`}>
                  <td>{tap.get("brand")}</td>
                  <td>{tap.get("name")}</td>
                  <td>{tap.get("style")}</td>
                  <td>{tap.get("abv")}%</td>
                  <td>{tap.get("country")}</td>
                  <td>{tap.get("city")}</td>
                  {/* <td>{tap.get("half_price")}</td>
                                    <td>{tap.get("full_price")}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
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
