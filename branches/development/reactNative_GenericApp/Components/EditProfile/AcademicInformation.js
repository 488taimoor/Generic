import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { Fonts } from '../utils/Fonts';
import DropDownList from '../InputFields/DropDownList';

export default class AcademicInformation extends Component {
    render() {

        const { containerStyle, textStyle1, textStyle2 } = styles;
        return (
            <SafeAreaView style={containerStyle}>
                <Text style={textStyle1}> Academic Information </Text>
                <Text style={textStyle2}> Add at least one House </Text>
                <DropDownList title="House (Junior School)" />
                <DropDownList title="House (Prep School)" />
                <DropDownList title="House (Senior School)" />
                <DropDownList title="Class of" />
                <DropDownList title="School" />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 10,
        backgroundColor: 'white',
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 16,
        color: '#000000',
        // borderWidth:1,
    },
    textStyle2: {
        marginTop: 6,
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 10,
        color: '#000000',
        // borderWidth:1,
    },
})
