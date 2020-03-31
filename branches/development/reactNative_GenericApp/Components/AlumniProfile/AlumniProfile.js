import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import SecondaryHeader from '../Headers/SecondaryHeader'
import ProfileDetails from './ProfileDetails';
import SocialProfiles from './SocialProfiles/SocialProfiles';
import HostedEvents from './HostedEvents';
import NavigationBar from '../NavigationBar/NavigationBar';

export default class AlumniProfile extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <Fragment>
                <SecondaryHeader backgroundColor='#fff' />
                <ScrollView style={containerStyle}>
                    <ProfileDetails />
                    <SocialProfiles />
                    <HostedEvents />
                </ScrollView>
                <NavigationBar />
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        // backgroundColor: 'gold',
        paddingHorizontal: 16
    },
})
