import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { Input, Button, Card, CardSection } from "../utils/common";

import { Fonts } from "../utils/Fonts";

class ForgotPasswordForm extends Component {
  state = {
    email: "",
    chosenDate: new Date(),
    date: "",
    validEmail: false,

    emailColor: "#000000"
  };

  loginHandler = () => {
    // Alert.alert('history');
    //  this.props.history.push("/");
  };

  fogotCheckHandler = () => {

    var Email = this.state.email.toLowerCase()
    if (Email != "") {

      data = {
        email: Email,
      };
      
      this.props.ResetPassword(data)
    }
  };

  emailOnchange = email => {
    email = email.trim();
    this.setState({
      email: email
    });
  };
  render() {
    const {

      iconImageStyle,
  
      textStyle2,

      cardContainerStyle,
      buttonStyle,

    } = styles;
    
    return (
        <View>
          <Text style={textStyle2}>Enter email to find your account</Text>
          <Image
            style={iconImageStyle}
            source={require("../../assets/images/forgot-circle.png")}
          />

          <View style={cardContainerStyle}>
            <Card>
              <CardSection>
                <Input
                  placeholder="example@abc.com"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  iconName="email"
                  size={18}
                  color={this.state.emailColor}
                  textColor={this.state.emailColor}
                  value={this.state.email}
                  onChangeText={this.emailOnchange}
                />
              </CardSection>
{/* 
              <Text style={{ color: "red" }}>
              Network Error!
              </Text> */}
        {this.props.ErrorMsg}
              <View style={buttonStyle}>
                <Button Color="#07E592" onPress={this.fogotCheckHandler}>
                  SEND
              </Button>
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
    alignItems: 'center',
    // flexDirection: "row"
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
  iconImageStyle: {
    position: "relative",
    height: 132,
    width: 132,
    top: 55,
    alignSelf: "center"
  },
  cardContainerStyle: {
    position: "relative",
    top: 100
  },
  textStyle1: {
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 24,
    color: "#000000",
    marginTop: 3
  },
  buttonStyle: {
    marginTop: 70,
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
    left: '-6%',
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#000000"
    // alignSelf: "center"
  },
  textStyle3: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#FF0000"
  }
});

export default ForgotPasswordForm;
