import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView
} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import ForgotPasswordForm from "./ForgotPasswordForm"
import { forgot_Status } from "./ForgotPassword_Constants";
import LoadingScreen from "../utils/LoadingScreen"
import CrossHeader from "../utils/CrossHeader"
export default class LoginForm_View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkError: <View style={styles.iconContainerStyle2}><Icon style={styles.iconStyle2} name="not-interested" /><Text style={styles.textStyle3}>Network Error!</Text></View>,
      notFound: <View style={styles.iconContainerStyle2}><Icon style={styles.iconStyle2} name="not-interested" /><Text style={styles.textStyle3}> No Account found related to the provided email</Text></View>
    }
  }
  getScreen(status) {

    switch (status) {
      case forgot_Status.sendEmail.NEW:
        return (
          <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword} />

        );

      case forgot_Status.sendEmail.LOADING:
        return (
          <LoadingScreen />
        );
      case forgot_Status.sendEmail.SUCCESS:

        this.props.navigation.navigate('ResetCode', { email: this.props.email })
        return (
          <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword} />

        );
      case forgot_Status.sendEmail.FAILED:

        return (

          <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword}
            ErrorMsg={this.state.networkError}
          />
        );
      case forgot_Status.sendEmail.NOTFOUND:

        return (
          <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword}
            ErrorMsg={this.state.notFound}
          />
        );
      default:
        return (

          <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword} />

        );
    }
  }
  render() {

    const {
      containerStyle,

    } = styles;
    return (
      <SafeAreaView
        style={containerStyle}>
        <CrossHeader navigation={this.props.navigation} title="Forgot Password" />
        {/* <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={-10}
          style={containerStyle}
        > */}

        {
          this.getScreen(this.props.SendEmailStatus)
        }
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: "gold"
  },
  iconContainerStyle2: {
    position: "relative",
    top: 23,
    flexDirection: "row"
    // borderWidth: 1,
    // borderColor: 'black',
  },
  iconStyle2: {
    color: "#FF0000",
    fontSize: 16,
    // paddingLeft: 5,
    paddingRight: 8
  },
  textStyle3: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#FF0000"
  }
});