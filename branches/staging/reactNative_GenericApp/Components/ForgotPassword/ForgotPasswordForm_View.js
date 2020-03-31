import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
  } from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import ForgotPasswordForm from "./ForgotPasswordForm"
import { forgot_Status } from "./ForgotPassword_Constants";
import LoadingScreen from "../utils/LoadingScreen"
import CrossHeader from "../utils/CrossHeader"
export default class LoginForm_View extends Component{
    constructor(props) {
      super(props);
      this.state={
        networkError:<View style={styles.iconContainerStyle2}><Icon style={styles.iconStyle2} name="not-interested" /><Text style={styles.textStyle3}>Network Error!</Text></View>,
        notFound: <View style={styles.iconContainerStyle2}><Icon style={styles.iconStyle2} name="not-interested" /><Text style={styles.textStyle3}> No Account found related to the provided email</Text></View>
      }
    }
    getScreen(status) {
          
        switch (status) {
          case forgot_Status.sendEmail.NEW:
          return (
            <View>
            <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword} />
            </View>
          );
        
          case forgot_Status.sendEmail.LOADING:
            return (
              <View>
                <LoadingScreen />
              </View>
            );
            case forgot_Status.sendEmail.SUCCESS:
   
           this.props.navigation.navigate('ResetCode', {email:this.props.email})
          return (
            <View>
            <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword} />
            </View>
          );
            case forgot_Status.sendEmail.FAILED:
           
            return (
            
                 <View>
                 <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword}
                    ErrorMsg= {this.state.networkError}
                 />
                 </View>
            );
            case forgot_Status.sendEmail.NOTFOUND:
          
            return (
                <View>
                <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword}
                ErrorMsg= {this.state.notFound}
                />
                </View>
           );
          default:
          return (
            <View>
            <ForgotPasswordForm navigation={this.props.navigation} ResetPassword={this.props.ResetPassword} />
            </View>
          );
        }
      }
      render() {
       
        const {
            containerStyle,
         
            iconContainerStyle1,
         
          } = styles;
          return(
            <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-10}
            style={containerStyle}
          >
            <View style={iconContainerStyle1}>
              <CrossHeader navigation={this.props.navigation}   title="Forgot Password" />
    
        <View >
        {
          this.getScreen(this.props.SendEmailStatus)
        }
      </View> 
      </View>
      </KeyboardAvoidingView>
        )}
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
      textStyle3: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 12,
        color: "#FF0000"
      }  
  });