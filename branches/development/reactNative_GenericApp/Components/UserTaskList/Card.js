import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import { Fonts } from "../utils/Fonts";

class Card extends Component {
    render() {

        const { medicalContainerStyle, imageStyle, textStyle1, textStyle2, textStyle3 } = styles;

        const { value1 = "value1", value2 = 'value2', value3 = '', image = require('../images/logo.png'), onPress = () => { alert('Working Good') } } = this.props;
        return (
            <TouchableOpacity
                style={medicalContainerStyle}
                onPress={onPress}

            >
                <View style={imageStyle}>
                    <Image
                        style={{ height: "100%", width: "100%", }}
                        source={image}
                    />
                </View>

                <View>
                    <Text style={textStyle1}>{value1}</Text>
                    <Text style={textStyle2}>{value2}</Text>
                    <Text style={textStyle3}>{value3}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    medicalContainerStyle: {
        flexDirection: "row",
        backgroundColor: "#FCFCFC",
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
        shadowColor: '#7A7A7A',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        alignItems: 'center',
        // borderWidth: 2
    },
    imageStyle: {
        height: 48,
        width: 48,
        // paddingLeft: 5,
        marginRight: 16,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1

    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 16,
        color: "#000000",
        // color: 'pink'
        // marginTop: 3
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 10,
        color: "#9D9D9D",
        marginTop: 3,

        // marginBottom: 5
    },
    textStyle3: {
        fontFamily: Fonts.EncodeSansBold,
        fontSize: 12,
        color: "#EF0865",
        // marginLeft: -28
        marginTop: 5
        // marginBottom: 15
    },
});

export default Card;