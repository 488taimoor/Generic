import React, { Component, Fragment } from "react";
import {
  View,
  Text,
} from "react-native";
import LoginContainer from "../Components/Login/LoginContainer"
export default class Login extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <LoginContainer navigation={this.props.navigation} />
    )
  }
}


