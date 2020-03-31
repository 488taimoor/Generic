import React, { Component } from 'react';

import realm from "../../Components/utils/realm/UserSchema";

class Authentication extends Component {
  constructor(props) {
    super(props);
    
  }

  UNSAFE_componentWillMount() {
        
    if (realm.objects('UserToken')[0]) { // if user access token exists nevigate to dashboard

      this.props.navigation.navigate( this.props.SignedIn)
   
    }
    else{ //else navigate to signup page
 
     this.props.navigation.navigate( this.props.SignedOut)
 
      
    }
  
  }


  render() {
    
    return (
    null
    );
  }
}

export default Authentication;