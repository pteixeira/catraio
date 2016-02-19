import React from "react";
import { translate } from "react-i18next/lib";
import "exports?self.fetch!whatwg-fetch";
import classnames from "classnames";

import { API_HOST } from "../../config/env";
import { headers } from "../../util/request";

class ContactForm extends React.Component {
  static displayName = "ContactForm";

  static propTypes = {
    children: React.PropTypes.node
  };

  state = {
    sentEmailStatus: "none"
  };

  sendmail(ev) {
    ev.preventDefault();

    const { name, email, phone, subject, message } = this.refs;

    const params = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value.replace(/\n/g, "<br />")
    }

    fetch(`${API_HOST}/sendmail`, {
      method: "post",
      headers,
      body: JSON.stringify({
        content: params
      }),
    })
    .then(res => {
      if (res.ok) {
        this.setState({ sentEmailStatus: "sent" });
        return res.json()
      };
    })
    .catch(() => {
      this.setState({ sentEmailStatus: "not_sent" })
    })
  }

  render() {
    const { t } = this.props;
    const sentEmailCx = classnames("ContactForm-sentMessage", {
      "success": this.state.sentEmailStatus === "sent",
      "fail": this.state.sentEmailStatus === "not_sent",
      "hide": this.state.sentEmailStatus === "none"
    });

    let message = '';
    if (this.state.sentEmailStatus === "sent") {
      message = t("contact:message_success");
    } else if (this.state.sentEmailStatus === "not_sent") {
      message = t("contact:message_fail");
    }

    return (
      <div className="ContactForm">
        <form className="ContactForm-form" action="/" onSubmit={this.sendmail.bind(this)} ref="ContactForm">
          <label htmlFor="ContactForm-name">
            <strong>{t("contact:name")} *</strong>
          </label>
          <input type="text" ref="name" id="ContactForm-name" required />

          <label htmlFor="ContactForm-email">
            <strong>Email (must be a valid email) *</strong>
          </label>
          <input type="email" ref="email"id="ContactForm-email" required />

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
        <div className={sentEmailCx}>
          {message}
        </div>
      </div>
    );
  }
}

export default translate(["contact"])(ContactForm);
