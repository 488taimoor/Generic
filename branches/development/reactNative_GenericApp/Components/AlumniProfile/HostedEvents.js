import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import CardNormal from '../Cards/CardNormal';
import { Fonts } from '../utils/Fonts'

export default class HostedEvents extends Component {
    render() {
        const { textStyle } = styles;
        return (
            <SafeAreaView>
                <Text style={textStyle}>Hosted Events</Text>
                <CardNormal />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 14,
        color: "#000000",
        marginBottom: 17
    }
})
