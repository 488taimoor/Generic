import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView, SafeAreaView,
  Picker,
} from "react-native";
import SocialIcons from "../SocialRedirect/SocialIcons"
import { Fonts } from "../utils/Fonts";
import realm from "../utils/realm/UserSchema";
import { InputEmail, InputPassword, InputText, Button } from 'alfain-generic-app';
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      firstnameError: '',
      firstnameFlag: true,
      firstnameRequired: false,
      lastname: "",
      lastnameError: '',
      lastnameFlag: true,
      lastnameRequired: false,
      email: "",
      emailError: '',
      emailFlag: true,
      emailRequired: false,
      password: "",
      passwordError: '',
      passwordFlag: true,
      passwordRequired: false,
      confirmPassword: "",
      confirmPasswordError: '',
      confirmPasswordFlag: true,
      confirmPasswordRequired: false,
      pickerValue: '',
      pickerIndex: '',
      pickerData: ''
    };
    this.googleLogin = this.googleLogin.bind(this)
  }

  pickerValueHandler = (pickerValue, pickerIndex, pickerData) => {
    this.setState({ pickerValue, pickerIndex, pickerData }, () => {
      console.log('PickerValue:', this.state.pickerValue)
      console.log('PickerIndex:', this.state.pickerIndex)
      console.log('PickerData:', this.state.pickerData)
    })
  }


  firstnameHandler = (firstname, firstnameFlag) => {
    this.setState({ firstname, firstnameFlag })
  }
  lastnameHandler = (lastname, lastnameFlag) => {
    this.setState({ lastname, lastnameFlag })
  }
  emailHandler = (email, emailFlag) => {
    this.setState({ email, emailFlag })
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
    if (this.props.AddUserErrorMsg) {
      err = this.props.AddUserErrorMsg

      if (err === "Email already exist!") {
        this.handleExistingEmail()
        // this.handleNetworkError("Server response error. Try again!")
      } else {
        this.handleNetworkError(err)
      }
    }
  }
  handleExistingEmail = () => {
    this.setState({
      emailError: "Email Already Exists!",
      emailFlag: true,
      emailRequired: true
    });
  }
  handleNetworkError = (err) => {
    this.setState({
      confirmPasswordHelper: err,
      confirmPasswordFlag: true,
      confirmPasswordRequired: true
    });
  }

  loginHandler = () => {
    // this.props.history.push("/");
    this.props.navigation.navigate("Login");
  };



  async googleLogin() {

    this.props.navigation.navigate('Redirect', { provider: 'Google' })
    // const result = await authorize(GoogleConfig);
    // if(result.accessToken )
    // {
    //   this.props.UserSocialSignUp(result)
    // }
  }
  // End Fields validate functions

  // ! Start Button Handler

  buttonHandler = () => {
    // this.setState({ firstname: '',  firstnameFlag: true, lastname: '',  lastnameFlag: true, email: '', emailFlag: true, password: '', passwordFlag: true, confirmPassword: '', confirmPasswordFlag: true, })

    data = {
      firstname: this.state.firstname.trim(),
      lastname: this.state.lastname.trim(),
      email: this.state.email,
      password: this.state.password.trim(),
      appToken: realm.objects('NotifyToken')[0] == null ? null : realm.objects('NotifyToken')[0].NotifyToken,
    };

    if (this.state.firstnameFlag == true) {
      this.setState({
        firstnameRequired: true,
        firstnameError: 'Field Required'
      })
    }
    else if (this.state.lastnameFlag == true) {
      this.setState({
        lastnameRequired: true,
        lastnameError: 'Field Required'
      })
    }
    else if (this.state.emailFlag == true) {
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
    }
    else if (this.state.confirmPasswordFlag == true) {
      this.setState({
        confirmPasswordRequired: true,
        confirmPasswordError: 'Field Required'
      })
    }
    else {
      // this.setState({
      //   firstname: '',
      //   firstnameFlag: true,
      //   firstnameRequired: false,
      //   lastname: '',
      //   lastnameFlag: true,
      //   lastnameRequired: false,
      //   email: '',
      //   emailFlag: true,
      //   emailRequired: false,
      //   password: '',
      //   passwordFlag: true,
      //   passwordRequired: false,
      //   confirmPassword: '',
      //   confirmPasswordFlag: true,
      //   confirmPasswordRequired: false,
      // })
      this.props.SignupUser(data);
    }
  }

  render() {

    let data = [
      {
        value: 'Banana',
      },
      {
        value: 'Mango',
      }, {
        value: 'Pear',
      },
      {
        value: 'cack',
      },
      {
        value: 'orange',
      },
      {
        value: 'almond',
      },
      {
        value: 'bean',
      },
      {
        value: 'strawberry',
      },
      {
        value: 'pinuts',
      },
    ];

    const {
      containerStyle,
      logoContainerStyle,
      logoStyle,
      textStyle1,
      infoContainerStyle,
      inputContainerStyle1,
      inputContainerStyle2,
      textStyle2,
      textStyle3,
      buttonStyle,
      buttonTextStyle,
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

            <Text style={textStyle1}>Sign Up</Text>

            <InputText
              leftIcon
              placeholder="First Name"
              autoCapitalize="words"
              iconName="person"
              iconSize={18}
              iconColor="#787878"
              inputTextColor="#000"
              validator='isAlpha'
              blackList=" ,_-"
              required={this.state.firstnameRequired}
              inputValue={this.state.firstname}
              error={this.state.firstnameError}
              flag={this.state.firstnameFlag}
              textHelper="Use only Characters"
              inputContainerStyle={inputContainerStyle1}
              onChange={this.firstnameHandler}
            />

            <InputText
              leftIcon
              placeholder="Last Name"
              autoCapitalize="words"
              iconName="person"
              iconSize={18}
              iconColor="#787878"
              inputTextColor="#000"
              validator='isAlpha'
              blackList=" ,_-"
              required={this.state.lastnameRequired}
              inputValue={this.state.lastname}
              error={this.state.lastnameError}
              flag={this.state.lastnameFlag}
              textHelper="Use only Characters"
              inputContainerStyle={inputContainerStyle2}
              onChange={this.lastnameHandler}
            />

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
              inputContainerStyle={inputContainerStyle2}
              onChange={this.emailHandler}
            />

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
              inputContainerStyle={inputContainerStyle2}
              onChange={this.passwordHandler}
            />
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
              inputContainerStyle={inputContainerStyle2}
              onChange={this.confirmPasswordHandler}
            />

            {/* <Button Color="#07E592" buttonStyle={buttonStyle} buttonTextStyle={buttonTextStyle} onPress={this.userLoginHandler}>
              LOGIN
              </Button> */}
            <Button Color="#0011FF" buttonStyle={buttonStyle} buttonTextStyle={buttonTextStyle} onPress={this.buttonHandler}>
              Sign Up
            </Button>

            <SocialIcons navigation={this.props.navigation} />
            <View style={signupViewStyle}>
              <Text style={textStyle2}>Already have an account? </Text>
              <TouchableOpacity onPress={this.loginHandler}>
                <Text style={textStyle3}>Login</Text>
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
    flex: 3.5,
    paddingBottom: 20,
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
    marginTop: 10,
    paddingVertical: 4,
    borderBottomWidth: 0.5
  },
  inputContainerStyle2: {
    marginTop: 10,
    paddingVertical: 4,
    borderBottomWidth: 0.5
  },
  buttonStyle: {
    marginTop: 26,
    paddingVertical: 20,
  },
  buttonTextStyle: {
    color: "#fff",
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 16,
    zIndex: 1,
  },
  signupViewStyle: {
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 30
  },
  textStyle2: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: "#000000",
  },
  textStyle3: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: "#0011FF"
  },
});

export default SignupForm;
