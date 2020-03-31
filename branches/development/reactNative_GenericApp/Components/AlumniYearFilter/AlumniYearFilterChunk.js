import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Fonts } from '../utils/Fonts';
import Icon from "react-native-vector-icons/MaterialIcons";
export default class AlumniYearFilterChunk extends Component {
    render() {
        const { name = 'Jack Milton', className = 'Godley House, Class of 1974', address = 'Lahore, Pakistan', img = require('../images/img.png') } = this.props;
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
                    <Image
                        style={{ height: "100%", width: "100%" }}
                        source={img}
                    />
                </View>
                <View style={textContainerStyle}>
                    <View style={{ flex: 1 }}>
                        <Text style={textStyle1}>{name}</Text>
                        <Text style={textStyle2}>{className}</Text>
                        <Text style={textStyle2}>{address}</Text>
                    </View>
                    <Icon style={nextIconStyle} name="navigate-next" color="#909090" size={22} />
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
        height: 60,
        width: 60,
        // paddingLeft: 5,
        marginRight: 16,
        borderWidth: 0.2,
        borderColor: 'black',
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
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 16,
        color: "#000000",
        // borderWidth: 1,
        // flex:1,
        // marginTop: 3
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: "#000",
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
