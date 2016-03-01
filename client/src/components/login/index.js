import React from "react";
import classnames from "classnames";
import { translate } from "react-i18next/lib";
import { connect } from "react-redux";
import "exports?self.fetch!whatwg-fetch";

import { setCurrentUser, removeCurrentUser, userLogin } from "../../actions/user";

import "./login.styl";

class LoginForm extends React.Component {
  static displayName = "LoginForm";

  handleSubmit(ev) {
    ev.preventDefault();

    const params = {
      "email": this.refs.email.value,
      "password": this.refs.password.value
    }

    this.props.dispatch(userLogin(params));
  }

  handleLogout(ev) {
    const { user } = this.props;
    ev.preventDefault();
    this.props.dispatch(removeCurrentUser(user));
  }

  render() {
    const { t, user, authenticated } = this.props;
    const showErrorCx = classnames("Login-error", {
      "hide": authenticated
    });
    const loginFormCx = classnames("Login-form", {
      "hide": user.length > 0
    });
    const logoutButtonCx = classnames("Login-logout", {
      "hide": user.length === 0
    })

    return (
      <div className="Login">
        <div className={loginFormCx}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="LoginForm-email">
              <strong>E-mail *</strong>
            </label>
            <input type="email" placeholder="E-mail" ref="email" id="LoginForm-email" required />
            <label htmlFor="LoginForm-password">
              <strong>Password *</strong>
            </label>
            <input type="password" placeholder="Password" ref="password" id="LoginForm-password" required />
            <input type="submit" value="Submit" />
          </form>
          <div className={showErrorCx}>{t("login:error")}</div>
        </div>
        <div className={logoutButtonCx}>
          <input type="button" value="Logout" onClick={this.handleLogout.bind(this)}/>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    user: state.user,
    loginError: state.loginError
  };
}

const reduxComponent = connect(select)(LoginForm);
export default translate(["login"])(reduxComponent);
