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


class CardGoing extends Component {


    render() {
        const { enventName = 'Batch 43th Common, G2...', going = '239', interested = '419', date = '23th June 2019', time = '05:00 pm', img = require('../images/logo.png'), name = 'Jane Smith', location = 'Pearl Continental' } = this.props
        const {
            contentContainerStyle,
            LeftContainerStyle,
            rightContainerStyle,
            topViewStyle,
            eventNameStyle,
            goingContainerStyle,
            goingCheckStyle,
            bottomViewStyle,
            viewStyle1,
            goingStyle,
            interestedStyle,
            imageContainerStyle,
            imageStyle,
            nameStyle,
            dateStyle,
            timeStyle,
            locationIconStyle,
            locationStyle,
        } = styles;
        return (
            <TouchableOpacity style={contentContainerStyle}>

                {/* // todo: Left container View */}
                <View style={LeftContainerStyle}>

                    <Text style={dateStyle}>TODAY</Text>

                    <Text style={timeStyle}>{time}</Text>
                    <View style={locationIconStyle}>
                        <Icon name="near-me" size={12} color='#2C4BFC' />
                        <Text style={locationStyle}>{location}</Text>
                    </View>
                </View>

                {/* // todo: Right container View */}
                <View style={rightContainerStyle}>
                    {/* // todo: top container View */}
                    <View style={topViewStyle}>
                        <Text style={eventNameStyle}>{enventName}</Text>
                        <View style={goingContainerStyle}>
                            <Icon name="check" size={14} color='#00D050' />
                            <Text style={goingCheckStyle}>Going</Text>
                        </View>
                    </View>
                    {/* // todo: middle Text */}
                    <View style={imageContainerStyle}>
                        <View style={imageStyle}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={img}
                            />
                        </View>
                        <Text style={nameStyle}>{name}</Text>
                    </View>
                    {/* // todo: bottom container View */}
                    <View style={bottomViewStyle}>

                        <View style={viewStyle1}>
                            <Text style={goingStyle}>{going} Going</Text>
                            <Text style={interestedStyle}>{interested} Interested</Text>
                        </View>
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
        // height:100,
        marginTop: 7,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 16,
        marginHorizontal: 1,
        ...elevationShadowStyle(4),
    },
    LeftContainerStyle: {
        flex: 1,
        paddingRight: 12,
        // borderWidth: 1,
        height: '100%'
    },
    dateStyle: {
        // borderWidth: 1,
        fontFamily: Fonts.EncodeSansBold,
        fontSize: 12,
        color: '#000',
    },
    timeStyle: {
        // borderWidth: 1,
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 8,
        color: "#4A4949",
        marginTop: 10,
    },
    locationIconStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        // marginTop: 24,
    },
    locationStyle: {
        // borderWidth: 1,
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 8,
        color: "#4A4949",
        marginLeft: 4,
    },
    rightContainerStyle: {
        flex: 2.5,
        borderLeftWidth: 1,
        borderColor: '#909090',
        paddingLeft: 12,
    },
    topViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 2,
    },
    eventNameStyle: {
        flex: 3,
        fontFamily: Fonts.EncodeSansBold,
        fontSize: 12,
        color: "#000000",
        // borderWidth: 1,
        // alignSelf: "flex-start",
        // marginLeft: wp('-20%'),
        // marginTop: hp('3%'),
        // marginBottom: 5
    },
    goingContainerStyle: {
        alignSelf: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // borderWidth: 1,

    },
    goingCheckStyle: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 10,
        color: "#00D050",
        marginLeft: 6
    },
    imageContainerStyle: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        marginTop: 8,
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
    bottomViewStyle: {
        // flex: 1,
        justifyContent: 'flex-end',
        // borderWidth: 1,
        marginTop: 18,
    },

    viewStyle1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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

});

export default CardGoing;
