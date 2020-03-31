import React, { Component, Fragment } from "react";
import {
    View,
    TextInput,
    StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class InputSearch extends Component {

    render() {
        // ! Destructure props...
        const {
            iconName,
            iconSize,
            iconColor,
            leftIcon,
            rightIcon,
            inputValue,
            placeholder,
            inputTextColor,
            inputContainerStyle,
            iconStyle,
            inputStyle,
            onChange,
        } = this.props;
        // !

        // ! Destructure styles...
        const { containerStyle, inputStyle1, leftIconStyle, rightIconStyle } = styles;
        // !

        return (

            leftIcon === true ? (
                <Fragment>
                    <View style={[containerStyle, inputContainerStyle]}>
                        <Icon style={[leftIconStyle, iconStyle]} name={iconName} size={iconSize} color={iconColor} />

                        <TextInput
                            style={[inputStyle1, { color: inputTextColor }, inputStyle,]}
                            placeholder={placeholder}
                            placeholderTextColor="#B4B4B4"
                            autoCorrect={false}
                            value={inputValue}
                            onChangeText={text => onChange(text)}
                        />

                    </View>

                </Fragment>
            ) : rightIcon === true ? (
                <Fragment>
                    <View style={[containerStyle, inputContainerStyle]}>

                        <TextInput
                            style={[inputStyle1, { color: inputTextColor }, inputStyle,]}
                            placeholder={placeholder}
                            placeholderTextColor="#B4B4B4"
                            autoCorrect={false}
                            value={inputValue}
                            onChangeText={text => onChange(text)}
                        />

                        <Icon style={[rightIconStyle, iconStyle]} name={iconName} size={iconSize} color={iconColor} />
                    </View>


                </Fragment>
            ) :
                    <Fragment>
                        <View style={[containerStyle, inputContainerStyle]}>

                            <TextInput
                                style={[inputStyle1, { color: inputTextColor }, inputStyle,]}
                                placeholder={placeholder}
                                placeholderTextColor="#B4B4B4"
                                autoCorrect={false}
                                value={inputValue}
                                onChangeText={text => onChange(text)}
                            />

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

export default InputSearch;
