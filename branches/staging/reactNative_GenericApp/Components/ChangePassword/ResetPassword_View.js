import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,

} from "react-native";
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
        <View>
          <ResetPasswordForm  navigation={this.props.navigation}  UpdateForgotPassword={this.props.UpdateForgotPassword}/>
        </View>
      );
      case forgot_Status.resetPassword.LOADING:
        return (
          <View>
            <LoadingScreen />
          </View>
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
          <View>
        <ResetPasswordForm error={"network request failed"} navigation={this.props.navigation}  UpdateForgotPassword={this.props.UpdateForgotPassword}/>
          </View>
        );
      default:
        break;
    }
  }
  render() {

    return (
    
        <View style={{ padding: 10 }}>
       <View >
              {
                this.getScreen(this.props.UpdatePasswordStatus)
              }
            </View>
      </View>
    );
  }
}
