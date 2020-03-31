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


class SolarSiteCard extends Component {


    render() {
        const { siteName = 'IBM UET Roof_Site22', siteLocation = 'UET Lahore Commercial Site', installedPower = '6.4', realTimePower = '4.2', todayYeild = '30.6', date = '23th June 2019', time = '05:00 pm', } = this.props
        const {
            contentContainerStyle,
            topViewStyle,
            viewStyle1,
            siteNameStyle,
            siteLocationStyle,
            middleViewStyle,
            viewStyle2,
            iconContainerStyle,
            kwpStyle,
            installedPowerStyle,
            installedPowerStyle2,
            updateTextStyle
        } = styles;
        return (
            <TouchableOpacity style={contentContainerStyle}>
                {/* // todo: top container View */}
                <View style={topViewStyle}>
                    <View style={iconContainerStyle}>
                        <Icon name="landscape" size={24} color='#000' />
                    </View>
                    <View style={viewStyle1}>
                        <Text style={siteNameStyle}>{siteName}</Text>
                        <Text style={siteLocationStyle}>{siteLocation}</Text>
                    </View>
                    <Icon style={{ alignSelf: 'flex-start' }} name="sync" size={22} color="#04D675" />
                </View>
                {/* // todo: middle Text */}
                <View style={middleViewStyle}>
                    <View style={viewStyle2}>
                        <Text style={installedPowerStyle}>{installedPower}<Text style={kwpStyle}>kWp</Text></Text>
                        <Text style={installedPowerStyle2}>Installed Power</Text>
                    </View>
                    <View style={viewStyle2}>
                        <Text style={[installedPowerStyle, { color: '#FF0000' }]}>{realTimePower}<Text style={[kwpStyle, { color: '#FF0000' }]}>kW</Text></Text>
                        <Text style={[installedPowerStyle2, { color: '#FF0000' }]}>Real Time Power</Text>
                    </View>
                    <View style={viewStyle2}>
                        <Text style={[installedPowerStyle, { color: '#04D675' }]}>{todayYeild}<Text style={[kwpStyle, { color: '#04D675' }]}>kWh</Text></Text>
                        <Text style={[installedPowerStyle2, { color: '#04D675' }]}>Today’s Yeild</Text>
                    </View>
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
    viewStyle1: {
        flex: 1,
        marginLeft: 10,
        // borderWidth: 1,

    },
    siteNameStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 12,
        color: "#000",
        // borderWidth: 1,
        // flex:1,
        // marginTop: 3
    },
    siteLocationStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: "#555555",
        marginTop: 6
    },
    middleViewStyle: {
        marginTop: 22,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
        // borderWidth: 1,
    },
    viewStyle2: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
    },
    iconContainerStyle: {
        height: 40,
        width: 40,
        // paddingLeft: 5,
        marginRight: 6,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    kwpStyle: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 10,
        color: 'black'
    },
    installedPowerStyle: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 12,
        color: 'black'
    },
    installedPowerStyle2: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: 'black'
    },
    updateTextStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 12,
        color: '#555',
        marginTop: 16,
        textAlign: "right"
    },
});

export default SolarSiteCard;
