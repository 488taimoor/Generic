import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, SafeAreaView

} from "react-native";
import { Fonts } from "./Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class NavBar extends Component {

    render() {
        const {
            iconContainerStyle,
            shadowStyle,
            iconContainerStyle1,
            viewStyle1,
            viewStyle2,
            backIconStyle,
            iconStyle1,
            textStyle1,
            crossIconStyle1,
            crossIconStyle2,
            crossIconStyle3,
            iconStyle2,
        } = styles;

        const { backgroundColor,titleColor, iconName1 = "menu", iconName2 = "share", iconName3 = "search", iconName4 = "more-vert", iconSize1, iconSize2, iconSize3, iconSize4, iconColor1, iconColor2, iconColor3, iconColor4, iconHandler1, iconHandler2, iconHandler3, iconHandler4, title = "Page Title" } = this.props;



        return (

            <SafeAreaView style={[iconContainerStyle, { backgroundColor }]}>
                <View style={[iconContainerStyle1, { backgroundColor }]}>
                    <View style={viewStyle1}>
                        <TouchableOpacity onPress={iconHandler1} style={[backIconStyle]}>
                            <Icon style={iconStyle1} name={iconName1} size={iconSize1} color={iconColor1} />
                            {/* <Icon style={iconStyle1} name="navigate-before" /> */}
                            {/* <Icon style={iconStyle1} name="reorder" /> */}
                        </TouchableOpacity>
                        <Text style={[textStyle1, {color: titleColor}]}>{title}</Text>
                    </View>
                    <View style={viewStyle2}>
                        <TouchableOpacity onPress={iconHandler2} style={crossIconStyle1}>
                            <Icon style={iconStyle2} name={iconName2} size={iconSize2} color={iconColor2} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={iconHandler3} style={crossIconStyle2}>
                            <Icon style={iconStyle2} name={iconName3} size={iconSize3} color={iconColor3} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={iconHandler4} style={crossIconStyle3}>
                            <Icon style={iconStyle2} name={iconName4} size={iconSize4} color={iconColor4} />
                            {/* <Icon style={iconStyle2} name="clear" /> */}
                            {/* <Icon style={iconStyle2} name="notifications" /> */}
                            {/* <Icon style={iconStyle2} name="notifications-active" /> */}
                        </TouchableOpacity>
                    </View>
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
    iconContainerStyle1: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'gold',
        padding: 16,
    },
    viewStyle1: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIconStyle: {
        // borderWidth:1,
        marginRight: 32,
    },
    iconStyle1: {
        // color: "#000000",
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
    viewStyle2: {
        // borderWidth: 1,
        flexDirection: 'row',
    },
    crossIconStyle1: {
        // borderWidth:1,
        // marginHorizontal: 10,
    },
    crossIconStyle2: {
        // borderWidth:1,
        marginHorizontal: 24,
    },
    crossIconStyle3: {
        // borderWidth:1,
        // marginHorizontal: 10,
    },
    iconStyle2: {
        // color: "#000000",
        // fontSize: 23,
        fontSize: 24,
        // borderWidth: 1,

    },
});

