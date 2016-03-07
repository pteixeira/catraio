import React from "react";
import i18n from "i18next";
import { I18N_LANGUAGE } from "../../constants/globals";

class LanguageSelector extends React.Component {
  static displayName = "LanguageSelector";

  changeLang(ev) {
    i18n.changeLanguage(ev.target.value);
    localStorage.setItem(I18N_LANGUAGE, ev.target.value);
  }

  render() {
    const defaultValue = localStorage.getItem(I18N_LANGUAGE) || "pt";
    return (
      <select onChange={this.changeLang.bind(this)} defaultValue={defaultValue} className="LanguageSelector">
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    )
  }
}

export default LanguageSelector;
