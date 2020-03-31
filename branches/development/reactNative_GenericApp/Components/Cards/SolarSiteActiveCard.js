import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

class SolarSiteActiveCard extends Component {

    render() {
        const { todayYeild = '30.6', runningTime = '12,345', date = '23th June 2019', time = '05:00 pm', } = this.props
        const {
            contentContainerStyle,
            topViewStyle,
            viewStyle1,
            todayYeildTextStyle,
            todayYeildStyle,
            todayTextStyle,
            cloudyTextStyle,
            middleViewStyle,
            viewStyle2,
            dotStyle,
            updateTextStyle
        } = styles;
        return (
            <TouchableOpacity style={contentContainerStyle}>
                {/* // todo: top container View */}
                <View style={topViewStyle}>
                    <View style={viewStyle1}>
                        <Text style={todayYeildTextStyle}>Today’s Yeild</Text>
                        <Text style={todayYeildStyle}>{todayYeild} kWh</Text>
                    </View>
                    <View style={viewStyle2}>
                        <View style={dotStyle}></View>
                        <Text style={todayTextStyle}>Status:<Text style={cloudyTextStyle}>Active</Text></Text>
                    </View>
                </View>
                {/* // todo: middle Text */}
                <View style={middleViewStyle}>
                    <Text style={todayYeildTextStyle}>On Grid Running Time</Text>
                    <Text style={todayYeildStyle}>{runningTime} Hours</Text>
                </View>
                {/* // todo: bottom container View */}
                <Text style={updateTextStyle}>Updated: 10 mins ago</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        marginTop: 7,
        marginBottom: 5,
        // left: -14,
        // flexDirection: "row",
        borderWidth: 0.5,
        borderRadius: 8,
        // width:'100%',
        borderColor: '#b1b1b1',
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 1,
        zIndex: 1,
        // ...elevationShadowStyle(3),
    },
    topViewStyle: {
        flexDirection: 'row',
        // alignItems: 'center',
        // borderWidth: 2,
    },
    viewStyle1: {
        flex: 1,

    },
    todayYeildTextStyle: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 12,
        color: "#b1b1b1",
        // borderWidth: 1,
        // flex:1,
        // marginTop: 3
    },
    todayYeildStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 16,
        color: "#000",
        marginTop: 8
    },
    todayTextStyle: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 10,
        color: '#b1b1b1',
        marginLeft: 12
    },
    cloudyTextStyle: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 10,
        color: '#000'
    },
    middleViewStyle: {
        marginTop: 20,
        flex: 1,
        // borderWidth: 1,
    },
    viewStyle2: {
        // flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
        // borderWidth: 1,
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    dotStyle: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: '#04D675'
    },
    updateTextStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 12,
        color: '#b1b1b1',
        marginTop: 16,
        textAlign: "right"
    },
});

export default SolarSiteActiveCard;
