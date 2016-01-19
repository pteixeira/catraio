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

  preventClose(ev) {
    console.log(ev.target.className.match(/Modal-content/), ev.currentTarget.className.match(/Modal-content/));
    if (ev.target.className.match(/Modal-content/) === null) {
      ev.stopPropagation();
    }
  }

  render() {
    const cx = classnames("Modal", {
      "Modal--visible": this.state.isOpen
    });

    return (
      <div className={cx}>
        <div className="Modal-overlay" onClick={this.props.onRequestClose}>
          <i className="Modal-close icon-cancel" onClick={this.props.onRequestClose} />
          <div className="Modal-content" onClick={this.preventClose.bind(this)}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
