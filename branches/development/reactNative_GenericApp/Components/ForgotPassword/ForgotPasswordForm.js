import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { Fonts } from "../utils/Fonts";
import { InputEmail, Button } from 'alfain-generic-app';

class ForgotPasswordForm extends Component {
  state = {
    email: "",
    emailError: '',
    emailFlag: true,
    emailRequired: false,
    chosenDate: new Date(),
  };


  fogotCheckHandler = () => {

    data = {
      email: this.state.email.toLowerCase(),
    }
    if (this.state.emailFlag == true) {
      this.setState({
        emailRequired: true,
        emailError: 'Field Required'
      })
    }
    else {
      this.props.ResetPassword(data)
    }
  };

  emailHandler = (email, emailFlag) => {
    this.setState({ email, emailFlag })
  }

  render() {
    const {
      containerStyle,
      textStyle,
      logoContainerStyle,
      logoStyle,
      inputContainerStyle,
      infoContainerStyle,
      buttonContainerStyle,
      buttonStyle,
      buttonTextStyle,
    } = styles;

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>Enter email to find your account</Text>
        <View style={logoContainerStyle}>
          <Image
            style={logoStyle}
            source={require("../../assets/images/forgot-circle.png")}
          />
        </View>

        <View style={infoContainerStyle}>
          <View>
            <InputEmail
              leftIcon
              placeholder="Enter Your Email"
              autoCapitalize="none"
              iconName="email"
              iconSize={18}
              iconColor="#787878"
              inputTextColor="#000"
              inputValue={this.state.email}
              error={this.state.emailError}
              flag={this.state.emailFlag}
              required={this.state.emailRequired}
              textHelper="A valid email contains a single @ and a domain"
              inputContainerStyle={inputContainerStyle}
              onChange={this.emailHandler}
            />
          {this.props.ErrorMsg}
          </View>
            <Button Color="#07E592" buttonStyle={buttonStyle} buttonTextStyle={buttonTextStyle} onPress={this.fogotCheckHandler}>
              SEND
            </Button>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    // backgroundColor: "aqua",
    // borderWidth: 3,
    // borderColor: 'red',
  },
  textStyle: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#000000",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 8,
  },
  logoContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: 'green',
    width: '100%'
  },
  logoStyle: {
    height: 132,
    width: 132,
  },
  infoContainerStyle: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'yellow',
    paddingHorizontal: 40,
    // borderWidth:2,
    // borderColor: 'red',
    // paddingBottom: 70,
    // justifyContent: 'space-between'
  },
  inputContainerStyle: {
    marginTop: 10,
    paddingVertical: 4,
    borderBottomWidth: 0.5,
  },
  buttonStyle: {
    paddingVertical: 20,
    marginTop: 60,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 16,
  },
});

export default ForgotPasswordForm;
