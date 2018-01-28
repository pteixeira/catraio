import "./index.styl";

import React from "react";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";

export const Taplist = ({ taps }) => {
  return (
    <table className="Taplist">
      <thead>
        <tr>
          <th colSpan="2" />
          <th className="right abv">ABV</th>
          <th className="price right">½ Pint<br />(€)</th>
          <th className="price right">Pint<br />(€)</th>
        </tr>
      </thead>
      <tbody>
        {taps.map(t => t.toJS()).map(({ brand, name, style, abv, halfPint, pint }) => (
          <tr key={`${brand}-${name}`}>
            <td className="brand" title={`${brand} ${name}`}>{brand} {name}</td>
            <td className="style" title={style.replace(/\w+ · /, "")}>{style.replace(/\w+ · /, "")}</td>
            <td className="right abv">{abv} %</td>
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
