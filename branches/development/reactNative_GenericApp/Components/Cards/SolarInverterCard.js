import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Fonts } from '../utils/Fonts';
import Icon from "react-native-vector-icons/MaterialIcons";
export default class SolarInverterCard extends Component {
    render() {
        const { inverterName = 'Inverter_T34_Sonex', watts = '10', } = this.props;
        const {
            textContainerStyle,
            textStyle1,
            textStyle2,
            containerStyle,
            imageStyle,
            nextIconStyle
        } = styles;
        return (
            <TouchableOpacity style={containerStyle}>
                <View style={imageStyle}>
                    <Icon name="camera-rear" size={22} color='#0087FF' />
                </View>
                <View style={textContainerStyle}>
                    <View style={{ flex: 1 }}>
                        <Text style={textStyle1}>{inverterName}</Text>
                        <Text style={textStyle2}>{watts}kWatts</Text>
                    </View>
                    <Icon style={nextIconStyle} name="navigate-next" color="#000" size={22} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 16,
        // left: -14,
        // flexDirection: "row",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        // width:'100%',
        borderColor: '#CCCCCC',
        // paddingHorizontal: 16,
        // minHeight: 66,
        paddingBottom: 16
    },
    imageStyle: {
        height: 48,
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingLeft: 5,
        marginRight: 16,
        borderWidth: 0.5,
        borderColor: '#0087FF',
        borderRadius: 100,
        overflow: 'hidden',
    },
    textContainerStyle: {
        flex: 1,
        flexDirection: "row",
        // borderBottomWidth: 1,
        // borderColor: "#E1E1E1",
        // borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '76%'
        // paddingBottom: 12,
        height: '100%',
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 14,
        color: "#000000",
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 12,
        color: "#555555",
        marginTop: 6,
        // marginBottom: 15
    },
    nextIconStyle: {
        // fontSize: 24,
        // color: "#000000",
        // borderWidth:1,
        // height: 8,
        // width: 8,
        // borderRadius: 100,
        // backgroundColor: '#007AFF',
        marginLeft: 8,
        // marginTop: 10
    },
})
