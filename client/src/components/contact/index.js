import React from "react";

import ContactInfo from "./contactinfo"

class Contact extends React.Component {
  static displayName = "Contact";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className="Contact">
        <ContactInfo />
      </div>
    );
  }
}

export default Contact;
