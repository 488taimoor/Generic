import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, SafeAreaView

} from "react-native";
import { Fonts } from "./Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class NavBar1 extends Component {

    render() {
        const {
            iconContainerStyle,
            shadowStyle,
            viewStyle1,
            iconContainerStyle1,
            iconStyle1,
            textStyle1,
            iconContainerStyle2,
            iconStyle2,
        } = styles;

        const { iconName1 = "navigate-before", iconName2 = "clear", iconSize1, iconSize2, iconHandler1, iconHandler2, title = "Page Title" } = this.props;



        return (

            <SafeAreaView style={[iconContainerStyle]}>
                <View style={viewStyle1}>
                    <TouchableOpacity onPress={iconHandler1} style={iconContainerStyle1}>
                        <Icon style={iconStyle1} name={iconName1} size={iconSize1} />
                    </TouchableOpacity>
                    <Text style={textStyle1}>{title}</Text>
                    <TouchableOpacity onPress={iconHandler2} style={iconContainerStyle2}>
                        <Icon style={iconStyle2} name={iconName2} size={iconSize2} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

const styles = StyleSheet.create({
    iconContainerStyle: {
        zIndex: 1,
        backgroundColor: 'gold',
        // borderWidth:1,
        // elevation: 4,
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowRadius: 3.2,
        // shadowOpacity: 0.3,
        ...elevationShadowStyle(4),
    },
    // !  or seprate the styles for shadow.
    // shadowStyle: elevationShadowStyle(4),
    //!
    viewStyle1: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'gold',
        padding: 16,
    },
    iconContainerStyle1: {
        // borderWidth:1,
    },
    iconStyle1: {
        color: "#000000",
        // fontSize: 28,
        fontSize: 24,
        // borderWidth:1,
        // paddingVertical: 0,
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 20,
        color: "#000000",
        // borderColor: '#000000',
        // borderWidth: 1,
        // paddingVertical: 0
    },
    iconContainerStyle2: {
        // borderWidth:1,
        // marginHorizontal: 10,
    },
    iconStyle2: {
        color: "#000000",
        // fontSize: 23,
        fontSize: 24,
        // borderWidth: 1,
    },
});

