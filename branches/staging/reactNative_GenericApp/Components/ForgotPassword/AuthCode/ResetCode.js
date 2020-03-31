import * as React from "react";

import { View, Text, StyleSheet, } from "react-native";
import LoadingScreen from "../../utils/LoadingScreen2"
import { forgot_Status } from "./ResetCode_Constants";
import { Input, Button, Card, CardSection, Input1 } from "../../utils/common";
import { Fonts } from "../../utils/Fonts";
import CrossHeader from "../../utils/CrossHeader"
export default class ResetCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      validcode: true,
    };
  }

  SendEmail = () => {
    code = this.state.code;
    this.state.email = this.props.navigation.state.params.email
    flag = false;
    if (this.state.code.length === 6)
      flag = true;
    else {
      this.setState({ validcode: false })
    }
    if (flag) {
      data = {
        email: this.state.email,
        ResetCode: code,

      };

      this.props.CheckResetCode(data)

    }
  };


  getScreen(status) {
    console.log("I am from AuthResetcode Component getScreen: " + status);
    switch (status) {
      case forgot_Status.AuthResetCode.NEW:
        return (
          <View style={styles.buttonStyle}>
            <Button Color="#07E592" onPress={this.SendEmail}>
              Send
            </Button>
          </View>

        );
        break;
      case forgot_Status.AuthResetCode.LOADING:
        return (
          <View><LoadingScreen /></View>
        );
        break;
      case forgot_Status.AuthResetCode.SUCCESS:
        //   alert("Sucess"+ this.state.email)
        this.props.navigation.navigate('ResetPassword', { email: this.state.email, login: false })
        return (
          <View style={styles.buttonStyle}>
            <Button Color="#07E592" onPress={this.SendEmail}>
              Send
           </Button>
          </View>
        );
        break;
      case forgot_Status.AuthResetCode.FAILED:
        return (
          <View style={{ position: 'relative', }} >
            <View style={styles.buttonStyle}>
              <Button Color="#07E592" onPress={this.SendEmail}>
                Send
             </Button>
            </View>
            <Text>Code Authentication Error</Text>
          </View>
        );
        break;
      default:
        break;
    }


  }

  render() {
    const {
      containerStyle,
      textStyle4,
      cardContainerStyle,
      buttonStyle,
    } = styles;
    return (
      <View
        style={containerStyle}
      >
        <CrossHeader title="Verify Code" navigation={this.props.navigation} />
        <View style={{ alignItems: "center", justifyContent: "center", padding: 15 }}>
          <Text style={textStyle4}>An email is sent to your account. Check your inbox to verify reset code</Text>
        </View>
        <View style={cardContainerStyle}>
          <Card>

            <CardSection>
              <Input1
                placeholder="Enter Code"

                textColor="#000"
                value={this.state.disc}
                onChangeText={code => {
                  this.setState({ code });
                  this.setState({ validcode: true })
                }}
              />


            </CardSection>


            <View style={{ padding: 10 }}>
              {this.getScreen(this.props.AuthResetCode_status)}
            </View>
            {/* <HelperText type="error" visible={!this.state.validcode}>
              invalid code
         </HelperText> */}
          </Card>
        </View>
      </View>
      //   <View style={{ padding: 20 }}>
      // <CrossHeader title="Verify Code"  navigation={this.props.navigation}/>
      //   <View style={{ padding: 20 }}> 
      //     <Text>An email is sent to your account. Check your inbox to verify reset code</Text>
      //   </View>
      //     <TextInput
      //       label="Your Reset Code"
      //       value={this.state.code}
      //       onChangeText={code => {
      //         this.setState({ code });
      //         this.setState({validcode : true})
      //     }}
      //     />
      //     <HelperText type="error" visible={!this.state.validcode}>
      //       invalid code
      //     </HelperText>

      //     <Button title="Send" color="#841584" onPress={this.SendEmail} />

      //      <View style={{ padding: 10 }}>
      //      {this.getScreen(this.props.AuthResetCode_status)}
      //     </View>  
      //   </View>
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

  cardContainerStyle: {
    position: "relative",
    alignItems: 'center',
    top: 36
  },
  textStyle4: {
    padding: 20,
    top: 50,
    position: "relative",
    fontFamily: Fonts.EncodeSansSemiBold,
    fontSize: 12,
    color: "#000000"
    // alignSelf: "center"
  },
  buttonStyle: {
    // position: 'relative',
    // top: 220,
    marginTop: 40,
    // padding: 5,
    // paddingBottom: 5,
    // backgroundColor: '#fff',
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    height: 60
  }
})