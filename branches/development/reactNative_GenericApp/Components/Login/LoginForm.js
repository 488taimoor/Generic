import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { StackActions, } from 'react-navigation';
import { Fonts } from "../utils/Fonts";
import realm from "../utils/realm/UserSchema";
import { InputEmail, InputPassword, Button } from 'alfain-generic-app';
const popAction = StackActions.pop({
  n: 1,
});

var { width, height } = Dimensions.get('window');

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      emailFlag: true,
      emailRequired: false,
      password: "",
      passwordError: "",
      passwordFlag: true,
      passwordRequired: false,

    };
  }

  emailHandler = (email, emailFlag) => {
    this.setState({ email, emailFlag })
  }
  passwordHandler = (password, passwordFlag) => {
    this.setState({ password, passwordFlag })
  }

  componentDidMount() {

    if (this.props.UserLoginErrorMsg) {

      errmsg = this.props.UserLoginErrorMsg

      if (errmsg === "Incorrect email") {
        this.emailNotFound()
        // this.handleNetworkError("Server response error. Try again!")
      }
      else if (errmsg === "Incorrect password") {

        this.handleNetworkError("Incorrect password. Try again!")
      }
      else {
        this.handleNetworkError(errmsg)
      }
    }
  }


  signupHandler = () => {
    // Alert.alert('history');
    this.props.navigation.dispatch(popAction)
  };

  forgotHandler = () => {
    // Alert.alert('history');
    this.props.navigation.navigate('ForgotPassword')
  };

  // Start Email Validation
  emailNotFound = () => {
    this.setState({
      emailError: "Email not found",
      emailFlag: true,
      emailRequired: true
    });
  }

  incorrectPassword = () => {

    this.setState({
      passwordError: "Incorrect Password",
      passwordFlag: true,
      passwordRequired: true
    });
  }
  handleNetworkError = (err) => {
    this.setState({
      passwordError: err,
      passwordFlag: true,
      passwordRequired: true
    });
  }

  buttonHandler = () => {
    // this.setState({ email: '', emailFlag: true, password: '', passwordFlag: true })

    data = {
      email: this.state.email,
      password: this.state.password.trim(),
      appToken: realm.objects('NotifyToken')[0] == null ? null : realm.objects('NotifyToken')[0].NotifyToken,
      // allowNotification: realm.objects('NotifyToken')[0] == null? false : realm.objects('NotifyToken')[0].allowNotify,
    }

    if (this.state.emailFlag == true) {
      this.setState({
        emailRequired: true,
        emailError: 'Field Required'
      })
    }
    else if (this.state.passwordFlag == true) {
      this.setState({
        passwordRequired: true,
        passwordError: 'Field Required'
      })
    } else {
      // this.setState({
      //   email: '',
      //   emailFlag: true,
      //   emailRequired: false,
      //   password: '',
      //   passwordFlag: true,
      //   passwordRequired: false,
      // })
      this.props.Loginuser(data)
    }
  }


  render() {
    const {
      containerStyle,
      logoContainerStyle,
      logoStyle,
      textStyle1,
      infoContainerStyle,
      inputContainerStyle1,
      inputContainerStyle2,
      forgotViewStyle,
      textStyle2,
      textStyle3,
      buttonStyle,
      buttonTextStyle,
      textStyle4,
      textStyle5,
      signupViewStyle,
    } = styles;

    return (
      <SafeAreaView style={containerStyle}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* <ScrollView style={containerStyle}> */}
        {/* <KeyboardAvoidingView behavior="padding" style={containerStyle}> */}
        <View
          style={[
            containerStyle,
            //  { height: height - 24 }
          ]}
        >
          <View style={logoContainerStyle}>
            <Image
              style={logoStyle}
              source={require('../images/logo.png')}
            >
            </Image>
          </View>


          <View style={infoContainerStyle}>

            <Text style={textStyle1}>Login</Text>
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
              inputContainerStyle={inputContainerStyle1}
              onChange={this.emailHandler}
            />

            <InputPassword
              leftIcon
              placeholder="Enter Your Password"
              iconName="lock"
              iconSize={18}
              iconColor="#787878"
              inputTextColor="#000"
              required={this.state.passwordRequired}
              inputValue={this.state.password}
              error={this.state.passwordError}
              flag={this.state.passwordFlag}
              textHelper="Minimum length 8"
              inputContainerStyle={inputContainerStyle2}
              onChange={this.passwordHandler}
            />

            <View style={forgotViewStyle}>
              <Text style={textStyle2}>Forgot password? </Text>
              <TouchableOpacity onPress={this.forgotHandler}>
                <Text style={textStyle3}>Tap Here!</Text>
              </TouchableOpacity>
            </View>

            {/* <Button Color="#07E592" buttonStyle={buttonStyle} buttonTextStyle={buttonTextStyle} onPress={this.userLoginHandler}>
              LOGIN
              </Button> */}
            <Button Color="#0011FF" buttonStyle={buttonStyle} buttonTextStyle={buttonTextStyle} onPress={this.buttonHandler}>
              LOGIN
            </Button>


            <View style={signupViewStyle}>
              <Text style={textStyle4}>Don't have login? </Text>
              <TouchableOpacity onPress={this.signupHandler}>
                <Text style={textStyle5}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        {/* </KeyboardAvoidingView> */}
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "white"
  },
  logoContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoStyle: {
    width: 70,
    height: 70,
  },
  infoContainerStyle: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0,
    flex: 1.6,
    paddingVertical: 20,
    paddingHorizontal: 40,
    // backgroundColor: "rgb(29,47,62)",
  },
  textStyle1: {
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 32,
    color: "#000000",
    alignSelf: 'flex-start',
    marginTop: 5,

  },
  inputContainerStyle1: {
    marginTop: 20,
    paddingVertical: 4,
    borderBottomWidth: 0.5
  },
  inputContainerStyle2: {
    marginTop: 10,
    paddingVertical: 4,
    borderBottomWidth: 0.5
  },
  forgotViewStyle: {
    flexDirection: "row",
    marginTop: 15
  },
  textStyle2: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 10,
    color: "#636363"
  },
  textStyle3: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 10,
    color: "#0011FF"
  },
  buttonStyle: {
    marginTop: 26,
    paddingVertical: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 16,
  },
  signupViewStyle: {
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 30
  },
  textStyle4: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: "#000000",
  },
  textStyle5: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: "#0011FF"
  },
});

export default LoginForm;
