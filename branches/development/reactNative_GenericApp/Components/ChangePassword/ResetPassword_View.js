import React, { Component } from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import LoadingScreen from "../utils/LoadingScreen";
import { forgot_Status } from "./ReserPassword_Contants";

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getScreen(status) {
    switch (status) {
      case forgot_Status.resetPassword.NEW:
        return (
          <ResetPasswordForm navigation={this.props.navigation} UpdateForgotPassword={this.props.UpdateForgotPassword} />

        );
      case forgot_Status.resetPassword.LOADING:
        return (
          <LoadingScreen />

        );
      case forgot_Status.resetPassword.RESET_SUCCESS:
        this.props.navigation.navigate('Login')
        return (
          null
        );
      case forgot_Status.resetPassword.CHANGE_SUCCESS:
        this.props.navigation.navigate('Profile')
        return (
          null
        );
      case forgot_Status.resetPassword.FAILED:
        return (
          <ResetPasswordForm error={"network request failed"} navigation={this.props.navigation} UpdateForgotPassword={this.props.UpdateForgotPassword} />

        );
      default:
        break;
    }
  }
  render() {

    return (


      this.getScreen(this.props.UpdatePasswordStatus)

    );
  }
}
