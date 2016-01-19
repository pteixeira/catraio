import "./modal.styl";

import React from "react";
import classnames from "classnames";


class Modal extends React.Component {
  static displayName = "Modal";

  static propTypes = {
    children: React.PropTypes.node
  };

  componentWillReceiveProps(newProps) {
    this.setState({ isOpen: newProps.isOpen });
  }

  state = {
    isOpen: this.props.isOpen
  };

  closeModal() {
    this.setState({ isOpen: false });
  }

  preventClose(ev) {
    ev.stopPropagation();
  }

  render() {
    const cx = classnames("Modal", {
      "Modal--visible": this.state.isOpen
    });

    return (
      <div className={cx}>
        <div className="Modal-overlay" onClick={this.closeModal.bind(this)}>
          <div className="Modal-content" onClick={this.preventClose.bind(this)}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
