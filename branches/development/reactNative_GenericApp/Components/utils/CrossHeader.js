import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,

} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackActions } from 'react-navigation';
import realm from "./realm/UserSchema";


const popAction = StackActions.pop({
    n: 1,
});
export default class CrossHeader extends Component {
    myPracticesHandler = () => {
        console.log(this.props.navigation)
        if (this.props.dispatchNewState) {
            // alert("here")

            this.props.dispatchNewState()
        }

        // console.log(this.props.navigate)
        this.props.navigation.goBack()

    };

    notificationHandler = () => {
        this.props.navigation.navigate('Notifications', { UserId: realm.objects('UserToken')[0].UserId })

    };

    render() {
        console.log(this.props.navigation);
        const {
            iconContainerStyle,
            backIconStyle,
            iconStyle1,
            textStyle1,
            crossIconStyle,
            iconStyle2,
        } = styles;

        return (

            <View style={iconContainerStyle}>
                <TouchableOpacity onPress={this.myPracticesHandler} style={backIconStyle}>
                    <Icon style={iconStyle1} name="navigate-before" />
                </TouchableOpacity>
                <Text style={textStyle1}>{this.props.title}</Text>
                <TouchableOpacity onPress={this.myPracticesHandler} style={crossIconStyle}>
                    <Icon style={iconStyle2} name="clear" />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconContainerStyle: {
        height: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        // backgroundColor: 'pink',
        paddingHorizontal: 5
    },
    backIconStyle: {
    },
    iconStyle1: {
        color: "#000000",
        fontSize: 28,
        // borderWidth:1,
        // paddingVertical: 0,
    },
    crossIconStyle: {
    },
    iconStyle2: {
        color: "#000000",
        fontSize: 23,
        // borderWidth:1,
        padding: 4

    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 16,
        color: "#000000",
        // borderColor: '#000000',
        // borderWidth: 1,
        // paddingVertical: 0
    }
});

