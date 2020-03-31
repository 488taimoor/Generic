import React, { Component } from "react";
import SignupContainer from "../Components/Signup/SignupContainer"
export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <SignupContainer navigation={this.props.navigation} />
    )
  }
}


