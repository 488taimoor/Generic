import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler
} from "react-native";
import { Input, Button, Card, CardSection } from "../utils/common";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

import validator from 'validator';
import CrossHeader from "../utils/CrossHeader"
class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cpassword: "",
      passwordHelper:"",
      validConfPass: true,
      validPass: true,
      login:false,
      PasswordFlag: false,
      errorPassword: "none",
      error:''
    };
    this.handleBackPress= this.handleBackPress.bind(this)
  }
  componentWillMount(){
    BackHandler.addEventListener("hardwareBackPress",this.handleBackPress);
   // this.state.login=this.props.navigation.state.params.login
    this.state.email=this.props.navigation.state.params.email
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
  resetConfirmHandler = () => {

    var password = this.state.password.trim();
    var confpassword = this.state.cpassword.trim();
    var flag = !this.state.PasswordFlag;

    if (password === "" || password === null) {
      this.setState({
        passwordHelper: "Enter Your Password",
        PasswordFlag: true,
        errorPassword: "flex"
      });
      flag=false
    } 
    if(flag)
    if (password !== confpassword) {
      this.setState({
        validConfPass: false
        });
      flag = false;
    }

    if (flag) {

      data = {
        email:this.state.email,
        password: password,
        login: this.state.login,
        //  NotifyToken: realm.objects('NotifyToken')[0].NotifyToken
      };
      this.props.UpdateForgotPassword(data);
    }
  };
navigateToLogin = () =>{
  this.props.navigation.navigate("Login")
}
navigateToProfile = () =>{
  this.props.navigation.navigate("Profile")
}
handleConfPassword = text => {
  if(!this.state.PasswordFlag)
 { 
    if(text !== this.state.password)
   {
     this.setState({
    validConfPass: false,
    errorPassword:"flex"
    });
  }else{
    this.setState({
      validConfPass: true,
      errorPassword:"none"
      });
  }
}
  this.setState({
   // validConfPass: true,
    cpassword : text
  });
}
handlePassword = text => {

  this.setState({
    validConfPass: true
  });
 
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
  }else{
    this.setState({
      passwordHelper: "",
      PasswordFlag: false,
      errorPassword: "none"
    });
  }
  this.setState({ password: text });
};
  render() {
    const {
      containerStyle,
      textStyle2,
      textStyle3,
      textStyle4,
      cardContainerStyle,
      buttonStyle,
      iconContainerStyle2,
      iconStyle2,
      errorStyle1
    } = styles;
  //  console.warn(this.state.PasswordFlag, this.state.validConfPass)
    return (
      <View style={containerStyle} >
      {this.state.login ? <CrossHeader title="Reset Password" navigation={this.props.navigation} dispatchNewState={this.navigateToProfile}/>:
      <CrossHeader title="Reset Password" navigation={this.props.navigation} dispatchNewState={this.navigateToLogin}/>
      }

        <Text style={textStyle2}>Add a new password</Text>

        <View style={cardContainerStyle}>
          <Card>
            <Text style={textStyle3}>New Password</Text>
            <CardSection>
              <Input
                secureTextEntry
                placeholder="Password"
                iconName="lock"
                size={16}
                color="#787878"
                textColor="#000"
                value={this.state.password}
                onChangeText={password => {
                  this.handlePassword(password); 
                }}
              />
            </CardSection>
            <Text style={textStyle3}>
              {/* <Text style={[textStyle3, { color: "#FF0000" }]}></Text> */}
              Confirm Password
            </Text>
            <CardSection>
              <Input
                secureTextEntry
                placeholder="Password"
                iconName="lock"
                size={16}
                // color="#FF0000"
                color="#787878"
                textColor="#000"
                value={this.state.cpassword}
                onChangeText={cpassword => {
                  this.handleConfPassword(cpassword); //handleConfPassword
                }}
                // onChangeText={cpassword => {
                //   this.setState({ cpassword });
                //   this.setState({ validConfPass: true });
                // }}
              />
            </CardSection>
       
            <Text
                style={[errorStyle1, { display: this.state.errorPassword }]}
              >
                {this.state.passwordHelper}
              </Text>
            <View style={iconContainerStyle2}>
              <Text style={{padding:0, margin:0, display:this.state.errorPassword }} >
                <Icon style={iconStyle2} name="not-interested" />
                <Text style={textStyle4}>Password didn't match. Try Again.</Text>
              </Text>
            </View>

            <View style={buttonStyle}>
             {!this.state.PasswordFlag && this.state.validConfPass && this.state.cpassword !==""?

             <Button Color="#07E592" onPress={this.resetConfirmHandler}>
                RESET
              </Button>
              :
              
             <Button Color="grey" diable={true} >
             RESET
           </Button>
             }
            </View>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    position: "relative",
    height: "100%",
    width: "100%",
    alignItems: "center"
    // backgroundColor: "gold"
  },
  iconContainerStyle1: {
    position: "relative",
    // top: 10,
    left: -60,
    flexDirection: "row"
    // borderWidth: 1,
    // borderColor: 'black',
  },
  iconStyle1: {
    color: "#000000",
    fontSize: 40,
    paddingRight: 12
  },
  iconContainerStyle2: {
    position: "relative",
  
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: 'black',
  },
  iconStyle2: {
    color: "#FF0000",
    fontSize: 16,
    // paddingLeft: 5,
    paddingRight: 8
  },
  cardContainerStyle: {
    position: "relative",
    top: 40
  },
  textStyle1: {
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 24,
    color: "#000000",
    marginTop: 3
  },
  buttonStyle: {
    // position: 'relative',
    // top: 220,
    marginTop: 220,
    // padding: 5,
    // paddingBottom: 5,
    // backgroundColor: '#fff',
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    height: 60
  },
  textStyle2: {
    position: "relative",
    top: 15,
    left: -70,
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#000000"
    // alignSelf: "center"
  },
  textStyle3: {
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 12,
    color: "#000000",
    marginTop: 15,
    marginBottom: -3
  },
  errorStyle1: {
    color: "#FF0000",
    fontFamily: Fonts.MontserratLight,
    fontSize: 12,
    marginTop: "2%"
    // display: 'none',
  },
  textStyle4: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#FF0000",
  }
});

export default ResetPasswordForm;
