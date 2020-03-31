import React, { Component, Fragment } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import PrimaryHeader from "../Headers/PrimaryHeader";
import NavigationBar from "../NavigationBar/NavigationBar";


class CardNormal extends Component {


    render() {
        const { enventName = 'Batch 43th Common, G2G', eventDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', going = '239', interested = '419', date = '23th June 2019', time = '05:00 pm', img = require('../images/logo.png'), name = 'Jane Smith', location = 'Pearl Continental' } = this.props
        const {
            contentContainerStyle,
            topViewStyle,
            eventNameStyle,
            viewStyle1,
            goingStyle,
            interestedStyle,
            eventDescStyle,
            bottomViewStyle,
            viewStyle2,
            imageStyle,
            nameStyle,
            dateContainerStyle,
            dateIconStyle,
            dateStyle,
            timeStyle,
            locationIconStyle,
            locationStyle,
        } = styles;
        return (
            <TouchableOpacity style={contentContainerStyle}>
                {/* // todo: top container View */}
                <View style={topViewStyle}>
                    <Text style={eventNameStyle}>{enventName}</Text>
                    <View style={viewStyle1}>
                        <Text style={goingStyle}>{going} Going</Text>
                        <Text style={interestedStyle}>{interested} Interested</Text>
                    </View>
                </View>
                {/* // todo: middle Text */}
                <Text style={eventDescStyle}>{eventDesc}</Text>
                {/* // todo: bottom container View */}
                <View style={bottomViewStyle}>
                    <View style={viewStyle2}>
                        <View style={imageStyle}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={img}
                            />
                        </View>
                        <Text style={nameStyle}>{name}</Text>
                    </View>
                    <View style={dateContainerStyle}>
                        <View style={dateIconStyle}>
                            <Icon name="event" size={12} color='#2C4BFC' />
                            <Text style={dateStyle}>{date}</Text>
                        </View>
                        <Text style={timeStyle}>{time}</Text>
                    </View>
                    <View style={locationIconStyle}>
                        <Icon name="near-me" size={12} color='#2C4BFC' />
                        <Text style={locationStyle}>{location}</Text>
                    </View>
                </View>
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
        // borderWidth: 1,
        // width:'100%',
        // borderColor: 'red',
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 16,
        marginHorizontal: 1,
        zIndex: 1,
        ...elevationShadowStyle(3),
    },
    topViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 2,
    },
    eventNameStyle: {
        flex: 1.2,
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 12,
        color: "#000000",
        // borderWidth: 1,
        // alignSelf: "flex-start",
        // marginLeft: wp('-20%'),
        // marginTop: hp('3%'),
        // marginBottom: 5
    },
    viewStyle1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // borderWidth: 1,

    },
    goingStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: "#00D050",
        marginRight: 16,
        // borderWidth: 1,
        // flex:1,
        // marginTop: 3
    },
    interestedStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: "#FF7F00",
        // marginBottom: 15
    },
    eventDescStyle: {
        // borderWidth: 1,
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 10,
        color: "#909090",
        marginTop: 8,
    },
    bottomViewStyle: {
        marginTop: 22,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
    },
    viewStyle2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
    },
    imageStyle: {
        height: 18,
        width: 18,
        // paddingLeft: 5,
        marginRight: 6,
        borderWidth: 0.1,
        borderColor: 'black',
        borderRadius: 100,
        overflow: 'hidden',
    },
    nameStyle: {
        // borderWidth: 1,
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: "#4A4949",
    },
    dateContainerStyle: {
        flex: 1.5,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateIconStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateStyle: {
        // borderWidth: 1,
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 8,
        color: "#4A4949",
        marginLeft: 4,
    },
    timeStyle: {
        // borderWidth: 1,
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 8,
        color: "#4A4949",
        marginLeft: 8,
    },
    locationIconStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    locationStyle: {
        // borderWidth: 1,
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 8,
        color: "#4A4949",
        marginLeft: 4,
    }

});

export default CardNormal;
