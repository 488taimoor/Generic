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

class SolarSiteCardInfoCard extends Component {

    render() {
        const { todayYeild = '30.6', todayRevenue = '12,345', date = '23th June 2019', time = '05:00 pm', } = this.props
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
                        <Text style={todayTextStyle}>Today</Text>
                        <Icon style={{ marginHorizontal: 8 }} name="wb-cloudy" size={14} color="#0089FF" />
                        <Text style={cloudyTextStyle}>Cloudy 23-25 ℃</Text>
                    </View>
                </View>
                {/* // todo: middle Text */}
                <View style={middleViewStyle}>
                    <Text style={todayYeildTextStyle}>Today's Revenue</Text>
                    <Text style={todayYeildStyle}>PKR {todayRevenue} /-</Text>
                </View>
                {/* // todo: bottom container View */}
                <Text style={updateTextStyle}>Updated: 10 mins ago</Text>
            </TouchableOpacity>
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
    },
    cloudyTextStyle: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 10,
        color: '#0089FF'
    },
    middleViewStyle: {
        marginTop: 20,
        flex: 1,
        // borderWidth: 1,
    },
    viewStyle2: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        // borderWidth: 1,
    },
    updateTextStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: '#b1b1b1',
        marginTop: 16,
        textAlign: "right"
    },
});

export default SolarSiteCardInfoCard;
