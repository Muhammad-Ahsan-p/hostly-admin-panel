import React, { Component } from "react";
import LoginComponent from "../components/loginComponent.jsx";

import "./styles/login.css";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <div className="loginPage">
        <LoginComponent {...this.props} />
      </div>
    );
  }
}

export default LoginScreen;
