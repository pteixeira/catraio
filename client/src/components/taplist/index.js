import "./index.styl";

import React from "react";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";

export const Taplist = ({ taps }) => {
  return (
    <table className="Taplist">
      <thead>
        <tr>
          <th colSpan="4" className="price right">½ Pint (€)</th>
          <th className="price right">Pint (€)</th>
        </tr>
      </thead>
      <tbody>
        {taps.map(t => t.toJS()).map(({ brand, name, style, abv, halfPint, pint }) => (
          <tr key={`${brand}-${name}`}>
            <th className="left">{brand} {name}</th>
            <td>{style.replace(/\w+ · /, "")}</td>
            <td className="right">{abv} %</td>
            <td className="price right">{halfPint}</td>
            <td className="price right">{pint}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default compose(
  setDisplayName("Taplist"),

  connect(({ taps }) => ({ taps })),
)(Taplist);
