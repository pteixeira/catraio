import React from "react";
import { translate } from "react-i18next/lib";
import "exports?self.fetch!whatwg-fetch";
import classnames from "classnames";

import { API_HOST } from "../../config/env";
import { defaultHeaders } from "../../util/request";

const EMAIL_STATES = {
  NONE: 0,
  SENT: 1,
  ERROR: 2
};

class ContactForm extends React.Component {
  static displayName = "ContactForm";

  static propTypes = {
    children: React.PropTypes.node
  };

  state = {
    sentEmailStatus: EMAIL_STATES.NONE
  };

  sendmail(ev) {
    ev.preventDefault();

    const { name, email, phone, message } = this.refs;

    const params = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value.replace(/\n/g, "<br />")
    }

    fetch(`${API_HOST}/sendmail`, {
      method: "post",
      headers: defaultHeaders(),
      body: JSON.stringify({
        content: params
      }),
    })
    .then(res => {
      if (res.ok) {
        this.setState({ sentEmailStatus: EMAIL_STATES.SENT });
        return res.json()
      }

      throw new Error(res.status);
    })
    .catch(() => {
      this.setState({ sentEmailStatus: EMAIL_STATES.ERROR })
    })
  }

  render() {
    const { t } = this.props;
    const sentEmailCx = classnames("ContactForm-sentMessage", {
      "success": this.state.sentEmailStatus === EMAIL_STATES.SENT,
      "fail": this.state.sentEmailStatus === EMAIL_STATES.ERROR,
      "hide": this.state.sentEmailStatus === EMAIL_STATES.NONE
    });

    let message = "";
    if (this.state.sentEmailStatus === EMAIL_STATES.SENT) {
      message = t("contact:message_success");
    } else if (this.state.sentEmailStatus === EMAIL_STATES.ERROR) {
      message = t("contact:message_fail");
    }

    return (
      <div className="ContactForm">
        <form className="ContactForm-form" action="/" onSubmit={this.sendmail.bind(this)} ref="ContactForm">
          <input type="text" ref="name" id="ContactForm-name" placeholder={t("contact:name")} required />

          <input type="email" ref="email"id="ContactForm-email" placeholder="Email" required />

          <input type="tel" ref="phone"  id="ContactForm-phone" placeholder={t("contact:phone")} required/>

          <textarea ref="message" id="ContactForm-message" placeholder={t("contact:message")} required />

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
