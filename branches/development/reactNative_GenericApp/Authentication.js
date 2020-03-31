import React, { Component } from 'react';
import {
  createAppContainer,
} from "react-navigation";
import NavigationService from "./NavigationService "
//import {navigationService} from './NavigationService ';
import realm from "./Components/utils/realm/UserSchema"//"./Components/utils/realm/UserSchema";
import { createRootNavigator } from "./Routes/Routes";
class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      notify: false
    
    }
  }


  componentDidMount() {
  //console.warn("Auth mount")
    if (realm.objects('UserToken')[0]) {
   
      this.props.setSignIn(true)
  
    }
    else{
      this.props.setSignIn(false)
    }
  
  }


  render() {
    const Layout = createAppContainer(createRootNavigator(this.props.signedIn, this.props.notify, this.props.setSignIn));
    
    return (
      <Layout 
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      />
    );
  }
}

export default Authentication;