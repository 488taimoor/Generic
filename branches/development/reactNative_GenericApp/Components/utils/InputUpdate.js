import React, { Component, Fragment } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";

class InputUpdate extends Component {

    render() {
        // ! Destructure props...
        const {
            autoFocus = false,
            inputValue,
            placeholder,
            inputTextColor,
            inputContainerStyle,
            inputStyle,
            onChange,
            maxLength = null,
        } = this.props;
        // !

        // ! Destructure styles...
        const { containerStyle, inputStyle1, leftIconStyle, rightIconStyle } = styles;
        // !

        return (

            <Fragment>
                <View style={[containerStyle, inputContainerStyle]}>

                    <TextInput
                        style={[inputStyle1, { color: inputTextColor }, inputStyle,]}
                        placeholder={placeholder}
                        placeholderTextColor="#B4B4B4"
                        autoCorrect={false}
                        autoFocus={autoFocus}
                        maxLength={maxLength}
                        value={inputValue}
                        onChangeText={text => onChange(text)}
                    />
                    <Text style={[{ display: inputValue.length === 0 || (maxLength - inputValue.length) < 0 ? 'none' : 'flex' }]}>{maxLength - inputValue.length} </Text>

                </View>

            </Fragment>
        );
    };
}
const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    inputStyle1: {
        color: "#000",
        fontSize: 14,
        flex: 1,
        width: '100%',
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    leftIconStyle: {
        paddingRight: 10,
        alignSelf: "center"
    },
    rightIconStyle: {
        paddingLeft: 10,
        alignSelf: 'center'
    },
});

export default InputUpdate;
