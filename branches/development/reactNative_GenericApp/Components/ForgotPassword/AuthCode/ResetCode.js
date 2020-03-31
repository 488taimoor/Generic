import * as React from "react";

import { View, Text, StyleSheet, } from "react-native";
import LoadingScreen from "../../utils/LoadingScreen2"
import { forgot_Status } from "./ResetCode_Constants";
import { Fonts } from "../../utils/Fonts";
import CrossHeader from "../../utils/CrossHeader"
import { InputText, Button } from 'alfain-generic-app'
export default class ResetCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      codeError: '',
      codeFlag: true,
      codeRequired: false,
      email: "",
    };
  }

  codeHandler = (code, codeFlag) => {
    this.setState({ code, codeFlag })
  }

  SendEmail = () => {

    this.state.email = this.props.navigation.state.params.email,
      data = {
        email: this.state.email,
        ResetCode: this.state.code,
      };
    if (this.state.codeFlag == true) {
      this.setState({
        codeRequired: true,
        codeError: 'Field Required'
      })
    }
    else if (this.state.codeFlag === false && this.state.code.length !== 6) {
      this.setState({
        codeRequired: true,
        codeFlag: true,
        codeError: 'invalid code. minimum 6 digit code allowed.'
      })
    }
    else {
      this.props.CheckResetCode(data)
    }
  };


  getScreen(status) {
    console.log("I am from AuthResetcode Component getScreen: " + status);
    switch (status) {
      case forgot_Status.AuthResetCode.NEW:
        return (
          <View style={styles.buttonContainerStyle}>
            <Button Color="#07E592" buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} onPress={this.SendEmail}>
              Send
            </Button>
          </View>

        );
        break;
      case forgot_Status.AuthResetCode.LOADING:
        return (
          <LoadingScreen />
        );
        break;
      case forgot_Status.AuthResetCode.SUCCESS:
        //   alert("Sucess"+ this.state.email)
        this.props.navigation.navigate('ResetPassword', { email: this.state.email, login: false })
        return (
          <View style={styles.buttonContainerStyle}>
            <Button Color="#07E592" buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} onPress={this.SendEmail}>
              Send
           </Button>
          </View>
        );
        break;
      case forgot_Status.AuthResetCode.FAILED:
        return (
          <React.Fragment>
            <View style={styles.buttonContainerStyle}>
              <Button Color="#07E592" buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} onPress={this.SendEmail}>
                Send
             </Button>
            </View>
            <Text style={{ color: 'red', fontSize: 12, marginTop: 6 }}>Code Authentication Error</Text>
          </React.Fragment>
        );
        break;
      default:
        break;
    }


  }

  render() {
    const {
      containerStyle,
      textStyle,
      infoContainerStyle,
      inputContainerStyle1,
      textHelperStyle
    } = styles;
    return (
      <View
        style={containerStyle}
      >
        <CrossHeader title="Verify Code" navigation={this.props.navigation} />
        <Text style={textStyle}>An email is sent to your account. Check your inbox to verify reset code</Text>

        <View style={infoContainerStyle}>
          {/* <Text style={textStyle}>An email is sent to your account. Check your inbox to verify reset code</Text> */}

          <InputText
            leftIcon
            placeholder="First Name"
            autoCapitalize="words"
            iconName="person"
            iconSize={18}
            iconColor="#787878"
            inputTextColor="#000"
            validator='isNumeric'
            blackList=" ,_-"
            required={this.state.codeRequired}
            inputValue={this.state.code}
            error={this.state.codeError}
            flag={this.state.codeFlag}
            textHelper="code contains only 6 numbers"
            textHelperStyle={textHelperStyle}
            inputContainerStyle={inputContainerStyle1}
            onChange={this.codeHandler}
          />


          {this.getScreen(this.props.AuthResetCode_status)}

          {/* </Card> */}
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
    justifyContent: 'center'
    // backgroundColor: "gold",
  },
  textStyle: {
    flex:1,
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#000000",
    // alignSelf: "flex-start",
    // marginLeft: 20,
    // marginTop: 8,
    width: '88%',
    paddingTop: 10,
    // backgroundColor: 'blue'
  },
  infoContainerStyle: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'aqua',
    paddingHorizontal: 40,
    paddingVertical: 70,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2,
    // borderColor: 'red',
    // paddingBottom: 70,
    // justifyContent: 'space-between'
  },
  inputContainerStyle1: {
    paddingVertical: 4,
    borderBottomWidth: 0.5
  },
  textHelperStyle:{
    alignSelf: 'flex-start'
  },
  buttonContainerStyle: {
    marginTop: 50,
    alignSelf: 'stretch',
    height: 60
  },
  buttonStyle: {
    paddingVertical: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 16,
  },
})