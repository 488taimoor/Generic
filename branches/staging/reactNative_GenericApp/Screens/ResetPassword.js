import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import ResetPasswordContainer from "../Components/ChangePassword/ResetPasswordContainer"
export default class Login extends Component{
    constructor(props) {
      super(props);
    }
    
   
      render() {
   
          return(    
        <View >
         
          <ResetPasswordContainer  navigation={this.props.navigation}/>
      </View> 
    )}
}


