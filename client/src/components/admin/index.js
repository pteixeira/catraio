import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "app-components/login";
import Management from "./management";

class Admin extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        { authenticated ? <Management /> : <Login />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
    user: state.user
  }
};

export default connect(mapStateToProps)(Admin);
