import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import ForgotPasswordContainer from "../Components/ForgotPassword/ForgotPasswordContainer"
export default class Login extends Component{
    constructor(props) {
      super(props);
    }
    
   
      render() {
   
          return(    
        <View >
         
          <ForgotPasswordContainer  navigation={this.props.navigation}/>
      </View> 
    )}
}


