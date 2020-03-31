import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { Fonts } from '../../utils/Fonts'
import SocialProfilesLinks from './SocialProfilesLinks';

export default class SocialProfiles extends Component {
    render() {
        const { containerStyle, textStyle } = styles;
        return (
            <SafeAreaView style={containerStyle}>
                <Text style={textStyle}>Social Profiles</Text>
                <SocialProfilesLinks />
                <SocialProfilesLinks iconBackGroundColor="#2C4BFC" iconName1="facebook-f" />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 32
    },
    textStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 14,
        color: "#000000",
    }
})
