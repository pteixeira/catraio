import "./modal.styl";

import React from "react";
import classnames from "classnames";


class Modal extends React.Component {
  static displayName = "Modal";

  static propTypes = {
    children: React.PropTypes.node,
    isOpen: React.PropTypes.bool,
    onRequestClose: React.PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    onRequestClose: () => {}
  };

  state = {
    isOpen: this.props.isOpen
  };

  componentWillReceiveProps(newProps) {
    this.setState({ isOpen: newProps.isOpen });
  }

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
          <i className="Modal-close icon-cancel" />
          <div className="Modal-content" onClick={this.preventClose.bind(this)}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
