import React from "react";
import classnames from "classnames";
import { translate } from "react-i18next/lib";
import { connect } from "react-redux";
import "exports?self.fetch!whatwg-fetch";

import { setCurrentUser, removeCurrentUser, userLogin } from "../../actions/user";
// import { API_HOST } from "../../config/env";
// import { defaultHeaders } from "../../util/request";

import "./login.styl";

class LoginForm extends React.Component {
  static displayName = "LoginForm";

  state = {
    showError: false
  };

  handleSubmit(ev) {
    ev.preventDefault();

    const params = {
      "email": this.refs.email.value,
      "password": this.refs.password.value
    }

    this.props.dispatch(userLogin(params))
    .then(res => {
      localStorage.setItem("token", res.jwt);
      this.props.dispatch(setCurrentUser(params.email))
      this.setState({ showError: false });
    })
    .catch(err => {
      console.log(err);
      this.setState({ showError: true });
    });
    // fetch(`${API_HOST}/auth/auth_token`, {
    //   method: "post",
    //   headers: defaultHeaders(),
    //   body: JSON.stringify({
    //     auth: params
    //   }),
    // })
    // .then(res => {
    //   if (res.ok) return res.json();

    //   throw new Error(res.status);
    // })
    // .then(res => {
    //   localStorage.setItem("token", res.jwt);
    //   this.props.dispatch(setCurrentUser(params.email))
    //   this.setState({ showError: false });
    // })
    // .catch(err => {
    //   console.log(err);
    //   this.setState({ showError: true });
    // })
  }

  handleLogout(ev) {
    const { user } = this.props;
    ev.preventDefault();
    localStorage.removeItem("token");
    this.props.dispatch(removeCurrentUser(user));
  }

  render() {
    const { t, user } = this.props;
    const showErrorCx = classnames("Login-error", {
      "hide": !this.state.showError
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
  };
}

const reduxComponent = connect(select)(LoginForm);
export default translate(["login"])(reduxComponent);
