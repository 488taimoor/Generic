import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native'
import { Fonts } from '../utils/Fonts';
import Button2 from '../Buttons/Button2';
export default class SignIn extends Component {
    render() {
        const { containerStyle, viewStyle1, imageContainerStyle, imageStyle, textStyle1, viewStyle2, buttonStyle } = styles
        return (
            <SafeAreaView style={containerStyle}>
                <View style={viewStyle1}>
                    <View style={imageContainerStyle}>
                        <Image
                            source={require('../images/logo1.png')}
                            style={imageStyle}
                        />
                    </View>
                    <Text style={textStyle1}>Aitchisonian</Text>
                </View>
                <View style={viewStyle2}>
                    <Button2 />
                    <Button2 buttonStyle={buttonStyle} iconName="linkedin-in" btnColor='#007AFF'>
                        Continue With LinkedIn
                    </Button2>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        // backgroundColor: 'gold'
    },
    viewStyle1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1
    },
    imageContainerStyle: {
        height: 140,
        width: 140,
        // borderWidth: 1,
    },
    imageStyle: {
        height: '100%',
        width: '100%',
    },
    textStyle1: {
        marginTop: 48,
        color: '#08006A',
        fontFamily: Fonts.EncodeSansBold,
        fontSize: 32,
    },
    viewStyle2: {
        flex: 1,
        // borderWidth: 1,
        paddingHorizontal: 58,
        justifyContent: 'flex-end',
        // backgroundColor: 'pink',
        paddingBottom: 40
    },
    buttonStyle: {
        marginTop: 16,
    }
})
