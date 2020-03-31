import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler
} from "react-native";
import { Fonts } from "../utils/Fonts";
import { InputPassword, Button } from 'alfain-generic-app';
import CrossHeader from "../utils/CrossHeader";
class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordError: '',
      passwordFlag: true,
      passwordRequired: false,
      confirmPassword: "",
      confirmPasswordError: '',
      confirmPasswordFlag: true,
      confirmPasswordRequired: false,
      email: this.props.navigation.state.params.email,
      login: false,
    };
    this.handleBackPress = this.handleBackPress.bind(this)
  }

  passwordHandler = (password, passwordFlag) => {
    this.setState({ password, passwordFlag })
  }
  confirmPasswordHandler = (confirmPassword, confirmPasswordFlag) => {
    this.setState({ confirmPassword, confirmPasswordFlag })
    this.handleConfirmPassword(confirmPassword)
  }

  handleConfirmPassword = text => {

    if (text !== this.state.password) {
      this.setState({
        confirmPasswordError: "Password not match",
        confirmPasswordFlag: true,
        confirmPasswordRequired: true,
      });
    } else {
      this.setState({
        passwordError: "",
        passwordFlag: false,
        passwordRequired: false
      });
    }

    this.setState({ confirmPassword: text });
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    // this.state.login=this.props.navigation.state.params.login
    // this.state.email = this.props.navigation.state.params.email
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }
  handleBackPress() {
    this.navigateToLogin()

    // if(this.state.login){
    //   this.navigateToProfile()
    // }else{
    //   this.navigateToLogin()
    // }
    return true;
  }

  navigateToLogin = () => {
    this.props.navigation.navigate("Login")
  }
  navigateToProfile = () => {
    this.props.navigation.navigate("Profile")
  }

  // ! Start Button Handler

  buttonHandler = () => {
    // this.setState({ password: '', passwordFlag: true, confirmPassword: '', confirmPasswordFlag: true, })

    data = {
      password: this.state.password.trim(),
      email: this.state.email,
      login: this.state.login,
      //  NotifyToken: realm.objects('NotifyToken')[0].NotifyToken
    };

    if (this.state.passwordFlag == true) {
      this.setState({
        passwordRequired: true,
        passwordError: 'Field Required'
      })
    }
    else if (this.state.confirmPasswordFlag == true) {
      this.setState({
        confirmPasswordRequired: true,
        confirmPasswordError: 'Field Required'
      })
    }
    else {
      // this.setState({
      //   password: '',
      //   passwordFlag: true,
      //   passwordRequired: false,
      //   confirmPassword: '',
      //   confirmPasswordFlag: true,
      //   confirmPasswordRequired: false,
      // })
      this.props.UpdateForgotPassword(data);
    }
  }

  render() {
    const {
      containerStyle,
      textStyle1,
      infoContainerStyle,
      inputContainerStyle2,
      textHelperStyle,
      textStyle2,
      textStyle3,
      buttonStyle,
      buttonTextStyle
    } = styles;
    //  console.warn(this.state.PasswordFlag, this.state.validConfPass)
    return (
      <View style={containerStyle} >
        {this.state.login ? <CrossHeader title="Reset Password" navigation={this.props.navigation} dispatchNewState={this.navigateToProfile} /> :
          <CrossHeader title="Reset Password" navigation={this.props.navigation} dispatchNewState={this.navigateToLogin} />
        }

        <Text style={textStyle1}>Add a new password</Text>

        <View style={infoContainerStyle}>
          <Text style={textStyle2}>New Password</Text>
          <InputPassword
            leftIcon
            placeholder="Password"
            iconName="lock"
            iconSize={18}
            iconColor="#787878"
            inputTextColor="#000"
            required={this.state.passwordRequired}
            inputValue={this.state.password}
            error={this.state.passwordError}
            flag={this.state.passwordFlag}
            textHelper="Minimum length 8"
            textHelperStyle={textHelperStyle}
            inputContainerStyle={inputContainerStyle2}
            onChange={this.passwordHandler}
          />
          <Text style={textStyle3}>
            {/* <Text style={[textStyle2, { color: "#FF0000" }]}></Text> */}
            Confirm Password
            </Text>

          <InputPassword
            leftIcon
            placeholder="Confirm Password"
            iconName="lock"
            iconSize={18}
            iconColor="#787878"
            inputTextColor="#000"
            required={this.state.confirmPasswordRequired}
            inputValue={this.state.confirmPassword}
            error={this.state.confirmPasswordError}
            flag={this.state.confirmPasswordFlag}
            textHelper="Password Not Match"
            textHelperStyle={textHelperStyle}
            inputContainerStyle={inputContainerStyle2}
            onChange={this.confirmPasswordHandler}
          />
          <Button Color="#0011FF" buttonStyle={buttonStyle} buttonTextStyle={buttonTextStyle} onPress={this.buttonHandler}>
            RESET
          </Button>
          {/* <View style={buttonStyle}>
            {!this.state.PasswordFlag && this.state.validConfPass && this.state.cpassword !== "" ?

              <Button Color="#07E592" onPress={this.resetConfirmHandler}>
                RESET
              </Button>
              :

              <Button Color="grey" diable={true} >
                RESET
           </Button>
            }
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: "center",
    // backgroundColor: "gold"
  },
  textStyle1: {
    flex: 1,
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#000000",
    // backgroundColor: 'pink',
    padding: 20,
  },
  infoContainerStyle: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    // backgroundColor: 'skyblue'
  },
  inputContainerStyle2: {
    marginTop: 6,
    paddingVertical: 4,
    borderBottomWidth: 0.5
  },
  textHelperStyle: {
    alignSelf: 'flex-start'
  },
  textStyle2: {
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 12,
    color: "#000000",
    alignSelf: 'flex-start',
  },
  textStyle3: {
    marginTop: 10,
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 12,
    color: "#000000",
    alignSelf: 'flex-start',
  },
  buttonStyle: {
    marginTop: 36,
    paddingVertical: 20,
    alignSelf: 'stretch'
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 16,
  },
});

export default ResetPasswordForm;
