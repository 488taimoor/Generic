import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, PixelRatio, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Fonts } from "../utils/Fonts";
import NotificationSetting from './NotificationSetting';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PrimaryHeader from "../Headers/PrimaryHeader";
import NavigationBar from '../NavigationBar/NavigationBar';
export default class ProfileScreen extends Component {

    render() {

        const {
            containerStyle,
            avatarContainerStyle,
            avatarStyle,
            textStyle1,
            textStyle2,
            iconContainerStyle,
            aboutContainerStyle,
            aboutMeStyle,
            aboutDescStyle,
            settingContainerStyle,
            textStyle3,
            textStyle4,
        } = styles;



        return (
            <Fragment>
                <PrimaryHeader title="Profile" iconColor2="#000" iconName1="edit" iconColor1="#007AFF" />
                <ScrollView style={{ flex: 1, }}>
                    <View style={containerStyle}>
                        <View style={[avatarContainerStyle]}>
                            <Image style={avatarStyle} source={require('../images/logo.png')} />
                        </View>
                        <Text style={textStyle1}>Faizan Elahi</Text>
                        <Text style={textStyle2}>Godley House, Session 1984</Text>
                        <Text style={textStyle3}>Lahore, Pakistan</Text>
                        <View style={iconContainerStyle}>
                            <TouchableOpacity style={{ marginRight: 32 }}>
                                <Icon name="facebook-square" size={20} color='#2C4BFC' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="linkedin" size={20} color='#007AFF' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SafeAreaView style={aboutContainerStyle}>
                        <Text style={aboutMeStyle}>About Me</Text>
                        <Text style={aboutDescStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </SafeAreaView>
                    <SafeAreaView style={settingContainerStyle}>
                        <Text style={textStyle4}>Settings</Text>
                        <NotificationSetting />
                    </SafeAreaView>
                </ScrollView>
                <NavigationBar />
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    textContainerStyle: {
        paddingVertical: 16,
        alignItems: "center",
    },
    textStyle1: {
        marginTop: 16,
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 24,
        color: "#000000",
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 12,
        color: "#767676",
        marginTop: 8,
    },
    textStyle3: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 12,
        color: "#767676",
        marginTop: 8,
    },
    iconContainerStyle: {
        marginTop: 24,
        flexDirection: 'row',
        // borderWidth:1
    },
    aboutContainerStyle: {
        // flex: 1,
        // borderWidth: 1,
        paddingHorizontal: 16,
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
        lineHeight: 22,
    },
    settingContainerStyle: {
        // flex: 1,
        // height: "100%",
        // width: "100%",
        alignItems: "center",
        // backgroundColor: "pink",
        paddingHorizontal: 16,
    },
    textStyle4: {
        alignSelf: 'flex-start',
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 16,
        color: "#000000",
    },
    containerStyle: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        // backgroundColor: 'gold',
        paddingTop: 32,
    },
    avatarContainerStyle: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 164,
        height: 164,
        // overflow: 'hidden',
    },
    avatarStyle: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
    },
});
