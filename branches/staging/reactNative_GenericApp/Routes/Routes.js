import React, { Component } from 'react';

import {
  createStackNavigator,
  createSwitchNavigator,
  
} from "react-navigation";
import Authentication from "../Screens/Authentication/Authentication"
import Signup from "../Screens/Signup"

const SignUp = createStackNavigator({  //Routes  when user is not logged in to the system

  Signup: {
    screen: Signup,
    navigationOptions: { header: null }
  },
  
},
  {
    initialRouteName: "Signup"
  }
)


const SignIn = createStackNavigator({  // Routes after user has logged in to the system

  Dashboard:
  {
    screen: Signup,
    navigationOptions: { header: null }
  },

},
  {
    initialRouteName: "Dashboard"
  }
)
export const createRootNavigator  = (notify ) => {

 return createSwitchNavigator(
    {
      SignedIn: SignIn, // this is the route after successfull login
      SignedOut: SignUp,  // this is the route when user has not logged in or he has logged out of the system
      Authentication: {
        screen: props =><Authentication notify={notify} SignedIn={"SignedIn"} SignedOut={"SignedOut"}  {...props}/> ///use SignedIn props to navigate user after he has logged in. 
        // And use SignedOut props to navigate user logout
      },
    },
    {
      initialRouteName: 'Authentication',
    }
  )
}
