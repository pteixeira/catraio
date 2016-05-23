import "./language_selector.styl";

import React from "react";
import i18n from "i18next";
import classnames from "classnames";

import { I18N_LANGUAGE } from "app-root/constants/globals";

class LanguageSelector extends React.Component {
  static displayName = "LanguageSelector";

  changeLang(val) {
    i18n.changeLanguage(val);
    localStorage.setItem(I18N_LANGUAGE, val);
  }

  render() {
    const lang = localStorage.getItem(I18N_LANGUAGE) || "pt";
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
