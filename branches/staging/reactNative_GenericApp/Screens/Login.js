import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import LoginContainer from "../Components/Login/LoginContainer"
export default class Login extends Component{
    constructor(props) {
      super(props);
    }
    
   
      render() {
   
          return(    
        <View >
         
          <LoginContainer  navigation={this.props.navigation}/>
      </View> 
    )}
}


