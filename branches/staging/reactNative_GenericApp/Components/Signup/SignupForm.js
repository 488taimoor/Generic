import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView, SafeAreaView,
} from "react-native";

import { Fonts } from "../utils/Fonts";
import { Input, Button, Card, CardSection } from "../utils/common";
import realm from "../utils/realm/UserSchema";
import validator from 'validator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state={
    lastName:"",  
    fname: "",
    email: "",
    password: "",
    confPassword:"",
    validEmail: true,
    validField: true,
    fnameHelper: "",
    lastNameHelper: "",
    emailHelper: "",
    passwordHelper: "",
    confPasswordHelper:"",
    errorfirstName: "none",
    errorLastName: "none",
    errorEmail: "none",
    errorConfPassword:"none",
    errorPassword: "none",
    firstNameFlag: true,
    lastNameFlag: true,
    EmailFlag: true,
    PasswordFlag: true,
    ConfPasswordFlag: true,
    HasUpperCase:false
  };
  this.myPracticesFormHandler=this.myPracticesFormHandler.bind(this)
  }

  componentDidMount(){
    if(this.props.AddUserErrorMsg)
    {
      err=this.props.AddUserErrorMsg
      
      if(err ===  "Email already exist!"){
        this.handleExistingEmail()
        this.handleNetworkError("Server response error. Try again!")
      }else{
        this.handleNetworkError(err)
      }
    }
  }
  handleExistingEmail = () =>{
    this.setState({
      emailHelper: "Email Already Exists!",
      EmailFlag: true,
      errorEmail: "flex"
    });
  }
  handleNetworkError = (err) =>{
    this.setState({
      passwordHelper: err,
      PasswordFlag: true,
      errorPassword: "flex"
    });
  }

  loginHandler = () => {
    // this.props.history.push("/");
    this.props.navigation.navigate("Login");
  };
  async myPracticesFormHandler () {
    flag = true;
  
    data = {
      firstName: this.state.fname.trim(),
      lastName: this.state.lastName.trim(),
      email: this.state.email,
      password: this.state.password.trim(),
      appToken: realm.objects('NotifyToken')[0] == null? null : realm.objects('NotifyToken')[0].NotifyToken,
    };

    if (
      data.firstName === "" ||
      data.firstName === null ||
      data.firstName === undefined ||  this.state.firstNameFlag == true
    ) {
      this.setState({
        fnameHelper: "Enter Your First Name. Use Only Characters.",
        firstNameFlag: true,
        errorfirstName: "flex"
      });
    }
   else if (
      data.lastName === "" ||
      data.lastName === null ||
      data.lastName === undefined ||  this.state.lastNameFlag == true
    ) {
      this.setState({
        lastNameHelper: "Enter Your First Name. Use Only Characters.",
        lastNameFlag: true,
        errorLastName: "flex"
      });
    }
    else if (data.email === "" || data.email === null || data.email === undefined || this.state.EmailFlag == true) {
      this.setState({
        emailHelper: "Enter Your Email",
        EmailFlag: true,
        errorEmail: "flex"
      });
    }
  
    else if (
      data.password === "" ||
      data.password === null ||
      data.password === undefined
    ) {
      this.setState({
        passwordHelper: "Missing Field",
        PasswordFlag: true,
        errorPassword: "flex"
      });
    }
    
    else if (
      this.state.confPassword=== "" ||
      this.state.confPassword === null ||
      this.state.confPassword === undefined 
    ) {
      this.setState({
        confPasswordHelper: "Missing Field",
        ConfPasswordFlag : true,
        errorConfPassword: "flex"
      });
    }
    
    else {
      if(!this.state.PasswordFlag && !this.state.ConfPasswordFlag)
     {
      this.props.SignupUser(data);
     } 

    }

  };

  setMissingField = field => {
    this.setState({
      validField: field
    });
  };

  emailOnchange = email => {
    this.setMissingField(true);
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

  

  handleLastName = text => {

    if (text === "" || !validator.isAlpha(validator.blacklist(text, " "))) {
      this.setState({
        lastNameHelper: "Use Only Characters.",
        lastNameFlag: true,
        errorLastName: "flex"
      });
    } else {
      this.setState({
        lastNameHelper: "",
        lastNameFlag: false,
        errorLastName: "none"
      });
    }
    this.setState({ lastName: text });
  };
  // Start Fields validate functions
  // Start first Name Validation

  handleFName = text => {
    console.log("here is fname", text);
    if (text === "" || !validator.isAlpha(validator.blacklist(text, " "))) {
      this.setState({
        fnameHelper: "Use Only Characters.",
        firstNameFlag: true,
        errorfirstName: "flex"
      });
    } else {
      this.setState({
        fnameHelper: "",
        firstNameFlag: false,
        errorfirstName: "none"
      });
    }
    this.setState({ fname: text });
  };
  // End first Name Validation


  // Start Email Validation


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

  handleConfPassword = text => {
    
    if (text === "" || text === null) {
      this.setState({
        confPasswordHelper: "Enter Confirmation Password",
        ConfPasswordFlag: true,
        errorConfPassword: "flex"
      });
    } else if(text !== this.state.password) {
      this.setState({
        confPasswordHelper: "Password mismatch",
        ConfPasswordFlag: true,
        errorConfPassword: "flex"
      });
    }else{
      this.setState({
        confPasswordHelper: "",
        ConfPasswordFlag: false,
        errorConfPassword: "none"
      });
    }
  
    this.setState({ confPassword: text });
  }; 
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
  
    if (text.match(/[A-Z]/)) {
        this.state.HasUpperCase=true
  } else {
    this.state.HasUpperCase=false
  }
    const numrals=validator.matches(text.replace(/[^0-9]+/g, ""), /^[0-9]+$/gi )
    const letters=validator.matches(text.replace(/[^a-zA-Z]+/g, ""), /^[a-zA-Z]+$/gi )
    const special=validator.matches(text.replace(/[0-9a-zA-Z]+/g, ""), /[^A-Za-z0-9]+/gi )
    if (minLength < 8 || !numrals || !this.state.HasUpperCase || !letters  || !special) {
      this.setState({
        passwordHelper: "Password should be min 8 characters. Must include alphanumeric, 1 Uppercase and a special character.",
        PasswordFlag: true,
        errorPassword: "flex"
      });
    }
    this.setState({ password: text });
  };
  // End Password Validation

  // End Fields validate functions

  render() {
 
    const {
      containerStyle,
      backgroundImageStyle,
      iconImageStyle,
      textStyle1,
      textStyle2,
      textStyle3,
      cardContainerStyle,
      signupViewStyle,
      buttonStyle,
      errorStyle1
    } = styles;

    return (
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={hp('-27%')}>
      <View style={containerStyle}>
 
        <View style={cardContainerStyle}>
          <Text style={textStyle1}>Sign Up</Text>
            <Card>
              <CardSection>
                <Input
                  placeholder="First Name"
                  autoCapitalize="words"
                  iconName="person"
                  size={18}
                  color="#787878"
                  textColor="#000"
                  value={this.state.fname}
                  // onChangeText={fname => {
                  //   this.setState({ fname });
                  //   this.setMissingField(true);
                  // }}
                  onChangeText={fname => {
                    this.handleFName(fname);
                  }}
                />
              </CardSection>

              <Text
                style={[errorStyle1, { display: this.state.errorfirstName }]}
              >
                {this.state.fnameHelper}
              </Text>
              <CardSection>
    
                <Input
                  placeholder="Last Name"
                  autoCapitalize="words"
                  iconName="person"
                  size={18}
                  color="#787878"
                  textColor="#000"
                  value={this.state.lastName}
               
                  onChangeText={lastName => {
                    this.handleLastName(lastName);
                  }}
                />
              </CardSection>

              <Text
                style={[errorStyle1, { display: this.state.errorLastName }]}
              >
                {this.state.lastNameHelper}
              </Text>
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
                  //   this.setState({ password });
                  //   this.setMissingField(true);
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
              <CardSection>
                <Input
                  secureTextEntry
                  placeholder="Confirm Password"
                  iconName="lock"
                  size={16}
                  color="#787878"
                  textColor="#000"
                  value={this.state.confPassword}
                  // onChangeText={password => {
                  //   this.setState({ password });
                  //   this.setMissingField(true);
                  // }}
                  onChangeText={confPassword => {
                    this.handleConfPassword(confPassword);
                  }}
                />
              </CardSection>

              <Text
                style={[errorStyle1, { display: this.state.errorConfPassword }]}
              >
                {this.state.confPasswordHelper}
              </Text>
              <View style={buttonStyle}>
                <Button Color="#07E592" onPress={this.myPracticesFormHandler}
                
                >
                  SIGNUP
                </Button>

              </View>
          
            </Card>
            <View style={{ position: 'relative', marginTop: '7%', alignItems: 'center' }}>
              <View style={signupViewStyle}>
                <Text style={textStyle2}>Already have an account? </Text>
                <TouchableOpacity onPress={this.loginHandler}>
                  <Text style={textStyle3}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    alignItems: "center",
     
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
    top: hp('5%'),
  },
  textStyle1: {
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 32,
    color: "#000000"
    // marginBottom: 5
  },
  
  textStyle2: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: "#000000",
    alignSelf: "center"
  },
  textStyle3: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: "#0011FF"
  },
  signupViewStyle: {
    position: "absolute",
    // top: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: 0
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
  

  
  errorStyle1: {
    color: "#FF0000",
    fontFamily: Fonts.MontserratLight,
    fontSize: 12,
    marginTop: "2%"
    // display: 'none',
  }

});

export default SignupForm;
