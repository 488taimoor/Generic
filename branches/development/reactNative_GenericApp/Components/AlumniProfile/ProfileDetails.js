import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native'
import { Fonts } from '../utils/Fonts'

export default class ProfileDetails extends Component {
    render() {
        const { name = 'Jack Milton', className = 'Godley House, Class of 1974', address = 'Lahore, Pakistan', img = require('../images/img.png'), aboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' } = this.props
        const {
            textContainerStyle,
            textStyle1,
            textStyle2,
            textStyle3,
            containerStyle,
            imageStyle,
            aboutContainerStyle,
            aboutMeStyle,
            aboutDescStyle
        } = styles;
        return (
            <Fragment>
                <SafeAreaView style={containerStyle}>
                    <View style={imageStyle}>
                        <Image
                            style={{ height: "100%", width: "100%" }}
                            source={img}
                        />
                    </View>
                    <View style={textContainerStyle}>
                        <View style={{ flex: 1 }}>
                            <Text style={textStyle1}>{name}</Text>
                            <Text style={textStyle2}>{className}</Text>
                            <Text style={textStyle3}>{address}</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={aboutContainerStyle}>
                    <Text style={aboutMeStyle}>About Me</Text>
                    <Text style={aboutDescStyle}>{aboutMe}</Text>
                </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        // borderWidth: 1,
        // left: -14,
        // flexDirection: "row",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderBottomWidth: 0.5,
        // width:'100%',
        borderColor: '#CCCCCC',
        // paddingHorizontal: 16,
        // minHeight: 66,
        // paddingBottom: 16
    },
    imageStyle: {
        height: 100,
        width: 100,
        // paddingLeft: 5,
        marginRight: 16,
        borderWidth: 0.2,
        borderColor: 'black',
        borderRadius: 100,
        overflow: 'hidden',
    },
    textContainerStyle: {
        flex: 1,
        flexDirection: "row",
        // borderBottomWidth: 1,
        // borderColor: "#E1E1E1",
        // borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '76%'
        // paddingBottom: 12,
        height: '100%',
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 20,
        color: "#000000",
        // borderWidth: 1,
        // flex:1,
        // marginTop: 3
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 14,
        color: "#000",
        marginTop: 10,
        // marginBottom: 15
    },
    textStyle3: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 14,
        color: "#000",
        marginTop: 6,
        // marginBottom: 15
    },
    aboutContainerStyle: {
        // flex: 1,
        // borderWidth: 1,
        marginVertical: 32,
    },
    aboutMeStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 14,
        color: "#000000",
    },
    aboutDescStyle: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 14,
        color: "#000000",
        marginTop: 8,
        lineHeight: 20,
    },
})
