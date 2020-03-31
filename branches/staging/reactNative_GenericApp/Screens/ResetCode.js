import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import ResetCodeContainer from "../Components/ForgotPassword/AuthCode/ResetCodeContainer"
export default class Login extends Component{
    constructor(props) {
      super(props);
    }
    
   
      render() {
   
          return(    
        <View >
         
          <ResetCodeContainer  navigation={this.props.navigation}/>
      </View> 
    )}
}


