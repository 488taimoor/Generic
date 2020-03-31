import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class GoogleLogin extends React.Component {
  render() {
    return (
    
    <TouchableOpacity onPress={() => { this.props.navigation.navigate('SocialRedirect', { provider: 'Google' }) }}
        style={{justifyContent: 'center', alignItems: 'center', height: 50, width: 50, backgroundColor: "#C63D2D", borderRadius: 50}}>
          <Icon name='google' size={20} color='#fff' />
        </TouchableOpacity>
    
    )
  }
}