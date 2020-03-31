import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,

} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackActions, DrawerActions } from 'react-navigation';
import realm from "./realm/UserSchema";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const popAction = StackActions.pop({
    n: 1,
});
export default class CrossHeader extends Component {
    myPracticesHandler = () => {
        
        if (this.props.dispatchNewState) {
            // alert("here")

            this.props.dispatchNewState()
        }

    };

    notificationHandler = () => {
        this.props.navigation.navigate('Notifications', { UserId: realm.objects('UserToken')[0].UserId })

    };

    render() {
        console.log(this.props.navigation);
        const {
            textStyle1,
            iconContainerStyle1,
            iconStyle1,
            iconStyle2,
            backIconStyle,
            crossIconStyle,
        } = styles;

        return (

            <View style={iconContainerStyle1}>
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
    iconContainerStyle1: {
        position: "relative",
        marginTop: '4%',
        height: hp('8%'),
        width: wp('100%'),
        // width: '100%',
        // top: 10,
        // left: -10,
        flexDirection: "row",
        // borderWidth: 1,
        // borderColor: 'black',
    },
    backIconStyle: {
        position: 'absolute',
        top: hp('2.2%'),
        left: '3%',
        // borderWidth: 1,
        // borderColor: '#000000',
    },
    iconStyle1: {
        color: "#000000",
        fontSize: hp('4%'),

    },
    crossIconStyle: {
        position: 'absolute',
        top: hp('3%'),
        right: '5%',
        // borderWidth: 1,
        // borderColor: '#000000',
    },
    iconStyle2: {
        color: "#000000",
        fontSize: hp('3%'),

    },
    textStyle1: {
        position: 'absolute',
        fontFamily: Fonts.EncodeSansBold,
        fontSize: hp('2.8%'),
        color: "#000000",
        top: '36%',
        left: '15%',
        // borderColor: '#000000',
        // borderWidth: 1,
    }
});

