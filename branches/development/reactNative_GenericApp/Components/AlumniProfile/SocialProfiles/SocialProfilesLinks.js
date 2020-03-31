import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Fonts } from '../../utils/Fonts'
export default class SocialProfilesLinks extends Component {
    render() {
        const { iconBackGroundColor="#007AFF" ,text = 'LinkedIn', iconName1 = "linkedin-in", iconName2 = "call-made", iconSize1 = 12, iconSize2 = 18, iconColor1 = "#fff", iconColor2 = "#007AFF" } = this.props;
        const {
            containerStyle,
            iconContainerStyle,
            notificationContainerStyle,
            textStyle1,
        } = styles;
        return (
            <TouchableOpacity style={containerStyle}>
                <View style={[iconContainerStyle,{backgroundColor: iconBackGroundColor}]}>
                    <FontAwesome5 name={iconName1} size={iconSize1} color={iconColor1} />
                </View>
                <View style={notificationContainerStyle}>
                    <Text style={textStyle1}>{text}</Text>
                    <MaterialIcons name={iconName2} size={iconSize2} color={iconColor2} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: "row",
        marginTop: 16,
        // borderWidth: 1,
        // alignItems: 'center',
    },
    iconContainerStyle: {
        // marginTop: 6,
        height: 20,
        width: 20,
        borderRadius: 3,
        
        alignItems: "center",
        justifyContent: "center"
    },
    notificationContainerStyle: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 12,
        borderBottomWidth: 1,
        // borderWidth: 1,
        borderColor: "#E1E1E1",
        paddingBottom: 16,
        alignItems: 'center',
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 16,
        flexGrow: 1,
        color: "#000000"
    },

})



// {/* <SocialProfilesLinks iconBackGroundColor="#2C4BFC" iconName1="facebook-f" /> */}