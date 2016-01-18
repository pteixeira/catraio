import "./modal.styl";

import React from "react";
import classnames from "classnames";


class Modal extends React.Component {
  static displayName = "Modal";

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const cx = classnames("Modal", {
      "Modal--visible": this.props.isOpen
    });

    return (
      <div className={cx}>
        <div className="Modal-overlay">
          <div className="Modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
