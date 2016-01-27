import React from "react";

import { translate } from "react-i18next/lib";

class ContactForm extends React.Component {
  static displayName = "ContactForm";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const { t } = this.props;

    return (
      <form className="ContactForm" action="/">
        <label htmlFor="ContactForm-name">
          <strong>{t("contact:name")} *</strong>
        </label>
        <input type="text" ref="name" id="ContactForm-name" required />

        <label htmlFor="ContactForm-email">
          <strong>Email *</strong>
        </label>
        <input type="text" ref="email"id="ContactForm-email" required />

        <label htmlFor="ContactForm-phone">
          <strong>{t("contact:phone")} *</strong>
        </label>
        <input type="tel" ref="phone"  id="ContactForm-phone" required/>

        <label htmlFor="ContactForm-subject">
          <strong>{t("contact:subject")} *</strong>
        </label>
        <input type="text" ref="subject" id="ContactForm-subject" required />

        <label htmlFor="ContactForm-message">
          <strong>{t("contact:message")} *</strong>
        </label>
        <textarea ref="message" id="ContactForm-message" required />

        <button type="submit">{t("contact:submit")}</button>
      </form>
    );
  }
}

export default translate(["contact"])(ContactForm);
