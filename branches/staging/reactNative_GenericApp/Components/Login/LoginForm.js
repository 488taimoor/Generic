import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { StackActions } from 'react-navigation';
import { Input, Button, Card, CardSection } from "../utils/common";
import { Fonts } from "../utils/Fonts";
//import validate from "validate.js";
import realm from "../utils/realm/UserSchema";
import validator from 'validator';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const popAction = StackActions.pop({
  n: 1,
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state={ 
    email: "",
    password: "",
    validEmail: true,
    validField: true,
    emailHelper: "",
    passwordHelper: "",
    errorEmail: "none",
    errorPassword: "none",
    EmailFlag: true,
    PasswordFlag: true,

    };
    this.userLoginHandler=this.userLoginHandler.bind(this)
  }
  componentDidMount(){
   
    if(this.props.UserLoginErrorMsg)
    { 

      errmsg=this.props.UserLoginErrorMsg
    
      if(errmsg === "Incorrect email")
      {
        this.emailNotFound()
        this.handleNetworkError("Server response error. Try again!")
      }
      else if(errmsg === "Incorrect password")
      {
    
        this.handleNetworkError("Incorrect password error. Try again!")
      }
      else{
        this.handleNetworkError(errmsg)
      }
    }
  }
  emailOnchange = email => {
    this.setMissingField(true)
    email = email.trim();
    this.setState({
      email: email
    });
    var constraints = {
      from: {
        email: true,
        presence: true
      }
    };
    // msg = JSON.stringify(validate({ from: email }, constraints));
    // if (msg) {
    //   this.setState({ validEmail: false });
    // } else {
    //   this.setState({ validEmail: true });
    // }
  };

  setMissingField = (field) => {
    this.setState({
      validField: field
    })
  }

  signupHandler = () => {
    // Alert.alert('history');
    this.props.navigation.dispatch(popAction)
  };

  forgotHandler = () => {
    // Alert.alert('history');
    this.props.navigation.navigate('ForgotPassword')
  };

  async userLoginHandler () {
  
    flag = true;
    data = {
      email: this.state.email,
      password: this.state.password.trim(),
      appToken: realm.objects('NotifyToken')[0] == null? null : realm.objects('NotifyToken')[0].NotifyToken,
     // allowNotification: realm.objects('NotifyToken')[0] == null? false : realm.objects('NotifyToken')[0].allowNotify,
    }

    if (data.email === "")
     { flag = false;
      this.setState({
        emailHelper: "Enter Your Email",
        EmailFlag: true,
        errorEmail: "flex"
      });
     }
   else if (data.password === "")
      {flag = false;
        this.setState({
          passwordHelper: "Enter Your Password",
          PasswordFlag: true,
          errorPassword: "flex"
        });
      }

    if (flag && this.state.validEmail) {
      //alert(JSON.stringify(data))
      this.props.Loginuser(data)
    } else if (!flag) {
      this.setMissingField(false)
    }


  };


  // Start Email Validation
  emailNotFound = () =>{
    this.setState({
      emailHelper: "Email not found",
      EmailFlag: true,
      errorEmail: "flex"
    });
  }
  
  incorrectPassword = () =>{
    
    this.setState({
      passwordHelper: "Incorrect Password",
      PasswordFlag: true,
      errorPassword: "flex"
    });
  }
  handleNetworkError = (err) =>{
    
    this.setState({
      passwordHelper: err,
      PasswordFlag: true,
      errorPassword: "flex"
    });
  }

  
  
  handleEmail(text) {
    if (!validator.isEmail(text)) {
      this.setState({
        emailHelper: "Enter Your Valid Email",
        EmailFlag: true,
        errorEmail: "flex"
      });
    } else {
      this.setState({
        emailHelper: "",
        EmailFlag: false,
        errorEmail: "none"
      });
    }
    var emojiRegexp = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g;
    var emojiEmail = text.toString();
    if (emojiRegexp.test(emojiEmail)) {
      this.setState({
        EmailFlag: true,
        emailHelper: "Emoji not allowed in email",
        errorEmail: "flex"
      });
    }

    this.setState({ email: text });
  }

  // End Email Validation

  // Start Password Validation

  handlePassword = text => {
    if (text === "" || text === null) {
      this.setState({
        passwordHelper: "Enter Your Password",
        PasswordFlag: true,
        errorPassword: "flex"
      });
    } else {
      this.setState({
        passwordHelper: "",
        PasswordFlag: false,
        errorPassword: "none"
      });
    }
    const minLength = text.length;
    if (minLength < 8) {
      this.setState({
        passwordHelper: "Enter Minimum 8 Characters Password",
        PasswordFlag: true,
        errorPassword: "flex"
      });
    }
    this.setState({ password: text });
  };
  // End Password Validation

  render() {
    const {
      containerStyle,
      backgroundImageStyle,
      iconImageStyle,
      textStyle1,
      textStyle2,
      textStyle3,
      textStyle4,
      textStyle5,
      cardContainerStyle,
      buttonStyle,
      forgotViewStyle,
      signupViewStyle,
      errorStyle1
    } = styles;

    return (
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-50}>

        <View style={containerStyle}>

       
          <View style={cardContainerStyle}>


            <Text style={textStyle1}>Login</Text>

            <Card>
              <CardSection>
                <Input
                  placeholder="example@abc.com"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  iconName="email"
                  size={18}
                  color="#787878"
                  textColor="#000"
                  value={this.state.email}
                  // onChangeText={this.emailOnchange}
                  onChangeText={email => {
                    this.handleEmail(email);
                  }}
                />
              </CardSection>
              <Text style={[errorStyle1, { display: this.state.errorEmail }]}>
                {this.state.emailHelper}
              </Text>

              <CardSection>
                <Input
                  secureTextEntry
                  placeholder="Password"
                  iconName="lock"
                  size={16}
                  color="#787878"
                  textColor="#000"
                  value={this.state.password}
                  // onChangeText={password => {
                  //   this.setState({ password })
                  //   this.setMissingField(true)
                  // }}
                  onChangeText={password => {
                    this.handlePassword(password);
                  }}
                />
              </CardSection>

              <Text
                style={[errorStyle1, { display: this.state.errorPassword }]}
              >
                {this.state.passwordHelper}
              </Text>

              <View style={forgotViewStyle}>
                <Text style={textStyle2}>Forgot password? </Text>
                <TouchableOpacity onPress={this.forgotHandler}>
                  <Text style={textStyle3}>Tap Here!</Text>
                </TouchableOpacity>
              </View>

              <View style={buttonStyle}>
                <Button Color="#07E592" onPress={this.userLoginHandler}>
                  LOGIN
                </Button>
              </View>
              {/* <HelperText type="error" visible={!this.state.validEmail} stye={{ display: 'none' }}>
                Email address is invalid!
          </HelperText>
          <HelperText type="error" visible={!this.state.validField}>
            Missing Field
          </HelperText>
        
                    <Text>{this.props.UserLoginErrorMsg}</Text>
              <HelperText type="error" visible={!this.state.validField} stye={{ display: 'none' }}>
                Missing Field
          </HelperText> */}
        

              <View style={signupViewStyle}>
                <Text style={textStyle4}>Don't have login? </Text>
                <TouchableOpacity onPress={this.signupHandler}>
                  <Text style={textStyle5}>SignUp</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    position: "relative",
    height: "100%",
    width: "100%",
    alignItems: "center"
    // backgroundColor: "white"
  },
  backgroundImageStyle: {
    position: "absolute",
    bottom: hp('10%'),
    right: -50
  },
  iconImageStyle: {
    position: "relative",
    // height: 47.52,
    // width: 44.95,
    top: hp('15%'),
    alignSelf: "center"
  },
  cardContainerStyle: {
    position: "relative",
    top: hp('30%'),
    
  },
  textStyle1: {
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 32,
    color: "#000000"
    // marginBottom: 5
  },
  buttonStyle: {
    marginTop: hp('6%'),
    // padding: 5,
    // paddingBottom: 5,
    // backgroundColor: '#fff',
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    height: 60
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
  textStyle4: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: "#000000",
    alignSelf: "center"
  },
  textStyle5: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: "#0011FF"
  },
  forgotViewStyle: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15
  },
  signupViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },
  errorStyle1: {
    color: "#FF0000",
    fontFamily: Fonts.MontserratLight,
    fontSize: 12,
    marginTop: "2%"
    // display: 'none',
  }
});

export default LoginForm;
