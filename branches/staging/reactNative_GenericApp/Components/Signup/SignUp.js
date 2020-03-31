import React, { Component } from "react";
import {
  View,
  Text,
 
} from "react-native";
import SignupForm from "./SignupForm"
import { User_Status } from "./SignUp_Constants";
import LoadingScreen from "../utils/LoadingScreen"

export default class LoginForm_View extends Component{
    constructor(props) {
      super(props);
    }
    getScreen(status) {

        switch (status) {
            case User_Status.Add_User.NEW:
            return (
                <View>
                  {/* <SnackBar title="hello"/> */}
             <SignupForm navigation={this.props.navigation} SignupUser={this.props.SignupUser} /> 
                </View>
              );
            
            case User_Status.Add_User.LOADING:
  
              return (
                <View>
                  <LoadingScreen />
                  </View>
              );
            case User_Status.Add_User.SUCCESS:         
            this.props.navigation.navigate('Authentication');
              return (
            
                <View>
                
              </View>
              );
            case User_Status.Add_User.FAILED:
            
              return (
                <View>
                <SignupForm navigation={this.props.navigation} SignupUser={this.props.SignupUser} 
                AddUserErrorMsg={this.props.AddUserErrorMsg}   />
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
          this.getScreen(this.props.UserSignUpStatus)
        }
      </View> 
    )}
}
