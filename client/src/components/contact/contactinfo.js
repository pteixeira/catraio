import "./contact.styl";

import React from "react";
import { translate } from "react-i18next/lib";

import Map from "./map";
import ContactForm from "./contactform";

class ContactInfo extends React.Component {
  static displayName = "ContactInfo";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const { t } = this.props;

    return (
      <div className="ContactInfo">
      </div>
    );
  }
}

export default translate(["contact", "weekdays"])(ContactInfo);
