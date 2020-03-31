import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Fonts } from '../utils/Fonts';

export default class MultiLinesTextInput extends Component {
    state = {
        value: ''
    }

    inputHanlder = (value) => {
        this.setState({ value })
    }

    render() {
        const { containerStyle, inputStyle, textStyle1, textStyle2 } = styles;
        return (
            <View style={containerStyle}>
                <Text style={textStyle1}> About Me </Text>
                <TextInput
                    style={inputStyle}
                    placeholder='Type here...'
                    multiline={true}
                    maxLength={300}
                    value={this.state.value}
                    onChangeText={(value) => this.inputHanlder(value)}
                />
                <Text style={textStyle2}>Max words {this.state.value.length}/300</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        // borderWidth: 1,
        marginTop: 16,
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: '#000',
    },
    inputStyle: {
        marginTop: 4,
        borderBottomWidth: 0.5,
        padding: 5,
        // paddingBottom: 10,
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 14,
        color: '#909090',
        height: 100,
        
    },
    textStyle2: {
        marginTop: 4,
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 10,
        color: '#909090',
        alignSelf: 'flex-end',
    },
})
