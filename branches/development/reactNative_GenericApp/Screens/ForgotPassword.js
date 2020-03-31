import React, { Component } from "react";
import ForgotPasswordContainer from "../Components/ForgotPassword/ForgotPasswordContainer"
export default class Login extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <ForgotPasswordContainer navigation={this.props.navigation} />
    )
  }
}


