import React, { Component } from "react";
import {
  View,
  Text,
  
} from "react-native";
import LoginForm from "./LoginForm"
import { User_Status } from "./Login_Constants";
import LoadingScreen from "../utils/LoadingScreen"
//import SnackBar from "../utils/SnackBar"
export default class LoginForm_View extends Component{
    constructor(props) {
      super(props);
    }
    getScreen(status) {

        switch (status) {
          case User_Status.Login_User.NEW:
          return (
            <View>
            <LoginForm navigation={this.props.navigation} Loginuser={this.props.Loginuser} />
            </View>
          );
        
          case User_Status.Login_User.LOADING:
            return (
              <View>
                <LoadingScreen />
              </View>
            );
            case User_Status.Login_User.SUCCESS:
          this.props.navigation.navigate('Authentication')
          return (
            <View/>
          );
          case User_Status.Login_User.FAILED:
         
            return (
            
                 <View>
                 <LoginForm navigation={this.props.navigation} Loginuser={this.props.Loginuser}
                 UserLoginErrorMsg= {this.props.UserLoginErrorMsg}
                 />
                 </View>
            );
          
          default:
            break;
        }
      }
      render() {
      return(
        <View >
        {
          this.getScreen(this.props.UserLoginStatus)
        }
      </View> 
        )}
}