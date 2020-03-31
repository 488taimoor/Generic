import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
const SocialButton = (props) => {
    const { onPress, children, Color, disable = false, buttonStyle, buttonTextStyle } = props
    const { buttonStyle1, textStyle } = styles;

    return (
        <TouchableOpacity disabled={disable} onPress={onPress} style={[buttonStyle1, { backgroundColor: disable ? 'grey' : Color }, buttonStyle]}>
            <View style={{height: 30, width: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',borderRadius: 5 }}><Icon name="facebook-f" size={18} color="blue" /></View>
            {/* <View><Icon name="facebook-square" size={18} color="white" /></View> */}
            {/* <View><Icon name="map-marker-alt" size={18} color="white" /></View> */}
            <Text style={[textStyle, buttonTextStyle]}>
                {children}
            </Text>
            <View><Icon name="chevron-right" size={18} color="white" /></View>
        </TouchableOpacity>
    );
};


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
    buttonStyle1: {
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        // borderWidth: 2,
        // borderColor: "#fff",
        // height: 40,
        ...elevationShadowStyle(2),
    },
    textStyle: {
        color: "#FFFFFF",
        fontSize: 14,
    }
});

export default SocialButton;
