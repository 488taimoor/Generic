import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { Fonts } from "../../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

const Input = props => {
  const {
    iconName,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    autoCapitalize,
    keyboardType,
    size,
    color,
    textColor,
  } = props;
  const { containerStyle, inputStyle, iconStyle } = styles;
  console.log("size :", size);
  return (
      <View style={containerStyle}>
        {/* <Text style={labelStyle}>{label}</Text> */}
        <Icon style={iconStyle} name={iconName} size={size} color={color} />
        <TextInput
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor="#B4B4B4"
          autoCorrect={false}
          style={[inputStyle, {color: textColor}]}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    // paddingRight: 5,
    // paddingLeft: 5,
    fontFamily: Fonts.MontserratLight,
    fontSize: 14,
    // lineHeight: 1 ,
    flex: 1,
    height: 40,
    width: '100%'
    // borderWidth: 1,
    // borderColor: 'white'
  },
  iconStyle: {
    // color: "#787878",
    // fontSize: 18,
    // height: 12,
    // width: 12,
    // paddingLeft: 5,
    paddingRight: 12
    // flex: 1,
    // borderWidth: 1,
    // borderColor: 'black'
  },
  containerStyle: {
    height: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
    // borderWidth: 1,
    // borderColor: 'red'
  }
});
export { Input };
