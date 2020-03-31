import React, { Component, Fragment } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";
import validator from 'validator';
import { Fonts } from '../utils/Fonts';
class InputText extends Component {

    state = {
        // text: this.props.value,
        displayText: "none",
    }

    // * handleText Function Start

    handleText = text => {

        if (this.props.validator === "isNumeric" ? validator.isNumeric(validator.blacklist(text, this.props.blackList === undefined || this.props.blackList.length === 0 || this.props.blackList === null ? '' : this.props.blackList)) : this.props.validator === "isAlpha" ? validator.isAlpha(validator.blacklist(text, this.props.blackList === undefined || this.props.blackList.length === 0 || this.props.blackList === null ? '' : this.props.blackList)) : validator.isAlphanumeric(validator.blacklist(text, this.props.blackList === undefined || this.props.blackList.length === 0 || this.props.blackList === null ? '' : this.props.blackList))) {
            this.setState({
                displayText: "none",
            });
            this.props.onChange(text, textFlag = false)
        }
        else if (validator.isEmpty(text)) {
            this.setState({
                displayText: "none",
            });
            this.props.onChange(text, textFlag = true)
        }
        else {
            this.setState({
                displayText: "flex",
            });

            this.props.onChange(text, textFlag = true)
        }
        // this.setState({ text }, () => {
        //   // console.log('firstname :', this.state.text)
        // });
    };

    // * handleText Function End

    render() {
        // console.log('firstname:', this.props.value)
        // console.log('firstname1:', this.state.text)
        const {
            inputValue,
            error,
            required,
            flag,
            placeholder,
            secureTextEntry,
            autoCapitalize,
            keyboardType,
            inputTextColor,
            textHelper,
            textHelperStyle,
            inputContainerStyle,
            inputStyle,
            errorColor='#000'
        } = this.props;

        const { containerStyle, inputStyle1, errorStyle, inputNameStyle } = styles;

        return (
            <Fragment>
                <View style={[containerStyle, inputContainerStyle, {borderBottomColor: errorColor}]}>
                    <Text style={[inputNameStyle, {color: errorColor}]}>{placeholder}</Text>

                    <TextInput
                        style={[inputStyle1, { color: inputTextColor }, inputStyle,]}
                        keyboardType={keyboardType}
                        autoCapitalize={autoCapitalize}
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        placeholderTextColor="#9B9B9B"
                        autoCorrect={false}
                        value={inputValue}
                        onChangeText={text => this.handleText(text)}
                    />

                </View>
                <Text
                    style={[errorStyle, { display: required && flag ? 'flex' : this.state.displayText }, textHelperStyle,]}
                >
                    {required && inputValue == '' ? error : textHelper}
                </Text>
            </Fragment>
        );
    };
}
const styles = StyleSheet.create({

    containerStyle: {
        // height: 40,
        // flex: 1,
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: 'center',
        borderBottomWidth: 1,
        // borderWidth: 1,
        borderColor: 'black',
        // borderRadius: 50,
        // paddingHorizontal: 10
    },
    inputNameStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10, 
        color:'#000'
    },
    inputStyle1: {
        fontFamily: Fonts.EncodeSansRegular,
        color: "#9B9B9B",
        fontSize: 14,
        // height: 40,
        flex: 1,
        width: '100%',
        // borderWidth: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginTop: 4,
    },
    errorStyle: {
        fontFamily:Fonts.EncodeSansRegular,
        color: "#FF0000",
        fontSize: 10,
        marginTop: 4
        // display: 'none',
    },
});

export default InputText;
