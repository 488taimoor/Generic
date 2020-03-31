import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class LinkedInLogin extends React.Component {
  render() {
    return (
      <TouchableOpacity   onPress={() => { this.props.navigation.navigate('SocialRedirect', { provider: 'LinkedIn' }) }}
         style={{justifyContent: 'center', alignItems: 'center', height: 50, width: 50, backgroundColor: "#4875B4", borderRadius: 50}}>
          <Icon name='linkedin-in' size={20} color='#fff' />
        </TouchableOpacity>
    )
  }
}