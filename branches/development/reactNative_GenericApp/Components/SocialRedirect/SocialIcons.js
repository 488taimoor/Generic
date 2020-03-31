import React from 'react'
import { View } from 'react-native'

import GoogleLogin from "./Google/GoogleLogin"
import FacebookLogin from "./FaceBook/FacebookLogin"
import LinkedInLogin from "./LinkedIn/LinkedInLogin"
export default class Socialicons extends React.Component {
  render() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
       <GoogleLogin navigation={this.props.navigation} />
       <FacebookLogin navigation={this.props.navigation} />
       <LinkedInLogin navigation={this.props.navigation} />     
      </View>
    )
  }
}