import "./language_selector.styl";

import React from "react";
import i18n from "i18next";
import classnames from "classnames";

class LanguageSelector extends React.Component {
  static displayName = "LanguageSelector";

  changeLang(val) {
    i18n.changeLanguage(val);
  }

  render() {
    const lang = i18n.language;
    const ptCx = classnames({ active: lang === "pt" });
    const enCx = classnames({ active: lang === "en" });

    return (
      <div className="LanguageSelector">
        <button className={ptCx} onClick={this.changeLang.bind(this, "pt")}>PT</button>
        <button className={enCx} onClick={this.changeLang.bind(this, "en")}>EN</button>
      </div>
    )
  }
}

export default LanguageSelector;
